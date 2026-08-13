"use client";

import React from "react";
import { pillars } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { motion } from "motion/react";
import { Sparkles, Shield, Heart, Compass } from "lucide-react";

export function WhyKorvio() {
  return (
    <section id="about" className="py-20 md:py-32 relative bg-[#040512] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-indigo-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/25">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Why Korvio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Reinventing Creator-Brand Relationships.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              We believe creator marketing works best when built on authentic alignment, personal attention, and regional context — not transactional spam.
            </p>

            <div className="p-6 rounded-2xl glass-panel border border-purple-500/20 bg-purple-950/10 space-y-2">
              <div className="text-sm font-bold text-white">Our Philosophy</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every brand has a unique story; every creator has a unique voice. Korvio exists to make those two connect seamlessly.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 4 Core Value Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                >
                  <Card className="h-full p-6 border border-white/10 hover:border-purple-500/30">
                    <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
