"use client";

import { useState } from "react";

const managers = [
  { name: "npm", command: "npm install vowena" },
  { name: "yarn", command: "yarn add vowena" },
  { name: "pnpm", command: "pnpm add vowena" },
  { name: "bun", command: "bun add vowena" },
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
      <div className="flex border-b border-border">
        {managers.map((m, i) => (
          <button
            key={m.name}
            onClick={() => setActive(i)}
            className={`flex-1 py-2 text-xs font-medium transition-colors ${
              active === i
                ? "text-accent border-b-2 border-accent bg-background"
                : "text-muted hover:text-secondary"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* Command */}
      <div className="flex items-center justify-between px-4 py-3">
        <code className="text-[13px] font-mono text-foreground">{managers[active].command}</code>
        <button
          onClick={handleCopy}
          className="text-muted hover:text-foreground transition-colors ml-3 shrink-0"
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
