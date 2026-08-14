import type { Metadata } from "next";
import { CreatorHero } from "@/components/creators/CreatorHero";
import { CreatorBenefits } from "@/components/creators/CreatorBenefits";
import { CreatorCampaignBoard } from "@/components/creators/CreatorCampaignBoard";
import { CreatorProcess } from "@/components/creators/CreatorProcess";
import { CreatorFAQ } from "@/components/creators/CreatorFAQ";
import { CreatorCTA } from "@/components/creators/CreatorCTA";

export const metadata: Metadata = {
  title: "Creator Partnerships & Brand Collaborations | Korvio",
  description:
    "Join Korvio's creator network and discover relevant brand collaboration opportunities that fit your content, audience and creative style.",
  alternates: {
    canonical: "https://korvio.in/creators",
  },
  openGraph: {
    type: "website",
    url: "https://korvio.in/creators",
    siteName: "Korvio",
    title: "Creator Partnerships & Brand Collaborations | Korvio",
    description:
      "Join Korvio's creator network and discover relevant brand collaboration opportunities that fit your content, audience and creative style.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Creator Partnerships & Brand Collaborations | Korvio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator Partnerships & Brand Collaborations | Korvio",
    description:
      "Join Korvio's creator network and discover relevant brand collaboration opportunities that fit your content, audience and creative style.",
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
