"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient" | "creator" | "editorial-dark" | "editorial-light";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  iconPosition = "right",
  children,
  fullWidth = false,
  className = "",
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5 font-bold",
  };

  const variantStyles = {
    primary:
      "bg-white text-slate-950 hover:bg-slate-100 shadow-md active:scale-[0.98]",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 border border-slate-700/80 active:scale-[0.98]",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5 active:scale-[0.98]",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    gradient:
      "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 shadow-md active:scale-[0.98]",
    creator:
      "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white hover:brightness-110 shadow-lg shadow-purple-900/30 active:scale-[0.98]",
    "editorial-dark":
      "bg-slate-950 text-white hover:bg-slate-900 border border-slate-800 active:scale-[0.98]",
    "editorial-light":
      "bg-slate-900 text-white hover:bg-slate-800 border border-slate-700 active:scale-[0.98]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
