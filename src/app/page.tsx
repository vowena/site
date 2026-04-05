import Link from "next/link";
import { VowenaSymbol } from "@/components/vowena-logo";
import { CopyButton } from "@/components/copy-button";
import { CodeBlock } from "@/components/code-block";
import { Marquee } from "@/components/marquee";
import { StellarLogo, USDCLogo, CircleLogo, MoneyGramLogo, FreighterLogo, SorobanLogo, LobstrLogo, BeansLogo } from "@/components/partner-logos";

const heroCode = `import { VowenaClient, toStroops, NETWORKS } from "vowena"

const client = new VowenaClient(NETWORKS.testnet)

// Create a $9.99/month plan
const plan = await client.buildCreatePlan({
  merchant: wallet.address,
  token: NETWORKS.testnet.usdcAddress,
  amount: toStroops("9.99"),
  period: 2_592_000,
  trialPeriods: 1,
  priceCeiling: toStroops("14.99"),
})

// Sign once, subscribe forever
const sub = await client.buildSubscribe(
  subscriber.address,
  planId
)`;

const step1Code = `const plan = await client.buildCreatePlan({
  amount: toStroops("9.99"),
  period: SECONDS_PER_MONTH,
  priceCeiling: toStroops("14.99"),
})`;

const step2Code = `const sub = await client.buildSubscribe(
  wallet.address,
  planId // returns assembled XDR
)`;

const step3Code = `const tx = await client.buildCharge(
  keeper.address, // permissionless
  subId // anyone can call
)`;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background: subtle grid + top highlight line */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]" style={{ backgroundImage: "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-20 sm:pt-28 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start">
            <div className="lg:pt-4">
              <p className="text-xs font-medium text-accent mb-6 tracking-wide uppercase">Stellar Protocol</p>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-foreground leading-[1.08] tracking-tight whitespace-nowrap" style={{ letterSpacing: "-0.03em" }}>
                Subscription billing,<br />
                <span className="text-accent">on-chain.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
                Vowena is the first protocol for trustless recurring payments on Stellar.
                Merchants create plans. Subscribers sign once. The contract handles the rest.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-8">
                <div className="flex items-center gap-3">
                  <Link href="https://app.vowena.xyz" className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
                    Launch app
                  </Link>
                  <Link href="/docs" className="inline-flex items-center h-11 px-6 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors">
                    Read docs
                  </Link>
                </div>
                <CopyButton text="npm install vowena" />
              </div>

              <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-10 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-foreground text-base font-semibold">$0.00001</span>
                  <span>per tx</span>
                </div>
                <div className="w-px h-4 bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-foreground text-base font-semibold">5s</span>
                  <span>finality</span>
                </div>
                <div className="w-px h-4 bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-foreground text-base font-semibold">USDC</span>
                  <span>native</span>
                </div>
              </div>
            </div>

            {/* Hero code */}
            <div>
              <CodeBlock code={heroCode} filename="billing.ts" />
            </div>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="border-t border-border py-8">
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

      {/* How it works */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">How it works</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Three steps to recurring revenue
          </h2>
          <p className="text-secondary max-w-lg mb-12 sm:mb-16">
            No intermediaries, no payment processors, no chargebacks. Just a smart contract that enforces billing rules on Stellar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Merchant creates a plan", desc: "Define your token, amount, billing period, trial length, and price ceiling. One transaction.", code: step1Code },
              { step: "02", title: "Subscriber approves once", desc: "A single signature authorizes the contract to pull USDC each period. The wallet shows exactly what is approved.", code: step2Code },
              { step: "03", title: "Billing runs itself", desc: "Anyone can call charge() when due. USDC moves from subscriber to merchant. No signatures needed.", code: step3Code },
            ].map((item) => (
              <div key={item.step} className="flex flex-col">
                <span className="font-mono text-xs text-accent mb-4">{item.step}</span>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{item.desc}</p>
                <CodeBlock code={item.code} showHeader={false} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - bento */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Built for real billing</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-12 sm:mb-16" style={{ letterSpacing: "-0.02em" }}>
            Everything a subscription system needs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 rounded-xl border border-border bg-elevated p-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Price protection</h3>
              <p className="text-sm text-muted leading-relaxed max-w-md mb-6">
                Merchants set a price ceiling at plan creation. Subscribers know the maximum they can ever be charged.
                Changes beyond the ceiling require explicit migration consent.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted font-mono">
                <span className="px-2 py-1 rounded bg-surface border border-border">ceiling: $14.99</span>
                <span className="text-accent">&#8594;</span>
                <span className="px-2 py-1 rounded bg-success-subtle border border-success/20 text-success">$9.99 ok</span>
                <span className="px-2 py-1 rounded bg-error/10 border border-error/20 text-error">$19.99 blocked</span>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Grace periods</h3>
              <p className="text-sm text-muted leading-relaxed">Failed charges enter a configurable grace window. Billing retries automatically. No immediate cancellation.</p>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Free trials</h3>
              <p className="text-sm text-muted leading-relaxed">Trial periods advance the counter without transferring tokens. Cancel during trial, pay nothing.</p>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Plan migrations</h3>
              <p className="text-sm text-muted leading-relaxed">Price changes require a new plan. Every subscriber must explicitly accept in their wallet.</p>
            </div>
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Permissionless billing</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">Anyone can call charge(). Only the merchant receives funds.</p>
              <div className="font-mono text-xs text-muted">
                <span className="text-success">$9.99</span> &#8594; merchant &middot; <span className="text-muted/60">$0.00001</span> &#8594; keeper
              </div>
            </div>
            <div className="lg:col-span-3 rounded-xl border border-border bg-elevated p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-2">Instant refunds</h3>
                <p className="text-sm text-muted leading-relaxed">Merchants call refund() to send tokens back. On-chain verifiable receipt. Partial refunds supported.</p>
              </div>
              <div className="font-mono text-xs text-muted whitespace-nowrap shrink-0 px-3 py-2 rounded-lg bg-surface border border-border">refund(subId, amount)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use it your way */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">For every role</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                Use it your way
              </h2>
              <p className="text-secondary leading-relaxed mb-8">
                Vowena is a protocol, not a product. The smart contract is the billing engine. Everything else is optional tooling.
              </p>

              {/* Flow diagram */}
              <div className="rounded-2xl border border-border bg-elevated p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="relative space-y-3">
                  {[
                    { label: "Merchant", fn: "create_plan()", color: "bg-accent text-white" },
                    { label: "Subscriber", fn: "subscribe()", color: "bg-success text-white" },
                    { label: "Keeper", fn: "charge()", color: "bg-warning text-neutral-900" },
                    { label: "Developer", fn: "npm install vowena", color: "bg-info text-white" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <div className={`${row.color} text-xs font-semibold px-3 py-1.5 rounded-lg w-24 text-center shrink-0`}>{row.label}</div>
                      <svg className="w-6 h-4 text-border shrink-0" viewBox="0 0 24 16" fill="none"><path d="M0 8h20M16 3l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <div className="font-mono text-xs text-secondary bg-surface border border-border rounded-lg px-3 py-1.5 flex-1 text-center">{row.fn}</div>
                    </div>
                  ))}
                  <div className="mt-4 pt-3 border-t border-border">
                    <p className="text-xs text-muted text-center">All functions are on-chain. The contract is the source of truth.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:pt-16">
              {[
                { role: "Merchants", desc: "Create plans via the dashboard or SDK. Monitor subscribers, track revenue, issue refunds, and automate billing with the managed keeper.", accent: "text-accent", dot: "bg-accent" },
                { role: "Subscribers", desc: "Manage all your subscriptions across every merchant in one place. Cancel anytime. Review migration requests. Full billing history on-chain.", accent: "text-success", dot: "bg-success" },
                { role: "Developers", desc: "npm install vowena. Build custom subscribe flows, run your own keeper bot, index events, and integrate billing into any Stellar app.", accent: "text-info", dot: "bg-info" },
                { role: "Keepers", desc: "Call charge() on due subscriptions and provide billing infrastructure. Permissionless by design. You pay $0.00001 in fees.", accent: "text-warning", dot: "bg-warning" },
              ].map((item) => (
                <div key={item.role} className="pb-6 border-b border-border last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className={`w-2 h-2 rounded-full ${item.dot}`} />
                    <h3 className={`text-sm font-semibold ${item.accent}`}>{item.role}</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
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
            Ready to build?
          </h2>
          <p className="text-secondary max-w-md mx-auto mb-8">
            The protocol is live on testnet. The SDK is on npm. The docs are complete. Start building today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="https://app.vowena.xyz" className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
              Launch app
            </Link>
            <Link href="/docs" className="inline-flex items-center h-11 px-6 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors">
              Read documentation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
