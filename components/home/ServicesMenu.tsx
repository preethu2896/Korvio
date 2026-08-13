"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

/* ─── Service data ─────────────────────────────────────── */
const services = [
  {
    index: "01",
    title: "Creator Discovery",
    description:
      "Finding creators whose content, audience and style align with the campaign.",
    dark: true,
  },
  {
    index: "02",
    title: "Campaign Strategy",
    description:
      "Turning campaign goals into a creator direction that feels clear and relevant.",
    dark: false,
  },
  {
    index: "03",
    title: "Creator Outreach",
    description:
      "Handling the initial connection and communication with selected creators.",
    dark: true,
  },
  {
    index: "04",
    title: "Content Campaigns",
    description:
      "Helping shape collaborations around content that feels natural to the creator.",
    dark: false,
  },
  {
    index: "05",
    title: "Campaign Coordination",
    description:
      "Keeping communication, timelines and deliverables moving smoothly.",
    dark: true,
  },
  {
    index: "06",
    title: "Performance Insights",
    description:
      "Understanding what worked and what can be improved for future campaigns.",
    dark: false,
  },
];

/* ─── ServicesMenu ─────────────────────────────────────── */
export function ServicesMenu() {
  return (
    <section id="services" className="pt-14 pb-0 sm:pt-16 lg:pt-20 bg-[#F7F6F2] text-[#111111] relative border-b border-[#111111]/10 overflow-visible scroll-mt-20">
      {/* ──── Section Intro ──── */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 text-left pb-6 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          {/* Left: Label + Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#5B3FD0]">
              WHAT WE DO
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[clamp(3.5rem,4.8vw,4.5rem)] font-extrabold text-[#111111] tracking-tight leading-[1.08]">
              <span className="block">From finding the right creator</span>
              <span className="block font-serif-italic font-normal text-[#111111]">
                to making the collaboration happen.
              </span>
            </h2>
          </motion.div>

          {/* Right: Intro copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6 text-[#555555] text-base sm:text-lg font-normal leading-relaxed max-w-[560px] pt-1 lg:pt-8"
          >
            <p>
              Korvio helps brands navigate the creator partnership journey —
              from discovery and strategy to outreach, coordination and campaign
              execution.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ──── ScrollStack Cards ──── */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16">
        <ScrollStack
          itemDistance={90}
          itemScale={0.025}
          itemStackDistance={28}
          stackPosition="18%"
          scaleEndPosition="10%"
          baseScale={0.9}
          rotationAmount={0}
          blurAmount={0}
          useWindowScroll={true}
        >
          {services.map((service) => (
            <ScrollStackItem key={service.index}>
              <div
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] flex flex-col justify-between border ${
                  service.dark
                    ? "bg-[#111111] text-[#F7F6F2] border-[#F7F6F2]/10"
                    : "bg-[#F7F6F2] text-[#111111] border-[#111111]/14"
                }`}
              >
                {/* Top: Number + Title */}
                <div className="space-y-4 sm:space-y-5">
                  <div
                    className={`font-mono text-sm sm:text-base font-bold ${
                      service.dark ? "text-purple-400" : "text-[#5B3FD0]"
                    }`}
                  >
                    {service.index}
                  </div>

                  <h3
                    className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] ${
                      service.dark ? "text-[#F7F6F2]" : "text-[#111111]"
                    }`}
                  >
                    {service.title.toUpperCase()}
                  </h3>
                </div>

                {/* Bottom: Description + Arrow */}
                <div className="flex items-end justify-between gap-8 pt-8">
                  <p
                    className={`text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-[500px] ${
                      service.dark
                        ? "text-[#F7F6F2]/68"
                        : "text-[#555555]"
                    }`}
                  >
                    {service.description}
                  </p>

                  <ArrowRight
                    className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${
                      service.dark
                        ? "text-[#F7F6F2]/40"
                        : "text-[#111111]/40"
                    }`}
                  />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

      {/* ──── Subtle CTA after stack ──── */}
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 pt-8 pb-14 sm:pb-16 lg:pb-20">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#111111] hover:text-[#5B3FD0] transition-colors group"
        >
          <span>Have a campaign in mind? Let&apos;s talk</span>
          <ArrowRight className="w-4 h-4 text-[#111111] group-hover:text-[#5B3FD0] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
