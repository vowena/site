import Link from "next/link";
import { VowenaSymbol } from "@/components/vowena-logo";

const tiers = [
  {
    name: "Open Source",
    price: "Free",
    period: "forever",
    desc: "Everything you need to integrate subscription billing into your product.",
    features: [
      "Soroban smart contract",
      "TypeScript SDK",
      "Unlimited plans and subscribers",
      "Community support",
    ],
    cta: "Get started",
    ctaHref: "/docs",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$0",
    originalPrice: "$49",
    period: "/month",
    badge: "Free during beta",
    desc: "Managed billing so you can focus on your product instead of infrastructure.",
    features: [
      "24/7 automated billing",
      "Revenue and churn analytics",
      "Subscriber dashboard",
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
    desc: "Dedicated infrastructure, custom integrations, and guaranteed uptime for high volume.",
    features: [
      "Dedicated billing infrastructure",
      "Custom webhooks",
      "White-label dashboard",
      "SLA guarantee",
      "Dedicated support",
    ],
    cta: "Talk to us",
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
            Simple pricing,<br className="hidden sm:block" /> no surprises
          </h1>
          <p className="text-secondary max-w-lg mx-auto">
            The protocol is open source and always will be. Pay only when you want managed infrastructure that saves you time.
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
                  <h3 className="text-sm font-semibold text-foreground mb-4">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    {"originalPrice" in tier && tier.originalPrice && (
                      <span className="text-lg text-muted line-through">{tier.originalPrice as string}</span>
                    )}
                    <span className="text-4xl font-semibold text-foreground tracking-tight">{tier.price}</span>
                    {tier.period && <span className="text-sm text-muted">{tier.period}</span>}
                  </div>
                  {"badge" in tier && tier.badge && (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-success bg-success-subtle px-2 py-0.5 rounded-full">
                      {tier.badge as string}
                    </span>
                  )}
                  <p className="mt-4 text-sm text-muted leading-relaxed">{tier.desc}</p>
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

      {/* What you save */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3 text-center">What Pro saves you</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-12 text-center" style={{ letterSpacing: "-0.02em" }}>
            Skip the infrastructure work
          </h2>

          <div className="space-y-4">
            {[
              { thing: "Automated billing", diy: "Build a cron job, manage a database, handle retries and error logging", pro: "Toggle on. Billing runs 24/7." },
              { thing: "Revenue analytics", diy: "Build charts, calculate MRR, track churn from raw blockchain data", pro: "Real-time dashboards, ready to go." },
              { thing: "Subscriber management", diy: "Build your own UI for refunds, cancellations, and billing history", pro: "Full dashboard with one-click actions." },
            ].map((row) => (
              <div key={row.thing} className="rounded-xl border border-border bg-elevated p-5">
                <h3 className="text-sm font-semibold text-foreground mb-3">{row.thing}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-lg bg-surface border border-border p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted mb-1.5">Build it yourself</p>
                    <p className="text-xs text-muted leading-relaxed">{row.diy}</p>
                  </div>
                  <div className="rounded-lg bg-accent-subtle/50 border border-accent/10 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent mb-1.5">With Pro</p>
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
            Questions? Answered.
          </h2>
          <div className="space-y-0">
            {[
              { q: "Can I use Vowena without paying?", a: "Yes. The protocol and SDK are completely free and open source. Deploy the contract, build your own dashboard, run your own keeper. The paid tier is for teams who want managed infrastructure." },
              { q: "What happens after beta ends?", a: "Pro will be $49/month. Everyone who signs up during beta keeps their current pricing for the first 6 months after launch." },
              { q: "Can I switch plans?", a: "Upgrade or downgrade anytime. Your on-chain data stays the same regardless of which tier you use." },
              { q: "What if I stop paying?", a: "Your plans and subscriptions remain on-chain. You just lose the managed keeper and analytics. Switch to running your own keeper or use the open source tools." },
            ].map((item) => (
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
            Ready to get started?
          </h2>
          <p className="text-secondary max-w-md mx-auto mb-8">
            Create your first subscription plan in under 60 seconds. Free during beta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="https://dashboard.vowena.xyz" className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
              Launch dashboard
            </Link>
            <Link href="/docs" className="inline-flex items-center h-11 px-6 text-sm font-medium text-secondary border border-border hover:bg-elevated hover:text-foreground transition-colors">
              Read docs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
