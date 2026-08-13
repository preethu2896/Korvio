"use client";

import React from "react";
import { motion } from "motion/react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className = "",
  hoverEffect = true,
  glow = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden ${
        hoverEffect ? "glass-panel-hover" : ""
      } ${
        glow ? "before:absolute before:inset-0 before:bg-radial-glow before:pointer-events-none" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
