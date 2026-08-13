"use client";

import React from "react";
import Link from "next/link";
import { audienceCards } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";
import { CheckCircle2, ArrowRight, Building2, UserCheck } from "lucide-react";
import { motion } from "motion/react";

export function AudienceSection() {
  return (
    <section className="py-20 md:py-32 relative bg-[#07081a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tailored Solutions"
          title="Designed for Both Sides of the Partnership"
          description="Whether you are a brand seeking high-performing creator campaigns or a creator looking for authentic brand opportunities, Korvio bridges the gap."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {audienceCards.map((card, idx) => {
            const isBrand = card.id === "brands";
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card
                  className={`h-full flex flex-col justify-between p-8 md:p-10 border ${
                    isBrand
                      ? "border-indigo-500/25 bg-gradient-to-b from-indigo-950/20 via-slate-900/60 to-slate-950/80"
                      : "border-purple-500/25 bg-gradient-to-b from-purple-950/20 via-slate-900/60 to-slate-950/80"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Eyebrow badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          isBrand
                            ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/30"
                            : "bg-purple-500/10 text-purple-300 border border-purple-500/30"
                        }`}
                      >
                        {isBrand ? <Building2 className="w-3.5 h-3.5" /> : <UserCheck className="w-3.5 h-3.5" />}
                        {card.eyebrow}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                      {card.headline}
                    </h3>

                    {/* Feature items */}
                    <ul className="space-y-3.5 pt-2">
                      {card.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                          <CheckCircle2
                            className={`w-5 h-5 shrink-0 ${
                              isBrand ? "text-indigo-400" : "text-purple-400"
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA button */}
                  <div className="pt-8">
                    {isBrand ? (
                      <Button
                        href="/brands"
                        variant="gradient"
                        size="lg"
                        fullWidth
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        {card.cta.label}
                      </Button>
                    ) : (
                      <CreatorApplyButton
                        label={card.cta.label}
                        size="lg"
                        variant="creator"
                        fullWidth
                      />
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
