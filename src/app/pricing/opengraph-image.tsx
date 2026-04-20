import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vowena Pricing - Simple pricing, no surprises";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 70px",
        background: "#FEFCFF",
        fontFamily: "system-ui, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            "linear-gradient(#C5C0D8 1px, transparent 1px), linear-gradient(90deg, #C5C0D8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: "#6B4EFF",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="28" height="28" viewBox="0 0 80 80" fill="none">
            <path
              d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62"
              stroke="#6B4EFF"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18"
              stroke="#6B4EFF"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
            />
            <circle cx="40" cy="40" r="3" fill="#6B4EFF" />
          </svg>
          <span
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#0E0D18",
              letterSpacing: "-0.03em",
            }}
          >
            vowena
          </span>
        </div>
        <span style={{ fontSize: 13, color: "#9B95B8" }}>
          vowena.xyz/pricing
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            textTransform: "uppercase" as const,
            letterSpacing: "0.14em",
            color: "#6B4EFF",
          }}
        >
          Pricing
        </span>
        <span
          style={{
            fontSize: 40,
            fontWeight: 600,
            color: "#0E0D18",
            letterSpacing: "-0.03em",
          }}
        >
          Simple pricing, no surprises
        </span>
      </div>

      {/* Tier cards */}
      <div style={{ display: "flex", gap: "16px", position: "relative" }}>
        {[
          {
            name: "Open Source",
            price: "Free",
            period: "forever",
            highlight: false,
          },
          { name: "Pro", price: "$0", period: "/month", highlight: true },
          { name: "Enterprise", price: "Custom", period: "", highlight: false },
        ].map((t) => (
          <div
            key={t.name}
            style={{
              flex: 1,
              padding: "24px",
              borderRadius: 14,
              border: t.highlight ? "2px solid #6B4EFF" : "1px solid #E8E5F0",
              background: t.highlight ? "rgba(107,78,255,0.03)" : "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              position: "relative",
            }}
          >
            {t.highlight && (
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: 8,
                  fontWeight: 600,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.12em",
                  color: "#FFFFFF",
                  background: "#6B4EFF",
                  padding: "3px 10px",
                  borderRadius: 100,
                }}
              >
                Most popular
              </div>
            )}
            <span style={{ fontSize: 12, fontWeight: 600, color: "#48436A" }}>
              {t.name}
            </span>
            <div
              style={{ display: "flex", alignItems: "baseline", gap: "4px" }}
            >
              <span style={{ fontSize: 32, fontWeight: 600, color: "#0E0D18" }}>
                {t.price}
              </span>
              {t.period && (
                <span style={{ fontSize: 12, color: "#9B95B8" }}>
                  {t.period}
                </span>
              )}
            </div>
            {t.highlight && (
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                  color: "#00DC82",
                  background: "#DBFFF0",
                  padding: "2px 8px",
                  borderRadius: 100,
                  alignSelf: "flex-start",
                }}
              >
                Free during beta
              </span>
            )}
          </div>
        ))}
      </div>
    </div>,
    { ...size },
  );
}
