import Link from "next/link";
import { VowenaSymbol } from "@/components/vowena-logo";
import { CopyButton } from "@/components/copy-button";
import { CodeBlock } from "@/components/code-block";

const heroCode = `import { VowenaClient, toStroops, NETWORKS } from "vowena"

const client = new VowenaClient(NETWORKS.testnet)

// Subscribe to a $9.99/month plan - one signature
const xdr = await client.buildSubscribe(
  wallet.address,
  planId
)

// The contract handles billing from here
// No new signatures. No wallet popups. Ever.`;

const step1Code = `client.buildCreatePlan({
  amount: toStroops("9.99"),
  period: SECONDS_PER_MONTH,
  priceCeiling: toStroops("14.99"),
})`;

const step2Code = `client.buildSubscribe(
  wallet.address,
  planId
)`;

const step3Code = `client.buildCharge( // permissionless
  keeper.address,
  subId
)`;

const showcaseCode = `import { VowenaClient, toStroops, NETWORKS } from "vowena"

const client = new VowenaClient(NETWORKS.testnet)

// Create a $9.99/month plan with 1 free trial
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background: visible gradient orbs + grid */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-violet-300/20 dark:bg-violet-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-violet-400/10 dark:bg-accent/[0.06] rounded-full blur-[80px]" />
          <div className="absolute bottom-[-20%] left-[-5%] w-[400px] h-[400px] bg-mint-500/10 dark:bg-mint-500/[0.04] rounded-full blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, var(--neutral-300) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-elevated text-xs font-medium text-muted mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                Live on Stellar Testnet
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.08] tracking-tight" style={{ letterSpacing: "-0.03em" }}>
                Subscription billing,<br />
                <span className="text-accent">on-chain.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
                Vowena is the first protocol for trustless recurring payments on Stellar.
                Merchants create plans. Subscribers sign once. The contract handles the rest.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-8">
                <Link href="https://app.vowena.xyz" className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
                  Launch app
                </Link>
                <Link href="/docs" className="inline-flex items-center h-11 px-6 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors">
                  Read docs
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-10 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-foreground text-base sm:text-lg font-semibold">$0.00001</span>
                  <span>per tx</span>
                </div>
                <div className="w-px h-4 bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-foreground text-base sm:text-lg font-semibold">5s</span>
                  <span>finality</span>
                </div>
                <div className="w-px h-4 bg-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-foreground text-base sm:text-lg font-semibold">USDC</span>
                  <span>native</span>
                </div>
              </div>
            </div>

            {/* Hero code - theme-aware, taller */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-violet-400/10 dark:bg-accent/[0.06] rounded-3xl blur-[50px] scale-95" />
              <CodeBlock code={heroCode} showHeader={false} />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative border-t border-border overflow-hidden">
        {/* Visible decorative: large faded concentric rings */}
        <svg className="absolute top-8 right-[-80px] w-[350px] h-[350px] opacity-[0.08] dark:opacity-[0.05] text-accent" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="0.5"/>
        </svg>

        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">How it works</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Three steps to recurring revenue
          </h2>
          <p className="text-secondary max-w-lg mb-12 sm:mb-16">
            No intermediaries, no payment processors, no chargebacks. Just a smart contract that enforces billing rules on Stellar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Merchant creates a plan", desc: "Define your token, amount, billing period, trial length, and price ceiling. One transaction. The plan lives on-chain forever.", code: step1Code },
              { step: "02", title: "Subscriber approves once", desc: "The subscriber signs a single transaction that authorizes the contract to pull USDC each period. Their wallet shows exactly what they are approving.", code: step2Code },
              { step: "03", title: "Billing runs itself", desc: "Anyone can call charge() when billing is due. The contract transfers USDC from subscriber to merchant. No signatures needed.", code: step3Code },
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

      {/* Features - bento grid */}
      <section className="relative border-t border-border bg-surface overflow-hidden">
        {/* Visible decorative: diagonal lines */}
        <svg className="absolute left-0 top-0 w-full h-full opacity-[0.06] dark:opacity-[0.03]" preserveAspectRatio="none" viewBox="0 0 1200 800" fill="none">
          <line x1="0" y1="0" x2="1200" y2="800" stroke="var(--accent)" strokeWidth="1"/>
          <line x1="200" y1="0" x2="1200" y2="600" stroke="var(--accent)" strokeWidth="0.5"/>
          <line x1="400" y1="0" x2="1200" y2="400" stroke="var(--accent)" strokeWidth="0.3"/>
          <line x1="0" y1="200" x2="800" y2="800" stroke="var(--accent)" strokeWidth="0.5"/>
          <line x1="0" y1="400" x2="600" y2="800" stroke="var(--accent)" strokeWidth="0.3"/>
        </svg>

        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Built for real billing</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-12 sm:mb-16" style={{ letterSpacing: "-0.02em" }}>
            Everything a subscription system needs
          </h2>

          {/* Bento-style grid: 2 large + 4 small */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large card 1 */}
            <div className="lg:col-span-2 rounded-xl border border-border bg-elevated p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent/5 blur-[20px]" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Price protection</h3>
              <p className="text-sm text-muted leading-relaxed max-w-md">
                Merchants set a price ceiling at plan creation. Subscribers know the maximum they can ever be charged.
                Changes beyond the ceiling require explicit migration consent from every subscriber. No surprises. No silent increases.
              </p>
              <div className="mt-6 flex items-center gap-3 text-xs text-muted font-mono">
                <span className="px-2 py-1 rounded bg-surface border border-border">ceiling: $14.99</span>
                <span className="text-accent">&#8594;</span>
                <span className="px-2 py-1 rounded bg-success-subtle border border-success/20 text-success">$9.99 allowed</span>
                <span className="px-2 py-1 rounded bg-error/10 border border-error/20 text-error">$19.99 blocked</span>
              </div>
            </div>

            {/* Small card */}
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Grace periods</h3>
              <p className="text-sm text-muted leading-relaxed">
                Failed charges enter a configurable grace window. Billing retries automatically. No immediate cancellation.
              </p>
            </div>

            {/* Small card */}
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Free trials</h3>
              <p className="text-sm text-muted leading-relaxed">
                Trial periods advance the counter without transferring tokens. Cancel during trial and you pay nothing.
              </p>
            </div>

            {/* Small card */}
            <div className="rounded-xl border border-border bg-elevated p-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">Plan migrations</h3>
              <p className="text-sm text-muted leading-relaxed">
                Price changes require a new plan. Every subscriber must explicitly accept the new terms in their wallet.
              </p>
            </div>

            {/* Large card 2 */}
            <div className="lg:col-span-1 rounded-xl border border-border bg-elevated p-6 relative overflow-hidden">
              <div className="absolute bottom-2 right-2 w-16 h-16 rounded-full bg-success/5 blur-[15px]" />
              <h3 className="text-sm font-semibold text-foreground mb-2">Permissionless billing</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Anyone can call charge(). Only the merchant receives funds. No single point of failure.
              </p>
              <div className="font-mono text-xs text-muted">
                <span className="text-success">$9.99</span> &#8594; merchant
                <br />
                <span className="text-muted/60">$0.00001</span> &#8594; keeper fee
              </div>
            </div>

            {/* Small card spanning 2 on lg */}
            <div className="lg:col-span-2 rounded-xl border border-border bg-elevated p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Instant refunds</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Merchants call refund() to send tokens back. Recorded on-chain as a verifiable receipt. Partial refunds supported. No disputes, no chargebacks.
                </p>
              </div>
              <div className="font-mono text-xs text-muted whitespace-nowrap shrink-0 px-3 py-2 rounded-lg bg-surface border border-border">
                refund(subId, amount)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use it your way */}
      <section className="relative border-t border-border overflow-hidden">
        {/* Visible decorative: connected dots */}
        <svg className="absolute left-[5%] top-[10%] w-[300px] h-[400px] opacity-[0.1] dark:opacity-[0.06]" viewBox="0 0 300 400" fill="none">
          <circle cx="50" cy="60" r="4" fill="var(--accent)"/>
          <circle cx="200" cy="120" r="6" fill="var(--accent)"/>
          <circle cx="80" cy="220" r="5" fill="var(--accent)"/>
          <circle cx="250" cy="300" r="4" fill="var(--accent)"/>
          <circle cx="150" cy="370" r="3" fill="var(--accent)"/>
          <line x1="50" y1="60" x2="200" y2="120" stroke="var(--accent)" strokeWidth="1"/>
          <line x1="200" y1="120" x2="80" y2="220" stroke="var(--accent)" strokeWidth="1"/>
          <line x1="80" y1="220" x2="250" y2="300" stroke="var(--accent)" strokeWidth="1"/>
          <line x1="250" y1="300" x2="150" y2="370" stroke="var(--accent)" strokeWidth="0.8"/>
          <line x1="50" y1="60" x2="80" y2="220" stroke="var(--accent)" strokeWidth="0.4" strokeDasharray="6 4"/>
          <line x1="200" y1="120" x2="250" y2="300" stroke="var(--accent)" strokeWidth="0.4" strokeDasharray="6 4"/>
        </svg>

        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: visual diagram */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">For every role</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                Use it your way
              </h2>
              <p className="text-secondary leading-relaxed mb-8">
                Vowena is a protocol, not a product. The smart contract is the billing engine. Everything else is optional tooling around it.
              </p>

              {/* Flow diagram */}
              <div className="rounded-2xl border border-border bg-elevated p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(135deg, var(--accent) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative">
                  {/* Flow arrows connecting the roles */}
                  <div className="space-y-3">
                    {[
                      { label: "Merchant", fn: "create_plan()", color: "bg-accent text-white", arrow: true },
                      { label: "Subscriber", fn: "subscribe()", color: "bg-success text-white", arrow: true },
                      { label: "Keeper", fn: "charge()", color: "bg-warning text-neutral-900", arrow: true },
                      { label: "Developer", fn: "npm install vowena", color: "bg-info text-white", arrow: false },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3">
                        <div className={`${row.color} text-xs font-semibold px-3 py-1.5 rounded-lg w-24 text-center shrink-0`}>
                          {row.label}
                        </div>
                        {row.arrow && (
                          <svg className="w-8 h-4 text-border shrink-0" viewBox="0 0 32 16" fill="none">
                            <path d="M0 8h28M24 3l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {!row.arrow && <div className="w-8 flex justify-center text-border">&#8226;</div>}
                        <div className="font-mono text-xs text-secondary bg-surface border border-border rounded-lg px-3 py-1.5 flex-1 text-center">
                          {row.fn}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted text-center">
                      All functions are on-chain. The contract is the single source of truth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: list */}
            <div className="space-y-6 lg:pt-16">
              {[
                { role: "Merchants", desc: "Create plans via the dashboard or SDK. Monitor subscribers, track revenue, issue refunds, and automate billing with the managed keeper.", accent: "text-accent", dot: "bg-accent" },
                { role: "Subscribers", desc: "Manage all your subscriptions across every merchant in one place. Cancel anytime. Review migration requests. Full billing history on-chain.", accent: "text-success", dot: "bg-success" },
                { role: "Developers", desc: "npm install vowena. Build custom subscribe flows, run your own keeper bot, index events, and integrate billing into any Stellar app.", accent: "text-info", dot: "bg-info" },
                { role: "Keepers", desc: "Call charge() on due subscriptions and provide billing infrastructure. The function is permissionless by design. You pay $0.00001 in fees, the merchant gets the payment.", accent: "text-warning", dot: "bg-warning" },
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

      {/* Code showcase */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Developer experience</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Ship subscriptions in minutes
          </h2>
          <p className="text-secondary max-w-lg mx-auto mb-10">
            Install the SDK. Build a transaction. Sign and submit. The contract handles allowances, billing, grace periods, and state transitions.
          </p>

          <div className="max-w-2xl mx-auto text-left">
            <CodeBlock code={showcaseCode} filename="billing.ts" />
          </div>

          <div className="mt-6">
            <CopyButton text="npm install vowena" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-300/15 dark:bg-accent/[0.05] rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
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
