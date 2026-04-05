import Link from "next/link";

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
    cta: "Launch app",
    ctaHref: "https://app.vowena.xyz",
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
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Pricing</p>
        <h1 className="text-4xl font-semibold text-foreground tracking-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
          The protocol is free. The infrastructure is not.
        </h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          Vowena the smart contract costs nothing to use. You are paying for managed billing automation, analytics, and the dashboard that saves you from building infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-xl border p-8 flex flex-col ${
              tier.highlight
                ? "border-accent bg-accent/[0.03] ring-1 ring-accent/20"
                : "border-border bg-elevated"
            }`}
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-sm font-semibold text-foreground">{tier.name}</h3>
                {"badge" in tier && tier.badge && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-success bg-success-subtle px-2 py-0.5 rounded-full">
                    {tier.badge as string}
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-2">
                {"originalPrice" in tier && tier.originalPrice && (
                  <span className="text-lg text-muted line-through">{tier.originalPrice as string}</span>
                )}
                <span className="text-4xl font-semibold text-foreground tracking-tight">{tier.price}</span>
                {tier.period && <span className="text-sm text-muted">{tier.period}</span>}
              </div>
              <p className="mt-3 text-sm text-muted leading-relaxed">{tier.desc}</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-secondary">
                  <svg className="w-4 h-4 text-success shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={tier.ctaHref}
              className={`inline-flex items-center justify-center h-10 px-6 text-sm font-medium rounded-lg transition-colors ${
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

      {/* FAQ */}
      <div className="mt-24 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-foreground tracking-tight mb-8 text-center" style={{ letterSpacing: "-0.02em" }}>
          Common questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "Can I use Vowena without paying anything?",
              a: "Yes. The protocol and SDK are completely free and open source. You can deploy the contract, build your own dashboard, run your own keeper, and index your own events. The paid tier is for merchants who want managed infrastructure.",
            },
            {
              q: "What does the managed keeper actually do?",
              a: "It runs 24/7, calling charge() on every due subscription. It handles retries during grace periods, extends TTLs on storage entries to prevent archival, and alerts you when charges fail. Building this yourself is a weekend of work plus ongoing maintenance.",
            },
            {
              q: "Can I switch between tiers?",
              a: "Upgrade or downgrade anytime. Your on-chain data stays the same regardless of which tier you use. The contract does not depend on the dashboard.",
            },
            {
              q: "What happens if I stop paying for Pro?",
              a: "Your plans and subscriptions remain on-chain. Subscribers can still cancel. You just lose the managed keeper and analytics. Switch to running your own keeper or migrate to another tool.",
            },
          ].map((item) => (
            <div key={item.q} className="border-b border-border pb-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
