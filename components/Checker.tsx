"use client";
import Link from "next/link";
import { useState } from "react";

type A = "yes" | "no" | "unsure" | null;
const QS = [
  { id: "phone", q: "When a visitor buzzes your unit, does the intercom call a regular phone number?", opts: [["yes", "Yes, it calls a phone"], ["no", "No, it rings a handset in my unit"], ["unsure", "Not sure"]] },
  { id: "digit", q: "When you answer that call, do you press a number (usually 9) to unlock the door?", opts: [["yes", "Yes"], ["no", "No"], ["unsure", "Not sure"]] },
  { id: "change", q: "Can your building manager change the phone number on file for your unit?", opts: [["yes", "Yes"], ["no", "No"], ["unsure", "Not sure"]] },
] as const;

export function Checker() {
  const [a, setA] = useState<Record<string, A>>({ phone: null, digit: null, change: null });
  const set = (id: string, v: A) => setA((x) => ({ ...x, [id]: v }));
  const done = Object.values(a).every(Boolean);

  let v: { kind: "good" | "maybe" | "bad"; title: string; body: React.ReactNode } | null = null;
  if (done) {
    if (a.phone === "no" || a.digit === "no") {
      v = { kind: "bad", title: "Probably not, sorry.", body: <>Knock needs the building to <b>call a real phone number</b> and to <b>unlock when it hears a key press</b> on that call. Systems that ring a wall handset, or open from an app only your building&rsquo;s vendor provides, can&rsquo;t be taken over. Check once more by asking your building how a visitor reaches you. <Link href="/docs/will-it-work">How to check properly</Link>.</> };
    } else if (a.phone === "unsure" || a.digit === "unsure") {
      v = { kind: "maybe", title: "Maybe. Here is how to find out in five minutes.", body: <>Ask whoever has the number on file (or your building) to confirm two things: the intercom <b>calls a phone</b>, and pressing a number on that call <b>opens the door</b>. You can often test by buzzing your own unit from the street while the call comes in. <Link href="/docs/will-it-work">Step-by-step test</Link>.</> };
    } else if (a.change === "no") {
      v = { kind: "maybe", title: "Likely, with a workaround.", body: <>If the building won&rsquo;t change the number, keep it and set the <b>phone that is on file to forward calls</b> to your Knock number. Most carriers support call forwarding. <Link href="/docs/connect-building">How to connect your building</Link>.</> };
    } else if (a.change === "unsure") {
      v = { kind: "good", title: "Looks promising.", body: <>The two things that decide it are fine. Ask your building if they can swap the number for your unit. If they can&rsquo;t, forwarding from the current phone works too. <Link href="/docs/connect-building">What to say to your building</Link>.</> };
    } else {
      v = { kind: "good", title: "Knock should work for you.", body: <>It calls a phone, a key press unlocks the door and the number can be changed. That is exactly what Knock needs. <Link href="/docs/deploy">Deploy it</Link>, then follow the guide.</> };
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
          <p className="muted">Answer all three and you&rsquo;ll get a straight answer.</p>
        )}
      </div>
    </div>
  );
}
