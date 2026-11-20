import type { Metadata } from "next";
import Link from "next/link";
import { NAV } from "@/lib/docs-nav";
import { deployUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Documentation: set up Knock, step by step",
  description: "Everything to set up Knock: check your intercom, deploy, create and configure a Telnyx account with screenshots, invite roommates, connect your building, and fix problems.",
  alternates: { canonical: "/docs" },
};

/** Pages already listed in "The path" above; the cards below cover everything else. */
const PATH = new Set(["will-it-work", "deploy", "first-run", "roommates", "connect-building"]);

export default function DocsHome() {
  return (
    <>
      <article className="article">
        <header className="article-head">
          <h1>Set up Knock</h1>
          <p className="lede">A complete walkthrough, written for someone who has never touched Telnyx or Vercel. Every step says what you should see, and what to do if you don&rsquo;t.</p>
        </header>
        <div className="prose">
          <div className="callout" data-kind="seen">
            <p>The honest shape of it</p>
            <p>About 30 minutes of your time. Most of it is Telnyx, because that is the account that answers your building&rsquo;s call. The most common failure is not a bug: it&rsquo;s a Telnyx <b>trial</b> account, which rejects calls from any number except the one you verified. <Link href="/docs/telnyx/upgrade">Upgrade first.</Link></p>
          </div>
          <h2 id="path">The path</h2>
          <ol>
            <li><Link href="/docs/will-it-work">Check that your intercom can work</Link> (5 min). Do this before you spend anything.</li>
            <li><Link href="/docs/deploy">Deploy Knock</Link> (5 min). One click.</li>
            <li><Link href="/docs/telnyx">Set up Telnyx</Link> (15 min). Six short pages with screenshots.</li>
            <li><Link href="/docs/first-run">Run first-time setup</Link> and place a test call (3 min).</li>
            <li><Link href="/docs/roommates">Invite your roommates</Link> and install it on phones (5 min).</li>
            <li><Link href="/docs/connect-building">Point your building at your number</Link> (a day or two).</li>
          </ol>
          <p><a className="btn btn-key btn-lg" href={deployUrl()} rel="noopener" style={{ textDecoration: "none", color: "var(--on-primary)" }}>Deploy to Vercel</a></p>
        </div>
        {NAV.map((g) => ({ ...g, items: g.items.filter((i) => !PATH.has(i.slug) && !i.slug.startsWith("telnyx")) })).filter((g) => g.items.length > 0).map((g) => (
          <section key={g.title} aria-labelledby={`g-${g.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
            <h2 id={`g-${g.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ fontSize: "1.25rem", margin: "1.5rem 0 0.9rem" }}>{g.title}</h2>
            <div className="doc-grid">
              {g.items.map((i) => (
                <Link key={i.slug} className="doc-card glass" href={`/docs/${i.slug}`}>
                  <b>{i.title}</b>
                  <span>{i.blurb}{i.time ? ` (${i.time})` : ""}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </article>
      <aside className="toc" aria-hidden />
    </>
  );
}
