import { ImageResponse } from "next/og";
import { getPost, getAllPosts } from "@/lib/blog";

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
          padding: "80px",
          background: "#FEFCFF",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#6B4EFF" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(#E8E5F0 1px, transparent 1px), linear-gradient(90deg, #E8E5F0 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        {/* Left accent bar */}
        <div style={{ position: "absolute", left: 80, top: 180, bottom: 180, width: 3, background: "#6B4EFF", borderRadius: 2 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
              <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
              <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.4"/>
              <circle cx="40" cy="40" r="3" fill="#6B4EFF"/>
            </svg>
            <span style={{ fontSize: 20, fontWeight: 600, color: "#0E0D18", letterSpacing: "-0.03em" }}>vowena</span>
            <span style={{ fontSize: 13, color: "#6E6894", marginLeft: 8 }}>Blog</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: 24 }}>
          <span style={{ fontSize: 44, fontWeight: 600, color: "#0E0D18", letterSpacing: "-0.02em", lineHeight: 1.2, maxWidth: 900 }}>
            {title}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingLeft: 24 }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#EDE9FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 600, color: "#6B4EFF" }}>
            {author.charAt(0)}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 15, fontWeight: 500, color: "#0E0D18" }}>{author}</span>
            <span style={{ fontSize: 13, color: "#6E6894" }}>{date}</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
