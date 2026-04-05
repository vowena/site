"use client";

import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import rust from "highlight.js/lib/languages/rust";
import { useState } from "react";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("ts", typescript);
hljs.registerLanguage("javascript", typescript);
hljs.registerLanguage("js", typescript);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("sh", bash);
hljs.registerLanguage("json", json);
hljs.registerLanguage("rust", rust);

export function highlightCode(code: string, lang?: string): string {
  const trimmed = code.trim();
  if (lang && hljs.getLanguage(lang)) {
    return hljs.highlight(trimmed, { language: lang }).value;
  }
  return hljs.highlightAuto(trimmed).value;
}

export function CodeBlock({
  code,
  lang = "typescript",
  filename,
  showHeader = true,
}: {
  code: string;
  lang?: string;
  filename?: string;
  showHeader?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const html = highlightCode(code, lang);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden group relative">
      {showHeader && (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border text-xs text-muted">
          <span className="font-mono">{filename || lang}</span>
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
      <pre className="p-4 sm:p-5 overflow-x-auto m-0 text-sm leading-[1.8]">
        <code
          className={`hljs font-mono language-${lang}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  );
}
