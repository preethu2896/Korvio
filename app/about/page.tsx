import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhyKorvio } from "@/components/home/WhyKorvio";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Korvio — Creator & Brand Partnerships",
  description:
    "Korvio is an influencer marketing agency connecting brands with relevant creators for authentic partnerships and campaign collaborations across India.",
  alternates: {
    canonical: "https://korvio.in/about/",
  },
  openGraph: {
    type: "website",
    url: "https://korvio.in/about/",
    siteName: "Korvio — Influencer Marketing Agency",
    title: "About Korvio — Creator & Brand Partnerships",
    description:
      "Korvio is an influencer marketing agency connecting brands with relevant creators for authentic partnerships and campaign collaborations across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Korvio — Creator & Brand Partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Korvio — Creator & Brand Partnerships",
    description:
      "Korvio is an influencer marketing agency connecting brands with relevant creators for authentic partnerships and campaign collaborations across India.",
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
