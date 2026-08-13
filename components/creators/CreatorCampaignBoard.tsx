"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles, FileText, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function CreatorCampaignBoard() {
  return (
    <section className="py-24 md:py-36 section-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Creative Campaign Board"
          title="Designed for Content Makers, Not Spreadsheets"
          description="How Korvio presents brand campaign briefs to creators for seamless collaboration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          
          {/* Left Creative Brief Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-[#121318] border border-purple-500/30 space-y-6 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center text-purple-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">
                    CAMPAIGN BRIEF PREVIEW
                  </div>
                  <div className="text-lg font-extrabold text-white">
                    D2C Brand Launch Reel
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300">
                Active Brief
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Content Deliverable:</span>
                <span className="font-bold text-white">1x Instagram Reel + Story Series</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Campaign Niche:</span>
                <span className="font-bold text-white">Productivity & Digital Tech</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Creative Direction:</span>
                <span className="font-bold text-white">Authentic lifestyle integration</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 text-xs text-slate-300 leading-relaxed">
              ✨ <span className="font-bold text-white">Clear Requirements:</span> Every brand brief on Korvio comes with explicit deliverable scopes and commercial compensation terms.
            </div>
          </motion.div>

          {/* Right Creator Matching Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-[#0f1118] border border-indigo-500/30 space-y-6 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-purple-300 font-bold text-xs">
                    CR
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">
                    CREATOR SELECTION
                  </div>
                  <div className="text-lg font-extrabold text-white">
                    Verified Creator Alignment
                  </div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Verified Fit
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Audience Demographic:</span>
                <span className="font-bold text-white">Tech & Lifestyle Enthusiasts</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Safety & Vetting:</span>
                <span className="font-bold text-emerald-400">100% Brand Safe</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-slate-400">Coordination Status:</span>
                <span className="font-bold text-purple-300">Brief & Sample Dispatch Ready</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-slate-300 leading-relaxed">
              💡 <span className="font-bold text-white">Korvio Management:</span> We coordinate sample dispatch, draft reviews, and scheduling so you don't burn hours managing logistics.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
