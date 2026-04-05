import { ImageResponse } from "next/og";
import { getPost } from "@/lib/blog";

export const alt = "Vowena Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "Vowena Blog";
  const author = post?.author ?? "Vowena";
  const date = post?.date ? new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "";

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

        {/* Accent glow */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,78,255,0.1) 0%, transparent 70%)" }} />

        {/* Left accent line */}
        <div style={{ position: "absolute", left: 80, top: 200, bottom: 160, width: 3, background: "linear-gradient(to bottom, #6B4EFF, transparent)", borderRadius: 2 }} />

        {/* Top */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", position: "relative" }}>
          <svg width="28" height="28" viewBox="0 0 80 80" fill="none">
            <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
            <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.4"/>
            <circle cx="40" cy="40" r="3" fill="#6B4EFF"/>
          </svg>
          <span style={{ fontSize: 20, fontWeight: 600, color: "#F6F4FA", letterSpacing: "-0.03em" }}>vowena</span>
          <span style={{ fontSize: 13, color: "#6E6894", marginLeft: 4 }}>/ blog</span>
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: 20, position: "relative" }}>
          <span style={{ fontSize: 42, fontWeight: 600, color: "#F6F4FA", letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: 950 }}>
            {title}
          </span>
        </div>

        {/* Author */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", paddingLeft: 20, position: "relative" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(107,78,255,0.2)", border: "1.5px solid rgba(107,78,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, color: "#B5A8FF" }}>
            {author.charAt(0)}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 16, fontWeight: 500, color: "#F6F4FA" }}>{author}</span>
            <span style={{ fontSize: 13, color: "#6E6894" }}>{date}</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
