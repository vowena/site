import Link from "next/link";
import { VowenaSymbol } from "@/components/vowena-logo";
import { CopyButton } from "@/components/copy-button";
import { CodeBlock } from "@/components/code-block";
import { Marquee } from "@/components/marquee";
import { DashboardPreview, SubscriberPreview } from "@/components/dashboard-preview";
import { StellarLogo, USDCLogo, CircleLogo, MoneyGramLogo, FreighterLogo, SorobanLogo, LobstrLogo, BeansLogo } from "@/components/partner-logos";

const devCode = `import { VowenaClient, toStroops, NETWORKS } from "vowena"

const client = new VowenaClient(NETWORKS.testnet)

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

        <div className="max-w-6xl mx-auto px-6 pt-20 sm:pt-28 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-medium text-accent mb-6 tracking-wide uppercase">Recurring payments on Stellar</p>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-foreground leading-[1.08] tracking-tight" style={{ letterSpacing: "-0.03em" }}>
                Subscription billing<br />
                <span className="text-accent">your customers trust.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
                Add recurring USDC payments to your product. Your customers subscribe once, and billing runs automatically on Stellar. No chargebacks, no payment processors, no hidden fees.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-8">
                <div className="flex items-center gap-3">
                  <Link href="https://app.vowena.xyz" className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
                    Start free
                  </Link>
                  <Link href="/docs" className="inline-flex items-center h-11 px-6 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors">
                    See how it works
                  </Link>
                </div>
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

            {/* Hero visual: dashboard preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/[0.03] rounded-3xl blur-[2px]" />
              <div className="relative">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="border-t border-border py-6">
          <p className="text-center text-[10px] uppercase tracking-[0.14em] text-muted mb-4">Powered by the Stellar ecosystem</p>
          <Marquee>
            <StellarLogo className="h-7 w-auto text-muted/50" />
            <USDCLogo className="h-7 w-auto" />
            <CircleLogo className="h-7 w-auto" />
            <SorobanLogo className="h-7 w-auto text-muted/50" />
            <MoneyGramLogo className="h-7 w-auto" />
            <FreighterLogo className="h-7 w-auto text-muted/50" />
            <LobstrLogo className="h-7 w-auto" />
            <BeansLogo className="h-7 w-auto" />
          </Marquee>
        </div>
      </section>

      {/* How it works - business flow */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">How it works</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Launch subscriptions in minutes
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
                desc: "Send a payment link or integrate into your app with 3 lines of code. Customers subscribe with their Stellar wallet.",
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
                <span className="font-mono text-xs text-accent mb-4">{item.step}</span>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{item.desc}</p>
                {item.visual}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vowena - business benefits */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Why Vowena</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-12 sm:mb-16" style={{ letterSpacing: "-0.02em" }}>
            Billing infrastructure that works for you
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-xl border border-border bg-elevated p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Zero chargebacks. Zero disputes.</h3>
              <p className="text-sm text-muted leading-relaxed max-w-md mb-6">
                Subscribers authorize a spending limit upfront. The contract can never charge more than they approved. No surprise fees, no card disputes, no revenue clawbacks.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted font-mono">
                <span className="px-2 py-1 rounded bg-surface border border-border">Subscriber approves: $39.99 max</span>
                <span className="text-accent">&#8594;</span>
                <span className="px-2 py-1 rounded bg-success-subtle border border-success/20 text-success">You charge: $29.99</span>
                <span className="px-2 py-1 rounded bg-error/10 border border-error/20 text-error">Disputes: 0</span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Transaction fees that disappear</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">Each charge costs $0.00001. Not 2.9% + 30 cents. On a $29.99 subscription, Stripe takes $1.17. Vowena takes $0.00001.</p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-foreground">99.99%</span>
                <span className="text-xs text-muted">of revenue is yours</span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Built-in subscriber protection</h3>
              <p className="text-sm text-muted leading-relaxed">Your customers see exactly what they are approving. Price increases require their explicit consent. Builds trust, reduces churn.</p>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Automated billing</h3>
              <p className="text-sm text-muted leading-relaxed">Enable auto-billing and never think about it again. Charges run on schedule with automatic retries during grace periods.</p>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Global from day one</h3>
              <p className="text-sm text-muted leading-relaxed">USDC is available in 180+ countries. No international card fees, no currency conversion. A subscriber in Lagos pays the same as one in London.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard + Subscriber experience */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Your dashboard</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                Everything you need to run subscriptions
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

            <div className="space-y-4">
              <SubscriberPreview />
              <p className="text-[10px] text-muted text-center">What your subscribers see - clean, transparent billing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof numbers */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "$0.00001", label: "per transaction" },
              { value: "5 sec", label: "settlement time" },
              { value: "17", label: "contract functions" },
              { value: "0%", label: "chargeback rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For developers - compact */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">For developers</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                Or build it into your app
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                The dashboard is optional. Install the SDK and integrate subscription billing directly into your product. Full TypeScript types, event polling, and a standalone keeper bot.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <CopyButton text="npm install vowena" />
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-muted">
                <Link href="/docs" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-accent/30 hover:text-accent transition-colors">
                  Documentation
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </Link>
                <Link href="https://github.com/vowena" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-accent/30 hover:text-accent transition-colors">
                  GitHub
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </Link>
                <Link href="https://www.npmjs.com/package/vowena" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border hover:border-accent/30 hover:text-accent transition-colors">
                  npm
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </Link>
              </div>
            </div>

            <CodeBlock code={devCode} filename="integrate.ts" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28 text-center relative">
          <VowenaSymbol className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Start billing today
          </h2>
          <p className="text-secondary max-w-md mx-auto mb-8">
            Free during beta. No credit card required. Connect your Stellar wallet and create your first plan in under a minute.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="https://app.vowena.xyz" className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
              Start free
            </Link>
            <Link href="/pricing" className="inline-flex items-center h-11 px-6 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
