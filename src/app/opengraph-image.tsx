import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vowena - Recurring revenue, fully automated";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#FEFCFF",
        fontFamily: "system-ui, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle grid */}
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
      {/* Top accent bar */}
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

      {/* Left content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 60px 60px 70px",
          width: "55%",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
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
              fontSize: 22,
              fontWeight: 600,
              color: "#0E0D18",
              letterSpacing: "-0.03em",
            }}
          >
            vowena
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span
            style={{
              fontSize: 46,
              fontWeight: 600,
              color: "#0E0D18",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Recurring revenue,
          </span>
          <span
            style={{
              fontSize: 46,
              fontWeight: 600,
              color: "#6B4EFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            fully automated.
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span style={{ fontSize: 16, color: "#48436A", lineHeight: 1.5 }}>
            Subscription billing on Stellar. One signature from your customer.
            Billing runs forever.
          </span>
          <span style={{ fontSize: 13, color: "#9B95B8" }}>vowena.xyz</span>
        </div>
      </div>

      {/* Right side - dashboard mockup */}
      <div
        style={{
          width: "45%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "40px 40px 40px 0",
        }}
      >
        <div
          style={{
            width: "100%",
            borderRadius: 16,
            border: "1px solid #E8E5F0",
            background: "#FFFFFF",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(107,78,255,0.08)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Stats */}
          <div style={{ display: "flex", gap: "1px", background: "#E8E5F0" }}>
            {[
              { label: "MRR", value: "$12.8k", change: "+18%" },
              { label: "Subscribers", value: "1,284", change: "+24" },
              { label: "Success", value: "98.7%", change: "+0.3%" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  background: "#FFFFFF",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <span style={{ fontSize: 9, color: "#9B95B8" }}>{s.label}</span>
                <span
                  style={{ fontSize: 18, fontWeight: 600, color: "#0E0D18" }}
                >
                  {s.value}
                </span>
                <span style={{ fontSize: 9, color: "#00DC82" }}>
                  {s.change}
                </span>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div
            style={{
              padding: "16px 16px 8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 10, fontWeight: 600, color: "#0E0D18" }}>
                Revenue
              </span>
              <span
                style={{
                  fontSize: 9,
                  color: "#6B4EFF",
                  background: "#EDE9FF",
                  padding: "2px 6px",
                  borderRadius: 4,
                }}
              >
                30d
              </span>
            </div>
            <svg
              viewBox="0 0 400 80"
              width="100%"
              height="60"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="ogcf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6B4EFF" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#6B4EFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 65 L40 58 L80 52 L120 45 L160 40 L200 35 L240 28 L280 22 L320 16 L360 12 L400 6 L400 80 L0 80Z"
                fill="url(#ogcf)"
              />
              <path
                d="M0 65 L40 58 L80 52 L120 45 L160 40 L200 35 L240 28 L280 22 L320 16 L360 12 L400 6"
                fill="none"
                stroke="#6B4EFF"
                strokeWidth="2"
              />
            </svg>
          </div>
          {/* Rows */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { addr: "GCKJ...8FXP", action: "Subscribed", amount: "+$29.99" },
              { addr: "GBXM...Q4VL", action: "Charged", amount: "+$29.99" },
            ].map((r) => (
              <div
                key={r.addr}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 16px",
                  borderTop: "1px solid #F6F4FA",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "#EDE9FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 8,
                      fontWeight: 600,
                      color: "#6B4EFF",
                    }}
                  >
                    {r.addr[0]}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: 10,
                        color: "#0E0D18",
                        fontFamily: "monospace",
                      }}
                    >
                      {r.addr}
                    </span>
                    <span style={{ fontSize: 8, color: "#9B95B8" }}>
                      {r.action}
                    </span>
                  </div>
                </div>
                <span
                  style={{ fontSize: 10, fontWeight: 500, color: "#00DC82" }}
                >
                  {r.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
