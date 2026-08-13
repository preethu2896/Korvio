"use client";

import React from "react";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function CreatorCTA() {
  return (
    <section className="py-20 md:py-32 relative bg-gradient-to-b from-[#07081a] to-[#040511] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/25">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Ready to Grow Your Creator Career?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Join the Korvio Creator Network Today.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Fill out our quick 2-minute application form to be considered for upcoming brand campaigns.
          </p>

          <div className="pt-4">
            <CreatorApplyButton label="Apply Now to Join Korvio" size="lg" variant="creator" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
