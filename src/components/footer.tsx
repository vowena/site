import Link from "next/link";
import { VowenaSymbol } from "./vowena-logo";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-foreground mb-4">
              <VowenaSymbol className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold" style={{ letterSpacing: "-0.03em" }}>vowena</span>
            </Link>
            <p className="text-xs text-muted leading-relaxed max-w-[200px]">
              The first trustless recurring payment protocol on Stellar.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">Product</p>
            <ul className="space-y-2.5">
              <li><Link href="/pricing" className="text-sm text-secondary hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/docs" className="text-sm text-secondary hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href="https://app.vowena.xyz" className="text-sm text-secondary hover:text-foreground transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">Developers</p>
            <ul className="space-y-2.5">
              <li><Link href="https://github.com/vowena" className="text-sm text-secondary hover:text-foreground transition-colors">GitHub</Link></li>
              <li><Link href="https://www.npmjs.com/package/vowena" className="text-sm text-secondary hover:text-foreground transition-colors">npm</Link></li>
              <li><Link href="/docs" className="text-sm text-secondary hover:text-foreground transition-colors">API Reference</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><Link href="/blog" className="text-sm text-secondary hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="https://x.com/vowena" className="text-sm text-secondary hover:text-foreground transition-colors">X (Twitter)</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Vowena. Open source protocol.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/vowena" className="text-muted hover:text-foreground transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </Link>
            <Link href="https://x.com/vowena" className="text-muted hover:text-foreground transition-colors" aria-label="X">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
