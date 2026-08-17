import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Korvio — Karnataka Influencer Marketing Agency",
  description:
    "Get in touch with Korvio, a Karnataka-based influencer marketing agency connecting brands with creators across India for targeted creator campaigns.",
  alternates: {
    canonical: "https://korvio.in/contact/",
  },
  openGraph: {
    type: "website",
    url: "https://korvio.in/contact/",
    siteName: "Korvio — Influencer Marketing Agency",
    title: "Contact Korvio — Karnataka Influencer Marketing Agency",
    description:
      "Get in touch with Korvio, a Karnataka-based influencer marketing agency connecting brands with creators across India for targeted creator campaigns.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Korvio — Karnataka Influencer Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Korvio — Karnataka Influencer Marketing Agency",
    description:
      "Get in touch with Korvio, a Karnataka-based influencer marketing agency connecting brands with creators across India for targeted creator campaigns.",
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

