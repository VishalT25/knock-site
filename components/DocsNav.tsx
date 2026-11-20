"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/docs-nav";
import { IconChevron } from "./Icons";

export function DocsNav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const current = NAV.flatMap((g) => g.items).find((i) => path === `/docs/${i.slug}`);
  return (
    <nav className="docs-nav glass" aria-label="Documentation" data-open={open}>
      <button className="docs-nav-toggle" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span>{current ? current.title : "All guides"}</span>
        <IconChevron width={20} height={20} style={{ transform: open ? "rotate(180deg)" : undefined, transition: "transform 0.4s var(--ease)" }} />
      </button>
      <div className="grp" style={{ display: "grid", gap: "1.1rem" }}>
        <div className="sub"><ul><li><Link href="/docs" aria-current={path === "/docs" ? "page" : undefined} onClick={() => setOpen(false)}>Overview</Link></li></ul></div>
        {NAV.map((g) => (
          <div key={g.title} className="sub">
            <p className="nav-title">{g.title}</p>
            <ul>
              {g.items.map((i) => (
                <li key={i.slug}>
                  <Link href={`/docs/${i.slug}`} aria-current={path === `/docs/${i.slug}` ? "page" : undefined} onClick={() => setOpen(false)}>{i.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
