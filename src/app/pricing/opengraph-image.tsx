import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vowena Pricing - Simple pricing, no surprises";
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
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent, #6B4EFF, transparent)" }} />
        <div style={{ position: "absolute", bottom: -80, right: -80, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,78,255,0.12) 0%, transparent 70%)" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
              <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
              <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.4"/>
              <circle cx="40" cy="40" r="3" fill="#6B4EFF"/>
            </svg>
            <span style={{ fontSize: 22, fontWeight: 600, color: "#F6F4FA", letterSpacing: "-0.03em" }}>vowena</span>
          </div>

          <span style={{ fontSize: 14, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#6B4EFF" }}>Pricing</span>

          <span style={{ fontSize: 46, fontWeight: 600, color: "#F6F4FA", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Simple pricing, no surprises
          </span>
        </div>

        {/* Tier cards */}
        <div style={{ display: "flex", gap: "14px", position: "relative" }}>
          {[
            { name: "Open Source", price: "Free", highlight: false },
            { name: "Pro", price: "$0/mo", highlight: true },
            { name: "Enterprise", price: "Custom", highlight: false },
          ].map((tier) => (
            <div
              key={tier.name}
              style={{
                flex: 1,
                padding: "18px 20px",
                borderRadius: 12,
                border: tier.highlight ? "1.5px solid #6B4EFF" : "1px solid #2D2945",
                background: tier.highlight ? "rgba(107,78,255,0.08)" : "rgba(255,255,255,0.03)",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 600, color: tier.highlight ? "#B5A8FF" : "#6E6894" }}>{tier.name}</span>
              <span style={{ fontSize: 26, fontWeight: 600, color: "#F6F4FA" }}>{tier.price}</span>
              {tier.highlight && (
                <span style={{ fontSize: 9, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#00DC82", background: "rgba(0,220,130,0.12)", padding: "2px 8px", borderRadius: 100, alignSelf: "flex-start" }}>
                  Free during beta
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
