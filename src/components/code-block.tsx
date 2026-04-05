const TOKENS: Record<string, string> = {
  "import": "text-violet-500",
  "from": "text-violet-500",
  "const": "text-violet-500",
  "await": "text-violet-500",
  "export": "text-violet-500",
  "async": "text-violet-500",
  "function": "text-violet-500",
  "return": "text-violet-500",
  "new": "text-violet-500",
};

function highlightLine(line: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = line;
  let key = 0;

  // Comments
  const commentIdx = remaining.indexOf("//");
  let comment = "";
  if (commentIdx >= 0) {
    comment = remaining.slice(commentIdx);
    remaining = remaining.slice(0, commentIdx);
  }

  // Process tokens
  const regex = /("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(`(?:[^`\\]|\\.)*`)|([\w.]+)|([^"'`\w.]+)/g;
  let match;
  while ((match = regex.exec(remaining)) !== null) {
    const token = match[0];
    if (token.startsWith('"') || token.startsWith("'") || token.startsWith("`")) {
      parts.push(<span key={key++} className="text-success">{token}</span>);
    } else if (TOKENS[token]) {
      parts.push(<span key={key++} className={TOKENS[token]}>{token}</span>);
    } else if (/^\d[\d_]*$/.test(token)) {
      parts.push(<span key={key++} className="text-warning">{token}</span>);
    } else if (token.includes(".")) {
      const dot = token.indexOf(".");
      parts.push(<span key={key++} className="text-foreground">{token.slice(0, dot)}</span>);
      parts.push(<span key={key++} className="text-muted">.</span>);
      parts.push(<span key={key++} className="text-info">{token.slice(dot + 1)}</span>);
    } else {
      parts.push(<span key={key++} className="text-foreground">{token}</span>);
    }
  }

  if (comment) {
    parts.push(<span key={key++} className="text-muted/60 italic">{comment}</span>);
  }

  return parts;
}

export function CodeBlock({ code, filename }: { code: string; filename?: string }) {
  const lines = code.split("\n");

  return (
    <div className="rounded-xl border border-border bg-elevated overflow-hidden">
      {filename && (
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border-subtle bg-surface/50">
          <div className="w-2 h-2 rounded-full bg-error/30" />
          <div className="w-2 h-2 rounded-full bg-warning/30" />
          <div className="w-2 h-2 rounded-full bg-success/30" />
          <span className="ml-3 text-[11px] text-muted font-mono">{filename}</span>
        </div>
      )}
      <pre className="p-5 text-[13px] leading-relaxed font-mono overflow-x-auto">
        <code>
          {lines.map((line, i) => (
            <span key={i}>
              {line === "" ? "\n" : <>{highlightLine(line)}{"\n"}</>}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
