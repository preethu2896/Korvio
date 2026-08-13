"use client";

import React from "react";
import { services } from "@/config/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { motion } from "motion/react";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative bg-[#050614]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Services"
          title="Full-Cycle Creator Marketing Services"
          description="Everything you need to launch, manage, and scale high-impact creator partnerships under one roof."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-between p-8 border border-white/10 hover:border-purple-500/30 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 p-2.5 flex items-center justify-center text-purple-300 group-hover:bg-purple-500/20 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-black text-slate-700 group-hover:text-purple-400/50 transition-colors">
                        {service.index}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                    <span>Explore Service</span>
                    <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
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
