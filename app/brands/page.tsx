import type { Metadata } from "next";
import { BrandHero } from "@/components/brands/BrandHero";
import { BrandChallenges } from "@/components/brands/BrandChallenges";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Influencer Marketing for Brands | Creator Campaigns | Korvio",
  description:
    "Korvio helps brands discover relevant creators, coordinate collaborations and build influencer campaigns around the audiences that matter.",
  alternates: {
    canonical: "https://korvio.in/brands",
  },
  openGraph: {
    type: "website",
    url: "https://korvio.in/brands",
    siteName: "Korvio",
    title: "Influencer Marketing for Brands | Creator Campaigns | Korvio",
    description:
      "Korvio helps brands discover relevant creators, coordinate collaborations and build influencer campaigns around the audiences that matter.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Marketing for Brands | Creator Campaigns | Korvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing for Brands | Creator Campaigns | Korvio",
    description:
      "Korvio helps brands discover relevant creators, coordinate collaborations and build influencer campaigns around the audiences that matter.",
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
