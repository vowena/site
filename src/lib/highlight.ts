import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import rust from "highlight.js/lib/languages/rust";

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
