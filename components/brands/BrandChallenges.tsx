"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { XCircle, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function BrandChallenges() {
  const comparisons = [
    {
      problem: "Endless manual DMs & unresponsive creators",
      solution: "Vetted creator network with verified interest and prompt communication.",
    },
    {
      problem: "Mismatched creator demographics & inflated follower counts",
      solution: "Audience fit & niche alignment prioritized over superficial metrics.",
    },
    {
      problem: "Vague briefs and delayed content deliverables",
      solution: "Structured campaign briefs, milestone coordination, and publishing management.",
    },
    {
      problem: "Excessive agency markups and rigid minimum retainers",
      solution: "Transparent, flexible collaboration models tailored to campaign objectives.",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative bg-[#07081a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Korvio Difference"
          title="Why Brands Choose Korvio"
          description="Traditional influencer outreach is noisy, inefficient, and hard to manage. Korvio fixes the connection layer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="h-full p-6 border border-white/10 space-y-4">
                {/* Traditional problem */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-red-500/5 border border-red-500/15 text-xs text-slate-300">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-red-300 block mb-0.5">Traditional Issue</span>
                    {item.problem}
                  </div>
                </div>

                {/* Korvio Solution */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-emerald-300 block mb-0.5">Korvio Solution</span>
                    {item.solution}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
