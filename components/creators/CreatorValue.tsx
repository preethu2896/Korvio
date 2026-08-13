"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Sparkles, Heart, Compass, ShieldCheck, Zap, Handshake } from "lucide-react";
import { motion } from "motion/react";

export function CreatorValue() {
  const values = [
    {
      title: "Relevant Opportunities",
      description: "Get matched with brands that align with your content niche, audience demographic, and creative values.",
      icon: Compass,
    },
    {
      title: "Direct & Clear Communication",
      description: "No ambiguous requirements. We coordinate campaign briefs clearly so you know exactly what is needed.",
      icon: ShieldCheck,
    },
    {
      title: "Creator-First Respect",
      description: "We protect your authentic voice. We partner with brands that respect your creative freedom.",
      icon: Heart,
    },
    {
      title: "Long-Term Partnerships",
      description: "Rather than one-off transactions, we focus on building ongoing relationships between creators and brands.",
      icon: Handshake,
    },
  ];

  return (
    <section className="py-20 md:py-32 relative bg-[#07081a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Join Korvio"
          title="Built for Content Makers Who Care About Quality"
          description="We handle the brand coordination so you can focus on creating great content."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="h-full p-6 border border-white/10 hover:border-purple-500/30">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
