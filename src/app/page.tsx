import Link from "next/link";
import { VowenaSymbol } from "@/components/vowena-logo";
import { CopyButton } from "@/components/copy-button";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background art */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-500/[0.06] rounded-full blur-[140px]" />
          <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-[-10%] w-[400px] h-[300px] bg-mint-500/[0.03] rounded-full blur-[100px]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-elevated text-xs font-medium text-muted mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                Live on Stellar Testnet
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-[1.08] tracking-tight" style={{ letterSpacing: "-0.03em" }}>
                Subscription billing,
                <br />
                <span className="text-accent">on-chain.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
                Vowena is the first protocol for trustless recurring payments on Stellar.
                Merchants create plans. Subscribers sign once. The contract handles the rest.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-8">
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

            {/* Right: visual code card */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-accent/[0.06] rounded-3xl blur-[60px] scale-90" />
              <div className="rounded-2xl border border-border bg-[#1a1625] overflow-hidden shadow-xl shadow-accent/[0.05]">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
                  <span className="ml-3 text-xs text-white/30 font-mono">subscribe.ts</span>
                </div>
                <pre className="p-5 text-sm leading-[1.8] font-mono overflow-x-auto">
                  <code>
                    <span className="text-[#c792ea]">import</span>
                    <span className="text-[#e2dff0]">{" { "}</span>
                    <span className="text-[#82aaff]">VowenaClient</span>
                    <span className="text-[#e2dff0]">{", "}</span>
                    <span className="text-[#82aaff]">toStroops</span>
                    <span className="text-[#e2dff0]">{" } "}</span>
                    <span className="text-[#c792ea]">from</span>
                    <span className="text-[#c3e88d]"> &quot;vowena&quot;</span>
                    {"\n\n"}
                    <span className="text-white/25">{"// One signature. Recurring forever."}</span>
                    {"\n"}
                    <span className="text-[#c792ea]">const</span>
                    <span className="text-[#e2dff0]"> xdr </span>
                    <span className="text-[#89ddff]">=</span>
                    <span className="text-[#c792ea]"> await</span>
                    <span className="text-[#e2dff0]"> client.</span>
                    <span className="text-[#82aaff]">buildSubscribe</span>
                    <span className="text-[#e2dff0]">(</span>
                    {"\n"}
                    <span className="text-[#e2dff0]">{"  "}wallet.</span>
                    <span className="text-[#f78c6c]">address</span>
                    <span className="text-[#e2dff0]">,</span>
                    {"\n"}
                    <span className="text-[#e2dff0]">{"  "}</span>
                    <span className="text-[#f78c6c]">1</span>
                    <span className="text-white/25">{" // plan ID"}</span>
                    {"\n"}
                    <span className="text-[#e2dff0]">)</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
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
              {
                step: "01",
                title: "Merchant creates a plan",
                desc: "Define your token, amount, billing period, trial length, and price ceiling. One transaction. The plan lives on-chain forever.",
                code: `client.buildCreatePlan({\n  amount: toStroops("9.99"),\n  period: SECONDS_PER_MONTH,\n})`,
              },
              {
                step: "02",
                title: "Subscriber approves once",
                desc: "The subscriber signs a single transaction that authorizes the contract to pull USDC each period. Their wallet shows exactly what they are approving.",
                code: `client.buildSubscribe(\n  wallet.address,\n  planId\n)`,
              },
              {
                step: "03",
                title: "Billing runs itself",
                desc: "Anyone can call charge() when billing is due. The contract transfers USDC from subscriber to merchant. No signatures needed. Just math.",
                code: `// Permissionless\nclient.buildCharge(\n  keeper.address,\n  subId\n)`,
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col">
                <span className="font-mono text-xs text-accent mb-4">{item.step}</span>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{item.desc}</p>
                <div className="rounded-xl border border-border bg-[#1a1625] p-4 font-mono text-xs text-[#e2dff0] leading-relaxed whitespace-pre overflow-x-auto">
                  {item.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Built for real billing</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-12 sm:mb-16" style={{ letterSpacing: "-0.02em" }}>
            Everything a subscription system needs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "shield", title: "Price protection", desc: "Merchants set a price ceiling at plan creation. Subscribers know the maximum they can ever be charged. No surprises." },
              { icon: "clock", title: "Grace periods", desc: "Failed charges enter a configurable grace window. Billing retries automatically. Subscribers are not punished for temporary balance issues." },
              { icon: "gift", title: "Free trials", desc: "Plans support trial periods where the billing counter advances without transferring tokens. Cancel during trial and you are never charged." },
              { icon: "arrow", title: "Plan migrations", desc: "Merchants create a new plan and request migration. Every subscriber must explicitly accept the new price. No silent increases." },
              { icon: "back", title: "Instant refunds", desc: "Merchants call refund() to send tokens back to the subscriber. Recorded on-chain as a verifiable receipt. Partial refunds supported." },
              { icon: "bolt", title: "Permissionless billing", desc: "Anyone can call charge(). Only the merchant receives funds. Run your own keeper, use the dashboard, or let a third party trigger billing." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-elevated p-6 hover:border-accent/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center mb-4">
                  <FeatureIcon type={f.icon} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For who - redesigned without icon-then-text layout */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">For every role</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Use it your way
          </h2>
          <p className="text-secondary mb-12 sm:mb-16 max-w-lg">
            Vowena is a protocol, not a product. The smart contract is the billing engine. Everything else is optional tooling around it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { role: "Merchants", desc: "Create plans via the dashboard or SDK. Monitor subscribers, track revenue, issue refunds, and automate billing with the managed keeper.", color: "bg-violet-500" },
              { role: "Subscribers", desc: "Manage all your subscriptions across every merchant in one place. Cancel anytime. Review migration requests. Full billing history on-chain.", color: "bg-mint-500" },
              { role: "Developers", desc: "npm install vowena. Build custom subscribe flows, run your own keeper bot, index events, and integrate billing into any Stellar app.", color: "bg-info" },
              { role: "Keepers", desc: "Call charge() on due subscriptions and provide billing infrastructure. The function is permissionless by design. You pay $0.00001 in fees.", color: "bg-warning" },
            ].map((item) => (
              <div key={item.role} className="rounded-xl border border-border bg-elevated p-6 hover:border-accent/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <h3 className="text-sm font-semibold text-foreground">{item.role}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
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

          <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-[#1a1625] overflow-hidden text-left shadow-xl shadow-accent/[0.04]">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
              <span className="ml-3 text-xs text-white/30 font-mono">billing.ts</span>
            </div>
            <pre className="p-5 sm:p-6 text-sm leading-[1.9] font-mono overflow-x-auto text-[#e2dff0]">
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

          <div className="mt-6">
            <CopyButton text="npm install vowena" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28 text-center">
          <VowenaSymbol className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Ready to build?
          </h2>
          <p className="text-secondary max-w-md mx-auto mb-8">
            The protocol is live on testnet. The SDK is on npm. The docs are complete. Start building today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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

function FeatureIcon({ type }: { type: string }) {
  const cls = "w-4 h-4 text-accent";
  switch (type) {
    case "shield": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case "clock": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case "gift": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>;
    case "arrow": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>;
    case "back": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>;
    case "bolt": return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    default: return null;
  }
}
