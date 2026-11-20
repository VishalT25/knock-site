/** Checks the docs for broken internal links, missing images, bad in-page anchors and nav/content mismatches. */
import fs from "node:fs";
import path from "node:path";
import { allSlugs, getDoc } from "../lib/docs";
import { FLAT } from "../lib/docs-nav";

const root = process.cwd();
const slugs = new Set(allSlugs());
const problems: string[] = [];

for (const n of FLAT) if (!slugs.has(n.slug)) problems.push(`nav item "${n.slug}" has no content file`);
for (const s of slugs) if (!FLAT.some((n) => n.slug === s)) problems.push(`content "${s}" is not in the navigation`);

let links = 0, images = 0, anchors = 0;
for (const slug of slugs) {
  const file = [path.join(root, "content/docs", `${slug}.md`), path.join(root, "content/docs", slug, "index.md")].find((f) => fs.existsSync(f))!;
  const md = fs.readFileSync(file, "utf8");
  const doc = getDoc(slug)!;
  if (!doc.description || doc.description.length < 60) problems.push(`${slug}: description missing or too short for search results`);
  if (doc.description.length > 200) problems.push(`${slug}: description over 200 characters`);
  const ids = new Set(doc.headings.map((h) => h.id));
  for (const m of md.matchAll(/\]\((\/docs[^)\s#]*)(#[^)\s]*)?\)/g)) {
    links++;
    const target = m[1].replace(/^\/docs\/?/, "").replace(/\/$/, "");
    if (m[1].startsWith("/docs/img/")) { images++; if (!fs.existsSync(path.join(root, "public", m[1]))) problems.push(`${slug}: missing image ${m[1]}`); continue; }
    if (target && !slugs.has(target)) problems.push(`${slug}: broken link ${m[1]}`);
  }
  for (const m of md.matchAll(/\]\(#([^)\s]+)\)/g)) { anchors++; if (!ids.has(m[1])) problems.push(`${slug}: anchor #${m[1]} matches no heading`); }
  if (/!\[\]\(/.test(md)) problems.push(`${slug}: image with empty alt text`);
}

console.log(`${slugs.size} docs, ${links} internal links, ${images} images, ${anchors} anchors checked`);
if (problems.length) { console.log("\nPROBLEMS:\n- " + problems.join("\n- ")); process.exit(1); }
console.log("no problems found");
