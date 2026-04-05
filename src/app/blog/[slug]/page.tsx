import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: `${post.title} - Vowena Blog`, description: post.description };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-2xl mx-auto px-6 py-24">
      <Link href="/blog" className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-block">
        &larr; Back to blog
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl font-semibold text-foreground tracking-tight leading-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-muted">
          <span>{post.author}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <time className="font-mono text-xs">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>
        </div>
      </header>

      <div className="prose prose-neutral max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:text-secondary [&_p]:leading-relaxed [&_li]:text-secondary [&_a]:text-accent [&_a]:no-underline hover:[&_a]:underline [&_code]:text-accent [&_code]:bg-accent-subtle [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-elevated [&_pre]:border [&_pre]:border-border [&_pre]:rounded-xl [&_blockquote]:border-accent [&_blockquote]:text-secondary [&_strong]:text-foreground [&_hr]:border-border">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
