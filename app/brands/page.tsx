import type { Metadata } from "next";
import { BrandHero } from "@/components/brands/BrandHero";
import { BrandChallenges } from "@/components/brands/BrandChallenges";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Korvio for Brands — Karnataka Influencer Marketing Agency",
  description:
    "Korvio is a Karnataka-based influencer marketing agency helping brands across India discover relevant creators, coordinate influencer marketing campaigns, and drive authentic audience engagement.",
  alternates: {
    canonical: "https://korvio.in/brands/",
  },
  openGraph: {
    type: "website",
    url: "https://korvio.in/brands/",
    siteName: "Korvio — Influencer Marketing Agency",
    title: "Korvio for Brands — Karnataka Influencer Marketing Agency",
    description:
      "Korvio is a Karnataka-based influencer marketing agency helping brands across India discover relevant creators, coordinate influencer marketing campaigns, and drive authentic audience engagement.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Korvio for Brands — Karnataka Influencer Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korvio for Brands — Karnataka Influencer Marketing Agency",
    description:
      "Korvio is a Karnataka-based influencer marketing agency helping brands across India discover relevant creators, coordinate influencer marketing campaigns, and drive authentic audience engagement.",
    images: ["/og-image.jpg"],
  },
};

export default function BrandsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrandHero />
      <BrandChallenges />
      <Services />
      <Process />
      <FinalCTA />
    </div>
  );
}
