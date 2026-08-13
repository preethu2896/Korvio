import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhyKorvio } from "@/components/home/WhyKorvio";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Korvio — Creators × Brands. Built to Connect.",
  description: "Learn about Korvio's mission to reinvent creator-brand partnerships through authentic alignment and smart campaign execution.",
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
