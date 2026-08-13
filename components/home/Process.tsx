"use client";

import React from "react";
import { processSteps } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "motion/react";

export function Process() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative bg-[#07081a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Simple, Streamlined Campaign Execution"
          description="From initial objective definition to creator outreach and publishing, we handle the complexity so you can focus on growth."
        />

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connector line behind steps on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 -translate-y-6 z-0" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative z-10 glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300 font-extrabold text-lg shadow-lg">
                  {step.index}
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
