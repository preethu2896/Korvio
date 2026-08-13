"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";
import { motion } from "motion/react";

export function CreatorProcess() {
  const steps = [
    {
      num: "01",
      title: "Join Korvio",
      desc: "Fill out the quick creator interest form with your details, platform links, and content niche.",
    },
    {
      num: "02",
      title: "Share Your Profile",
      desc: "Help us understand your audience demographic, content style, and the brands you want to work with.",
    },
    {
      num: "03",
      title: "Discover Opportunities",
      desc: "Receive curated campaign invitations that match your creative profile and audience fit.",
    },
    {
      num: "04",
      title: "Collaborate & Grow",
      desc: "Work on brand campaigns with clear briefs, professional coordination, and reliable partnership.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative bg-[#07081a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple 4-Step Journey"
          title="How Creator Onboarding Works"
          description="Joining Korvio takes less than 2 minutes. Here is what happens after you apply."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-extrabold flex items-center justify-center text-lg shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CreatorApplyButton label="Apply Now to Join Korvio" size="lg" variant="creator" />
        </div>
      </div>
    </section>
  );
}
