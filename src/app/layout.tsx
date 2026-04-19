import type { Metadata } from "next";
import { DM_Sans, Space_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vowena.xyz"),
  title: {
    default: "Vowena — Recurring Revenue, Fully Automated",
    template: "%s | Vowena",
  },
  description: "The first protocol for on-chain subscription billing on Stellar. Create plans, authorize recurring USDC transfers, and manage subscriptions with one signature.",
  keywords: ["subscription billing", "recurring payments", "Stellar", "Soroban", "USDC", "on-chain payments", "subscription protocol", "crypto subscriptions", "blockchain billing"],
  authors: [{ name: "Vowena" }],
  creator: "Vowena",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Vowena",
    title: "Vowena — Recurring Revenue, Fully Automated",
    description: "The first protocol for on-chain subscription billing on Stellar. Create plans, authorize recurring USDC transfers, and manage subscriptions.",
    url: "https://vowena.xyz",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vowena",
    creator: "@vowena",
    title: "Vowena — Recurring Revenue, Fully Automated",
    description: "The first protocol for on-chain subscription billing on Stellar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://vowena.xyz",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <script
            defer
            src={process.env.NEXT_PUBLIC_UMAMI_SRC || "https://cloud.umami.is/script.js"}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <ThemeProvider>
          <Nav />
          <main className="flex-1 pt-14">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
