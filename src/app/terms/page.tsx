import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Vowena, the subscription billing protocol on Stellar.",
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent mb-3">Legal</p>
      <h1 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-8" style={{ letterSpacing: "-0.02em" }}>
        Terms of Service
      </h1>
      <p className="text-xs text-muted mb-10">Last updated: April 6, 2025</p>

      <div className="space-y-8 text-sm text-secondary leading-[1.8]">
        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">1. What Vowena is</h2>
          <p>Vowena is an open-source subscription billing protocol deployed on the Stellar blockchain via Soroban smart contracts. The protocol consists of a smart contract, a TypeScript SDK published on npm, a documentation site, and an optional managed dashboard.</p>
          <p className="mt-3">The protocol is permissionless. Anyone can interact with the smart contract directly without using our dashboard or services.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">2. The protocol vs the service</h2>
          <p>The Vowena smart contract is open-source software deployed on a public blockchain. We do not control, restrict, or gate access to the contract itself. These terms govern your use of the Vowena dashboard, website, documentation, and managed services (the "Service"), not the protocol.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">3. Eligibility</h2>
          <p>You must be at least 18 years old and legally able to enter into agreements in your jurisdiction. By using the Service, you represent that you meet these requirements.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">4. Your responsibilities</h2>
          <p>You are responsible for securing your Stellar wallet and private keys. We never have access to your private keys, and we cannot recover lost funds or reverse on-chain transactions.</p>
          <p className="mt-3">If you are a merchant, you are responsible for complying with all applicable laws regarding billing, refunds, and consumer protection in the jurisdictions where you operate.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">5. How billing works</h2>
          <p>The Vowena contract uses the SEP-41 token allowance mechanism. Subscribers authorize a spending limit and the contract charges within that limit. The contract cannot charge more than the approved amount. Merchants receive payments directly from the subscriber's wallet to theirs. Vowena does not hold, custody, or process any funds at any point.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">6. Managed services (Pro tier)</h2>
          <p>The Pro tier provides managed billing automation, analytics, and subscriber management. During the beta period, Pro is free. When the beta ends, Pro will be priced at $49/month. We will notify all users at least 30 days before any pricing changes take effect.</p>
          <p className="mt-3">You can downgrade from Pro at any time. Your on-chain data remains unchanged regardless of which tier you use.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">7. No warranties</h2>
          <p>The Service is provided "as is" without warranties of any kind. We do not guarantee uptime, accuracy, or completeness of the managed services. The smart contract is open-source and has not been formally audited. You use it at your own risk.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">8. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, Vowena and its contributors are not liable for any indirect, incidental, or consequential damages arising from your use of the protocol or Service, including but not limited to lost funds, lost revenue, or business interruption.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">9. Changes to these terms</h2>
          <p>We may update these terms from time to time. We will notify users of material changes via the dashboard or email. Continued use of the Service after changes constitutes acceptance.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground mb-3">10. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:hello@vowena.xyz" className="text-accent underline underline-offset-2">hello@vowena.xyz</a>.</p>
        </section>
      </div>
    </div>
  );
}
