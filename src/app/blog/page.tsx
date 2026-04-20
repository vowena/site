import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical deep dives, protocol updates, and the story behind Vowena. Learn about on-chain subscription billing, the Stellar ecosystem, and building in public.",
  alternates: { canonical: "https://vowena.xyz/blog" },
  openGraph: {
    title: "Blog — Vowena",
    description:
      "Technical deep dives, protocol updates, and the story behind Vowena.",
    url: "https://vowena.xyz/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
          <SectionEyebrow className="mb-6">Blog</SectionEyebrow>
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-foreground tracking-tight mb-6 leading-[1.05]"
            style={{ letterSpacing: "-0.035em" }}
          >
            <span className="serif-italic text-foreground/40 text-[1.08em]">
              Building
            </span>{" "}
            the future of payments.
          </h1>
          <p className="text-base sm:text-lg text-secondary max-w-xl leading-relaxed">
            Technical deep dives, protocol updates, and the story behind Vowena.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 sm:grid-cols-2 gap-0 rounded-xl border border-border bg-elevated overflow-hidden hover:border-accent/30 transition-colors"
            >
              {featured.cover && (
                <div className="relative aspect-[16/10] sm:aspect-auto overflow-hidden">
                  <Image
                    src={featured.cover}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-accent bg-accent-subtle px-1.5 py-0.5 rounded">
                      Latest
                    </span>
                  </div>
                  <h2
                    className="text-lg sm:text-xl font-semibold text-foreground tracking-tight mb-2 group-hover:text-accent transition-colors"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {featured.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent-subtle flex items-center justify-center text-[9px] text-accent font-semibold">
                      {featured.author.charAt(0)}
                    </div>
                    <span className="text-xs text-secondary">
                      {featured.author}
                    </span>
                  </div>
                  <time className="text-xs text-muted font-mono">
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Rest of posts */}
      {rest.length > 0 && (
        <section className="border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted mb-6">
              All posts
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-xl border border-border bg-elevated overflow-hidden hover:border-accent/30 transition-colors flex flex-col"
                >
                  {post.cover && (
                    <div className="relative w-full aspect-[2/1] overflow-hidden">
                      <Image
                        src={post.cover}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="text-sm font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-xs text-muted leading-relaxed mb-4 flex-1 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-accent-subtle flex items-center justify-center text-[8px] text-accent font-semibold">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-xs text-muted">
                          {post.author}
                        </span>
                      </div>
                      <time className="text-xs text-muted font-mono">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
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
