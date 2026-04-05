import Link from "next/link";
import { VowenaSymbol } from "@/components/vowena-logo";
import { CopyButton } from "@/components/copy-button";
import { CodeBlock } from "@/components/code-block";
import { Marquee } from "@/components/marquee";

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

function StellarLogo() {
  return (
    <div className="flex items-center gap-2 opacity-40 hover:opacity-60 transition-opacity">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.003 1.716c-1.37 0-2.7.27-3.948.78A10.18 10.18 0 0 0 2.66 7.901a10.136 10.136 0 0 0-.797 3.954c0 .258.01.516.027.775a1.942 1.942 0 0 1-1.055 1.88L0 14.934v1.902l2.463-1.26.072-.032v.005l.77-.39.758-.385.066-.039 14.807-7.56 1.666-.847 3.392-1.732V2.694L17.792 5.86 3.744 13.025l-.104.055-.017-.115a8.286 8.286 0 0 1-.071-1.105c0-2.255.88-4.377 2.474-5.977a8.462 8.462 0 0 1 2.71-1.82 8.513 8.513 0 0 1 3.2-.654h.067a8.41 8.41 0 0 1 4.09 1.055l1.628-.83.126-.066a10.11 10.11 0 0 0-5.845-1.853zM24 7.143 5.047 16.808l-1.666.847L0 19.382v1.902l3.282-1.671 2.91-1.485 14.058-7.153.105-.055.016.115c.05.369.072.743.072 1.11 0 2.255-.88 4.383-2.475 5.978a8.461 8.461 0 0 1-2.71 1.82 8.305 8.305 0 0 1-3.2.654h-.06c-1.441 0-2.86-.369-4.102-1.061l-.066.033-1.683.857c.594.418 1.232.776 1.903 1.062a10.11 10.11 0 0 0 3.947.797 10.09 10.09 0 0 0 7.17-2.975 10.136 10.136 0 0 0 2.969-7.18c0-.259-.005-.523-.027-.781a1.942 1.942 0 0 1 1.055-1.88L24 9.044z"/></svg>
      <span className="text-sm font-semibold tracking-tight">Stellar</span>
    </div>
  );
}

function CircleLogo() {
  return (
    <div className="flex items-center gap-2 opacity-40 hover:opacity-60 transition-opacity">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.788 3.832c-.101-.105-.197-.213-.301-.317-.103-.103-.211-.202-.32-.302A11.903 11.903 0 0 0 12 0a11.926 11.926 0 0 0-8.486 3.514C-1.062 8.09-1.16 15.47 3.213 20.168c.099.108.197.214.3.32.104.103.21.2.317.3A11.92 11.92 0 0 0 12 24c3.206 0 6.22-1.247 8.487-3.512 4.576-4.576 4.673-11.956.301-16.656zm-16.655.301A11.057 11.057 0 0 1 12 .874c2.825 0 5.49 1.048 7.55 2.958l-1.001 1.002A9.646 9.646 0 0 0 12 2.292a9.644 9.644 0 0 0-6.865 2.844A9.644 9.644 0 0 0 2.292 12c0 2.448.9 4.753 2.542 6.549L3.831 19.55C-.201 15.191-.101 8.367 4.133 4.133zm13.798 1.318v.002l-1.015 1.014A7.346 7.346 0 0 0 12 4.589 7.357 7.357 0 0 0 6.761 6.76 7.362 7.362 0 0 0 4.589 12a7.34 7.34 0 0 0 1.877 4.913l-1.014 1.016A8.77 8.77 0 0 1 3.167 12a8.77 8.77 0 0 1 2.588-6.245A8.771 8.771 0 0 1 12 3.167c2.213 0 4.301.809 5.931 2.284zM18.537 12c0 1.745-.681 3.387-1.916 4.622S13.746 18.538 12 18.538a6.491 6.491 0 0 1-4.296-1.621l-.001-.004c-.11-.094-.22-.188-.324-.291a6.027 6.027 0 0 1-.293-.326A6.47 6.47 0 0 1 5.466 12c0-1.746.679-3.387 1.914-4.621A6.488 6.488 0 0 1 12 5.465c1.599 0 3.105.576 4.295 1.62.111.096.224.19.326.295.104.104.2.214.295.324A6.482 6.482 0 0 1 18.537 12zM7.084 17.534h.001A7.349 7.349 0 0 0 12 19.413a7.35 7.35 0 0 0 5.239-2.174A7.354 7.354 0 0 0 19.412 12a7.364 7.364 0 0 0-1.876-4.916l1.013-1.012A8.777 8.777 0 0 1 20.834 12a8.765 8.765 0 0 1-2.589 6.246A8.764 8.764 0 0 1 12 20.834a8.782 8.782 0 0 1-5.93-2.285l1.014-1.015zm12.783 2.333A11.046 11.046 0 0 1 12 23.125a11.042 11.042 0 0 1-7.551-2.957l1.004-1.001a9.64 9.64 0 0 0 6.549 2.542 9.639 9.639 0 0 0 6.865-2.846A9.642 9.642 0 0 0 21.71 12a9.64 9.64 0 0 0-2.543-6.548l1.001-1.002c4.031 4.359 3.935 11.182-.301 15.417z"/></svg>
      <span className="text-sm font-semibold tracking-tight">Circle</span>
    </div>
  );
}

function MoneyGramLogo() {
  return (
    <div className="flex items-center gap-2 opacity-40 hover:opacity-60 transition-opacity">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12c0 6.6274-5.3726 12-12 12S0 18.6274 0 12c0-1.8257.4071-3.5554 1.1374-5.1051C.6514 8.1257.433 9.3446.433 10.4863c0 5.4334 4.3868 6.2203 6.2537 6.2023 2.8371-.0257 6.1543-1.416 8.9485-3.9909l-.4714 2.6494c-.1054.606.2906 1.1392.8957 1.1426h.2503c.6274 0 1.0732-.5108 1.1863-1.1426l1.0063-5.6622c.12-.6283-.2932-1.14-.9214-1.14h-5.6726c-.6309 0-1.2077.3342-1.32.9677l-.0446.2554c-.09.6026.33 1.0569.9317 1.0569h2.9589a9.48 9.48 0 0 0-.1414.1388c-2.04 1.9312-4.5558 2.988-6.6403 2.988-2.0803 0-4.41-1.3123-4.41-4.2686C3.2426 3.5546 8.9906 0 12 0c6.6137 0 12 5.3726 12 12"/></svg>
      <span className="text-sm font-semibold tracking-tight">MoneyGram</span>
    </div>
  );
}

function BrandLogo({ name }: { name: string }) {
  return (
    <span className="text-sm font-semibold text-foreground/30 whitespace-nowrap tracking-tight opacity-60 hover:opacity-80 transition-opacity">{name}</span>
  );
}

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

              <div className="flex items-center justify-between mt-8 gap-4 flex-wrap">
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

              <div className="flex flex-wrap items-center gap-5 mt-10 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border">
                  <span className="text-success text-xs">&#9679;</span>
                  <span className="text-secondary">Transactions cost fractions of a cent</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border">
                  <span className="text-accent text-xs">&#9679;</span>
                  <span className="text-secondary">5-second finality on Stellar</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border">
                  <span className="text-info text-xs">&#9679;</span>
                  <span className="text-secondary">Native USDC support</span>
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
            <StellarLogo />
            <BrandLogo name="USDC" />
            <CircleLogo />
            <BrandLogo name="Soroban" />
            <MoneyGramLogo />
            <BrandLogo name="Freighter" />
            <BrandLogo name="LOBSTR" />
            <BrandLogo name="StellarX" />
            <BrandLogo name="Beans App" />
            <BrandLogo name="Lumenswap" />
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
