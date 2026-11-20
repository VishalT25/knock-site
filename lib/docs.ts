import fs from "node:fs";
import path from "node:path";
import { Marked } from "marked";

const ROOT = path.join(process.cwd(), "content", "docs");

export type Heading = { id: string; text: string; level: 2 | 3 };
export type Doc = { slug: string; title: string; description: string; html: string; headings: Heading[]; updated?: string };

const slugify = (s: string) => s.toLowerCase().replace(/&#39;|&apos;|&rsquo;|['\u2019]/g, "").replace(/<[^>]+>/g, "").replace(/&#?[a-z0-9]+;/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function pngSize(file: string): { w: number; h: number } | null {
  try {
    const fd = fs.openSync(file, "r");
    const b = Buffer.alloc(24);
    fs.readSync(fd, b, 0, 24, 0);
    fs.closeSync(fd);
    if (b.toString("ascii", 1, 4) !== "PNG") return null;
    return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  } catch {
    return null;
  }
}

function frontmatter(raw: string): { data: Record<string, string>; body: string } {
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(raw);
  if (!m) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i > 0) data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { data, body: raw.slice(m[0].length) };
}

/** ::: tip Title ... ::: becomes a callout. Kinds: tip, warn, danger, seen. */
function callouts(md: string): string {
  return md.replace(/^:::(tip|warn|danger|seen)[ \t]*(.*)\n([\s\S]*?)\n:::[ \t]*$/gm, (_m, kind: string, title: string, body: string) => {
    const t = title.trim() || { tip: "Tip", warn: "Careful", danger: "Danger", seen: "Seen in the wild" }[kind];
    return `<div class="callout" data-kind="${kind}">\n\n**${t}**\n\n${body}\n\n</div>`;
  });
}

export function render(md: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const id = slugify(text);
        if (depth === 2 || depth === 3) headings.push({ id, text: text.replace(/<[^>]+>/g, ""), level: depth as 2 | 3 });
        const body = depth === 2 || depth === 3 ? `<a href="#${id}" style="text-decoration:none;color:inherit">${text}</a>` : text;
        return `<h${depth} id="${id}">${body}</h${depth}>\n`;
      },
      image({ href, title, text }) {
        const local = href.startsWith("/") ? path.join(process.cwd(), "public", href) : "";
        const dim = local ? pngSize(local) : null;
        const cls = /\/(app|phone)-/.test(href) ? ' class="phone-shot"' : "";
        const size = dim ? ` width="${dim.w}" height="${dim.h}"` : "";
        return `<figure${cls}><a href="${esc(href)}" target="_blank" rel="noopener" aria-label="Open this image full size"><img src="${esc(href)}" alt="${esc(text)}"${size} loading="lazy" decoding="async"${title ? ` title="${esc(title)}"` : ""}></a><figcaption>${esc(text)}</figcaption></figure>`;
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const ext = /^https?:\/\//.test(href);
        return `<a href="${esc(href)}"${title ? ` title="${esc(title)}"` : ""}${ext ? ' rel="noopener" target="_blank"' : ""}>${text}</a>`;
      },
    },
  });
  const html = marked.parse(callouts(md), { async: false }) as string;
  return { html, headings };
}

export function allSlugs(): string[] {
  const out: string[] = [];
  const walk = (dir: string, prefix: string) => {
    for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
      if (f.isDirectory()) walk(path.join(dir, f.name), `${prefix}${f.name}/`);
      else if (f.name.endsWith(".md")) {
        const base = f.name.slice(0, -3);
        out.push(base === "index" ? prefix.replace(/\/$/, "") : `${prefix}${base}`);
      }
    }
  };
  walk(ROOT, "");
  return out.filter(Boolean);
}

export function getDoc(slug: string): Doc | null {
  const candidates = [path.join(ROOT, `${slug}.md`), path.join(ROOT, slug, "index.md")];
  const file = candidates.find((f) => fs.existsSync(f));
  if (!file) return null;
  const { data, body } = frontmatter(fs.readFileSync(file, "utf8"));
  const { html, headings } = render(body);
  return { slug, title: data.title ?? slug, description: data.description ?? "", html, headings, updated: data.updated };
}
