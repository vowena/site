import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vowena - Recurring revenue, fully automated";
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
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage: "linear-gradient(#E8E5F0 1px, transparent 1px), linear-gradient(90deg, #E8E5F0 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Top accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#6B4EFF" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="40" height="40" viewBox="0 0 80 80" fill="none">
              <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
              <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.4"/>
              <circle cx="40" cy="40" r="3" fill="#6B4EFF"/>
            </svg>
            <span style={{ fontSize: 28, fontWeight: 600, color: "#0E0D18", letterSpacing: "-0.03em" }}>vowena</span>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: 56, fontWeight: 600, color: "#0E0D18", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Recurring revenue,
            </span>
            <span style={{ fontSize: 56, fontWeight: 600, color: "#6B4EFF", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              fully automated.
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 20, color: "#48436A" }}>
            The first subscription billing protocol on Stellar
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00DC82" }} />
              <span style={{ fontSize: 14, color: "#6E6894" }}>Live on Testnet</span>
            </div>
            <span style={{ fontSize: 14, color: "#6E6894" }}>vowena.xyz</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
