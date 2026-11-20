"use client";
import Link from "next/link";
import { useState } from "react";

type A = "yes" | "no" | "unsure" | null;
const QS = [
  { id: "phone", q: "Does your intercom call a phone number?", opts: [["yes", "Yes"], ["no", "No, a wall handset"], ["unsure", "Not sure"]] },
  { id: "digit", q: "Do you press a digit (usually 9) to unlock the door?", opts: [["yes", "Yes"], ["no", "No"], ["unsure", "Not sure"]] },
  { id: "change", q: "Can the building change the number it calls?", opts: [["yes", "Yes"], ["no", "No"], ["unsure", "Not sure"]] },
] as const;

export function Checker() {
  const [a, setA] = useState<Record<string, A>>({ phone: null, digit: null, change: null });
  const set = (id: string, v: A) => setA((x) => ({ ...x, [id]: v }));
  const done = Object.values(a).every(Boolean);

  let v: { kind: "good" | "maybe" | "bad"; title: string; body: React.ReactNode } | null = null;
  if (done) {
    if (a.phone === "no" || a.digit === "no") {
      v = { kind: "bad", title: "Probably not.", body: <>Knock needs a call to a phone number that unlocks on a key press. <Link href="/docs/will-it-work">How to be sure</Link>.</> };
    } else if (a.phone === "unsure" || a.digit === "unsure") {
      v = { kind: "maybe", title: "Maybe. Easy to find out.", body: <>Ask whoever gets the calls, or have a friend buzz you. <Link href="/docs/will-it-work">The five-minute test</Link>.</> };
    } else if (a.change === "no") {
      v = { kind: "maybe", title: "Likely, with forwarding.", body: <>Forward calls from the number on file to your Knock number. <Link href="/docs/connect-building">How</Link>.</> };
    } else {
      v = { kind: "good", title: "Knock should work.", body: <>That is exactly what it needs. <Link href="/docs/deploy">Deploy it</Link>.</> };
    }
  }

  return (
    <div className="checker">
      {QS.map((q) => (
        <fieldset key={q.id} className="q" style={{ border: 0, padding: 0, margin: 0 }}>
          <legend className="q-text">{q.q}</legend>
          <div className="opts" role="group" aria-label={q.q}>
            {q.opts.map(([val, label]) => (
              <button key={val} className="opt" aria-pressed={a[q.id] === val} onClick={() => set(q.id, val as A)}>{label}</button>
            ))}
          </div>
        </fieldset>
      ))}
      <div aria-live="polite">
        {v ? (
          <div className="verdict" data-v={v.kind}>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </div>
        ) : (
          <p className="muted">Answer all three for a straight answer.</p>
        )}
      </div>
    </div>
  );
}
