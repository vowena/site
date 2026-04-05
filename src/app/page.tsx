import Link from "next/link";
import { VowenaSymbol } from "@/components/vowena-logo";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-500/[0.07] rounded-full blur-[120px]" />
          <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-elevated text-xs font-medium text-muted mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Live on Stellar Testnet
            </div>

            <h1 className="text-5xl sm:text-6xl font-semibold text-foreground leading-[1.1] tracking-tight" style={{ letterSpacing: "-0.03em" }}>
              Subscription billing,
              <br />
              <span className="text-accent">on-chain.</span>
            </h1>

            <p className="mt-6 text-lg text-secondary leading-relaxed max-w-xl">
              Vowena is the first protocol for trustless recurring payments on Stellar.
              Merchants create plans. Subscribers sign once. The contract handles the rest.
            </p>

            <div className="flex items-center gap-3 mt-8">
              <Link
                href="https://app.vowena.xyz"
                className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
              >
                Launch app
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center h-11 px-6 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors"
              >
                Read docs
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-12 text-sm text-muted">
              <div className="flex items-center gap-2">
                <span className="font-mono text-foreground text-lg font-semibold">$0.00001</span>
                <span>per transaction</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-mono text-foreground text-lg font-semibold">5s</span>
                <span>finality</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-mono text-foreground text-lg font-semibold">USDC</span>
                <span>native</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">How it works</p>
          <h2 className="text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Three steps to recurring revenue
          </h2>
          <p className="text-secondary max-w-lg mb-16">
            No intermediaries, no payment processors, no chargebacks. Just a smart contract that enforces billing rules on Stellar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Merchant creates a plan",
                desc: "Define your token, amount, billing period, trial length, and price ceiling. One transaction. The plan lives on-chain forever.",
                code: "client.buildCreatePlan({\n  amount: toStroops(\"9.99\"),\n  period: SECONDS_PER_MONTH,\n})",
              },
              {
                step: "02",
                title: "Subscriber approves once",
                desc: "The subscriber signs a single transaction that authorizes the contract to pull USDC each period. Their wallet shows exactly what they are approving.",
                code: "client.buildSubscribe(\n  wallet.address,\n  planId\n)",
              },
              {
                step: "03",
                title: "Billing runs itself",
                desc: "Anyone can call charge() when billing is due. The contract transfers USDC from subscriber to merchant. No signatures needed. Just math.",
                code: "// Permissionless - anyone can call\nclient.buildCharge(\n  keeper.address,\n  subId\n)",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col">
                <span className="font-mono text-xs text-accent mb-4">{item.step}</span>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{item.desc}</p>
                <div className="rounded-lg border border-border bg-elevated p-4 font-mono text-xs text-secondary leading-relaxed whitespace-pre">
                  {item.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Built for real billing</p>
          <h2 className="text-3xl font-semibold text-foreground tracking-tight mb-16" style={{ letterSpacing: "-0.02em" }}>
            Everything a subscription system needs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Price protection", desc: "Merchants set a price ceiling at plan creation. Subscribers know the maximum they can ever be charged. No surprises." },
              { title: "Grace periods", desc: "Failed charges enter a configurable grace window. Billing retries automatically. Subscribers are not punished for temporary balance issues." },
              { title: "Free trials", desc: "Plans support trial periods where the billing counter advances without transferring tokens. Cancel during trial and you are never charged." },
              { title: "Plan migrations", desc: "Merchants create a new plan and request migration. Every subscriber must explicitly accept the new price. No silent increases." },
              { title: "Instant refunds", desc: "Merchants call refund() to send tokens back to the subscriber. Recorded on-chain as a verifiable receipt. Partial refunds supported." },
              { title: "Permissionless billing", desc: "Anyone can call charge(). Only the merchant receives funds. Run your own keeper, use the dashboard, or let a third party trigger billing." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-elevated p-6">
                <h3 className="text-sm font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">For every role</p>
              <h2 className="text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                Use it your way
              </h2>
              <p className="text-secondary leading-relaxed">
                Vowena is a protocol, not a product. The smart contract is the billing engine. Everything else is optional tooling around it.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { role: "Merchants", desc: "Create plans via the dashboard or SDK. Monitor subscribers, track revenue, issue refunds, and automate billing with the managed keeper." },
                { role: "Subscribers", desc: "Manage all your subscriptions across every merchant in one place. Cancel anytime. Review migration requests. Full billing history on-chain." },
                { role: "Developers", desc: "npm install vowena. Build custom subscribe flows, run your own keeper bot, index events, and integrate billing into any Stellar app." },
                { role: "Keepers", desc: "Call charge() on due subscriptions and earn by providing billing infrastructure. The function is permissionless by design." },
              ].map((item) => (
                <div key={item.role} className="rounded-xl border border-border bg-elevated p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center shrink-0">
                    <VowenaSymbol className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{item.role}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code block showcase */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Developer experience</p>
          <h2 className="text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Ship subscriptions in minutes
          </h2>
          <p className="text-secondary max-w-lg mx-auto mb-12">
            Install the SDK. Build a transaction. Sign and submit. The contract handles allowances, billing, grace periods, and state transitions.
          </p>

          <div className="max-w-2xl mx-auto rounded-xl border border-border bg-elevated overflow-hidden text-left">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border-subtle bg-surface/50">
              <div className="w-2.5 h-2.5 rounded-full bg-error/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-warning/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-success/30" />
              <span className="ml-3 text-xs text-muted font-mono">billing.ts</span>
            </div>
            <pre className="p-6 text-sm leading-loose font-mono overflow-x-auto">
              <code>{`import { VowenaClient, toStroops, NETWORKS } from "vowena"

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
)`}</code>
            </pre>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
            <span className="font-mono text-xs bg-surface border border-border rounded px-2 py-0.5">npm install vowena</span>
            <span>to get started</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <VowenaSymbol className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Ready to build?
          </h2>
          <p className="text-secondary max-w-md mx-auto mb-8">
            The protocol is live on testnet. The SDK is on npm. The docs are complete. Start building today.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="https://app.vowena.xyz"
              className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
            >
              Launch app
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center h-11 px-6 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors"
            >
              Read documentation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
