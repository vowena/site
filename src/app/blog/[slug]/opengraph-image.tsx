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
  const cover = post?.cover;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Cover image as background */}
        {cover && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cover} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        )}
        {/* Overlay */}
        <div style={{ position: "absolute", inset: 0, background: cover ? "linear-gradient(to top, rgba(14,13,24,0.92) 0%, rgba(14,13,24,0.75) 50%, rgba(14,13,24,0.5) 100%)" : "#FEFCFF" }} />

        {/* Top accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#6B4EFF" }} />

        {/* Watermark */}
        <svg width="360" height="360" viewBox="0 0 80 80" fill="none" style={{ position: "absolute", right: -10, top: 135, opacity: cover ? 0.08 : 0.05 }}>
          <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke={cover ? "#FFFFFF" : "#6B4EFF"} strokeWidth="3" strokeLinecap="round" fill="none"/>
          <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke={cover ? "#FFFFFF" : "#6B4EFF"} strokeWidth="3" strokeLinecap="round" fill="none"/>
          <circle cx="40" cy="40" r="2.5" fill={cover ? "#FFFFFF" : "#6B4EFF"}/>
        </svg>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "80px", width: "100%", height: "100%", position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
                <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke={cover ? "#FFFFFF" : "#6B4EFF"} strokeWidth="4.5" strokeLinecap="round" fill="none"/>
                <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke={cover ? "#FFFFFF" : "#6B4EFF"} strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.4"/>
                <circle cx="40" cy="40" r="3" fill={cover ? "#FFFFFF" : "#6B4EFF"}/>
              </svg>
              <span style={{ fontSize: 20, fontWeight: 600, color: cover ? "#FFFFFF" : "#0E0D18", letterSpacing: "-0.03em" }}>vowena</span>
              <span style={{ fontSize: 13, color: cover ? "rgba(255,255,255,0.5)" : "#6E6894", marginLeft: 8 }}>Blog</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: 44, fontWeight: 600, color: cover ? "#FFFFFF" : "#0E0D18", letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: 800 }}>
              {title}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: cover ? "rgba(255,255,255,0.15)" : "#EDE9FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 600, color: cover ? "#FFFFFF" : "#6B4EFF" }}>
              {author.charAt(0)}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 15, fontWeight: 500, color: cover ? "#FFFFFF" : "#0E0D18" }}>{author}</span>
              <span style={{ fontSize: 13, color: cover ? "rgba(255,255,255,0.5)" : "#6E6894" }}>{date}</span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
