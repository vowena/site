export function HeroVisual() {
  return (
    <div className="relative">
      {/* Stacked cards with depth - zoomed into dashboard corners */}
      {/* Back card: revenue chart (offset, slightly tilted) */}
      <div className="absolute -top-3 -left-3 right-6 rounded-2xl border border-border bg-elevated p-5 shadow-lg shadow-black/[0.04] dark:shadow-black/20 rotate-[-2deg]">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] font-medium text-foreground">Monthly recurring revenue</p>
          <span className="text-[9px] text-success font-medium bg-success-subtle px-1.5 py-0.5 rounded">+18.4%</span>
        </div>
        <p className="text-2xl font-semibold text-foreground mb-4">$12,847.00</p>
        <svg viewBox="0 0 400 60" className="w-full h-12" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 55 L30 50 L60 48 L90 42 L120 38 L150 35 L180 30 L210 28 L240 22 L270 20 L300 15 L330 12 L360 10 L400 5 L400 60 L0 60Z" fill="url(#heroChartFill)" />
          <path d="M0 55 L30 50 L60 48 L90 42 L120 38 L150 35 L180 30 L210 28 L240 22 L270 20 L300 15 L330 12 L360 10 L400 5" fill="none" stroke="var(--accent)" strokeWidth="2" />
        </svg>
      </div>

      {/* Front card: subscriber notification + stats */}
      <div className="relative mt-28 ml-8 rounded-2xl border border-border bg-elevated p-5 shadow-2xl shadow-black/[0.08] dark:shadow-black/30 rotate-[1deg]">
        {/* Notification */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-success-subtle/50 border border-success/10 mb-4">
          <div className="w-7 h-7 rounded-full bg-success/20 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5 text-success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <p className="text-[10px] font-medium text-foreground">New subscriber</p>
            <p className="text-[9px] text-muted">GCKJ...8FXP subscribed to Pro Monthly - $29.99</p>
          </div>
        </div>

        {/* Mini stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-border bg-background p-3">
            <p className="text-[8px] text-muted mb-1">Active</p>
            <p className="text-base font-semibold text-foreground">1,284</p>
          </div>
          <div className="rounded-lg border border-border bg-background p-3">
            <p className="text-[8px] text-muted mb-1">Success</p>
            <p className="text-base font-semibold text-success">98.7%</p>
          </div>
          <div className="rounded-lg border border-border bg-background p-3">
            <p className="text-[8px] text-muted mb-1">Churn</p>
            <p className="text-base font-semibold text-foreground">2.1%</p>
          </div>
        </div>

        {/* Recent charge row */}
        <div className="mt-3 flex items-center justify-between p-2 rounded-lg border border-border bg-background">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-accent-subtle flex items-center justify-center text-[7px] text-accent font-bold">T</div>
            <span className="text-[9px] font-mono text-muted">GBXM...Q4VL</span>
          </div>
          <span className="text-[9px] font-medium text-success">+$29.99</span>
        </div>
      </div>
    </div>
  );
}

export function DashboardFeatureCards() {
  return (
    <div className="space-y-4">
      {/* Subscriber card */}
      <div className="rounded-xl border border-border bg-elevated p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted mb-4">What your subscribers see</p>
        <div className="rounded-lg border border-border bg-background p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-accent-subtle flex items-center justify-center text-[10px] text-accent font-bold">A</div>
              <div>
                <p className="text-xs font-medium text-foreground">Acme SaaS Pro</p>
                <p className="text-[9px] text-muted">Monthly subscription</p>
              </div>
            </div>
            <span className="text-[9px] font-medium text-success bg-success-subtle px-2 py-0.5 rounded-full">Active</span>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div>
              <p className="text-[9px] text-muted">Next billing</p>
              <p className="text-xs font-medium text-foreground">May 15, 2025</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-muted">Amount</p>
              <p className="text-xs font-semibold text-foreground">$29.99 <span className="text-muted font-normal">USDC</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Billing history card */}
      <div className="rounded-xl border border-border bg-elevated p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted mb-3">Billing history</p>
        <div className="space-y-2">
          {[
            { date: "Apr 15", amount: "$29.99", status: "Paid" },
            { date: "Mar 15", amount: "$29.99", status: "Paid" },
            { date: "Feb 15", amount: "$29.99", status: "Paid" },
            { date: "Jan 15", amount: "$0.00", status: "Trial" },
          ].map((row) => (
            <div key={row.date} className="flex items-center justify-between py-1.5">
              <span className="text-[10px] font-mono text-muted">{row.date}</span>
              <span className="text-[10px] font-medium text-foreground">{row.amount}</span>
              <span className={`text-[9px] font-medium ${row.status === "Trial" ? "text-warning" : "text-success"}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cancel/manage actions */}
      <div className="rounded-xl border border-border bg-elevated p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted mb-3">Subscriber controls</p>
        <p className="text-xs text-secondary leading-relaxed mb-3">
          Subscribers can view history, manage their subscription, or cancel anytime with one click. No emails, no phone calls. Direct on-chain.
        </p>
        <div className="flex gap-2">
          <div className="flex-1 text-center py-2 rounded-lg border border-border text-[10px] text-secondary font-medium">View history</div>
          <div className="flex-1 text-center py-2 rounded-lg border border-error/20 text-[10px] text-error font-medium">Cancel</div>
        </div>
      </div>
    </div>
  );
}
