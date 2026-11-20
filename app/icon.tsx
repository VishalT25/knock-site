import { ImageResponse } from "next/og";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: 64, height: 64, background: "#f0642a", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 14 }}>
        <svg width="40" height="40" viewBox="0 0 64 64" fill="none" stroke="#1c1a17" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 56V10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v46" /><path d="M4 56h56" /><path d="M40 32h16M50 24l8 8-8 8" />
        </svg>
      </div>
    ),
    size,
  );
}
