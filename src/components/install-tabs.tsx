"use client";

import { useState } from "react";

const managers = [
  { name: "npm", command: "npm install vowena", bin: "npm", args: "install vowena" },
  { name: "yarn", command: "yarn add vowena", bin: "yarn", args: "add vowena" },
  { name: "pnpm", command: "pnpm add vowena", bin: "pnpm", args: "add vowena" },
  { name: "bun", command: "bun add vowena", bin: "bun", args: "add vowena" },
];

export function InstallTabs() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(managers[active].command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      {/* Tabs */}
      <div className="flex items-center border-b border-border">
        {managers.map((m, i) => (
          <button
            key={m.name}
            onClick={() => setActive(i)}
            className={`px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap ${
              active === i
                ? "text-accent border-b-2 border-accent"
                : "text-muted hover:text-secondary"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* Command with syntax highlighting */}
      <div className="flex items-center justify-between px-4 py-3 group">
        <code className="text-[13px] font-mono">
          <span className="hljs-built_in">{managers[active].bin}</span>
          <span className="text-foreground"> {managers[active].args.split(" ")[0]} </span>
          <span className="hljs-string">{managers[active].args.split(" ")[1]}</span>
        </code>
        <button
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 text-muted hover:text-foreground transition-all ml-3 shrink-0"
          aria-label="Copy command"
        >
          {copied ? (
            <svg className="w-4 h-4 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          )}
        </button>
      </div>
    </div>
  );
}
