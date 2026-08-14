import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhyKorvio } from "@/components/home/WhyKorvio";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Korvio | Connecting Brands & Creators",
  description:
    "Learn what Korvio stands for and why we're building a more relevant connection between brands, creators and their audiences.",
  alternates: {
    canonical: "https://korvio.in/about",
  },
  openGraph: {
    type: "website",
    url: "https://korvio.in/about",
    siteName: "Korvio",
    title: "About Korvio | Connecting Brands & Creators",
    description:
      "Learn what Korvio stands for and why we're building a more relevant connection between brands, creators and their audiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Korvio | Connecting Brands & Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Korvio | Connecting Brands & Creators",
    description:
      "Learn what Korvio stands for and why we're building a more relevant connection between brands, creators and their audiences.",
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
