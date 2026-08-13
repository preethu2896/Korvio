"use client";

import React from "react";
import Image from "next/image";
import { ecosystemStages } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "motion/react";

export function Ecosystem() {
  return (
    <section className="py-20 md:py-32 relative bg-[#07081a] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Ecosystem"
          title="How Korvio Connects the Creator Lifecycle"
          description="A complete end-to-end flow from initial brand strategy down to measurable audience outcomes."
        />

        {/* Ecosystem Nodes Pipeline */}
        <div className="mt-12">
          {/* Desktop Flow Layout */}
          <div className="hidden lg:grid grid-cols-7 gap-3 items-center relative">
            {/* Connecting line background */}
            <div className="absolute inset-x-8 top-1/2 h-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/50 to-blue-500/20 -translate-y-1/2 z-0" />

            {ecosystemStages.map((stage, idx) => {
              const isHub = stage.isHub;
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div
                    className={`rounded-2xl flex flex-col items-center justify-center transition-all ${
                      isHub
                        ? "w-28 h-28 bg-gradient-to-tr from-purple-600 to-indigo-600 border-2 border-purple-300 shadow-xl shadow-purple-600/40 scale-110"
                        : "w-20 h-20 glass-panel border border-white/15 hover:border-purple-400/40"
                    }`}
                  >
                    {isHub ? (
                      <div className="relative w-10 h-10 p-0.5">
                        <Image
                          src="/brand/logo-mark.png"
                          alt="Korvio Hub"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-purple-300">
                        0{idx + 1}
                      </span>
                    )}

                    <span
                      className={`font-bold mt-1 text-xs ${
                        isHub ? "text-white text-sm tracking-wider" : "text-slate-200"
                      }`}
                    >
                      {stage.label}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400 mt-3 font-medium max-w-[100px] leading-tight">
                    {stage.caption}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Vertical Pipeline */}
          <div className="lg:hidden flex flex-col gap-4 max-w-sm mx-auto">
            {ecosystemStages.map((stage, idx) => {
              const isHub = stage.isHub;
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`p-4 rounded-2xl flex items-center gap-4 ${
                    isHub
                      ? "bg-gradient-to-r from-purple-900/90 to-indigo-900/90 border-2 border-purple-400/50 shadow-lg"
                      : "glass-panel border border-white/10"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isHub
                        ? "bg-purple-600/30 border border-purple-300"
                        : "bg-white/5 border border-white/10"
                    }`}
                  >
                    {isHub ? (
                      <Image
                        src="/brand/logo-mark.png"
                        alt="Korvio Hub"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-xs font-bold text-purple-400">
                        0{idx + 1}
                      </span>
                    )}
                  </div>

                  <div>
                    <div
                      className={`font-bold text-sm ${
                        isHub ? "text-white text-base tracking-wider" : "text-white"
                      }`}
                    >
                      {stage.label}
                    </div>
                    <div className="text-xs text-slate-400">{stage.caption}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
