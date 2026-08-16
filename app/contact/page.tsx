import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Korvio — Start a Creator Campaign",
  description:
    "Get in touch with Korvio, an influencer marketing agency in India, to launch targeted creator campaigns or join our creator network.",
  alternates: {
    canonical: "https://korvio.in/contact/",
  },
  openGraph: {
    type: "website",
    url: "https://korvio.in/contact/",
    siteName: "Korvio — Influencer Marketing Agency",
    title: "Contact Korvio — Start a Creator Campaign",
    description:
      "Get in touch with Korvio, an influencer marketing agency in India, to launch targeted creator campaigns or join our creator network.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Korvio — Start a Creator Campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Korvio — Start a Creator Campaign",
    description:
      "Get in touch with Korvio, an influencer marketing agency in India, to launch targeted creator campaigns or join our creator network.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#080808]">
      <ContactSection />
    </main>
  );
}

