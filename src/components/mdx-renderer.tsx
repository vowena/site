"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import { highlightCode } from "./code-block";
import { InstallTabs } from "./install-tabs";
import { useState } from "react";

function CopyBtn({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-muted hover:text-foreground z-10 cursor-pointer bg-elevated/80 backdrop-blur-sm rounded-md p-1.5 border border-border"
      aria-label="Copy code"
    >
      {copied ? (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
      ) : (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      )}
    </button>
  );
}

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
    info: "border-info/30 bg-info/5 text-info",
    warning: "border-warning/30 bg-warning/5 text-warning",
    tip: "border-success/30 bg-success/5 text-success",
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
  return <MDXRemote source={source} components={components} />;
}
