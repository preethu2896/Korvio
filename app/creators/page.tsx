import type { Metadata } from "next";
import { CreatorHero } from "@/components/creators/CreatorHero";
import { CreatorBenefits } from "@/components/creators/CreatorBenefits";
import { CreatorCampaignBoard } from "@/components/creators/CreatorCampaignBoard";
import { CreatorProcess } from "@/components/creators/CreatorProcess";
import { CreatorFAQ } from "@/components/creators/CreatorFAQ";
import { CreatorCTA } from "@/components/creators/CreatorCTA";

export const metadata: Metadata = {
  title: "Korvio for Creators — Join Our Creator Network",
  description:
    "Join Korvio's creator network across India to connect with top brands, access authentic creator partnerships, and monetize your content with meaningful influencer campaigns.",
  alternates: {
    canonical: "https://korvio.in/creators/",
  },
  openGraph: {
    type: "website",
    url: "https://korvio.in/creators/",
    siteName: "Korvio — Influencer Marketing Agency",
    title: "Korvio for Creators — Join Our Creator Network",
    description:
      "Join Korvio's creator network across India to connect with top brands, access authentic creator partnerships, and monetize your content with meaningful influencer campaigns.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Korvio for Creators — Join Our Creator Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Korvio for Creators — Join Our Creator Network",
    description:
      "Join Korvio's creator network across India to connect with top brands, access authentic creator partnerships, and monetize your content with meaningful influencer campaigns.",
    images: ["/og-image.jpg"],
  },
};

export default function CreatorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CreatorHero />
      <CreatorBenefits />
      <CreatorCampaignBoard />
      <CreatorProcess />
      <CreatorFAQ />
      <CreatorCTA />
    </div>
  );
}
