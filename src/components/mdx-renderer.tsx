import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { highlightCode } from "@/lib/highlight";
import { CopyBtn } from "./mdx-copy-btn";
import { InstallTabs } from "./install-tabs";

function MdxCode({ children, className }: { children?: string; className?: string }) {
  const code = typeof children === "string" ? children.trim() : "";

  if (!className) {
    return (
      <code className="text-accent bg-accent-subtle px-1 rounded text-sm font-mono">
        {children}
      </code>
    );
  }

  const lang = className.replace("language-", "");
  const html = highlightCode(code, lang);

  return (
    <div className="relative group my-6 rounded-xl border border-border bg-surface overflow-hidden text-[13px]">
      <CopyBtn code={code} />
      <pre className="m-0 p-0">
        <code
          className={`hljs font-mono !p-4 !bg-transparent block leading-[1.7] language-${lang}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  );
}

function MdxPre({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function Video({ src, title }: { src?: string; title?: string }) {
  if (!src) return null;
  return (
    <div className="my-6 rounded-xl border border-border overflow-hidden aspect-video">
      <iframe
        src={src}
        title={title || "Video"}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function Callout({ children, type = "info" }: { children?: React.ReactNode; type?: string }) {
  const styles: Record<string, string> = {
    info: "border-info/30 bg-info/5",
    warning: "border-warning/30 bg-warning/5",
    tip: "border-success/30 bg-success/5",
  };
  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 ${styles[type] || styles.info}`}>
      <div className="text-sm [&_p]:mb-0 [&_p]:text-secondary">{children}</div>
    </div>
  );
}

const components = {
  code: MdxCode as React.ComponentType<Record<string, unknown>>,
  pre: MdxPre as React.ComponentType<Record<string, unknown>>,
  InstallTabs: InstallTabs as React.ComponentType<Record<string, unknown>>,
  Video: Video as React.ComponentType<Record<string, unknown>>,
  Callout: Callout as React.ComponentType<Record<string, unknown>>,
};

export function MdxRenderer({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  );
}
