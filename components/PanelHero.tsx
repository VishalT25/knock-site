"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { deployUrl } from "@/lib/site";
import { IconArrow } from "./Icons";

const BUZZERS = [
  { href: "#how", label: "How it works", call: "How it works" },
  { href: "#check", label: "Will it work?", call: "Intercom check" },
  { href: "#cost", label: "Cost", call: "Cost" },
  { href: "#faq", label: "Questions", call: "Questions" },
];

/** The page is an intercom panel: a readout, a call key, and a buzzer for each part of the page. */
export function PanelHero() {
  const [line, setLine] = useState("");
  const [calling, setCalling] = useState<string | null>(null);
  const idle = "Standby";

  useEffect(() => {
    if (calling) return;
    let i = 0;
    setLine("");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setLine(idle); return; }
    const t = setInterval(() => { i++; setLine(idle.slice(0, i)); if (i >= idle.length) clearInterval(t); }, 90);
    return () => clearInterval(t);
  }, [calling]);

  const call = (label: string | null) => { setCalling(label); document.documentElement.dataset.call = label ? "1" : "0"; };

  return (
    <section className="hero" aria-labelledby="top">
      <div className="wrap">
        <div className="plate glass">
          <div style={{ display: "grid", gap: "0.9rem" }}>
            <h1 id="top">Open your apartment door <em>from your phone.</em></h1>
            <p className="lede">Knock is a free, open-source apartment buzzer app. When a visitor buzzes, everyone&rsquo;s phone rings and the first tap lets them in.</p>
          </div>

          <div className="readout" role="status" aria-live="off">
            <span className="tag">{calling ? "Calling" : "Buzzer status"}</span>
            <span className="line">{calling ?? line}</span>
          </div>

          <div className="panel-grid">
            <a className="call-key" href={deployUrl()} rel="noopener" onPointerEnter={() => call("Deploy")} onPointerLeave={() => call(null)} onFocus={() => call("Deploy")} onBlur={() => call(null)}>
              <span className="big">Deploy to Vercel</span>
              <span className="small">One click. Your own copy.</span>
            </a>
            <div className="buzzers" role="list">
              {BUZZERS.map((b) => (
                <a key={b.href} role="listitem" className="buzzer" href={b.href} data-called={calling === b.call}
                  onPointerEnter={() => call(b.call)} onPointerLeave={() => call(null)} onFocus={() => call(b.call)} onBlur={() => call(null)} onClick={() => call(b.call)}>
                  <span className="lamp" aria-hidden />
                  {b.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-foot">
            <p className="muted">Free &middot; about 30 minutes &middot; needs a Telnyx number (about $1 a month)</p>
            <Link className="btn" href="/docs">Read the guide <IconArrow width={18} height={18} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
