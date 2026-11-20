import Link from "next/link";
import { REPO_URL } from "@/lib/site";
import { IconDoor } from "./Icons";
import { ThemeButton } from "./Theme";

export function SiteHeader() {
  return (
    <header className="site-head">
      <div className="wrap">
        <nav className="nav-pill glass" aria-label="Main">
          <Link className="brand" href="/" aria-label="Knock home">
            <span className="brand-mark"><IconDoor /></span>
            Knock
          </Link>
          <Link className="nav-link" href="/docs">Docs</Link>
          <a className="nav-link hide-sm" href={REPO_URL} rel="noopener">GitHub</a>
          <ThemeButton />
        </nav>
      </div>
    </header>
  );
}
