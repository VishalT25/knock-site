import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allSlugs, getDoc } from "@/lib/docs";
import { FLAT, bySlug } from "@/lib/docs-nav";
import { SITE_URL } from "@/lib/site";

type Params = { slug: string[] };

export function generateStaticParams() {
  return allSlugs().map((s) => ({ slug: s.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const slug = (await params).slug.join("/");
  const doc = getDoc(slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/docs/${slug}` },
    openGraph: { type: "article", title: doc.title, description: doc.description, url: `${SITE_URL}/docs/${slug}` },
  };
}

export default async function DocPage({ params }: { params: Promise<Params> }) {
  const slug = (await params).slug.join("/");
  const doc = getDoc(slug);
  if (!doc) notFound();
  const meta = bySlug(slug);
  const i = FLAT.findIndex((x) => x.slug === slug);
  const prev = i > 0 ? FLAT[i - 1] : null;
  const next = i >= 0 && i < FLAT.length - 1 ? FLAT[i + 1] : null;

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "TechArticle", headline: doc.title, description: doc.description, mainEntityOfPage: `${SITE_URL}/docs/${slug}`, ...(doc.updated ? { dateModified: doc.updated } : {}), author: { "@type": "Organization", name: "Knock" } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Knock", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Docs", item: `${SITE_URL}/docs` },
        { "@type": "ListItem", position: 3, name: doc.title, item: `${SITE_URL}/docs/${slug}` },
      ] },
    ],
  };

  return (
    <>
      <article className="article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <header className="article-head">
          <p className="crumbs muted"><Link href="/docs">Docs</Link>{meta ? <> / {meta.group}</> : null}</p>
          <h1>{doc.title}</h1>
          {doc.description && <p className="lede">{doc.description}</p>}
          <div className="meta muted">
            {meta?.time ? <span>Time <b>{meta.time}</b></span> : null}
            {doc.updated ? <span>Updated <b>{doc.updated}</b></span> : null}
          </div>
        </header>
        <div className="prose" dangerouslySetInnerHTML={{ __html: doc.html }} />
        <nav className="pager" aria-label="Previous and next">
          {prev ? <Link className="glass" href={`/docs/${prev.slug}`}><span className="dir">Previous</span><span className="t">{prev.title}</span></Link> : <span />}
          {next ? <Link className="glass" href={`/docs/${next.slug}`}><span className="dir">Next</span><span className="t">{next.title}</span></Link> : <span />}
        </nav>
      </article>
      <aside className="toc" aria-label="On this page">
        {doc.headings.length > 1 && (
          <>
            <p className="toc-title">On this page</p>
            <ul>{doc.headings.map((h) => <li key={h.id} data-l={h.level}><a href={`#${h.id}`}>{h.text}</a></li>)}</ul>
          </>
        )}
      </aside>
    </>
  );
}
