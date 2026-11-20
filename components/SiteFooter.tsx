import Link from "next/link";
import { REPO_URL } from "@/lib/site";

const AUTHOR_URL = "https://github.com/VishalT25";

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-grid">
        <div style={{ display: "grid", gap: "0.6rem", alignContent: "start" }}>
          <b style={{ fontSize: "1.25rem", letterSpacing: "-0.03em" }}>Knock</b>
          <p className="muted fine" style={{ maxWidth: "26rem" }}>A free, open-source door buzzer you run yourself. MIT licensed. Not affiliated with Telnyx, Vercel or Neon.</p>
        </div>
        <div><p className="foot-title">Start</p><ul><li><Link href="/docs/will-it-work">Will it work?</Link></li><li><Link href="/docs/costs">Costs</Link></li><li><Link href="/docs/deploy">Deploy</Link></li></ul></div>
        <div><p className="foot-title">Guides</p><ul><li><Link href="/docs/forward-apartment-buzzer-to-cell-phone">Forward your buzzer to your phone</Link></li><li><Link href="/docs/intercom-unlock-digit">Which digit opens the door?</Link></li><li><Link href="/docs/apartment-buzzer-app-alternatives">Buzzer apps compared</Link></li><li><Link href="/docs/troubleshooting">Troubleshooting</Link></li></ul></div>
        <div><p className="foot-title">Project</p><ul><li><a href={REPO_URL} rel="noopener">Source code</a></li><li><Link href="/docs/security">Security &amp; safety</Link></li><li><Link href="/docs/faq">FAQ</Link></li></ul></div>
      </div>
      <div className="wrap made-by">
        <span>Made by Vishal</span>
        <a href={AUTHOR_URL} rel="noopener" aria-label="Vishal on GitHub" className="made-gh"><svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg></a>
      </div>
    </footer>
  );
}
