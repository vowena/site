import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { VowenaLogo } from "@/components/vowena-logo";

export const metadata: Metadata = {
  title: "About",
  description: "Vowena is built by Destiny Saturday from Lagos, Nigeria. The first trustless recurring payment protocol on Stellar, designed for merchants, developers, and subscribers who want billing that actually belongs to them.",
  alternates: { canonical: "https://vowena.xyz/about" },
  openGraph: {
    title: "About Vowena",
    description: "Built solo from Lagos. The story behind the protocol, the principles that shape it, and why on-chain billing only works on Stellar.",
    url: "https://vowena.xyz/about",
  },
};

const principles = [
  {
    title: "Subscribers stay in custody",
    desc: "Funds never leave a subscriber's wallet until the moment of charge. The contract holds permission, not money.",
  },
  {
    title: "Merchants get audit, not access",
    desc: "Every plan, every charge, every cancellation is on-chain. Auditable by anyone, modifiable by no one without consent.",
  },
  {
    title: "Open protocol over closed product",
    desc: "The contract and SDK are MIT licensed. The dashboard is one of many possible front-ends. Fork it, replace it, ignore it.",
  },
  {
    title: "Boring infrastructure, friendly surface",
    desc: "A non-Web3 developer should integrate Vowena in an afternoon. The blockchain should be an implementation detail, not a tax.",
  },
];

const milestones = [
  { date: "2026-03", label: "Protocol design committed in VOWENA.md" },
  { date: "2026-03", label: "Contract deployed to Stellar testnet" },
  { date: "2026-04", label: "TypeScript SDK published to npm" },
  { date: "2026-04", label: "Dashboard and managed keeper live" },
  { date: "Soon", label: "Mainnet launch and Vowena Tip" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]" style={{ backgroundImage: "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">About</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-foreground tracking-tight leading-[1.05]" style={{ letterSpacing: "-0.03em" }}>
            Recurring payments,<br />
            built <span className="font-serif-italic text-accent text-[1.06em]">in the open</span>.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Vowena is a protocol, not a platform. It exists so anyone, from a solo creator to a Stellar-native SaaS, can run subscription billing without surrendering custody, surrendering data, or surrendering 3% to a payment processor.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 sm:gap-10 items-start">
            <div className="relative">
              <div className="aspect-square w-full max-w-[200px] rounded-xl bg-gradient-to-br from-accent-subtle to-surface border border-border overflow-hidden flex items-center justify-center">
                <span className="font-serif-italic text-6xl text-accent/70">Ds</span>
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-elevated border border-border text-[10px] font-medium text-foreground shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Lagos, NG
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Founder</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                Destiny Saturday
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                I'm a software engineer building from Lagos, Nigeria. Before Vowena I built Fundslip on Ethereum and spent a long time wishing recurring payments were a solved primitive on the chains I cared about. They never were. Soroban changed my mind, and Vowena is the result.
              </p>
              <p className="text-secondary leading-relaxed mb-6">
                I write everything that ships, from the Rust contract to this paragraph. If something on Vowena is wrong, broken, or unclear, it's on me. Reach me directly.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href={siteConfig.twitter} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-secondary hover:text-accent hover:border-accent/30 transition-colors">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  @sshdopey
                </Link>
                <Link href="mailto:hello@sshdopey.com" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-secondary hover:text-accent hover:border-accent/30 transition-colors">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
                  hello@sshdopey.com
                </Link>
                <Link href={siteConfig.github} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-secondary hover:text-accent hover:border-accent/30 transition-colors">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  github.com/vowena
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Principles</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-10" style={{ letterSpacing: "-0.02em" }}>
            What this protocol stands for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {principles.map((p, i) => (
              <div key={p.title} className="rounded-xl border border-border bg-elevated p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] text-accent">0{i + 1}</span>
                  <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Milestones</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-10" style={{ letterSpacing: "-0.02em" }}>
            How we got here
          </h2>
          <ol className="relative border-l border-border ml-2">
            {milestones.map((m) => (
              <li key={m.label} className="pl-6 pb-6 last:pb-0 relative">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
                <p className="font-mono text-[11px] text-muted mb-1">{m.date}</p>
                <p className="text-sm text-foreground">{m.label}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Building in public CTA */}
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <div className="flex justify-center mb-6"><VowenaLogo size="lg" /></div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
            Building <span className="font-serif-italic text-accent">in public</span>.
          </h2>
          <p className="text-secondary max-w-lg mx-auto mb-8">
            Every line of code, every design decision, every contract deployment is open. If you want to follow along, ship a pilot, or just talk shop, the door is open.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href={siteConfig.github} className="inline-flex items-center gap-2 h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              Star on GitHub
            </Link>
            <Link href="mailto:hello@sshdopey.com" className="inline-flex items-center h-11 px-6 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
