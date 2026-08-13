"use client";

import React from "react";
import { motion } from "motion/react";

export function BrandCreatorStatement() {
  return (
    <section id="about" className="py-14 sm:py-16 lg:py-20 bg-[#F7F6F2] text-[#111111] relative border-b border-[#111111]/10 overflow-hidden scroll-mt-20">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 text-left">
        
        {/* ASYMMETRIC 45% / 55% DESKTOP EDITORIAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          {/* LEFT COLUMN (45%): Label & Dominant Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* 1. EDITORIAL LABEL */}
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#5B3FD0]">
              ABOUT KORVIO
            </div>

            {/* 2. MAIN HEADLINE WITH HERO TYPOGRAPHY PAIRING */}
            <h2 className="text-4xl sm:text-6xl lg:text-[clamp(4.25rem,5.5vw,5.5rem)] font-extrabold text-[#111111] tracking-tight leading-[1.05]">
              <span className="block">Creator marketing</span>
              <span className="block font-serif-italic font-normal text-[#111111]">should feel more human.</span>
            </h2>
          </motion.div>

          {/* RIGHT COLUMN (55%): Pure Focused Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-[#4A4A4A] text-lg lg:text-[19px] font-normal leading-[1.7] max-w-[540px] pt-1 lg:pt-8"
          >
            {/* PARAGRAPH 1 */}
            <p>
              Korvio is an influencer marketing agency connecting brands with creators through partnerships built around relevance, creativity and genuine audience connection.
            </p>

            {/* PARAGRAPH 2 */}
            <p>
              We believe the right creator isn&apos;t simply the one with the biggest following. It&apos;s the one whose voice, content and audience genuinely fit the brand.
            </p>

            {/* CLOSING STATEMENT */}
            <p className="text-[#111111] font-semibold text-lg lg:text-[19px] pt-2">
              That&apos;s what we&apos;re building.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
