import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";
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
    <article className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors mb-10">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        Back to blog
      </Link>

      <header className="mb-12">
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight leading-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
          {post.title}
        </h1>
        <p className="text-secondary text-base mb-6">{post.description}</p>
        <div className="flex items-center gap-3 text-sm text-muted border-t border-border pt-6">
          <div className="w-8 h-8 rounded-full bg-accent-subtle flex items-center justify-center text-accent text-xs font-semibold">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{post.author}</p>
            <time className="font-mono text-xs text-muted">
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
          </div>
        </div>
      </header>

      <div className="
        [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4
        [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3
        [&_p]:text-secondary [&_p]:leading-[1.8] [&_p]:mb-5 [&_p]:text-[0.925rem]
        [&_li]:text-secondary [&_li]:leading-[1.8] [&_li]:mb-1.5
        [&_ul]:mb-5 [&_ul]:pl-5 [&_ul]:list-disc
        [&_ol]:mb-5 [&_ol]:pl-5 [&_ol]:list-decimal
        [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2
        [&_strong]:text-foreground [&_strong]:font-semibold
        [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:my-6 [&_blockquote]:italic
        [&_hr]:border-border [&_hr]:my-10
        [&_code]:text-accent [&_code]:bg-accent-subtle [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
        [&_pre]:bg-[#1a1625] [&_pre]:text-[#e2dff0] [&_pre]:border [&_pre]:border-border [&_pre]:rounded-xl [&_pre]:p-5 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:text-sm [&_pre]:leading-relaxed
        [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit [&_pre_code]:text-sm
        [&_img]:rounded-xl [&_img]:my-6 [&_img]:border [&_img]:border-border
      ">
        <MDXRemote source={post.content} />
      </div>

      {/* Post footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="flex items-center justify-between">
          <Link href="/blog" className="text-sm text-muted hover:text-accent transition-colors">
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
    </article>
  );
}
