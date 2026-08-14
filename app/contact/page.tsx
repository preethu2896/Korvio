import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Korvio | Brand & Creator Partnerships",
  description:
    "Looking to work with creators or join the Korvio network? Get in touch with Korvio to discuss brand campaigns and creator partnerships.",
  alternates: {
    canonical: "https://korvio.in/contact",
  },
  openGraph: {
    type: "website",
    url: "https://korvio.in/contact",
    siteName: "Korvio",
    title: "Contact Korvio | Brand & Creator Partnerships",
    description:
      "Looking to work with creators or join the Korvio network? Get in touch with Korvio to discuss brand campaigns and creator partnerships.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Korvio | Brand & Creator Partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Korvio | Brand & Creator Partnerships",
    description:
      "Looking to work with creators or join the Korvio network? Get in touch with Korvio to discuss brand campaigns and creator partnerships.",
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

