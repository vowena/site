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
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#FEFCFF", fontFamily: "system-ui, sans-serif", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(#C5C0D8 1px, transparent 1px), linear-gradient(90deg, #C5C0D8 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#6B4EFF" }} />

        {/* Left content - 55% */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px 50px 60px 70px", width: "55%", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <svg width="28" height="28" viewBox="0 0 80 80" fill="none">
              <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
              <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="#6B4EFF" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.4"/>
              <circle cx="40" cy="40" r="3" fill="#6B4EFF"/>
            </svg>
            <span style={{ fontSize: 18, fontWeight: 600, color: "#0E0D18", letterSpacing: "-0.03em" }}>vowena</span>
            <span style={{ fontSize: 12, color: "#9B95B8", marginLeft: 4 }}>Blog</span>
          </div>

          <span style={{ fontSize: 38, fontWeight: 600, color: "#0E0D18", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            {title}
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#EDE9FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600, color: "#6B4EFF" }}>
              {author.charAt(0)}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: "#0E0D18" }}>{author}</span>
              <span style={{ fontSize: 12, color: "#9B95B8" }}>{date}</span>
            </div>
          </div>
        </div>

        {/* Right side - cover image */}
        <div style={{ width: "45%", display: "flex", position: "relative" }}>
          {cover ? (
            <div style={{ position: "absolute", inset: 0, display: "flex" }}>
              {/* Fade from left */}
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, #FEFCFF, transparent)", zIndex: 1 }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cover} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ) : (
            <svg width="340" height="340" viewBox="0 0 80 80" fill="none" style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", opacity: 0.05 }}>
              <path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="#6B4EFF" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="#6B4EFF" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <circle cx="40" cy="40" r="2.5" fill="#6B4EFF"/>
            </svg>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
