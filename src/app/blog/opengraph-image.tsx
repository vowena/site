import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vowena Blog - Building the future of payments";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#FEFCFF",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#6B4EFF" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(#E8E5F0 1px, transparent 1px), linear-gradient(90deg, #E8E5F0 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="36" height="36" viewBox="0 0 80 80" fill="none">
              <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
              <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.4"/>
              <circle cx="40" cy="40" r="3" fill="#6B4EFF"/>
            </svg>
            <span style={{ fontSize: 24, fontWeight: 600, color: "#0E0D18", letterSpacing: "-0.03em" }}>vowena</span>
          </div>

          <span style={{ fontSize: 14, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#6B4EFF" }}>Blog</span>

          <span style={{ fontSize: 48, fontWeight: 600, color: "#0E0D18", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Building the future of payments
          </span>
        </div>

        <span style={{ fontSize: 20, color: "#48436A" }}>
          Technical deep dives, protocol updates, and the story behind Vowena.
        </span>
      </div>
    ),
    { ...size }
  );
}
