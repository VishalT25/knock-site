"use client";
import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "./Icons";

const KEY = "knock-site-theme";

/** One-tap light/dark. Follows the system until you choose, then remembers. */
export function ThemeButton() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const read = () => setDark(el.dataset.theme === "dark" || (!el.dataset.theme && mq.matches));
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, []);
  const flip = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(KEY, next); } catch {}
    setDark(!dark);
  };
  return (
    <button className="icon-btn" onClick={flip} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
      {dark ? <IconSun /> : <IconMoon />}
    </button>
  );
}
