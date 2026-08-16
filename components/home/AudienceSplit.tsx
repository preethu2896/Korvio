"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export function AudienceSplit() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#000000] text-[#F7F6F2] relative border-b border-[#F7F6F2]/10 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 space-y-10 sm:space-y-12 text-left">
        
        {/* 1. SECTION INTRO: THE KORVIO ECOSYSTEM + HEADLINE + INTRO COPY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          
          {/* LEFT COLUMN (55%): Label & Dominant Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
              THE KORVIO ECOSYSTEM
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[clamp(3.5rem,4.8vw,4.5rem)] font-extrabold text-[#F7F6F2] tracking-tight leading-[1.08]">
              <span className="block">Brands have stories to tell.</span>
              <span className="block font-serif-italic font-normal text-[#F7F6F2]">Creators have people to tell them to.</span>
            </h2>
          </motion.div>

          {/* RIGHT COLUMN (45%): Short Supporting Intro Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6 text-[#F7F6F2]/68 text-base sm:text-lg font-normal leading-relaxed max-w-[500px] pt-1 lg:pt-8"
          >
            <p>
              The best creator partnerships start with fit — the right brand, the right voice and the right audience.
            </p>
          </motion.div>

        </div>

        {/* 2. EDITORIAL THREE-ZONE COMPOSITION (NO CARDS / NO DASHBOARDS) */}
        <div className="pt-10 border-t border-[#F7F6F2]/14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ZONE 1 — FOR BRANDS (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7F6F2]">
              FOR BRANDS
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F7F6F2] tracking-tight leading-snug">
              Start with the right idea.
            </h3>

            <p className="text-sm sm:text-base text-[#F7F6F2]/68 font-normal leading-relaxed max-w-[420px]">
              Tell us what you&apos;re trying to achieve. We help shape the creator direction around your campaign.
            </p>

            <div>
              <Link
                href="/brands/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-purple-400 transition-colors group"
              >
                <span>For Brands</span>
                <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

          {/* ZONE 2 — KORVIO CENTER CONNECTION POINT (lg:col-span-2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col items-center justify-center text-center py-6 lg:py-0 space-y-2"
          >
            <div className="py-4 px-6 border-y border-[#F7F6F2]/14 flex flex-col items-center gap-1.5 max-w-[200px]">
              <Image
                src="/brand/logo-mark.png"
                alt="Korvio logo mark"
                width={24}
                height={24}
                className="object-contain shrink-0"
                style={{ width: "auto", height: "auto" }}
              />
              <span className="text-xs font-extrabold text-[#F7F6F2] tracking-wider leading-none mt-1">
                KORVIO
              </span>
              <span className="text-[9px] font-semibold text-purple-400 uppercase tracking-[0.18em]">
                THE CONNECTION
              </span>
            </div>
          </motion.div>

          {/* ZONE 3 — FOR CREATORS (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
              FOR CREATORS
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F7F6F2] tracking-tight leading-snug">
              Create with the right fit.
            </h3>

            <p className="text-sm sm:text-base text-[#F7F6F2]/68 font-normal leading-relaxed max-w-[420px]">
              Bring your voice, your audience and your point of view. We connect creators with opportunities that make sense.
            </p>

            <div>
              <Link
                href="/creators/"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors group"
              >
                <span>For Creators</span>
                <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
