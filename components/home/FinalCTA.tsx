"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";
import { trackEvent } from "@/lib/analytics";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-[#0D0D0D] text-[#F7F6F2] relative overflow-hidden scroll-mt-20"
    >
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12 sm:space-y-14">

        {/* ─── 1. CENTERED HEADLINE + SUPPORTING COPY ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[820px] text-left space-y-6"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-[clamp(4.5rem,6vw,5.75rem)] font-extrabold text-[#F7F6F2] tracking-tight leading-[1.05]">
            <span className="block">Let&apos;s create the</span>
            <span className="block font-serif-italic font-normal text-[#F7F6F2]">
              right connection.
            </span>
          </h2>

          <p className="text-[#F7F6F2]/68 text-base sm:text-lg font-normal leading-relaxed max-w-[620px]">
            Whether you&apos;re a brand looking for the right creator or a creator
            looking for the right opportunity, we&apos;re here to start the
            conversation.
          </p>
        </motion.div>

        {/* ─── 2. TWO CONVERSION PATHWAYS ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* ── FOR BRANDS ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 py-8 lg:py-10 lg:pr-12 border-t border-[#F7F6F2]/10 lg:border-r lg:border-r-[#F7F6F2]/10"
          >
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
              FOR BRANDS
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F7F6F2] tracking-tight leading-tight">
              Have a campaign in mind?
            </h3>

            <p className="text-sm sm:text-base text-[#F7F6F2]/60 font-normal leading-relaxed max-w-[440px]">
              Tell us what you&apos;re looking to create and let&apos;s explore
              whether Korvio is the right fit.
            </p>

            <div className="space-y-2 pt-1">
              <Link
                href="/contact"
                onClick={() => trackEvent("work_with_korvio_clicked")}
                className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold px-7 py-3.5 rounded-full bg-[#F7F6F2] text-[#0D0D0D] hover:bg-white transition-colors group"
              >
                <span>Work With Korvio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <p className="text-xs text-[#F7F6F2]/40 font-normal">
                No commitment. Just a conversation.
              </p>
            </div>
          </motion.div>

          {/* ── FOR CREATORS ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5 py-8 lg:py-10 lg:pl-12 border-t border-[#F7F6F2]/10"
          >
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
              FOR CREATORS
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F7F6F2] tracking-tight leading-tight">
              Want to join Korvio?
            </h3>

            <p className="text-sm sm:text-base text-[#F7F6F2]/60 font-normal leading-relaxed max-w-[440px]">
              Share your profile and tell us about your content, audience and
              creative style.
            </p>

            <div className="space-y-2 pt-1">
              <CreatorApplyButton
                label="Join Korvio"
                variant="outline"
                size="lg"
                showIcon={true}
              />
              <p className="text-xs text-[#F7F6F2]/40 font-normal">
                Free to join.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
