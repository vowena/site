"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { VowenaLogo } from "./vowena-logo";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <nav ref={menuRef} className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/"><VowenaLogo /></Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/pricing" className="text-sm text-muted hover:text-foreground transition-colors">Pricing</Link>
          <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors">Blog</Link>
          <Link href="/docs" className="text-sm text-muted hover:text-foreground transition-colors">Docs</Link>
          <Link href="https://github.com/vowena" className="text-muted hover:text-foreground transition-colors" aria-label="GitHub">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </Link>
          <ThemeToggle />
          <Link
            href="https://dashboard.vowena.xyz"
            className="inline-flex items-center h-8 px-4 text-xs font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
          >
            Launch dashboard
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button className="p-2 text-muted" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-background border-t border-border">
          <div className="px-4 pt-6 pb-8 flex flex-col items-center gap-5">
            <div className="w-full max-w-[200px] divide-y divide-border/40">
              {[
                { href: "/pricing", label: "Pricing" },
                { href: "/blog", label: "Blog" },
                { href: "/docs", label: "Docs" },
                { href: "https://github.com/vowena", label: "GitHub" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-center text-sm font-medium text-secondary hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="https://dashboard.vowena.xyz"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center h-11 px-8 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
            >
              Get started free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
