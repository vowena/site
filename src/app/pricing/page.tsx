import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { SectionOrnament } from "@/components/section-ornament";
import { VowenaSymbol } from "@/components/vowena-logo";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing for Vowena subscription billing. The protocol is free and open source. Pro adds managed billing automation, analytics, and subscriber management.",
  alternates: { canonical: "https://vowena.xyz/pricing" },
  openGraph: {
    title: "Pricing — Vowena",
    description:
      "Simple pricing for Vowena subscription billing. Free during beta.",
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
    price: "Free",
    period: "during beta",
    badge: "Beta",
    note: "Paid plans launching with mainnet.",
    desc: "Managed billing so you can focus on your product instead of infrastructure.",
    features: [
      "24/7 automated billing",
      "Revenue and churn analytics",
      "Subscriber dashboard",
      "Email notifications",
      "Priority support",
    ],
    cta: "Get started free",
    ctaHref: siteConfig.dashboardUrl,
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
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 text-center">
          <SectionEyebrow align="center" className="mb-6">
            Pricing
          </SectionEyebrow>
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold text-foreground tracking-tight mb-6 leading-[1.05]"
            style={{ letterSpacing: "-0.035em" }}
          >
            <span className="serif-italic text-foreground/40 text-[1.08em]">
              Simple
            </span>{" "}
            pricing,
            <br className="hidden sm:block" /> no surprises.
          </h1>
          <p className="text-base sm:text-lg text-secondary max-w-xl mx-auto leading-relaxed">
            The protocol is open source and always will be. Pay only when you
            want managed infrastructure that saves you time.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="relative border-t border-border">
        <SectionOrnament />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-6 sm:p-8 flex flex-col ${
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
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-foreground">
                      {tier.name}
                    </h3>
                    {"badge" in tier && tier.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-success bg-success-subtle px-2 py-0.5 rounded-full">
                        {tier.badge as string}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-semibold text-foreground tracking-tight">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-sm text-muted">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {tier.desc}
                  </p>
                  {"note" in tier && tier.note && (
                    <p className="text-[11px] text-accent/80 font-medium mt-3">
                      {tier.note as string}
                    </p>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-secondary"
                    >
                      <svg
                        className="w-4 h-4 text-accent shrink-0 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
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

          {/* Why go Pro? */}
          <div className="mt-12 rounded-xl border border-border bg-elevated overflow-x-auto">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] min-w-[600px] text-[11px] font-semibold uppercase tracking-[0.14em] text-muted border-b border-border">
              <div className="px-5 py-3 text-accent">Why go Pro?</div>
              <div className="px-5 py-3">Open Source</div>
              <div className="px-5 py-3 text-accent">Pro</div>
            </div>
            <div className="divide-y divide-border min-w-[600px]">
              {[
                {
                  thing: "Billing automation",
                  free: "You build and maintain a keeper bot that calls charge() on a schedule",
                  pro: "Charges run automatically 24/7 with retries and grace period handling",
                },
                {
                  thing: "Revenue insights",
                  free: "Query raw blockchain events and calculate MRR, churn, and growth yourself",
                  pro: "Real-time dashboards with MRR, churn rate, failed charges, and trends",
                },
                {
                  thing: "Subscriber tools",
                  free: "Build your own interface for viewing subscribers and processing refunds",
                  pro: "Full management dashboard with billing history and one-click refunds",
                },
                {
                  thing: "Support",
                  free: "Community support via GitHub issues and discussions",
                  pro: "Direct access to the Vowena team with priority response times",
                },
              ].map((row) => (
                <div
                  key={row.thing}
                  className="grid grid-cols-[1.2fr_1fr_1fr] text-sm"
                >
                  <div className="px-5 py-4 font-medium text-foreground">
                    {row.thing}
                  </div>
                  <div className="px-5 py-4 text-muted leading-relaxed">
                    {row.free}
                  </div>
                  <div className="px-5 py-4 text-foreground leading-relaxed">
                    {row.pro}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-t border-border bg-surface">
        <SectionOrnament />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-center mb-10">
            <SectionEyebrow align="center" className="mb-4">
              FAQ
            </SectionEyebrow>
            <h2
              className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              Questions?{" "}
              <span className="serif-italic text-foreground/40 text-[1.08em]">
                Answered
              </span>
              .
            </h2>
          </div>
          <div className="space-y-0">
            {(
              [
                {
                  q: "Why Stellar?",
                  a: (
                    <div className="space-y-4 pb-5 pr-8 text-sm text-muted leading-relaxed">
                      <p>Three things that don't exist anywhere else.</p>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <span className="font-mono text-[10px] text-accent mt-1 shrink-0">
                            01
                          </span>
                          <span>
                            <span className="text-foreground font-medium">
                              $0.00001 per transaction.
                            </span>{" "}
                            Recurring micro-billing finally has economics that
                            work. A $1 charge keeps 99.999% of revenue.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-mono text-[10px] text-accent mt-1 shrink-0">
                            02
                          </span>
                          <span>
                            <span className="text-foreground font-medium">
                              Single-signature subscribe.
                            </span>{" "}
                            Soroban's auth tree bundles the contract call and
                            the USDC allowance into one click. Impossible on EVM
                            without account abstraction.
                          </span>
                        </li>
                        <li className="flex gap-3">
                          <span className="font-mono text-[10px] text-accent mt-1 shrink-0">
                            03
                          </span>
                          <span>
                            <span className="text-foreground font-medium">
                              Native USDC.
                            </span>{" "}
                            Circle issues directly on Stellar. No bridges, no
                            wraps, no liquidity fragmentation.
                          </span>
                        </li>
                      </ul>
                      <p className="text-xs text-muted/70 italic">
                        EIP-1337 and EIP-948 both died because Ethereum gas
                        killed the math. Stellar fixes that by construction.
                      </p>
                    </div>
                  ),
                },
                {
                  q: "Can I use Vowena without paying anything?",
                  a: "Absolutely. The Vowena smart contract and TypeScript SDK are completely free and open source. You can deploy the contract, create plans, subscribe users, and run your own billing keeper without paying us a cent. The Pro tier exists for teams who would rather focus on their product and let us handle the billing infrastructure.",
                },
                {
                  q: "What happens when beta ends?",
                  a: "We're keeping Pro free during the entire beta period and we'll publish paid pricing alongside the mainnet launch. Anyone who signed up during beta will get the most generous transition we can offer, with plenty of notice. We're not committing to a number until we have real merchant data to price against.",
                },
                {
                  q: "Can I switch between plans?",
                  a: "Yes, at any time. Your plans, subscriptions, and all on-chain data are completely independent of which tier you are on. Upgrading gives you access to the dashboard and automation instantly. Downgrading just means you go back to running things yourself.",
                },
                {
                  q: "What happens if I stop paying for Pro?",
                  a: "Nothing breaks. Your plans and subscriptions stay exactly where they are on the blockchain. Subscribers can still be charged and can still cancel. You just lose access to the managed keeper, analytics dashboards, and priority support. You can always switch to running your own keeper bot using the open source SDK.",
                },
              ] as { q: string; a: React.ReactNode }[]
            ).map((item) => (
              <details key={item.q} className="group border-b border-border">
                <summary className="flex items-center justify-between py-5 cursor-pointer list-none hover:text-accent transition-colors">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent pr-4 transition-colors">
                    {item.q}
                  </h3>
                  <svg
                    className="w-4 h-4 text-muted shrink-0 transition-transform group-open:rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </summary>
                {typeof item.a === "string" ? (
                  <p className="text-sm text-muted leading-relaxed pb-5 pr-8">
                    {item.a}
                  </p>
                ) : (
                  item.a
                )}
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — matches homepage CTA for consistency */}
      <section className="border-t border-border relative overflow-hidden">
        <SectionOrnament />
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.025] dark:opacity-[0.04]">
            <VowenaSymbol className="w-[640px] h-[640px] text-accent" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-40 relative">
          <div className="max-w-3xl mx-auto text-center">
            <SectionEyebrow align="center" className="mb-8">
              Ready when you are
            </SectionEyebrow>
            <h2
              className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold text-foreground tracking-tight leading-[1.05] mb-8"
              style={{ letterSpacing: "-0.035em" }}
            >
              Your first subscriber
              <br className="hidden sm:block" />
              is one{" "}
              <span className="serif-italic text-foreground/40 text-[1.08em]">
                plan
              </span>{" "}
              away.
            </h2>
            <p className="text-base sm:text-lg text-secondary max-w-xl mx-auto mb-12 leading-relaxed">
              Create a plan, publish the link, and start billing in USDC the
              same afternoon. Live on Stellar testnet today, mainnet coming
              soon.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={siteConfig.dashboardUrl}
                className="inline-flex items-center gap-2 h-12 px-7 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
              >
                Launch dashboard
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center h-12 px-7 text-sm font-medium text-secondary border border-border rounded-lg hover:bg-surface hover:text-foreground transition-colors"
              >
                Read the docs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
