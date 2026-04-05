import Link from "next/link";
import { VowenaSymbol } from "@/components/vowena-logo";
import { CodeBlock } from "@/components/code-block";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-200px] left-1/3 w-[800px] h-[600px] bg-violet-500/[0.06] rounded-full blur-[120px]" />
          <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-elevated text-xs font-medium text-muted mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                Live on Stellar Testnet
              </div>

              <h1 className="text-5xl sm:text-[3.5rem] font-semibold text-foreground leading-[1.08] tracking-tight" style={{ letterSpacing: "-0.03em" }}>
                Subscription billing,
                <br />
                <span className="text-accent">on-chain.</span>
              </h1>

              <p className="mt-6 text-lg text-secondary leading-relaxed max-w-md">
                The first protocol for trustless recurring payments on Stellar.
                Merchants create plans. Subscribers sign once. The contract handles the rest.
              </p>

              <div className="flex items-center gap-3 mt-8">
                <Link href="https://app.vowena.xyz" className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
                  Launch app
                </Link>
                <Link href="/docs" className="inline-flex items-center h-11 px-6 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors">
                  Read docs
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-10 text-sm text-muted">
                <div><span className="font-mono text-foreground font-semibold">$0.00001</span> per tx</div>
                <div className="w-px h-3.5 bg-border" />
                <div><span className="font-mono text-foreground font-semibold">5s</span> finality</div>
                <div className="w-px h-3.5 bg-border" />
                <div><span className="font-mono text-foreground font-semibold">USDC</span> native</div>
              </div>
            </div>

            {/* Right - visual code card */}
            <div className="hidden lg:block">
              <CodeBlock
                filename="subscribe.ts"
                code={`import { VowenaClient, toStroops } from "vowena"

// One signature covers everything
const xdr = await client.buildSubscribe(
  wallet.address,
  1 // plan ID
)

// Wallet shows: "Allow Vowena to
// spend up to 149.88 USDC"
const signed = await freighter.signTransaction(xdr)
const result = await client.submitTransaction(signed)`}
              />
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
            No intermediaries, no payment processors, no chargebacks. A smart contract that enforces billing rules on Stellar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create a plan",
                desc: "Define your token, amount, billing period, trial length, and price ceiling. One transaction.",
                code: `client.buildCreatePlan({
  amount: toStroops("9.99"),
  period: SECONDS_PER_MONTH,
  priceCeiling: toStroops("14.99"),
})`,
              },
              {
                step: "02",
                title: "Subscribe once",
                desc: "The subscriber signs a single transaction. Their wallet shows exactly what they are authorizing.",
                code: `client.buildSubscribe(
  wallet.address,
  planId
)`,
              },
              {
                step: "03",
                title: "Billing runs itself",
                desc: "Anyone calls charge() when due. The contract transfers USDC from subscriber to merchant automatically.",
                code: `// Permissionless
client.buildCharge(
  keeper.address,
  subId
)`,
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col">
                <span className="font-mono text-xs text-accent mb-4">{item.step}</span>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{item.desc}</p>
                <CodeBlock code={item.code} />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "shield", title: "Price protection", desc: "Merchants set a ceiling. Subscribers know the max they can ever be charged. No surprises." },
              { icon: "clock", title: "Grace periods", desc: "Failed charges enter a configurable grace window. Retries happen automatically." },
              { icon: "gift", title: "Free trials", desc: "Trial periods advance the counter without transferring tokens. Cancel during trial, never charged." },
              { icon: "arrows", title: "Plan migrations", desc: "Every subscriber must explicitly accept new pricing. No silent increases ever." },
              { icon: "refund", title: "Instant refunds", desc: "Merchants call refund() to send tokens back. On-chain verifiable receipt." },
              { icon: "zap", title: "Permissionless", desc: "Anyone can call charge(). Only the merchant receives funds. Decentralized billing execution." },
            ].map((f) => (
              <div key={f.title} className="group rounded-xl border border-border bg-elevated p-6 hover:border-accent/20 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For who - redesigned */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">For every role</p>
            <h2 className="text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
              Use it your way
            </h2>
            <p className="text-secondary max-w-lg mx-auto">
              Vowena is a protocol, not a product. The smart contract is the billing engine. Everything else is optional tooling around it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { role: "Merchants", desc: "Create plans via the dashboard or SDK. Monitor subscribers, track revenue, issue refunds, and automate billing with the managed keeper.", color: "bg-violet-500/10 text-violet-600 border-violet-200" },
              { role: "Subscribers", desc: "Manage all your subscriptions across every merchant in one place. Cancel anytime. Review migration requests. Full billing history on-chain.", color: "bg-success/10 text-[#006B3F] border-success/20" },
              { role: "Developers", desc: "npm install vowena. Build custom subscribe flows, run your own keeper bot, index events, and integrate billing into any Stellar app.", color: "bg-info/10 text-[#1A4FCC] border-info/20" },
              { role: "Keepers", desc: "Call charge() on due subscriptions. The function is permissionless. Provide billing infrastructure and earn transaction fees.", color: "bg-warning/10 text-[#7A5A00] border-warning/20" },
            ].map((item) => (
              <div key={item.role} className="rounded-xl border border-border bg-elevated p-6">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border mb-4 ${item.color}`}>
                  {item.role}
                </span>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code showcase */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Developer experience</p>
              <h2 className="text-3xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                Ship subscriptions in minutes
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                Install the SDK. Build a transaction. Sign and submit. The contract handles allowances, billing, grace periods, and state transitions.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted">
                <span className="font-mono text-xs bg-elevated border border-border rounded px-2.5 py-1">npm install vowena</span>
                <span>to get started</span>
              </div>
            </div>
            <CodeBlock
              filename="billing.ts"
              code={`import { VowenaClient, toStroops, NETWORKS } from "vowena"

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
)`}
            />
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

function FeatureIcon({ name }: { name: string }) {
  const cls = "w-4 h-4 text-accent";
  switch (name) {
    case "shield":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case "clock":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case "gift":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>;
    case "arrows":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>;
    case "refund":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>;
    case "zap":
      return <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    default:
      return null;
  }
}
