"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden section-dark korvio-diagonal-divider">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="space-y-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="korvio-badge korvio-badge-dark"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>About Korvio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-headline text-white"
          >
            BUILT TO CONNECT <br />
            <span className="text-accent-gradient">CREATORS & BRANDS THAT MATTER.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-medium"
          >
            Korvio was born out of a simple observation: creator marketing is broken by transactional spam, unverified metrics, and chaotic outreach. We are building the connection layer that puts relationship quality first.
          </motion.p>
        </div>

        {/* Editorial Story Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="editorial-frame bg-[#121318] border border-white/15 p-5 sm:p-8 lg:p-12 space-y-6 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed shadow-2xl"
        >
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 border-b border-white/10 pb-4">
            <div className="relative w-8 h-8 rounded-xl bg-purple-600/30 p-1 flex items-center justify-center shrink-0">
              <Image src="/brand/logo-mark.png" alt="Korvio Logo" width={32} height={32} />
            </div>
            <span className="text-base sm:text-xl font-extrabold text-white tracking-wider">OUR STORY & PURPOSE</span>
          </div>

          <p>
            In the modern creator economy, brands struggle to find creators who genuinely align with their values and target demographics. Meanwhile, passionate creators are overwhelmed by ill-fitted pitch emails or non-existent support.
          </p>

          <p>
            <strong className="text-white font-bold">Korvio exists as the connection layer.</strong> We handle the research, outreach coordination, campaign brief structuring, and delivery tracking so that both brands and creators can thrive together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-semibold uppercase tracking-wider">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-purple-300 text-sm font-extrabold">FOR CREATORS</div>
              <p className="text-slate-400 font-normal normal-case text-xs leading-relaxed">Respect for your creative freedom, authentic brand fit, and long-term partnership opportunities.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-indigo-300 text-sm font-extrabold">FOR BRANDS</div>
              <p className="text-slate-400 font-normal normal-case text-xs leading-relaxed">Curated creator matchmaking, managed coordination, and campaign brief clarity.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
