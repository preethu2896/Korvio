"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    index: "01",
    title: "TELL US WHAT YOU NEED",
    description: "Share your campaign, brand or collaboration goals with us.",
  },
  {
    index: "02",
    title: "WE FIND THE RIGHT FIT",
    description: "We identify creators whose content, audience and style align with what you're looking for.",
  },
  {
    index: "03",
    title: "WE CONNECT & COORDINATE",
    description: "We handle the communication, collaboration details and campaign coordination.",
  },
  {
    index: "04",
    title: "LAUNCH & BUILD",
    description: "Once everything is aligned, the collaboration comes to life — with room to build something longer term.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="how-it-works" className="py-14 sm:py-16 lg:py-20 bg-[#111111] text-[#F7F6F2] relative border-b border-[#F7F6F2]/10 overflow-hidden scroll-mt-20">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 space-y-10 sm:space-y-12 text-left">
        
        {/* 1. SECTION INTRO: HOW IT WORKS + HEADLINE + INTRO COPY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          
          {/* LEFT COLUMN (60%): Label & Main Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
              HOW IT WORKS
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[clamp(3.5rem,4.8vw,4.5rem)] font-extrabold text-[#F7F6F2] tracking-tight leading-[1.08]">
              <span className="block">Simple from the first conversation</span>
              <span className="block font-serif-italic font-normal text-[#F7F6F2]">to the final collaboration.</span>
            </h2>
          </motion.div>

          {/* RIGHT COLUMN (40%): Short Intro Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6 text-[#F7F6F2]/68 text-base sm:text-lg font-normal leading-relaxed max-w-[560px] pt-1 lg:pt-8"
          >
            <p>
              No complicated process. No unnecessary back and forth. Just a clear path from an idea to the right creator partnership.
            </p>
          </motion.div>

        </div>

        {/* 2. EDITORIAL 4-STEP HORIZONTAL SEQUENCE (01 TO 04) */}
        <div className="pt-10 border-t border-[#F7F6F2]/16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          {steps.map((step, idx) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="space-y-4 pt-4 border-t border-[#F7F6F2]/16 lg:border-t-0"
            >
              <div className="font-mono text-lg sm:text-xl font-bold text-purple-400">
                {step.index}
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#F7F6F2] tracking-tight leading-snug">
                {step.title}
              </h3>

              <p className="text-sm sm:text-base text-[#F7F6F2]/68 font-normal leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3. UNDERSTATED SUBTLE TEXT CTA AT BOTTOM */}
        <div className="pt-4 flex justify-start">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#F7F6F2] hover:text-purple-400 transition-colors group"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4 text-[#F7F6F2] group-hover:text-purple-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
