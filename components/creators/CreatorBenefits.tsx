"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";
import { motion } from "motion/react";

export function CreatorBenefits() {
  const benefits = [
    {
      num: "01",
      title: "Relevant Opportunities",
      desc: "Get matched with brands that align with your content niche, audience demographic, and creative style.",
    },
    {
      num: "02",
      title: "Better Brand Fit",
      desc: "No ill-fitted pitch emails or non-existent support. We connect you with brands that value your specific voice.",
    },
    {
      num: "03",
      title: "Creator-First Communication",
      desc: "Clear campaign briefs and milestone coordination so you know exactly what deliverables are needed.",
    },
    {
      num: "04",
      title: "Long-Term Partnerships",
      desc: "We focus on ongoing relationships with brands rather than one-off transactional campaigns.",
    },
    {
      num: "05",
      title: "Support Throughout Collaboration",
      desc: "Our team manages brand feedback, product sample logistics, and commercial terms on your behalf.",
    },
  ];

  return (
    <section className="py-24 md:py-36 section-light relative border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Why Join Korvio"
          title="Built for Creators Who Value Their Voice"
          description="We take care of brand outreach and campaign coordination so you can focus on creating outstanding content."
          theme="light"
          align="left"
        />

        {/* Editorial List Layout */}
        <div className="mt-16 space-y-8">
          {benefits.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-purple-300 transition-colors shadow-sm"
            >
              <div className="flex items-start md:items-center gap-6">
                <span className="text-3xl font-black text-purple-600 shrink-0">
                  {item.num}
                </span>
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mid-Page Application CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1">
            <div className="text-lg font-extrabold text-white">Ready to discover brand collaborations?</div>
            <p className="text-xs text-slate-400">Fill out our 2-minute application form to join the network.</p>
          </div>
          <CreatorApplyButton label="Apply Now as a Creator" size="lg" variant="creator" />
        </div>

      </div>
    </section>
  );
}
