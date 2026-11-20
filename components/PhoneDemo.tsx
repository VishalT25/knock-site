"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { SignGlyph, SleepGlyph } from "./Icons";

type S = "idle" | "ringing" | "opening" | "opened";

/** A real, tappable copy of the app's Open screen. Plays itself until you touch it. */
export function PhoneDemo() {
  const [s, setS] = useState<S>("idle");
  const [wait, setWait] = useState(0);
  const touched = useRef(false);
  const reduced = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const later = useCallback((fn: () => void, ms: number) => { timers.current.push(setTimeout(fn, ms)); }, []);
  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  const ring = useCallback(() => {
    setS("ringing"); setWait(0);
    if (!reduced.current && !touched.current) later(() => open(), 3600);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const open = useCallback(() => {
    setS("opening");
    later(() => { setS("opened"); later(() => { setS("idle"); later(ring, reduced.current ? 1200 : 2200); }, 3400); }, 900);
  }, [later, ring]);

  useEffect(() => {
    reduced.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    later(ring, reduced.current ? 300 : 1800);
    return clear;
  }, [later, ring]);

  useEffect(() => {
    if (s !== "ringing") return;
    const t = setInterval(() => setWait((w) => w + 1), 1000);
    return () => clearInterval(t);
  }, [s]);

  const tap = () => { if (s !== "ringing") return; touched.current = true; clear(); open(); };

  const main = s === "idle" ? "Standby" : s === "ringing" ? "At the door" : s === "opening" ? "Opening…" : "Opened";
  const tag = s === "idle" ? "Buzzer status" : s === "ringing" ? `Waiting 0:0${Math.min(wait, 9)}` : s === "opening" ? "Working" : "Done";
  const sub = s === "idle" ? "" : s === "ringing" ? "Tap OPEN DOOR to let them in." : s === "opening" ? "Sending the unlock tone." : "Opened by Maya.";
  const word = s === "ringing" ? "Open door" : s === "opening" ? "Opening" : s === "opened" ? "Door open" : "";

  return (
    <div>
      <div className="phone" role="group" aria-label="Interactive demo of the Knock Open screen">
        <div className="screen" data-s={s}>
          <div className="glow" aria-hidden />
          <div className="d-top"><span>Knock</span><span className="dot glass">Live</span></div>
          <div className="d-lcd" aria-live="polite">
            <span className="t">{tag}</span>
            <span className="m">{main}</span>
            <span className="s">{sub}</span>
          </div>
          <button className="d-key" data-s={s} onClick={tap} aria-disabled={s !== "ringing"} aria-label={s === "ringing" ? "Open door" : "Door status"}>
            {s === "idle" ? <SleepGlyph style={{ width: "4.6rem", position: "relative", zIndex: 2 }} /> : (<><SignGlyph /><span>{word}</span></>)}
          </button>
          <div className="d-tabs glass" aria-hidden>
            <b data-on="true">Open</b><b>Log</b><b>Household</b><b>Settings</b>
          </div>
        </div>
      </div>
      <p className="demo-hint muted">{s === "ringing" ? "Go on, tap Open door." : "A real copy of the app screen. Watch, or tap it."}</p>
    </div>
  );
}
