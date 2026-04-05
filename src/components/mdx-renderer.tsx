"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
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

function CodeBlock({ children, className }: { children?: string; className?: string }) {
  const code = typeof children === "string" ? children.trim() : "";

  if (!className) {
    return (
      <code className="text-accent bg-accent-subtle px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  }

  const html = highlight(code);

  return (
    <div className="relative group my-6 rounded-xl border border-border bg-surface overflow-hidden">
      <CopyBtn code={code} />
      <pre className="p-5 overflow-x-auto m-0 text-sm leading-[1.8]">
        <code className="font-mono" dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}

function Pre({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

const components = {
  code: CodeBlock as React.ComponentType<Record<string, unknown>>,
  pre: Pre as React.ComponentType<Record<string, unknown>>,
};

export function MdxRenderer({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
