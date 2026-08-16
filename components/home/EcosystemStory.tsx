"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";

/* ─── Creator journey steps ────────────────────────────── */
const creatorSteps = [
  {
    index: "01",
    title: "JOIN",
    description: "Submit your creator profile.",
  },
  {
    index: "02",
    title: "GET DISCOVERED",
    description: "We understand your content, audience and style.",
  },
  {
    index: "03",
    title: "FIND THE RIGHT FIT",
    description: "When a relevant opportunity comes up, we can connect the dots.",
  },
];

/* ─── Profile attributes (conceptual, not real data) ───── */
const profileAttributes = [
  { label: "CONTENT", value: "Fashion / Lifestyle" },
  { label: "AUDIENCE", value: "Community-led" },
  { label: "STYLE", value: "Visual storytelling" },
  { label: "CATEGORY", value: "Fashion & Lifestyle" },
];

export function EcosystemStory() {
  return (
    <section
      id="creators"
      className="py-14 sm:py-16 lg:py-20 bg-[#111111] text-[#F7F6F2] relative border-b border-[#F7F6F2]/10 overflow-hidden"
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
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
                FOR CREATORS
              </div>
              <Link
                href="/creators/"
                className="text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors group inline-flex items-center gap-1"
              >
                <span>For Creators</span>
                <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-[clamp(4.25rem,5.5vw,5.5rem)] font-extrabold text-[#F7F6F2] tracking-tight leading-[1.05]">
              <span className="block">Your content.</span>
              <span className="block font-serif-italic font-normal text-[#F7F6F2]">
                The right opportunities.
              </span>
            </h2>

            <div className="space-y-4 text-[#F7F6F2]/68 text-base sm:text-lg font-normal leading-relaxed max-w-[540px]">
              <p>
                Join Korvio&apos;s growing creator network across India and put your content in
                front of opportunities that align with your voice, audience and
                creative style.
              </p>
              <p>
                We&apos;re building relationships with creators across categories,
                niches and regions — one relevant collaboration at a time.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-2">
              <CreatorApplyButton
                label="Join Korvio"
                variant="primary"
                size="lg"
              />
              <p className="text-xs sm:text-[13px] text-[#F7F6F2]/50 font-normal leading-relaxed max-w-[420px]">
                Free to join. We&apos;ll review your profile and reach out when
                there&apos;s a relevant fit.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Creator Image Visual */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#F7F6F2]/10 max-w-[480px] mx-auto lg:max-w-none shadow-2xl">
              <Image
                src="/creator.jpg"
                alt="Korvio creator network member executing an influencer marketing campaign"
                width={1122}
                height={1402}
                className="w-full h-auto object-cover object-center rounded-2xl sm:rounded-3xl"
                priority
              />

              {/* Subtle Korvio Identity Overlay */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 flex items-center pointer-events-none z-10">
                <div className="flex items-center gap-3 bg-[#111111]/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#F7F6F2]/14">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/30 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-extrabold text-purple-400 tracking-wider">K</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#F7F6F2] uppercase tracking-wider leading-none">KORVIO</div>
                    <div className="text-[9px] text-purple-400 font-semibold uppercase tracking-[0.15em] leading-none mt-1">OPPORTUNITY FIT</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ─── 2. CREATOR JOURNEY (3 STEPS) ─── */}
        <div className="pt-8 border-t border-[#F7F6F2]/10 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {creatorSteps.map((step, idx) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className="space-y-3"
            >
              <div className="font-mono text-sm font-bold text-purple-400">
                {step.index}
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#F7F6F2] tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-[#F7F6F2]/60 font-normal leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
