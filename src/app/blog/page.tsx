import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Blog</p>
      <h1 className="text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
        Building the future of payments
      </h1>
      <p className="text-secondary mb-16 max-w-lg">
        Technical deep dives, protocol updates, and the story behind Vowena.
      </p>

      <div className="space-y-1">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex items-baseline justify-between gap-4 py-5 border-b border-border hover:border-accent/30 transition-colors"
          >
            <div className="min-w-0">
              <h2 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                {post.title}
              </h2>
              <p className="text-sm text-muted mt-1 line-clamp-1">{post.description}</p>
            </div>
            <time className="text-xs text-muted font-mono shrink-0">
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </time>
          </Link>
        ))}
      </div>
    </div>
  );
}
