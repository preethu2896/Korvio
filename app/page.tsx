import { Hero } from "@/components/home/Hero";
import { BrandCreatorStatement } from "@/components/home/BrandCreatorStatement";
import { AudienceSplit } from "@/components/home/AudienceSplit";
import { ServicesMenu } from "@/components/home/ServicesMenu";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { WhyKorvioManifesto } from "@/components/home/WhyKorvioManifesto";
import { EcosystemStory } from "@/components/home/EcosystemStory";
import { Credibility } from "@/components/home/Credibility";
import { FinalCTA } from "@/components/home/FinalCTA";

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
