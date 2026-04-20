export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vowena.xyz",
  dashboardUrl:
    process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://dashboard.vowena.xyz",
  docsUrl: process.env.NEXT_PUBLIC_DOCS_URL || "https://vowena.xyz/docs",
  github: "https://github.com/vowena",
  twitter: "https://x.com/vowena",
  youtube: "https://youtube.com/@vowena",
  npm: "https://www.npmjs.com/package/vowena",
  stellarExpert: "https://stellar.expert/explorer/testnet",
  contractIdShort: "CAYX…VNQA",
  vowenaTipUrl: "https://tip.vowena.xyz",
} as const;
