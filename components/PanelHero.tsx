"use client";
import { useEffect, useState } from "react";
import { deployUrl } from "@/lib/site";
import { IconArrow } from "./Icons";

const BUZZERS = [
  { href: "#how", label: "How it works", call: "How it works" },
  { href: "#check", label: "Will it work in my building?", call: "Intercom check" },
  { href: "#cost", label: "What it costs", call: "Cost" },
  { href: "#setup", label: "How to set it up", call: "Setup" },
  { href: "#safety", label: "Safety", call: "Safety" },
  { href: "#faq", label: "Questions", call: "Questions" },
];

/** The page is an intercom panel: a readout, a call key, and one buzzer per section. */
export function PanelHero() {
  const [line, setLine] = useState("");
  const [calling, setCalling] = useState<string | null>(null);
  const idle = "Standby";

  // type the idle line in once
  useEffect(() => {
    if (calling) return;
    let i = 0;
    setLine("");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setLine(idle); return; }
    const t = setInterval(() => { i++; setLine(idle.slice(0, i)); if (i >= idle.length) clearInterval(t); }, 90);
    return () => clearInterval(t);
  }, [calling]);

  const call = (label: string | null) => { setCalling(label); document.documentElement.dataset.call = label ? "1" : "0"; };

  return (
    <section className="hero" aria-labelledby="top">
      <div className="wrap">
        <div className="plate glass">
          <div style={{ display: "grid", gap: "1rem" }}>
            <h1 id="top">Open your apartment door <em>from your phone.</em></h1>
            <p className="lede">Knock is a free, open-source apartment buzzer app. It turns your building&rsquo;s buzzer into an app you share with your roommates: when a visitor buzzes, every phone in the household rings, and the first person to tap lets them in.</p>
          </div>

          <div className="readout" role="status" aria-live="off">
            <span className="tag">{calling ? "Calling" : "Buzzer status"}</span>
            <span className="line">{calling ? calling : line}</span>
          </div>

          <div className="panel-grid">
            <a className="call-key" href={deployUrl()} rel="noopener" onPointerEnter={() => call("Deploy")} onPointerLeave={() => call(null)} onFocus={() => call("Deploy")} onBlur={() => call(null)}>
              <span className="big">Deploy to Vercel</span>
              <span className="small">One click. Your own copy, on your own account.</span>
            </a>
            <div className="buzzers" role="list">
              {BUZZERS.map((b) => (
                <a key={b.href} role="listitem" className="buzzer glass" href={b.href} data-called={calling === b.call}
                  onPointerEnter={() => call(b.call)} onPointerLeave={() => call(null)} onFocus={() => call(b.call)} onBlur={() => call(null)} onClick={() => call(b.call)}>
                  <span className="lamp" aria-hidden />
                  {b.label}
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem 1.5rem", alignItems: "center", justifyContent: "space-between" }}>
            <div className="facts">
              <span>Free and open source</span>
              <span>About 30 minutes to set up</span>
              <span>Needs a Telnyx number, about $1 a month</span>
            </div>
            <a className="btn" href="/docs">Read the setup guide <IconArrow width={18} height={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
