import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, mailtoUrl, phoneUrl, whatsappUrl } from "@/config/site";
import { services, processSteps } from "@/config/content";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";
import { Sparkles, ArrowRight, Building2, Users, Mail, Phone, MessageCircle, MapPin, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "What is Korvio? — Karnataka Influencer Marketing Agency | Korvio",
  description:
    "Learn what Korvio does as a Karnataka-based influencer marketing agency connecting brands with creators across India for authentic campaign collaborations.",
  alternates: {
    canonical: "https://korvio.in/korvio/",
  },
  openGraph: {
    type: "article",
    url: "https://korvio.in/korvio/",
    siteName: "Korvio — Influencer Marketing Agency",
    title: "What is Korvio? — Karnataka Influencer Marketing Agency | Korvio",
    description:
      "Learn what Korvio does as a Karnataka-based influencer marketing agency connecting brands with creators across India for authentic campaign collaborations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "What is Korvio? — Karnataka Influencer Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Korvio? — Karnataka Influencer Marketing Agency | Korvio",
    description:
      "Learn what Korvio does as a Karnataka-based influencer marketing agency connecting brands with creators across India for authentic campaign collaborations.",
    images: ["/og-image.jpg"],
  },
};

export default function KorvioKnowledgePage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://korvio.in/korvio/#webpage",
    url: "https://korvio.in/korvio/",
    name: "What is Korvio? — Karnataka Influencer Marketing Agency",
    description:
      "Official entity overview explaining how Korvio, a Karnataka-based influencer marketing agency, connects brands with creators across India.",
    isPartOf: {
      "@id": "https://korvio.in/#website",
    },
    about: {
      "@id": "https://korvio.in/#organization",
    },
    inLanguage: "en-US",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://korvio.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "What is Korvio?",
        item: "https://korvio.in/korvio/",
      },
    ],
  };

  const commonQuestions = [
    {
      q: "What is Korvio?",
      a: "Korvio is a Karnataka-based influencer marketing agency connecting brands with relevant creators across India for authentic partnerships and campaign collaborations. Korvio serves as the connection layer between brands seeking targeted audience reach and creators seeking structured brand opportunities.",
    },
    {
      q: "What does Korvio do?",
      a: "Korvio provides end-to-end creator marketing coordination across India. Services include creator discovery based on audience fit, campaign strategy design, creator outreach, campaign management, content brief coordination, and performance tracking.",
    },
    {
      q: "Is Korvio a creator network?",
      a: "Yes, Korvio operates a creator network connecting digital creators and content makers across India with brands looking for authentic campaign collaborations aligned with their niche and target audience.",
    },
    {
      q: "Does Korvio work with brands?",
      a: "Yes, Korvio works directly with brands seeking influencer marketing campaigns across India. Korvio identifies relevant creators, manages outreach communication, structures campaign briefs, and oversees project execution.",
    },
    {
      q: "How can a brand start a campaign with Korvio?",
      a: "Brands can start a campaign by submitting a brand inquiry through the Korvio website contact page or by emailing hello.korvio@gmail.com. Korvio then reviews the campaign goals and identifies relevant creator matches.",
    },
    {
      q: "How can a creator join Korvio?",
      a: "Creators can apply to join the Korvio creator network by filling out the official creator application form available on the Korvio website. Joining Korvio is 100% free for creators.",
    },
    {
      q: "Where does Korvio operate?",
      a: "Korvio operates from Karnataka and works with brands and creators across India. The agency connects brands with relevant creators nationwide for influencer marketing campaigns, creator partnerships, and authentic brand collaborations.",
    },
    {
      q: "Which Korvio is this?",
      a: "Korvio is an influencer marketing agency focused on connecting brands with relevant creators across India. It should not be confused with unrelated businesses or digital products that use the Korvio name.",
    },
    {
      q: "How can I contact Korvio?",
      a: "You can contact Korvio via email at hello.korvio@gmail.com, by phone or WhatsApp at +91 7975923914, or through the contact form on korvio.in/contact/.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="min-h-screen bg-[#0a0a0c] text-slate-100 pt-28 sm:pt-36 pb-20 sm:pb-28">
        
        {/* HEADER / HERO SECTION */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left mb-16">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-xs text-slate-400 font-medium flex items-center gap-2">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">What is Korvio?</span>
          </nav>

          <div className="korvio-badge korvio-badge-dark">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Official Entity Information</span>
          </div>

          <h1 className="text-headline text-white font-extrabold tracking-tight">
            What is Korvio?
          </h1>

          {/* Opening Direct Answer (40-70 words) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121318] border border-purple-500/20 shadow-xl space-y-3">
            <p className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed">
              Korvio is a Karnataka-based influencer marketing agency connecting brands with relevant creators across India for authentic partnerships and campaign collaborations. Korvio helps brands discover suitable creators, coordinate influencer campaigns, and build meaningful creator partnerships while giving creators access to brand collaboration opportunities.
            </p>
          </div>

        </header>

        {/* MAIN BODY SECTIONS */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* SECTION 1: WHAT DOES KORVIO DO? */}
          <section className="space-y-4 border-b border-white/10 pb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-purple-500 rounded-full inline-block" />
              What does Korvio do?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Korvio handles the strategy, matchmaking, communication, and management required to execute influencer marketing campaigns in India. Rather than treating influencer marketing as one-off transactions, Korvio acts as the connection layer between brands and creators to ensure mutual value and campaign success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="p-4 rounded-xl bg-[#121318] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2.5 text-purple-400">
                      <Icon className="w-4 h-4" />
                      <h3 className="text-sm font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION 2: HOW DOES KORVIO WORK? */}
          <section className="space-y-4 border-b border-white/10 pb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-blue-500 rounded-full inline-block" />
              How does Korvio work?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Korvio follows a four-step process to connect brands with relevant creators and manage collaborations from initial brief to final campaign outcomes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {processSteps.map((step) => (
                <div key={step.index} className="p-5 rounded-xl bg-[#121318] border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-purple-400 tracking-wider">STEP {step.index}</span>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: WHO IS KORVIO FOR? */}
          <section className="space-y-6 border-b border-white/10 pb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-indigo-500 rounded-full inline-block" />
              Who is Korvio for?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Korvio serves two primary stakeholders in the creator economy across India:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* For Brands */}
              <div className="p-6 rounded-2xl bg-[#121318] border border-indigo-500/20 space-y-4">
                <div className="flex items-center gap-3 text-indigo-400">
                  <Building2 className="w-5 h-5" />
                  <h3 className="text-xl font-bold text-white">For Brands</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Korvio is for consumer brands, startups, and companies looking to run influencer marketing campaigns with creators who genuinely align with their target audience and commercial goals in India.
                </p>
                <div className="pt-2">
                  <Link
                    href="/brands/"
                    className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Explore Korvio for Brands</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* For Creators */}
              <div className="p-6 rounded-2xl bg-[#121318] border border-purple-500/20 space-y-4">
                <div className="flex items-center gap-3 text-purple-400">
                  <Users className="w-5 h-5" />
                  <h3 className="text-xl font-bold text-white">For Creators</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Korvio is for digital creators and content makers across India seeking structured brand opportunities, fair collaboration support, and partnerships that respect their creative freedom.
                </p>
                <div className="pt-2">
                  <Link
                    href="/creators/"
                    className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Explore Korvio for Creators</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: HOW CAN BRANDS WORK WITH KORVIO? */}
          <section className="space-y-4 border-b border-white/10 pb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              How can brands work with Korvio?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Brands can get started by submitting their campaign requirements through the official contact form or getting in touch with the Korvio team directly. Korvio reviews brand goals, identifies matching creators, handles outreach communication, coordinates brief structuring, and tracks campaign progress.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/brands/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all"
              >
                <span>For Brands Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all"
              >
                <span>Contact Korvio Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* SECTION 5: HOW CAN CREATORS JOIN KORVIO? */}
          <section className="space-y-4 border-b border-white/10 pb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              How can creators join Korvio?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Digital creators across India can apply to join Korvio by completing the free online creator application form. Once registered, creator profiles are evaluated for brand campaign matching based on content niche, platform metrics, and audience relevance.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <CreatorApplyButton
                label="Apply as a Creator"
                size="md"
                variant="creator"
              />
              <Link
                href="/creators/"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition-colors"
              >
                <span>Learn about Creator benefits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* SECTION 6: WHERE DOES KORVIO OPERATE? */}
          <section className="space-y-4 border-b border-white/10 pb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <MapPin className="w-6 h-6 text-purple-400" />
              Where does Korvio operate?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Korvio operates from Karnataka and works with brands and creators across India. The agency connects brands with relevant creators nationwide for influencer marketing campaigns, creator partnerships, and authentic brand collaborations.
            </p>
          </section>

          {/* SECTION 7: WHICH KORVIO IS THIS? */}
          <section className="space-y-4 border-b border-white/10 pb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span className="w-2 h-6 bg-purple-500 rounded-full inline-block" />
              Which Korvio is this?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Korvio is an influencer marketing agency focused on connecting brands with relevant creators across India. It should not be confused with unrelated businesses or digital products that use the Korvio name.
            </p>
          </section>

          {/* SECTION 7: WHY DO BRANDS WORK WITH KORVIO? */}
          <section className="space-y-4 border-b border-white/10 pb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why do brands work with Korvio?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Brands work with Korvio because of Korvio&apos;s focus on genuine audience fit rather than follower vanity metrics alone. Korvio provides personal attention to campaign goals, manages creator communications, and ensures clear brief execution.
            </p>
          </section>

          {/* SECTION 8: WHY DO CREATORS JOIN KORVIO? */}
          <section className="space-y-4 border-b border-white/10 pb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why do creators join Korvio?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Creators join Korvio because registration is 100% free, brand matches are curated for authentic content alignment, and Korvio supports creators with clear briefs and professional coordination.
            </p>
          </section>

          {/* SECTION 9: HOW CAN I CONTACT KORVIO? */}
          <section className="space-y-6 border-b border-white/10 pb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              How can I contact Korvio?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              You can contact Korvio through the official channels listed below:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href={mailtoUrl}
                className="p-4 rounded-xl bg-[#121318] border border-white/10 flex flex-col gap-2 hover:border-purple-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-purple-400 text-xs font-bold">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </div>
                <span className="text-sm font-semibold text-white">{siteConfig.contact.email}</span>
              </a>

              <a
                href={phoneUrl}
                className="p-4 rounded-xl bg-[#121318] border border-white/10 flex flex-col gap-2 hover:border-purple-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-purple-400 text-xs font-bold">
                  <Phone className="w-4 h-4" />
                  <span>Phone</span>
                </div>
                <span className="text-sm font-semibold text-white">{siteConfig.contact.phoneFormatted}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#121318] border border-white/10 flex flex-col gap-2 hover:border-purple-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-purple-400 text-xs font-bold">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </div>
                <span className="text-sm font-semibold text-white">+91 7975923914</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-400">
              <span>Official Social Handles:</span>
              <a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                Instagram: {siteConfig.contact.instagramHandle}
              </a>
              <span>•</span>
              <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                LinkedIn: {siteConfig.contact.linkedinHandle}
              </a>
              <span>•</span>
              <a href={siteConfig.contact.x} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                X: {siteConfig.contact.xHandle}
              </a>
            </div>
          </section>

          {/* COMMON QUESTIONS ABOUT KORVIO (VISIBLE Q&A SECTION) */}
          <section className="space-y-8 pt-4">
            <div className="space-y-3">
              <div className="korvio-badge korvio-badge-dark">
                <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
                <span>Direct Answer Reference</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Common Questions About Korvio
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Factual answers to frequently asked questions about Korvio, creator marketing, and campaign partnerships across India.
              </p>
            </div>

            <div className="space-y-4">
              {commonQuestions.map((qa, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#121318] border border-white/10 space-y-2">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="text-purple-400 font-mono text-sm">Q:</span> {qa.q}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed pl-6">
                    {qa.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CROSS-LINKING NAVIGATION FOOTER */}
          <div className="pt-12 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">← Back to Korvio Home</Link>
            <div className="flex items-center gap-4">
              <Link href="/about/" className="text-slate-400 hover:text-purple-400 transition-colors">About Korvio</Link>
              <Link href="/brands/" className="text-slate-400 hover:text-indigo-400 transition-colors">For Brands</Link>
              <Link href="/creators/" className="text-slate-400 hover:text-purple-400 transition-colors">For Creators</Link>
              <Link href="/contact/" className="text-slate-400 hover:text-white transition-colors">Contact Korvio</Link>
            </div>
          </div>

        </div>

      </article>
    </>
  );
}
