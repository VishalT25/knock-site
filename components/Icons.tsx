import type { SVGProps } from "react";
type P = SVGProps<SVGSVGElement>;
const base: P = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

export const IconDoor = (p: P) => (<svg {...base} {...p}><path d="M5 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17" /><path d="M3 21h18" /><circle cx="11.5" cy="12.5" r="0.6" fill="currentColor" /></svg>);
export const IconSun = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.2 5.2l1.8 1.8M17 17l1.8 1.8M18.8 5.2L17 7M7 17l-1.8 1.8" /></svg>);
export const IconMoon = (p: P) => (<svg {...base} {...p}><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" /></svg>);
export const IconChevron = (p: P) => (<svg {...base} {...p}><path d="M6 9l6 6 6-6" /></svg>);
export const IconArrow = (p: P) => (<svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);

/** The door-and-arrow glyph from the app. */
export function SignGlyph(p: P) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M10 56V10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v46" />
      <path d="M4 56h56" />
      <g className="leaf"><path d="M14 12h16v44H14z" fill="currentColor" fillOpacity="0.18" stroke="none" /><circle cx="26" cy="35" r="1.6" fill="currentColor" stroke="none" /></g>
      <path d="M40 32h16M50 24l8 8-8 8" />
    </svg>
  );
}

/** Sleeping door: idle state. */
export function SleepGlyph(p: P) {
  return (
    <svg viewBox="0 0 96 64" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...p}>
      <path d="M10 56V10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v46" />
      <path d="M4 56h56" />
      <path d="M14 12h16v44H14z" fill="currentColor" fillOpacity="0.14" stroke="none" />
      <circle cx="26" cy="35" r="1.6" fill="currentColor" stroke="none" />
      <g className="zz"><path strokeWidth={3} d="M52 30h9l-9 10h9" /><path strokeWidth={3} d="M66 18h7l-7 8h7" /><path strokeWidth={2.6} d="M78 8h5.5l-5.5 6.5h5.5" /></g>
    </svg>
  );
}
