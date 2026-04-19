import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { VowenaSymbol } from "./vowena-logo";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted mb-4">Product</p>
            <ul className="space-y-2.5">
              <li><Link href="/pricing" className="text-sm text-secondary hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/docs" className="text-sm text-secondary hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href={siteConfig.dashboardUrl} className="text-sm text-secondary hover:text-foreground transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted mb-4">Developers</p>
            <ul className="space-y-2.5">
              <li><Link href={siteConfig.github} className="text-sm text-secondary hover:text-foreground transition-colors">GitHub</Link></li>
              <li><Link href="https://www.npmjs.com/package/vowena" className="text-sm text-secondary hover:text-foreground transition-colors">npm</Link></li>
              <li><Link href="/docs" className="text-sm text-secondary hover:text-foreground transition-colors">API Reference</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-secondary hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-sm text-secondary hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href={siteConfig.stellarExpert} className="text-sm text-secondary hover:text-foreground transition-colors">View on Stellar</Link></li>
              <li><Link href={siteConfig.twitter} className="text-sm text-secondary hover:text-foreground transition-colors">X (Twitter)</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-muted">
            <span>&copy; {new Date().getFullYear()} Vowena</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href={siteConfig.github} className="text-muted hover:text-foreground transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </Link>
            <Link href={siteConfig.twitter} className="text-muted hover:text-foreground transition-colors" aria-label="X">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href={siteConfig.youtube} className="text-muted hover:text-foreground transition-colors" aria-label="YouTube">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
