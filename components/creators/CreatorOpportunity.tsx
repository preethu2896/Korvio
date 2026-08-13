"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, FileText, UserCheck, Sparkles, Send } from "lucide-react";
import { motion } from "motion/react";

export function CreatorOpportunity() {
  return (
    <section className="py-20 md:py-28 relative bg-[#040512] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Illustrative Preview"
          title="How Brand Collaborations Look on Korvio"
          description="A clear, structured workflow connecting brand briefs with creator profiles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Box: Mock Brand Campaign Brief */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-indigo-500/25 space-y-6 bg-slate-950/80"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">
                    SAMPLE BRAND BRIEF
                  </div>
                  <div className="text-base font-bold text-white">
                    Premium Consumer Tech Campaign
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Active Brief
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Content Type:</span>
                <span className="font-semibold text-white">Short-form Video Reel / Review</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Target Niche:</span>
                <span className="font-semibold text-white">Tech, Productivity & Gadgets</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Deliverables:</span>
                <span className="font-semibold text-white">1x Dedicated Reel + Story Tag</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Key Requirement:</span>
                <span className="font-semibold text-white">Authentic product demonstration</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-[11px] text-indigo-200">
              💡 <span className="font-semibold">Korvio Note:</span> We match briefs with creators whose existing audience aligns with the brand's target customers.
            </div>
          </motion.div>

          {/* Right Box: Mock Creator Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/25 space-y-6 bg-slate-950/80"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-purple-300 font-bold text-xs">
                    CR
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">
                    CREATOR PROFILE
                  </div>
                  <div className="text-base font-bold text-white">
                    Verified Creator Network
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Matched Profile
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Primary Audience:</span>
                <span className="font-semibold text-white">Tech Enthusiasts & Professionals</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Content Style:</span>
                <span className="font-semibold text-white">Clean, Informative Reviews</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Brand Safety:</span>
                <span className="font-semibold text-emerald-400">Verified & Approved</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Outreach Status:</span>
                <span className="font-semibold text-purple-300">Collaboration Invitation Ready</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-[11px] text-purple-200">
              ✨ <span className="font-semibold">Illustrative UI:</span> This showcases how Korvio structures campaign briefs and creator profiles for seamless matching.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
