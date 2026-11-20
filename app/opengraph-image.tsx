import { ImageResponse } from "next/og";
export const alt = "Knock: open your apartment door from your phone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg, #fbe9dc 0%, #f7efe8 55%, #fde0cd 100%)", color: "#2a211c", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 20, background: "#f0642a", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="46" height="46" viewBox="0 0 64 64" fill="none" stroke="#1c1a17" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 56V10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v46" /><path d="M4 56h56" /><path d="M40 32h16M50 24l8 8-8 8" /></svg>
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1.5 }}>Knock</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3, maxWidth: 980 }}>Open your apartment door from your phone.</div>
          <div style={{ fontSize: 34, color: "#5a4a40", maxWidth: 900 }}>A free, open-source door buzzer you run yourself. Every roommate&apos;s phone rings; the first tap unlocks the door.</div>
        </div>
      </div>
    ),
    size,
  );
}
