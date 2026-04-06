import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Vowena, the subscription billing protocol on Stellar.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Legal</p>
      <h1 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-8" style={{ letterSpacing: "-0.02em" }}>
        Privacy Policy
      </h1>
      <p className="text-xs text-muted mb-10">Last updated: April 6, 2025</p>

      <div className="space-y-8 text-sm text-secondary leading-[1.8]">
        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">What we collect</h2>
          <p>We collect as little data as possible. Vowena is a blockchain protocol, and the core product works without accounts, emails, or personal information.</p>
          <ul className="list-disc pl-5 mt-3 space-y-1.5">
            <li><strong className="text-foreground">Wallet addresses.</strong> When you connect your Stellar wallet to the dashboard, we see your public wallet address. This is publicly visible on the blockchain already.</li>
            <li><strong className="text-foreground">Analytics.</strong> We use Umami (a privacy-focused, cookie-free analytics tool) to understand how people use the website. Umami does not collect personal data, does not use cookies, and is fully GDPR compliant.</li>
            <li><strong className="text-foreground">Plan metadata.</strong> If you use the dashboard to create plans, you may optionally add a plan name, description, and logo. This is stored in our database, not on-chain.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">What we do not collect</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Emails (unless you contact us directly)</li>
            <li>Passwords (there are no accounts)</li>
            <li>Private keys (we never have access to your wallet)</li>
            <li>Payment card information (all payments are on-chain in USDC)</li>
            <li>Tracking cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">On-chain data</h2>
          <p>All subscription data (plans, subscriptions, charges, refunds) is stored on the Stellar blockchain. This data is publicly visible to anyone. Vowena does not control, modify, or delete on-chain data. The blockchain is the source of truth.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Third-party services</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong className="text-foreground">Stellar network.</strong> All on-chain interactions go through the Stellar blockchain.</li>
            <li><strong className="text-foreground">Vercel.</strong> Our website and dashboard are hosted on Vercel.</li>
            <li><strong className="text-foreground">Umami.</strong> Privacy-focused website analytics.</li>
            <li><strong className="text-foreground">Mintlify.</strong> Our documentation is hosted on Mintlify.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Data retention</h2>
          <p>Off-chain data (plan metadata, indexed events) is retained as long as your account is active. If you delete your plans or stop using the dashboard, we will delete associated off-chain data within 30 days on request. On-chain data cannot be deleted as it is stored on the blockchain.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Your rights</h2>
          <p>You can request deletion of any off-chain data we hold about you by contacting us. Since we do not collect personal data beyond wallet addresses (which are public), there is typically nothing to delete.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Changes</h2>
          <p>We may update this policy from time to time. Material changes will be communicated through the website.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">Contact</h2>
          <p>For privacy-related questions, contact us at <a href="mailto:hello@vowena.xyz" className="text-accent underline underline-offset-2">hello@vowena.xyz</a>.</p>
        </section>
      </div>
    </div>
  );
}
