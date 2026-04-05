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
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0E0D18 0%, #1A0F52 50%, #161423 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Large faded Vowena symbol as watermark */}
        <svg
          width="500"
          height="500"
          viewBox="0 0 80 80"
          fill="none"
          style={{ position: "absolute", right: -40, top: -40, opacity: 0.06 }}
        >
          <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5"/>
          <circle cx="40" cy="40" r="2.5" fill="white"/>
        </svg>

        {/* Grid overlay */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        {/* Accent glow */}
        <div style={{ position: "absolute", top: -100, left: "30%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,78,255,0.15) 0%, transparent 70%)" }} />

        {/* Top accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent, #6B4EFF, transparent)" }} />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", position: "relative" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="36" height="36" viewBox="0 0 80 80" fill="none">
              <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
              <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.4"/>
              <circle cx="40" cy="40" r="3" fill="#6B4EFF"/>
            </svg>
            <span style={{ fontSize: 26, fontWeight: 600, color: "#F6F4FA", letterSpacing: "-0.03em" }}>vowena</span>
          </div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: 54, fontWeight: 600, color: "#F6F4FA", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Recurring revenue,
            </span>
            <span style={{ fontSize: 54, fontWeight: 600, color: "#6B4EFF", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              fully automated.
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <span style={{ fontSize: 18, color: "#9B95B8" }}>
            On-chain subscription billing on Stellar
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#00DC82" }} />
              <span style={{ fontSize: 13, color: "#6E6894" }}>Live on Testnet</span>
            </div>
            <span style={{ fontSize: 13, color: "#6E6894" }}>vowena.xyz</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
