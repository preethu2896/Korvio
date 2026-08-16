"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { trackEvent } from "@/lib/analytics";

/* ─── Brand process steps ──────────────────────────────── */
const brandSteps = [
  {
    index: "01",
    title: "SHARE THE BRIEF",
    description:
      "Tell us about your campaign, audience, goals and what you're looking to create.",
  },
  {
    index: "02",
    title: "FIND THE FIT",
    description:
      "We identify creators whose content and audience align with the campaign.",
  },
  {
    index: "03",
    title: "CONNECT & COORDINATE",
    description:
      "We help manage communication, collaboration details and campaign coordination.",
  },
  {
    index: "04",
    title: "BRING IT TO LIFE",
    description:
      "The selected creators create and publish according to the agreed campaign direction.",
  },
];

/* ─── Campaign brief attributes (conceptual) ───────────── */
const briefAttributes = [
  { label: "GOAL", value: "Build awareness" },
  { label: "CATEGORY", value: "Fashion / Beauty / Lifestyle" },
  { label: "AUDIENCE", value: "Relevant audience" },
  { label: "CREATIVE DIRECTION", value: "Authentic creator-led content" },
];

export function Credibility() {
  return (
    <section
      id="brands"
      className="py-14 sm:py-16 lg:py-20 bg-[#F7F6F2] text-[#111111] relative border-b border-[#111111]/10 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 space-y-10 sm:space-y-12 text-left">

        {/* ─── 1. ASYMMETRIC EDITORIAL HEADER ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

          {/* LEFT: Label + Headline + Copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#5B3FD0]">
                FOR BRANDS
              </div>
              <Link
                href="/brands/"
                className="text-xs font-bold text-[#5B3FD0] hover:text-[#4329b3] transition-colors group inline-flex items-center gap-1"
              >
                <span>For Brands</span>
                <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-[clamp(4.25rem,5.5vw,5.5rem)] font-extrabold text-[#111111] tracking-tight leading-[1.05]">
              <span className="block">Your campaign deserves</span>
              <span className="block font-serif-italic font-normal text-[#111111]">
                the right creators.
              </span>
            </h2>

            <div className="space-y-4 text-[#555555] text-base sm:text-lg font-normal leading-relaxed max-w-[540px]">
              <p>
                Tell us what you&apos;re trying to achieve. We&apos;ll help you find
                creators across India whose content, audience and creative style make sense
                for the campaign.
              </p>
              <p>
                From discovery and outreach to coordination and execution,
                Korvio keeps the collaboration focused from start to finish.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-2">
              <Link
                href="/contact/"
                onClick={() => trackEvent("work_with_korvio_clicked")}
                className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold px-7 py-3.5 rounded-full bg-[#111111] text-[#F7F6F2] hover:bg-[#222222] transition-colors group"
              >
                <span>Work With Korvio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <p className="text-xs sm:text-[13px] text-[#555555]/70 font-normal leading-relaxed max-w-[420px]">
                Tell us about your campaign and we&apos;ll take it from there.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Brand Image Visual */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#111111]/12 max-w-[480px] mx-auto lg:max-w-none shadow-xl">
              <Image
                src="/brand.jpg"
                alt="Korvio brand team reviewing creator campaign directions for influencer marketing"
                width={1122}
                height={1402}
                className="w-full h-auto object-cover object-center rounded-2xl sm:rounded-3xl"
                priority
              />

              {/* Subtle Korvio Identity Label */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 flex items-center pointer-events-none z-10">
                <div className="flex items-center gap-3 bg-[#F7F6F2]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#111111]/10 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-[#5B3FD0]/10 border border-[#5B3FD0]/20 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-extrabold text-[#5B3FD0] tracking-wider">K</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#111111] uppercase tracking-wider leading-none">KORVIO</div>
                    <div className="text-[9px] text-[#5B3FD0] font-semibold uppercase tracking-[0.15em] leading-none mt-1">CREATOR FIT</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ─── 2. BRAND PROCESS (4 STEPS) ─── */}
        <div className="pt-8 border-t border-[#111111]/14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {brandSteps.map((step, idx) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className="space-y-3"
            >
              <div className="font-mono text-sm font-bold text-[#5B3FD0]">
                {step.index}
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#111111] tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-[#555555] font-normal leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ─── 3. SUBTLE SECONDARY TEXT LINK ─── */}
        <div className="flex justify-start">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#111111] hover:text-[#5B3FD0] transition-colors group"
          >
            <span>Tell us about your campaign</span>
            <ArrowRight className="w-4 h-4 text-[#111111] group-hover:text-[#5B3FD0] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
