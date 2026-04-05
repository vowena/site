"use client";

import { highlight } from "sugar-high";
import { useState } from "react";

export function CodeBlock({
  code,
  filename,
  showHeader = true,
}: {
  code: string;
  filename?: string;
  showHeader?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const html = highlight(code.trim());

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden group relative">
      {showHeader && (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border text-xs text-muted">
          <span className="font-mono">{filename || "code"}</span>
          <button
            onClick={handleCopy}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-muted hover:text-foreground cursor-pointer"
            aria-label="Copy code"
          >
            {copied ? (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
            ) : (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            )}
          </button>
        </div>
      )}
      <div
        className="p-4 sm:p-5 text-sm leading-[1.8] font-mono overflow-x-auto [&_.sh__line]:block [&_.sh__token--keyword]:text-accent [&_.sh__token--string]:text-success [&_.sh__token--comment]:text-muted [&_.sh__token--identifier]:text-foreground [&_.sh__token--sign]:text-secondary [&_.sh__token--class]:text-violet-400 [&_.sh__token--number]:text-warning [&_.sh__token--property]:text-info"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
