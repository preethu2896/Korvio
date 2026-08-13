"use client";

import React from "react";
import { motion } from "motion/react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const isLight = theme === "light";

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignment[align]} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`korvio-badge ${isLight ? "korvio-badge-light" : "korvio-badge-dark"} mb-4`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight ${
          isLight ? "text-slate-900" : "text-white"
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
            isLight ? "text-slate-600" : "text-slate-400"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
