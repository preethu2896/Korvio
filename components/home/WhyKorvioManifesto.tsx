"use client";

import React from "react";
import { motion } from "motion/react";

const principlesList = [
  {
    index: "01",
    title: "RELEVANCE OVER REACH",
    description: "We care about whether a creator makes sense for the campaign — not simply how large their following looks.",
  },
  {
    index: "02",
    title: "RELATIONSHIPS OVER TRANSACTIONS",
    description: "Creator partnerships should feel like collaboration, not a one-time exchange.",
  },
  {
    index: "03",
    title: "CONTEXT OVER COPY-PASTE",
    description: "Every creator, audience and campaign is different. The approach should be too.",
  },
  {
    index: "04",
    title: "LONG-TERM OVER ONE-OFF",
    description: "The goal isn't just one collaboration. It's to create relationships worth building on.",
  },
];

export function WhyKorvioManifesto() {
  return (
    <section id="why-korvio" className="py-14 sm:py-16 lg:py-20 bg-[#F7F6F2] text-[#111111] relative border-b border-[#111111]/10 overflow-hidden scroll-mt-20">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 space-y-10 sm:space-y-12 text-left">
        
        {/* 1. SECTION INTRO: WHY KORVIO + HEADLINE + INTRO COPY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          
          {/* LEFT COLUMN (60%): Label & Dominant Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#5B3FD0]">
              WHY KORVIO
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[clamp(3.5rem,4.8vw,4.5rem)] font-extrabold text-[#111111] tracking-tight leading-[1.08]">
              <span className="block">Not every creator is right for every brand.</span>
              <span className="block font-serif-italic font-normal text-[#111111]">That&apos;s the point.</span>
            </h2>
          </motion.div>

          {/* RIGHT COLUMN (40%): Short Intro Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-4 text-[#555555] text-base sm:text-lg font-normal leading-relaxed max-w-[560px] pt-1 lg:pt-8"
          >
            <p>
              Influencer marketing isn&apos;t about finding the biggest audience. It&apos;s about finding the right one.
            </p>
            <p>
              Korvio focuses on the fit between a brand, a creator, the content they make and the people who actually care about it.
            </p>
          </motion.div>

        </div>

        {/* 2. EDITORIAL MANIFESTO PRINCIPLES LIST (01 TO 04) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-[#111111]/14 divide-y divide-[#111111]/14"
        >
          {principlesList.map((principle, idx) => (
            <motion.div
              key={principle.index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * idx }}
              className="group py-6 sm:py-8 transition-colors duration-300 hover:bg-[#111111]/[0.02] px-2 sm:px-4 rounded-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start md:items-center">
                
                {/* INDEX NUMBER */}
                <div className="md:col-span-1 font-mono text-xs text-[#5B3FD0] font-bold group-hover:text-[#5B3FD0] transition-colors">
                  {principle.index}
                </div>

                {/* PRINCIPLE TITLE */}
                <div className="md:col-span-5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight group-hover:text-[#5B3FD0] group-hover:translate-x-1 transition-all">
                    {principle.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="md:col-span-6">
                  <p className="text-sm sm:text-base text-[#555555] font-normal leading-relaxed">
                    {principle.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
