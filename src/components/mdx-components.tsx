"use client";

import { highlight } from "sugar-high";
import { useState } from "react";

function MdxCode({ children, className }: { children?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const code = typeof children === "string" ? children.trim() : "";

  if (!className) {
    // Inline code
    return (
      <code className="text-accent bg-accent-subtle px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  }

  // Block code with syntax highlighting
  const html = highlight(code);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-muted hover:text-foreground z-10 cursor-pointer bg-surface/80 backdrop-blur-sm rounded-md p-1.5"
        aria-label="Copy code"
      >
        {copied ? (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
        ) : (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        )}
      </button>
      <div
        className="rounded-xl border border-border bg-surface p-5 overflow-x-auto font-mono text-sm leading-[1.8]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

function MdxPre({ children }: { children: React.ReactNode }) {
  // Pass through to MdxCode which handles the actual rendering
  return <>{children}</>;
}

export const mdxComponents = {
  code: MdxCode as React.ComponentType<Record<string, unknown>>,
  pre: MdxPre as React.ComponentType<Record<string, unknown>>,
};
