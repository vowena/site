export function HeroVisual() {
  return (
    <div className="rounded-2xl border border-border bg-elevated overflow-hidden shadow-2xl shadow-accent/[0.06] dark:shadow-black/30">
      {/* Sidebar + main area layout */}
      <div className="flex">
        {/* Mini sidebar */}
        <div className="w-12 bg-surface border-r border-border py-3 flex flex-col items-center gap-3 shrink-0">
          <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center">
            <svg className="w-3 h-3 text-white" viewBox="0 0 80 80" fill="none"><path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none"/><path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.5"/><circle cx="40" cy="40" r="4" fill="currentColor"/></svg>
          </div>
          <div className="w-6 h-1 rounded-full bg-accent/30" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-5 h-5 rounded-md bg-border/60" />
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 space-y-3 min-w-0">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] text-muted">Overview</p>
              <p className="text-xs font-semibold text-foreground">Good morning</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-accent-subtle flex items-center justify-center text-[8px] text-accent font-bold">T</div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-border bg-background p-2.5">
              <p className="text-[7px] text-muted">MRR</p>
              <p className="text-sm font-semibold text-foreground">$12.8k</p>
              <p className="text-[7px] text-success">+18%</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-2.5">
              <p className="text-[7px] text-muted">Subscribers</p>
              <p className="text-sm font-semibold text-foreground">1,284</p>
              <p className="text-[7px] text-success">+24</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-2.5">
              <p className="text-[7px] text-muted">Success rate</p>
              <p className="text-sm font-semibold text-foreground">98.7%</p>
              <p className="text-[7px] text-success">+0.3%</p>
            </div>
          </div>

          {/* Chart */}
          <div className="rounded-lg border border-border bg-background p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[8px] font-medium text-foreground">Revenue</p>
              <div className="flex gap-1">
                <span className="text-[7px] text-muted px-1 py-0.5 rounded bg-surface border border-border">7d</span>
                <span className="text-[7px] text-white px-1 py-0.5 rounded bg-accent">30d</span>
              </div>
            </div>
            <svg viewBox="0 0 300 50" className="w-full h-10" preserveAspectRatio="none">
              <defs>
                <linearGradient id="hcf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 42 L25 38 L50 36 L75 32 L100 28 L125 25 L150 22 L175 20 L200 16 L225 14 L250 10 L275 8 L300 4 L300 50 L0 50Z" fill="url(#hcf)" />
              <path d="M0 42 L25 38 L50 36 L75 32 L100 28 L125 25 L150 22 L175 20 L200 16 L225 14 L250 10 L275 8 L300 4" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
              <circle cx="300" cy="4" r="2.5" fill="var(--accent)" />
            </svg>
          </div>

          {/* Subscriber rows */}
          <div className="rounded-lg border border-border bg-background overflow-hidden">
            <div className="px-2.5 py-1.5 border-b border-border flex items-center justify-between">
              <p className="text-[8px] font-medium text-foreground">Recent activity</p>
              <p className="text-[7px] text-accent">View all</p>
            </div>
            {[
              { addr: "GCKJ...8FXP", action: "Subscribed", amount: "+$29.99", color: "text-success" },
              { addr: "GBXM...Q4VL", action: "Charged", amount: "+$29.99", color: "text-success" },
              { addr: "GDHR...N7WK", action: "Trial started", amount: "$0.00", color: "text-warning" },
            ].map((row) => (
              <div key={row.addr} className="flex items-center justify-between px-2.5 py-1.5 border-b border-border last:border-0">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-accent-subtle flex items-center justify-center text-[6px] text-accent font-bold">{row.addr[0]}</div>
                  <div>
                    <p className="text-[8px] font-mono text-foreground">{row.addr}</p>
                    <p className="text-[6px] text-muted">{row.action}</p>
                  </div>
                </div>
                <span className={`text-[8px] font-medium ${row.color}`}>{row.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardFeatureCards() {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-elevated p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted mb-4">What your subscribers see</p>
        <div className="rounded-lg border border-border bg-background p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-accent-subtle flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 80 80" fill="none"><path d="M44 18C44 18 28 22 24 40C20 58 36 62 36 62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none"/><path d="M36 62C36 62 52 58 56 40C60 22 44 18 44 18" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.4"/><circle cx="40" cy="40" r="3" fill="currentColor"/></svg>
              </div>
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

      <div className="rounded-xl border border-border bg-elevated p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted mb-3">Billing history</p>
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

      <div className="rounded-xl border border-border bg-elevated p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted mb-3">Subscriber controls</p>
        <p className="text-xs text-secondary leading-relaxed mb-3">
          Subscribers can view history, manage their subscription, or cancel anytime. No emails, no phone calls. Direct on-chain.
        </p>
        <div className="flex gap-2">
          <div className="flex-1 text-center py-2 rounded-lg border border-border text-[10px] text-secondary font-medium">View history</div>
          <div className="flex-1 text-center py-2 rounded-lg border border-error/20 text-[10px] text-error font-medium">Cancel</div>
        </div>
      </div>
    </div>
  );
}
