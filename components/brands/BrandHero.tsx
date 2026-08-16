"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";
import { Building2, ArrowRight, CheckCircle2, Target } from "lucide-react";
import { motion } from "motion/react";
import { trackEvent } from "@/lib/analytics";

export function BrandHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden section-dark korvio-diagonal-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: B2B Brand Agency Headline */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="korvio-badge korvio-badge-dark text-indigo-300 border-indigo-500/30"
            >
              <Building2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Influencer Marketing Strategy for Brands</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-headline text-white"
            >
              REACH AUDIENCES THAT CARE <br />
              THROUGH <span className="text-accent-gradient">CREATORS WHO FIT.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Stop burning campaign budgets on unvetted influencer outreach. Korvio matches your brand with creators based on verified audience demographics, niche alignment, and commercial strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button href="/contact" size="lg" variant="gradient" onClick={() => trackEvent("work_with_korvio_clicked")} icon={<ArrowRight className="w-4 h-4" />}>
                Work With Korvio
              </Button>
              <CreatorApplyButton label="Are you a Creator?" size="lg" variant="outline" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-semibold uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <span>Targeted Matchmaking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Managed Coordination</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Performance Insights</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Strategic Campaign Editorial Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-md"
            >
              <div
                className="relative w-full rounded-2xl overflow-hidden border border-indigo-500/30 shadow-2xl min-h-[400px] sm:min-h-[480px]"
                style={{ aspectRatio: "4 / 5" }}
              >
                <Image
                  src="/brand.jpg"
                  alt="Korvio brand team reviewing creator-brand partnership strategy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                  <div className="flex items-center gap-2 bg-[#121318]/85 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <Target className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">BRAND STRATEGY</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
