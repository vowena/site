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
          padding: "80px",
          background: "#FEFCFF",
          fontFamily: "system-ui, sans-serif",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#6B4EFF" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "linear-gradient(#C5C0D8 1px, transparent 1px), linear-gradient(90deg, #C5C0D8 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <svg width="420" height="420" viewBox="0 0 80 80" fill="none" style={{ position: "absolute", right: -20, top: 105, opacity: 0.05 }}>
          <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="#6B4EFF" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="#6B4EFF" strokeWidth="3" strokeLinecap="round" fill="none"/>
          <circle cx="40" cy="40" r="2.5" fill="#6B4EFF"/>
        </svg>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="36" height="36" viewBox="0 0 80 80" fill="none">
              <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
              <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.4"/>
              <circle cx="40" cy="40" r="3" fill="#6B4EFF"/>
            </svg>
            <span style={{ fontSize: 24, fontWeight: 600, color: "#0E0D18", letterSpacing: "-0.03em" }}>vowena</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.14em", color: "#6B4EFF" }}>Pricing</span>
          <span style={{ fontSize: 48, fontWeight: 600, color: "#0E0D18", letterSpacing: "-0.03em", lineHeight: 1.15 }}>Simple pricing, no surprises</span>
        </div>

        <div style={{ display: "flex", gap: "16px", position: "relative" }}>
          {[
            { name: "Open Source", price: "Free" },
            { name: "Pro", price: "$0/mo", badge: true },
            { name: "Enterprise", price: "Custom" },
          ].map((tier) => (
            <div key={tier.name} style={{ flex: 1, padding: "20px", borderRadius: 12, border: tier.badge ? "2px solid #6B4EFF" : "1px solid #E8E5F0", background: tier.badge ? "rgba(107,78,255,0.03)" : "#F6F4FA", display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#48436A" }}>{tier.name}</span>
              <span style={{ fontSize: 28, fontWeight: 600, color: "#0E0D18" }}>{tier.price}</span>
              {tier.badge && (
                <span style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#00DC82", background: "#DBFFF0", padding: "2px 8px", borderRadius: 100, alignSelf: "flex-start" }}>Free during beta</span>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
