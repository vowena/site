import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllPosts, getPost } from "@/lib/blog";
import { MdxRenderer } from "@/components/mdx-renderer";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} - Vowena Blog`, description: post.description };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* Cover + header */}
      <section className="relative overflow-hidden">
        {/* Cover image as background that fades out */}
        {post.cover && (
          <div className="absolute inset-0 -z-10">
            <Image src={post.cover} alt="" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
          </div>
        )}
        {!post.cover && (
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]" style={{ backgroundImage: "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
        )}

        <div className="max-w-2xl mx-auto px-6 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors mb-8">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
            Back to blog
          </Link>

          <time className="font-mono text-xs text-muted block mb-3">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>

          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight leading-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            {post.title}
          </h1>

          <p className="text-secondary mb-6">{post.description}</p>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-accent-subtle flex items-center justify-center text-accent text-sm font-semibold">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{post.author}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="border-t border-border">
        <article className="max-w-2xl mx-auto px-6 py-10 sm:py-14">
          <div className="
            [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:text-secondary [&_p]:leading-[1.8] [&_p]:mb-5 [&_p]:text-sm
            [&_li]:text-secondary [&_li]:leading-[1.8] [&_li]:mb-1.5 [&_li]:text-sm
            [&_ul]:mb-5 [&_ul]:pl-5 [&_ul]:list-disc
            [&_ol]:mb-5 [&_ol]:pl-5 [&_ol]:list-decimal
            [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2
            [&_strong]:text-foreground [&_strong]:font-semibold
            [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:my-6 [&_blockquote]:italic
            [&_hr]:border-border [&_hr]:my-10
            [&_table]:w-full [&_table]:my-6 [&_table]:text-sm [&_table]:border-collapse
            [&_th]:text-left [&_th]:text-foreground [&_th]:font-semibold [&_th]:pb-3 [&_th]:border-b [&_th]:border-border [&_th]:pr-4
            [&_td]:py-2.5 [&_td]:pr-4 [&_td]:text-secondary [&_td]:border-b [&_td]:border-border-subtle
            [&_img]:rounded-xl [&_img]:my-6 [&_img]:border [&_img]:border-border
          ">
            <MdxRenderer source={post.content} />
          </div>
        </article>
      </section>

      {/* Footer */}
      <section className="border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
              More posts
            </Link>
            <div className="flex items-center gap-4 text-muted">
              <Link href="https://x.com/vowena" className="hover:text-foreground transition-colors" aria-label="Share on X">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link href="https://github.com/vowena" className="hover:text-foreground transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
