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
      <code className="text-accent bg-accent-subtle px-1.5 py-0.5 rounded text-sm font-mono">
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

const components = {
  code: MdxCode as React.ComponentType<Record<string, unknown>>,
  pre: MdxPre as React.ComponentType<Record<string, unknown>>,
  InstallTabs: InstallTabs as React.ComponentType<Record<string, unknown>>,
};

export function MdxRenderer({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
