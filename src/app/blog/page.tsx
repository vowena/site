import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]" style={{ backgroundImage: "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 pt-20 sm:pt-28 pb-16 sm:pb-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Blog</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
            Building the future of payments
          </h1>
          <p className="text-secondary max-w-lg">
            Technical deep dives, protocol updates, and the story behind Vowena.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="border-t border-border">
          <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
            <Link href={`/blog/${featured.slug}`} className="group block rounded-xl border border-border bg-elevated p-8 sm:p-10 hover:border-accent/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent bg-accent-subtle px-2 py-0.5 rounded-full">Latest</span>
                <time className="text-xs text-muted font-mono">
                  {new Date(featured.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </time>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight mb-3 group-hover:text-accent transition-colors" style={{ letterSpacing: "-0.02em" }}>
                {featured.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-4 max-w-2xl">{featured.description}</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-accent-subtle flex items-center justify-center text-[9px] text-accent font-semibold">
                  {featured.author.charAt(0)}
                </div>
                <span className="text-xs text-secondary">{featured.author}</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Rest of posts */}
      {rest.length > 0 && (
        <section className="border-t border-border">
          <div className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted mb-6">All posts</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-xl border border-border bg-elevated p-6 hover:border-accent/30 transition-colors flex flex-col"
                >
                  <time className="text-xs text-muted font-mono mb-3">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
                  <h2 className="text-sm font-semibold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-xs text-muted leading-relaxed mb-4 flex-1 line-clamp-2">{post.description}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent-subtle flex items-center justify-center text-[8px] text-accent font-semibold">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-xs text-muted">{post.author}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
