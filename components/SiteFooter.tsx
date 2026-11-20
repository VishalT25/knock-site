import Link from "next/link";
import { REPO_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-grid">
        <div style={{ display: "grid", gap: "0.6rem", alignContent: "start" }}>
          <b style={{ fontSize: "1.25rem", letterSpacing: "-0.03em" }}>Knock</b>
          <p className="muted fine" style={{ maxWidth: "26rem" }}>A free, open-source door buzzer you run yourself. MIT licensed. Not affiliated with Telnyx, Vercel or Neon.</p>
        </div>
        <div><p className="foot-title">Start</p><ul><li><Link href="/docs/will-it-work">Will it work?</Link></li><li><Link href="/docs/costs">Costs</Link></li><li><Link href="/docs/deploy">Deploy</Link></li></ul></div>
        <div><p className="foot-title">Guides</p><ul><li><Link href="/docs/telnyx">Telnyx setup</Link></li><li><Link href="/docs/roommates">Roommates &amp; phones</Link></li><li><Link href="/docs/troubleshooting">Troubleshooting</Link></li></ul></div>
        <div><p className="foot-title">Project</p><ul><li><a href={REPO_URL} rel="noopener">Source code</a></li><li><Link href="/docs/security">Security &amp; safety</Link></li><li><Link href="/docs/faq">FAQ</Link></li></ul></div>
      </div>
    </footer>
  );
}
