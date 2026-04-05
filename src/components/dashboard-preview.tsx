export function DashboardPreview() {
  return (
    <div className="rounded-2xl border border-border bg-elevated overflow-hidden shadow-2xl shadow-black/[0.08] dark:shadow-black/30">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface/50">
        <div className="w-2.5 h-2.5 rounded-full bg-error/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-warning/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-success/30" />
        <span className="ml-3 text-[10px] text-muted font-mono">app.vowena.xyz</span>
      </div>

      <div className="p-5 space-y-4">
        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Monthly revenue", value: "$12,847", change: "+18%" },
            { label: "Active subscribers", value: "1,284", change: "+24" },
            { label: "Success rate", value: "98.7%", change: "+0.3%" },
            { label: "Churn", value: "2.1%", change: "-0.4%" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-background p-3">
              <p className="text-[9px] text-muted mb-1">{s.label}</p>
              <p className="text-sm font-semibold text-foreground">{s.value}</p>
              <p className="text-[9px] text-success mt-0.5">{s.change}</p>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="rounded-lg border border-border bg-background p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-medium text-foreground">Revenue</p>
            <div className="flex gap-2">
              <span className="text-[9px] text-muted px-1.5 py-0.5 rounded bg-surface border border-border">7d</span>
              <span className="text-[9px] text-accent px-1.5 py-0.5 rounded bg-accent-subtle">30d</span>
              <span className="text-[9px] text-muted px-1.5 py-0.5 rounded bg-surface border border-border">90d</span>
            </div>
          </div>
          {/* SVG chart */}
          <svg viewBox="0 0 400 80" className="w-full h-16" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 70 L30 62 L60 58 L90 52 L120 48 L150 42 L180 38 L210 35 L240 30 L270 28 L300 22 L330 18 L360 15 L400 10 L400 80 L0 80Z" fill="url(#chartFill)" />
            <path d="M0 70 L30 62 L60 58 L90 52 L120 48 L150 42 L180 38 L210 35 L240 30 L270 28 L300 22 L330 18 L360 15 L400 10" fill="none" stroke="var(--accent)" strokeWidth="2" />
          </svg>
        </div>

        {/* Subscriber table */}
        <div className="rounded-lg border border-border bg-background overflow-hidden">
          <div className="px-3 py-2 border-b border-border">
            <p className="text-[10px] font-medium text-foreground">Recent subscribers</p>
          </div>
          <div className="divide-y divide-border">
            {[
              { addr: "GCKJ...8FXP", plan: "Pro Monthly", amount: "$29.99", status: "Active" },
              { addr: "GBXM...Q4VL", plan: "Team Annual", amount: "$199.00", status: "Active" },
              { addr: "GDHR...N7WK", plan: "Pro Monthly", amount: "$29.99", status: "Trial" },
            ].map((row) => (
              <div key={row.addr} className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent-subtle flex items-center justify-center text-[8px] text-accent font-semibold">
                    {row.addr[0]}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-foreground">{row.addr}</p>
                    <p className="text-[8px] text-muted">{row.plan}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-medium text-foreground">{row.amount}</p>
                  <p className={`text-[8px] ${row.status === "Trial" ? "text-warning" : "text-success"}`}>{row.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SubscriberPreview() {
  return (
    <div className="rounded-2xl border border-border bg-elevated overflow-hidden shadow-xl shadow-black/[0.06] dark:shadow-black/20">
      <div className="p-5 space-y-3">
        <p className="text-[10px] font-medium text-foreground mb-3">Your subscribers see this</p>
        {/* Subscription card */}
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
        {/* Action buttons */}
        <div className="flex gap-2">
          <div className="flex-1 text-center py-1.5 rounded-lg border border-border text-[9px] text-muted">View history</div>
          <div className="flex-1 text-center py-1.5 rounded-lg border border-error/20 text-[9px] text-error">Cancel</div>
        </div>
      </div>
    </div>
  );
}
