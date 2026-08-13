import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Work With Korvio | Influencer Marketing & Creator Partnerships",
  description:
    "Work with Korvio to connect your brand with relevant creators and build authentic influencer marketing campaigns.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#080808]">
      <ContactSection />
    </main>
  );
}

