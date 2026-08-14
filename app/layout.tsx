import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { AnalyticsNavigationTracker } from "@/components/analytics/AnalyticsNavigationTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://korvio.in"),
  title: {
    default: "Korvio — Influencer Marketing Agency Connecting Brands & Creators",
    template: "%s | Korvio",
  },
  description:
    "Korvio connects brands with relevant creators for authentic influencer marketing, creator partnerships and campaign collaborations across India.",
  applicationName: "Korvio",
  authors: [{ name: "Korvio" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://korvio.in/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://korvio.in/",
    siteName: "Korvio",
    title: "Korvio — Influencer Marketing Agency Connecting Brands & Creators",
    description:
      "Connecting brands with relevant creators for authentic partnerships and campaigns.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Korvio — Influencer Marketing Agency Connecting Brands & Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korvio — Influencer Marketing Agency Connecting Brands & Creators",
    description:
      "Connecting brands with relevant creators for authentic partnerships and campaigns.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://korvio.in/#organization",
    name: "Korvio",
    url: "https://korvio.in",
    logo: "https://korvio.in/brand/logo.png",
    email: "hello.korvio@gmail.com",
    sameAs: [
      "https://www.instagram.com/korvio.in/",
      "https://www.linkedin.com/in/korvio-in-6b9890428/",
      "https://x.com/KorvioIn",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://korvio.in/#website",
    name: "Korvio",
    url: "https://korvio.in/",
    publisher: {
      "@id": "https://korvio.in/#organization",
    },
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0c] text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <AnalyticsNavigationTracker />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
