import Link from "next/link";
import { VowenaSymbol } from "@/components/vowena-logo";
import { CopyButton } from "@/components/copy-button";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-violet-500/[0.06] rounded-full blur-[140px]" />
          <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-[-10%] w-[400px] h-[300px] bg-mint-500/[0.03] rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
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

            {/* Hero code card - this one stays always-dark as the visual centerpiece */}
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
      <section className="relative border-t border-border">
        {/* Decorative graphic */}
        <div className="absolute top-12 right-0 w-[300px] h-[300px] -z-10 opacity-[0.04]">
          <svg viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="80" stroke="var(--accent)" strokeWidth="0.5"/><circle cx="100" cy="100" r="50" stroke="var(--accent)" strokeWidth="0.5"/><circle cx="100" cy="100" r="20" stroke="var(--accent)" strokeWidth="0.5"/><line x1="100" y1="0" x2="100" y2="200" stroke="var(--accent)" strokeWidth="0.3"/><line x1="0" y1="100" x2="200" y2="100" stroke="var(--accent)" strokeWidth="0.3"/></svg>
        </div>

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
                step: "01", title: "Merchant creates a plan",
                desc: "Define your token, amount, billing period, trial length, and price ceiling. One transaction. The plan lives on-chain forever.",
                lines: [
                  { text: 'client.buildCreatePlan({', cls: "text-foreground" },
                  { text: '  amount: toStroops("9.99"),', cls: "text-secondary" },
                  { text: '  period: SECONDS_PER_MONTH,', cls: "text-secondary" },
                  { text: '})', cls: "text-foreground" },
                ],
              },
              {
                step: "02", title: "Subscriber approves once",
                desc: "The subscriber signs a single transaction that authorizes the contract to pull USDC each period. Their wallet shows exactly what they are approving.",
                lines: [
                  { text: 'client.buildSubscribe(', cls: "text-foreground" },
                  { text: '  wallet.address,', cls: "text-secondary" },
                  { text: '  planId', cls: "text-secondary" },
                  { text: ')', cls: "text-foreground" },
                ],
              },
              {
                step: "03", title: "Billing runs itself",
                desc: "Anyone can call charge() when billing is due. The contract transfers USDC from subscriber to merchant. No signatures needed. Just math.",
                lines: [
                  { text: 'client.buildCharge( // permissionless', cls: "text-foreground" },
                  { text: '  keeper.address,', cls: "text-secondary" },
                  { text: '  subId', cls: "text-secondary" },
                  { text: ')', cls: "text-foreground" },
                ],
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col">
                <span className="font-mono text-xs text-accent mb-4">{item.step}</span>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">{item.desc}</p>
                <div className="rounded-xl border border-border bg-surface p-4 font-mono text-xs leading-relaxed overflow-x-auto">
                  {item.lines.map((line, i) => (
                    <div key={i} className={line.cls}>{line.text}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features - clean horizontal layout, no icon blocks */}
      <section className="relative border-t border-border bg-surface overflow-hidden">
        {/* Decorative mesh */}
        <div className="absolute left-0 top-0 bottom-0 w-[400px] -z-10 opacity-[0.03]">
          <svg viewBox="0 0 400 600" fill="none" className="w-full h-full"><path d="M0 0 L400 300 L0 600" stroke="var(--accent)" strokeWidth="0.5"/><path d="M0 100 L400 400" stroke="var(--accent)" strokeWidth="0.3"/><path d="M0 200 L400 500" stroke="var(--accent)" strokeWidth="0.3"/><path d="M200 0 L200 600" stroke="var(--accent)" strokeWidth="0.2"/></svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Built for real billing</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-12 sm:mb-16" style={{ letterSpacing: "-0.02em" }}>
            Everything a subscription system needs
          </h2>

          <div className="space-y-4">
            {[
              { title: "Price protection", desc: "Merchants set a price ceiling at plan creation. Subscribers know the maximum they can ever be charged. Changes beyond the ceiling require explicit migration consent." },
              { title: "Grace periods", desc: "Failed charges enter a configurable grace window. Billing retries automatically on each call. Subscribers are not punished for temporary balance issues." },
              { title: "Free trials", desc: "Plans support trial periods where the billing counter advances without transferring tokens. Cancel during trial and you are never charged a single stroop." },
              { title: "Plan migrations", desc: "Merchants create a new plan and request migration. Every subscriber must explicitly accept the new price in their wallet. No silent increases. Ever." },
              { title: "Instant refunds", desc: "Merchants call refund() to send tokens back. Recorded on-chain as a verifiable receipt. Partial refunds supported. No disputes, no chargebacks." },
              { title: "Permissionless billing", desc: "Anyone can call charge(). Only the merchant receives funds. Run your own keeper, use the dashboard, or let a third party trigger billing for you." },
            ].map((f, i) => (
              <div key={f.title} className="flex items-start gap-5 py-5 border-b border-border last:border-0">
                <span className="font-mono text-xs text-accent/60 pt-0.5 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use it your way - left visual, right list */}
      <section className="relative border-t border-border overflow-hidden">
        {/* Decorative: flowing network graphic */}
        <div className="absolute right-0 top-0 bottom-0 w-[300px] -z-10 opacity-[0.03]">
          <svg viewBox="0 0 300 500" fill="none" className="w-full h-full">
            <circle cx="150" cy="100" r="6" fill="var(--accent)"/><circle cx="250" cy="200" r="4" fill="var(--accent)"/><circle cx="100" cy="300" r="5" fill="var(--accent)"/><circle cx="220" cy="400" r="3" fill="var(--accent)"/>
            <line x1="150" y1="100" x2="250" y2="200" stroke="var(--accent)" strokeWidth="0.5"/><line x1="250" y1="200" x2="100" y2="300" stroke="var(--accent)" strokeWidth="0.5"/><line x1="100" y1="300" x2="220" y2="400" stroke="var(--accent)" strokeWidth="0.5"/><line x1="150" y1="100" x2="100" y2="300" stroke="var(--accent)" strokeWidth="0.3" strokeDasharray="4 4"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: visual */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">For every role</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                Use it your way
              </h2>
              <p className="text-secondary leading-relaxed mb-8">
                Vowena is a protocol, not a product. The smart contract is the billing engine. Everything else is optional tooling around it.
              </p>

              {/* Visual: abstract flow diagram */}
              <div className="rounded-2xl border border-border bg-surface p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(135deg, var(--accent) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-xs text-accent font-semibold">M</div>
                    <div className="h-px flex-1 bg-border" />
                    <div className="px-3 py-1 rounded-full bg-elevated border border-border text-xs text-muted">create_plan</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center font-mono text-xs text-success font-semibold">S</div>
                    <div className="h-px flex-1 bg-border" />
                    <div className="px-3 py-1 rounded-full bg-elevated border border-border text-xs text-muted">subscribe</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-warning/10 border border-warning/20 flex items-center justify-center font-mono text-xs text-warning font-semibold">K</div>
                    <div className="h-px flex-1 bg-border" />
                    <div className="px-3 py-1 rounded-full bg-elevated border border-border text-xs text-muted">charge</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-info/10 border border-info/20 flex items-center justify-center font-mono text-xs text-info font-semibold">D</div>
                    <div className="h-px flex-1 bg-border" />
                    <div className="px-3 py-1 rounded-full bg-elevated border border-border text-xs text-muted">npm install vowena</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: list */}
            <div className="space-y-6 lg:pt-12">
              {[
                { role: "Merchants", desc: "Create plans via the dashboard or SDK. Monitor subscribers, track revenue, issue refunds, and automate billing with the managed keeper.", accent: "text-accent" },
                { role: "Subscribers", desc: "Manage all your subscriptions across every merchant in one place. Cancel anytime. Review migration requests. Full billing history on-chain.", accent: "text-success" },
                { role: "Developers", desc: "npm install vowena. Build custom subscribe flows, run your own keeper bot, index events, and integrate billing into any Stellar app.", accent: "text-info" },
                { role: "Keepers", desc: "Call charge() on due subscriptions and provide billing infrastructure. The function is permissionless by design. You pay $0.00001 in fees.", accent: "text-warning" },
              ].map((item) => (
                <div key={item.role} className="pb-6 border-b border-border last:border-0 last:pb-0">
                  <h3 className={`text-sm font-semibold mb-1.5 ${item.accent}`}>{item.role}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code showcase - theme-aware */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Developer experience</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Ship subscriptions in minutes
          </h2>
          <p className="text-secondary max-w-lg mx-auto mb-10">
            Install the SDK. Build a transaction. Sign and submit. The contract handles allowances, billing, grace periods, and state transitions.
          </p>

          <div className="max-w-2xl mx-auto rounded-2xl border border-border bg-elevated overflow-hidden text-left shadow-lg shadow-black/[0.03]">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-error/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-warning/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-success/30" />
              <span className="ml-3 text-xs text-muted font-mono">billing.ts</span>
            </div>
            <pre className="p-5 sm:p-6 text-sm leading-[1.9] font-mono overflow-x-auto">
              <code className="text-secondary">
                <span className="text-accent">import</span>{" { "}
                <span className="text-foreground">VowenaClient</span>{", "}
                <span className="text-foreground">toStroops</span>{", "}
                <span className="text-foreground">NETWORKS</span>
                {" } "}
                <span className="text-accent">from</span>
                <span className="text-success"> &quot;vowena&quot;</span>
                {"\n\n"}
                <span className="text-accent">const</span>
                <span className="text-foreground"> client</span>
                {" = "}
                <span className="text-accent">new</span>
                <span className="text-foreground"> VowenaClient</span>{"(NETWORKS.testnet)"}
                {"\n\n"}
                <span className="text-muted">{"// Create a $9.99/month plan with 1 free trial"}</span>
                {"\n"}
                <span className="text-accent">const</span>
                <span className="text-foreground"> plan</span>
                {" = "}
                <span className="text-accent">await</span>
                <span className="text-foreground"> client.buildCreatePlan</span>{"({"}
                {"\n"}{"  merchant: wallet.address,"}
                {"\n"}{"  token: NETWORKS.testnet.usdcAddress,"}
                {"\n"}{"  amount: toStroops("}
                <span className="text-success">&quot;9.99&quot;</span>
                {"),"}
                {"\n"}{"  period: 2_592_000,"}
                {"\n"}{"  trialPeriods: 1,"}
                {"\n"}{"  priceCeiling: toStroops("}
                <span className="text-success">&quot;14.99&quot;</span>
                {"),"}
                {"\n"}{"})"}
                {"\n\n"}
                <span className="text-muted">{"// Sign once, subscribe forever"}</span>
                {"\n"}
                <span className="text-accent">const</span>
                <span className="text-foreground"> sub</span>
                {" = "}
                <span className="text-accent">await</span>
                <span className="text-foreground"> client.buildSubscribe</span>{"("}
                {"\n"}{"  subscriber.address,"}
                {"\n"}{"  planId"}
                {"\n"}{")"}
              </code>
            </pre>
          </div>

          <div className="mt-6">
            <CopyButton text="npm install vowena" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
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
