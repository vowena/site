import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { InstallTabs } from "@/components/install-tabs";
import { siteConfig } from '@/lib/config';
import { HeroVisual, DashboardFeatureCards } from "@/components/dashboard-preview";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { SectionOrnament } from "@/components/section-ornament";
import { VowenaSymbol } from "@/components/vowena-logo";

const devCode = `import { VowenaClient, toStroops, NETWORKS } from "vowena"

const client = new VowenaClient(NETWORKS.mainnet)

const plan = await client.buildCreatePlan({
  amount: toStroops("29.99"),
  period: 2_592_000, // monthly
  priceCeiling: toStroops("39.99"),
})

const sub = await client.buildSubscribe(
  subscriber.address, planId
)`;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]" style={{ backgroundImage: "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-36 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionEyebrow className="mb-7">Recurring payments on Stellar</SectionEyebrow>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold text-foreground leading-[1.04] tracking-tight" style={{ letterSpacing: "-0.035em" }}>
                Recurring revenue,<br />
                <span className="serif-italic text-accent text-[1.08em]">fully</span> automated.
              </h1>

              <p className="mt-7 text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
                Add recurring USDC payments to your product. Customers subscribe once, billing runs on autopilot. No chargebacks, no payment processors, no hidden fees.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-9">
                <Link href={siteConfig.dashboardUrl} className="inline-flex items-center gap-2 h-12 px-7 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
                  Launch dashboard
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link href="/docs" className="inline-flex items-center h-12 px-7 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors">
                  Read the docs
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-10 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>No chargebacks</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>$0.00001 per charge</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Settle in 5 seconds</span>
                </div>
              </div>
            </div>

            {/* Hero visual: dashboard blending into page */}
            <div className="relative hidden lg:block -mt-28 sm:-mt-36 -mb-32 sm:-mb-40">
              <div
                style={{
                  maskImage: "linear-gradient(to right, black 0%, black 80%, transparent 98%), linear-gradient(to bottom, black 0%, black 80%, transparent 98%)",
                  maskComposite: "intersect",
                  WebkitMaskImage: "linear-gradient(to right, black 0%, black 80%, transparent 98%), linear-gradient(to bottom, black 0%, black 80%, transparent 98%)",
                  WebkitMaskComposite: "source-in",
                }}
              >
                <HeroVisual />
              </div>
            </div>
          </div>
        </div>

        {/* Powered-by callout: Vowena Tip */}
        <div className="border-t border-border bg-surface/50">
          <Link
            href={siteConfig.vowenaTipUrl}
            className="group block"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Currently powering</span>
                  <span className="h-3 w-px bg-border" />
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v6"/>
                      <path d="M5 11h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"/>
                      <path d="M12 8a3 3 0 0 0-3 3"/>
                    </svg>
                    <span className="text-sm font-semibold text-foreground tracking-tight">Vowena Tip</span>
                    <span className="text-xs text-muted">creator patronage on Stellar</span>
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent group-hover:gap-2.5 transition-all">
                  Visit tip.vowena.xyz
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* How it works - business flow */}
      <section className="relative border-t border-border">
        <SectionOrnament />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <SectionEyebrow className="mb-4">How it works</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground tracking-tight mb-5 leading-[1.1]" style={{ letterSpacing: "-0.025em" }}>
            Launch subscriptions in <span className="serif-italic text-accent text-[1.1em]">minutes</span>.
          </h2>
          <p className="text-secondary max-w-lg mb-12 sm:mb-16">
            No payment processor applications. No KYC delays. Connect your wallet, create a plan, and start billing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create your plan",
                desc: "Set your price, billing frequency, trial length, and grace period. Your plan goes live on-chain in one click.",
                visual: (
                  <div className="rounded-lg border border-border bg-surface p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-muted">Plan name</span>
                      <span className="text-[10px] font-medium text-foreground">Pro Monthly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-muted">Price</span>
                      <span className="text-[10px] font-semibold text-foreground">$29.99 USDC</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-muted">Period</span>
                      <span className="text-[10px] text-foreground">Monthly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-muted">Free trial</span>
                      <span className="text-[10px] text-foreground">7 days</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-border">
                      <div className="w-full h-7 bg-accent rounded-md flex items-center justify-center text-[10px] text-white font-medium">Create plan</div>
                    </div>
                  </div>
                ),
              },
              {
                step: "02",
                title: "Share with customers",
                desc: "Send a payment link or integrate into your app with the SDK. Customers subscribe with their Stellar wallet.",
                visual: (
                  <div className="rounded-lg border border-border bg-surface p-4 space-y-3">
                    <p className="text-[10px] font-medium text-foreground">Share your plan</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-background rounded-md border border-border px-2 py-1.5 text-[9px] font-mono text-muted truncate">
                        vowena.xyz/pay/plan_1a2b3c
                      </div>
                      <div className="shrink-0 w-6 h-6 rounded-md bg-accent-subtle flex items-center justify-center">
                        <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 text-center py-1.5 rounded-md border border-border text-[9px] text-secondary">Embed button</div>
                      <div className="flex-1 text-center py-1.5 rounded-md bg-accent text-[9px] text-white">Copy link</div>
                    </div>
                  </div>
                ),
              },
              {
                step: "03",
                title: "Revenue flows in",
                desc: "Billing runs automatically. Track revenue, manage subscribers, and handle refunds from your dashboard.",
                visual: (
                  <div className="rounded-lg border border-border bg-surface p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-muted">This month</span>
                      <span className="text-[9px] text-success">+18%</span>
                    </div>
                    <p className="text-xl font-semibold text-foreground mb-3">$12,847</p>
                    <svg viewBox="0 0 200 40" className="w-full h-8" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="miniChart" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--success)" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="var(--success)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 35 L20 30 L40 28 L60 25 L80 22 L100 20 L120 18 L140 15 L160 12 L180 10 L200 5 L200 40 L0 40Z" fill="url(#miniChart)" />
                      <path d="M0 35 L20 30 L40 28 L60 25 L80 22 L100 20 L120 18 L140 15 L160 12 L180 10 L200 5" fill="none" stroke="var(--success)" strokeWidth="1.5" />
                    </svg>
                  </div>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="font-mono text-xs text-accent">{item.step}</span>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{item.desc}</p>
                {item.visual}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vowena - business benefits */}
      <section className="relative border-t border-border bg-surface">
        <SectionOrnament />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <SectionEyebrow className="mb-4">Why Vowena</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground tracking-tight mb-12 sm:mb-16 leading-[1.1]" style={{ letterSpacing: "-0.025em" }}>
            Billing infrastructure that <span className="serif-italic text-accent text-[1.1em]">works</span> for you.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Top row: 2 equal-height cards */}
            <div className="lg:col-span-2 rounded-xl border border-border bg-elevated p-8 flex flex-col">
              <h3 className="text-lg font-semibold text-foreground mb-2">Zero chargebacks. Zero disputes.</h3>
              <p className="text-sm text-muted leading-relaxed max-w-md mb-6 flex-1">
                Subscribers authorize a spending limit upfront. The contract can never charge more than they approved. No surprise fees, no card disputes, no revenue clawbacks.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted font-mono">
                <span className="px-2 py-1 rounded bg-surface border border-border">Subscriber approves: $39.99 max</span>
                <span className="text-accent">&#8594;</span>
                <span className="px-2 py-1 rounded bg-accent-subtle border border-accent/20 text-accent">You charge: $29.99</span>
                <span className="px-2 py-1 rounded bg-surface border border-border text-foreground">Disputes: 0</span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6 flex flex-col">
              <h3 className="text-sm font-semibold text-foreground mb-2">Fees that disappear</h3>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">Each charge costs $0.00001. Not 2.9% + 30 cents. On $29.99, Stripe takes $1.17. Vowena takes a fraction of a cent.</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-foreground">99.99%</span>
                <span className="text-xs text-muted">of revenue is yours</span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Transparent pricing builds trust</h3>
              <p className="text-sm text-muted leading-relaxed">Customers see exactly what they approve in their wallet. Price changes require their consent. Trust means lower churn.</p>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Billing on autopilot</h3>
              <p className="text-sm text-muted leading-relaxed">Enable auto-billing and charges run on schedule. Failed payments get automatic retries during a grace window.</p>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Accept payments globally</h3>
              <p className="text-sm text-muted leading-relaxed">USDC works in 180+ countries. No international card fees, no FX conversion. Same experience everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard + Subscriber experience */}
      <section className="relative border-t border-border">
        <SectionOrnament />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionEyebrow className="mb-4">Your dashboard</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground tracking-tight mb-5 leading-[1.1]" style={{ letterSpacing: "-0.025em" }}>
                Everything you need to <span className="serif-italic text-accent text-[1.1em]">run</span> subscriptions.
              </h2>
              <p className="text-secondary leading-relaxed mb-8">
                Create plans, track revenue, manage subscribers, issue refunds, and automate billing. All in one place.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Revenue analytics", desc: "MRR, churn rate, failed payments, subscriber growth. Real-time charts and exportable data." },
                  { title: "Subscriber management", desc: "See every subscriber, their billing history, status, and next charge date. One-click refunds." },
                  { title: "Plan management", desc: "Create unlimited plans with different pricing, trials, and grace periods. Migrate subscribers between plans." },
                  { title: "Automated keeper", desc: "Toggle auto-billing and charges run on schedule. Handles retries and grace periods automatically." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-0.5">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <DashboardFeatureCards />
          </div>
        </div>
      </section>

      {/* For developers - compact */}
      <section className="relative border-t border-border">
        <SectionOrnament />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionEyebrow className="mb-4">For developers</SectionEyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-foreground tracking-tight mb-5 leading-[1.1]" style={{ letterSpacing: "-0.025em" }}>
                Or <span className="serif-italic text-accent text-[1.1em]">build</span> it into your app.
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                The dashboard is optional. Install the SDK and integrate subscription billing directly into your product. Full TypeScript support, event polling, and a standalone keeper bot.
              </p>

              <div className="mb-6">
                <InstallTabs />
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-muted">
                <Link href="/docs" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/30 hover:text-accent transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                  Documentation
                </Link>
                <Link href={siteConfig.github} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/30 hover:text-accent transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </Link>
                <Link href={siteConfig.npm} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/30 hover:text-accent transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>
                  npm
                </Link>
              </div>
            </div>

            <CodeBlock code={devCode} filename="integrate.ts" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border relative overflow-hidden">
        <SectionOrnament />
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          {/* Giant brand watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.025] dark:opacity-[0.04]">
            <VowenaSymbol className="w-[640px] h-[640px] text-accent" />
          </div>
          {/* Soft radial glow behind headline */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-40 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionEyebrow align="center" className="mb-8">Ready when you are</SectionEyebrow>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold text-foreground tracking-tight leading-[1.05] mb-8" style={{ letterSpacing: "-0.035em" }}>
              Your first subscriber<br className="hidden sm:block" />
              is one <span className="serif-italic text-foreground/40 text-[1.08em]">plan</span> away.
            </h2>
            <p className="text-base sm:text-lg text-secondary max-w-xl mx-auto mb-12 leading-relaxed">
              Create a plan, publish the link, and start billing in USDC the same afternoon. Live on Stellar testnet today, mainnet coming soon.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href={siteConfig.dashboardUrl} className="inline-flex items-center gap-2 h-12 px-7 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
                Launch dashboard
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link href="/docs" className="inline-flex items-center h-12 px-7 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors">
                Read the docs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
