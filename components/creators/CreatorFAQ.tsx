"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function CreatorFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who can join Korvio?",
      a: "Korvio is open to digital creators, influencers, micro-creators, and content makers across platforms like Instagram, YouTube, LinkedIn, and regional social media networks who create authentic content.",
    },
    {
      q: "What type of creators are you looking for?",
      a: "We look for creators who have engaged, authentic audiences in specific niches — tech, lifestyle, finance, beauty, fitness, gaming, regional culture, D2C products, and education.",
    },
    {
      q: "Is joining Korvio free for creators?",
      a: "Yes, joining Korvio is 100% free for creators. There are no registration fees, subscription costs, or hidden charges.",
    },
    {
      q: "Do I need a minimum follower count?",
      a: "No strict minimum! We value audience engagement, content quality, and niche relevance over vanity follower counts. Micro-creators with highly engaged communities are strongly encouraged to apply.",
    },
    {
      q: "How do brand collaborations work?",
      a: "When a brand campaign matches your content profile, we reach out to you with the campaign brief, deliverables, timeline, and commercial terms. If you are interested, we coordinate the partnership.",
    },
    {
      q: "How will Korvio contact me?",
      a: "After you submit the application form, our creator partnerships team will review your profile and contact you via email when matching campaign opportunities arise.",
    },
    {
      q: "What types of brands can I work with?",
      a: "We work with growing D2C brands, tech startups, consumer products, mobile apps, and regional businesses looking for genuine creator partnerships.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-32 relative bg-[#040512]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions for Creators"
          description="Everything you need to know about joining the Korvio creator network."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg focus:outline-none hover:text-purple-300 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
