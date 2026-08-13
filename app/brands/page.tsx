import type { Metadata } from "next";
import { BrandHero } from "@/components/brands/BrandHero";
import { BrandChallenges } from "@/components/brands/BrandChallenges";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Korvio for Brands — Connect With the Right Creators",
  description: "Launch targeted creator marketing campaigns with verified creator fit, managed outreach, and performance analytics.",
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
