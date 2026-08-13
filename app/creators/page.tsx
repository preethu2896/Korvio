import type { Metadata } from "next";
import { CreatorHero } from "@/components/creators/CreatorHero";
import { CreatorBenefits } from "@/components/creators/CreatorBenefits";
import { CreatorCampaignBoard } from "@/components/creators/CreatorCampaignBoard";
import { CreatorProcess } from "@/components/creators/CreatorProcess";
import { CreatorFAQ } from "@/components/creators/CreatorFAQ";
import { CreatorCTA } from "@/components/creators/CreatorCTA";

export const metadata: Metadata = {
  title: "Join Korvio — Creator Brand Collaborations",
  description: "Connect with authentic brands that fit your content, audience, and creative vision. Join the Korvio creator network today.",
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
