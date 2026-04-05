import type { Metadata } from "next";
import Link from "next/link";
import { VowenaLogo } from "@/components/vowena-logo";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple pricing for Vowena subscription billing. The protocol is free and open source. Pro adds managed billing automation, analytics, and subscriber management.",
  alternates: { canonical: "https://vowena.xyz/pricing" },
  openGraph: {
    title: "Pricing - Vowena",
    description: "Simple pricing for Vowena subscription billing. Free during beta.",
    url: "https://vowena.xyz/pricing",
  },
};

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
    cta: "Get started free",
    ctaHref: "https://dashboard.vowena.xyz",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Dedicated infrastructure, custom integrations, and guaranteed uptime.",
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

        <div className="max-w-6xl mx-auto px-6 pt-16 sm:pt-24 pb-12 sm:pb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">Pricing</p>
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
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
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
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white bg-accent px-3 py-1 rounded-full">Most popular</span>
                  </div>
                )}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-foreground">{tier.name}</h3>
                    {"badge" in tier && tier.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-success bg-success-subtle px-2 py-0.5 rounded-full">{tier.badge as string}</span>
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
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.ctaHref}
                  className={`inline-flex items-center justify-center h-11 px-6 text-sm font-medium rounded-lg transition-colors ${
                    tier.highlight ? "text-white bg-accent hover:bg-accent-hover" : "text-secondary border border-border hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Why go Pro? */}
          <div className="mt-12 rounded-xl border border-border bg-elevated overflow-hidden">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] text-[11px] font-semibold uppercase tracking-[0.14em] text-muted border-b border-border">
              <div className="px-5 py-3 text-accent">Why go Pro?</div>
              <div className="px-5 py-3">Open Source</div>
              <div className="px-5 py-3 text-accent">Pro</div>
            </div>
            <div className="divide-y divide-border">
              {[
                { thing: "Billing automation", free: "You build and maintain a keeper bot that calls charge() on a schedule", pro: "Charges run automatically 24/7 with retries and grace period handling" },
                { thing: "Revenue insights", free: "Query raw blockchain events and calculate MRR, churn, and growth yourself", pro: "Real-time dashboards with MRR, churn rate, failed charges, and trends" },
                { thing: "Subscriber tools", free: "Build your own interface for viewing subscribers and processing refunds", pro: "Full management dashboard with billing history and one-click refunds" },
                { thing: "Support", free: "Community support via GitHub issues and discussions", pro: "Direct access to the Vowena team with priority response times" },
              ].map((row) => (
                <div key={row.thing} className="grid grid-cols-[1.2fr_1fr_1fr] text-sm">
                  <div className="px-5 py-4 font-medium text-foreground">{row.thing}</div>
                  <div className="px-5 py-4 text-muted leading-relaxed">{row.free}</div>
                  <div className="px-5 py-4 text-foreground leading-relaxed">{row.pro}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-2xl mx-auto px-6 py-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3 text-center">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>
            Questions? Answered.
          </h2>
          <div className="space-y-0">
            {[
              { q: "Can I use Vowena without paying anything?", a: "Absolutely. The Vowena smart contract and TypeScript SDK are completely free and open source. You can deploy the contract, create plans, subscribe users, and run your own billing keeper without paying us a cent. The Pro tier exists for teams who would rather focus on their product and let us handle the billing infrastructure." },
              { q: "What happens when beta ends?", a: "Pro will move to $49/month. Everyone who signs up during the beta period keeps their current pricing locked for the first 3 months after we officially launch. We will give you plenty of notice before anything changes." },
              { q: "Can I switch between plans?", a: "Yes, at any time. Your plans, subscriptions, and all on-chain data are completely independent of which tier you are on. Upgrading gives you access to the dashboard and automation instantly. Downgrading just means you go back to running things yourself." },
              { q: "What happens if I stop paying for Pro?", a: "Nothing breaks. Your plans and subscriptions stay exactly where they are on the blockchain. Subscribers can still be charged and can still cancel. You just lose access to the managed keeper, analytics dashboards, and priority support. You can always switch to running your own keeper bot using the open source SDK." },
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
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16 text-center">
            <div className="flex justify-center mb-6"><VowenaLogo size="lg" /></div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
            Ready to get started?
          </h2>
          <p className="text-secondary max-w-md mx-auto mb-8">
            Create your first subscription plan in under 60 seconds. Free during beta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="https://dashboard.vowena.xyz" className="inline-flex items-center h-11 px-6 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors">
              Get started free
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
