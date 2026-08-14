import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BrandCreatorStatement } from "@/components/home/BrandCreatorStatement";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { ServicesMenu } from "@/components/home/ServicesMenu";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { WhyKorvioManifesto } from "@/components/home/WhyKorvioManifesto";
import { EcosystemStory } from "@/components/home/EcosystemStory";
import { Credibility } from "@/components/home/Credibility";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Korvio — Influencer Marketing Agency Connecting Brands & Creators",
  description:
    "Korvio connects brands with relevant creators for authentic influencer marketing, creator partnerships and campaign collaborations across India.",
  alternates: {
    canonical: "https://korvio.in/",
  },
  openGraph: {
    type: "website",
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
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BrandCreatorStatement />
      <AudienceSplit />
      <ServicesMenu />
      <ProcessTimeline />
      <WhyKorvioManifesto />
      <EcosystemStory />
      <Credibility />
      <FinalCTA />
    </div>
  );
}
