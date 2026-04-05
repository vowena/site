import Link from "next/link";
import { VowenaSymbol } from "@/components/vowena-logo";

const tiers = [
  {
    name: "Protocol",
    price: "Free",
    period: "forever",
    desc: "The smart contract and SDK are open source. Deploy your own, run your own keeper, build your own dashboard.",
    features: [
      "Full Soroban smart contract",
      "TypeScript SDK (npm install vowena)",
      "Unlimited plans and subscriptions",
      "Permissionless charge() calls",
      "On-chain event history",
      "Community support on GitHub",
    ],
    cta: "Start building",
    ctaHref: "/docs",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$0",
    originalPrice: "$49",
    period: "/month",
    badge: "Free during beta",
    desc: "Managed infrastructure so you never think about billing again. Dashboard, keeper, analytics, and subscriber management.",
    features: [
      "Everything in Protocol",
      "Managed keeper (24/7 auto-billing)",
      "Event indexer with fast queries",
      "Revenue and churn analytics",
      "Subscriber management dashboard",
      "Plan metadata (names, logos)",
      "Email notifications",
      "Priority support",
    ],
    cta: "Launch dashboard",
    ctaHref: "https://dashboard.vowena.xyz",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For teams processing high volume. Dedicated infrastructure, custom integrations, and SLA guarantees.",
    features: [
      "Everything in Pro",
      "Dedicated keeper infrastructure",
      "Custom webhook integrations",
      "White-label dashboard",
      "Multi-token billing",
      "SLA guarantee",
      "Dedicated support",
    ],
    cta: "Contact us",
    ctaHref: "mailto:hello@vowena.xyz",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]" style={{ backgroundImage: "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-20 sm:pt-28 pb-16 sm:pb-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Pricing</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
            The protocol is free.<br className="hidden sm:block" /> The infrastructure is not.
          </h1>
          <p className="text-secondary max-w-xl mx-auto">
            Vowena the smart contract costs nothing to use. You pay for managed billing automation, analytics, and the dashboard that saves you from building infrastructure.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-8 flex flex-col ${
                  tier.highlight
                    ? "border-accent bg-accent/[0.02] ring-1 ring-accent/20 relative"
                    : "border-border bg-elevated"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white bg-accent px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-sm font-semibold text-foreground">{tier.name}</h3>
                    {"badge" in tier && tier.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-success bg-success-subtle px-2 py-0.5 rounded-full">
                        {tier.badge as string}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    {"originalPrice" in tier && tier.originalPrice && (
                      <span className="text-lg text-muted line-through">{tier.originalPrice as string}</span>
                    )}
                    <span className="text-4xl font-semibold text-foreground tracking-tight">{tier.price}</span>
                    {tier.period && <span className="text-sm text-muted">{tier.period}</span>}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{tier.desc}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-secondary">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaHref}
                  className={`inline-flex items-center justify-center h-11 px-6 text-sm font-medium rounded-lg transition-colors ${
                    tier.highlight
                      ? "text-white bg-accent hover:bg-accent-hover"
                      : "text-secondary border border-border hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4 text-center" style={{ letterSpacing: "-0.02em" }}>
            What you are actually paying for
          </h2>
          <p className="text-secondary text-center mb-12 max-w-lg mx-auto">
            The protocol is permissionless. Anyone can use it. The paid tiers save you from building and maintaining infrastructure.
          </p>

          <div className="space-y-4">
            {[
              { thing: "Keeper bot (24/7 billing)", diy: "Build, deploy, monitor a cron job + database + error handling", pro: "Toggle on. Done." },
              { thing: "Event indexing", diy: "Poll Soroban RPC, parse events, store in your own DB", pro: "Indexed automatically. Query via dashboard or API." },
              { thing: "Revenue analytics", diy: "Build charts, calculate MRR, track churn yourself", pro: "Real-time dashboards with exportable data." },
              { thing: "Subscriber management", diy: "Build your own UI for viewing/managing subscriptions", pro: "Full dashboard with refunds, history, status." },
            ].map((row) => (
              <div key={row.thing} className="rounded-xl border border-border bg-elevated p-5">
                <h3 className="text-sm font-semibold text-foreground mb-3">{row.thing}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-lg bg-surface border border-border p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted mb-1.5">DIY</p>
                    <p className="text-xs text-muted leading-relaxed">{row.diy}</p>
                  </div>
                  <div className="rounded-lg bg-accent-subtle/50 border border-accent/10 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent mb-1.5">Pro</p>
                    <p className="text-xs text-secondary leading-relaxed">{row.pro}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-16 sm:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3 text-center">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-12 text-center" style={{ letterSpacing: "-0.02em" }}>
            Common questions
          </h2>
          <div className="space-y-0">
            {[
              { q: "Can I use Vowena without paying anything?", a: "Yes. The protocol and SDK are completely free and open source. You can deploy the contract, build your own dashboard, run your own keeper, and index your own events. The paid tier is for merchants who want managed infrastructure." },
              { q: "What does the managed keeper actually do?", a: "It runs 24/7, calling charge() on every due subscription. It handles retries during grace periods, extends TTLs on storage entries to prevent archival, and alerts you when charges fail. Building this yourself is a weekend of work plus ongoing maintenance." },
              { q: "Can I switch between tiers?", a: "Upgrade or downgrade anytime. Your on-chain data stays the same regardless of which tier you use. The contract does not depend on the dashboard." },
              { q: "What happens if I stop paying for Pro?", a: "Your plans and subscriptions remain on-chain. Subscribers can still cancel. You just lose the managed keeper and analytics. Switch to running your own keeper or migrate to another tool." },
            ].map((item, i) => (
              <details key={item.q} className="group border-b border-border">
                <summary className="flex items-center justify-between py-5 cursor-pointer list-none">
                  <h3 className="text-sm font-semibold text-foreground pr-4">{item.q}</h3>
                  <svg className="w-4 h-4 text-muted shrink-0 transition-transform group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </summary>
                <p className="text-sm text-muted leading-relaxed pb-5 pr-8">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 text-center">
          <VowenaSymbol className="w-8 h-8 text-accent mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
            Start building today
          </h2>
          <p className="text-secondary max-w-md mx-auto mb-8">
            Free during beta. No credit card required. Create your first plan in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="https://dashboard.vowena.xyz" className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
              Launch dashboard
            </Link>
            <Link href="/docs" className="inline-flex items-center h-11 px-6 text-sm font-medium text-secondary border border-border hover:bg-surface hover:text-foreground transition-colors">
              Read docs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
