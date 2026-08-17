import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhyKorvio } from "@/components/home/WhyKorvio";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Korvio — Karnataka Influencer Marketing Agency",
  description:
    "Korvio is a Karnataka-based influencer marketing agency connecting brands with relevant creators across India for authentic partnerships and campaign collaborations.",
  alternates: {
    canonical: "https://korvio.in/about/",
  },
  openGraph: {
    type: "website",
    url: "https://korvio.in/about/",
    siteName: "Korvio — Influencer Marketing Agency",
    title: "About Korvio — Karnataka Influencer Marketing Agency",
    description:
      "Korvio is a Karnataka-based influencer marketing agency connecting brands with relevant creators across India for authentic partnerships and campaign collaborations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Korvio — Karnataka Influencer Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Korvio — Karnataka Influencer Marketing Agency",
    description:
      "Korvio is a Karnataka-based influencer marketing agency connecting brands with relevant creators across India for authentic partnerships and campaign collaborations.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <WhyKorvio />
      <FinalCTA />
    </div>
  );
}
