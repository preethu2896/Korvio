"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-slate-950 text-white">
      {/* 1. FULL-BLEED BACKGROUND IMAGE (POSITIONED LOWER / SHIFTED DOWN) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero-image1.png"
          alt="Korvio creator executing an influencer marketing campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[85%_20%] lg:object-[right_20%]"
        />
      </div>

      {/* 2. SUBTLE LOCALIZED GRADIENT (LEFT SIDE READABILITY OVERLAY ONLY) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent w-full lg:w-[55%]"
      />

      {/* 3. HERO CONTENT - FULLY LEFT ALIGNED */}
      <div className="relative z-20 w-full max-w-[1440px] px-6 sm:px-12 lg:pl-16 lg:pr-8 pt-28 pb-20 sm:pt-36 sm:pb-24 text-left ml-0">
        <div className="max-w-[820px] text-left ml-0">
          
          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-purple-300 mb-3 sm:mb-4 text-left ml-0"
          >
            INFLUENCER MARKETING AGENCY • KARNATAKA, INDIA
          </motion.div>

          {/* MAIN HEADLINE (MODERATELY LARGER SIZING, DESKTOP NO-WRAP LINE 1) */}
          <div className="space-y-1 sm:space-y-1.5 mb-5 sm:mb-6 text-left ml-0">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-[clamp(4.25rem,6vw,5.75rem)] font-extrabold text-white tracking-tight leading-[1.05] sm:whitespace-normal lg:whitespace-nowrap text-left ml-0"
            >
              Creators × Brands.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-4xl sm:text-6xl lg:text-[clamp(4.5rem,6.2vw,6rem)] font-serif-italic text-white tracking-normal leading-[1.05] text-left ml-0"
            >
              Built to Connect.
            </motion.div>
          </div>

          {/* SUPPORTING COPY */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg lg:text-[18px] text-slate-200 font-normal leading-relaxed max-w-[480px] mb-7 sm:mb-8 text-left ml-0"
          >
            Karnataka-based influencer marketing agency connecting brands with relevant creators for authentic partnerships and campaign collaborations across India.
          </motion.p>

          {/* CTAs - FULLY LEFT ALIGNED */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-row items-center justify-start gap-3.5 sm:gap-4 ml-0"
          >
            {/* PRIMARY CTA */}
            <Link
              href="/brands/"
              onClick={() => trackEvent("work_with_korvio_clicked")}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-95 group text-left"
            >
              <span>Work With Korvio</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* SECONDARY CTA */}
            <CreatorApplyButton
              label="Join Korvio"
              size="md"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/60 text-xs sm:text-sm px-6 py-3 rounded-xl backdrop-blur-xs transition-all text-left"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
