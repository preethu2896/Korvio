"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, socialLinks, mailtoUrl, phoneUrl, whatsappUrl } from "@/config/site";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";
import { trackEvent } from "@/lib/analytics";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Korvio", href: "/#why-korvio" },
];

const workLinks = [
  { label: "For Brands", href: "/brands" },
  { label: "For Creators", href: "/creators" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F7F6F2] border-t border-[#F7F6F2]/10 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 pt-14 pb-10 sm:pt-16 sm:pb-12 relative z-10 space-y-12">
        
        {/* ──── TOP SECTION: BRAND & NAVIGATION GRID ──── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#F7F6F2]/10">
          
          {/* BRAND COLUMN (md:col-span-5) */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Korvio Home">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-400/20 p-1 flex items-center justify-center">
                <Image
                  src="/brand/logo-mark.png"
                  alt="Korvio Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <span className="text-xl font-extrabold tracking-wider text-[#F7F6F2]">
                KORVIO
              </span>
            </Link>

            <p className="text-sm sm:text-base font-medium text-[#F7F6F2]/80 leading-relaxed max-w-[420px]">
              {siteConfig.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#F7F6F2]/50 font-normal leading-relaxed max-w-[420px]">
              Connecting brands with creators through authentic partnerships built around relevance, creative freedom and genuine audience fit.
            </p>
          </div>

          {/* EXPLORE COLUMN (md:col-span-2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
              EXPLORE
            </h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm font-medium text-[#F7F6F2]/65 hover:text-[#F7F6F2] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WORK WITH US COLUMN (md:col-span-2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
              NETWORK
            </h4>
            <ul className="space-y-2.5">
              {workLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm font-medium text-[#F7F6F2]/65 hover:text-[#F7F6F2] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2 space-y-2">
              <Link
                href="/contact"
                onClick={() => trackEvent("work_with_korvio_clicked")}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F7F6F2] hover:text-purple-400 transition-colors group"
              >
                <span>Work With Korvio</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <div className="block">
                <CreatorApplyButton
                  label="Join as Creator"
                  size="sm"
                  variant="ghost"
                  showIcon={true}
                  className="px-0 text-xs font-semibold text-purple-400 hover:text-purple-300"
                />
              </div>
            </div>
          </div>

          {/* CONNECT COLUMN (md:col-span-3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
              CONNECT
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={mailtoUrl}
                onClick={() => trackEvent("email_clicked")}
                className="block font-medium text-[#F7F6F2]/75 hover:text-[#F7F6F2] transition-colors"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={phoneUrl}
                className="block font-medium text-[#F7F6F2]/75 hover:text-[#F7F6F2] transition-colors"
              >
                {siteConfig.contact.phoneFormatted}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_clicked")}
                className="inline-flex items-center gap-1 font-medium text-[#F7F6F2]/75 hover:text-purple-400 transition-colors"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-4 flex-wrap">
              {socialLinks
                .filter((s) => ["Instagram", "LinkedIn", "X"].includes(s.label))
                .map((item) => {
                  const Icon = item.icon;
                  const getSocialEventName = (label: string) => {
                    if (label === "Instagram") return "instagram_clicked";
                    if (label === "LinkedIn") return "linkedin_clicked";
                    if (label === "X") return "x_clicked";
                    return null;
                  };
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        const evt = getSocialEventName(item.label);
                        if (evt) trackEvent(evt);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F7F6F2]/60 hover:text-[#F7F6F2] transition-colors"
                      aria-label={`Korvio on ${item.label}`}
                    >
                      <Icon className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{item.handle}</span>
                    </a>
                  );
                })}
            </div>
          </div>

        </div>

        {/* ──── BOTTOM BAR: COPYRIGHT & BRAND SIGNATURE ──── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F7F6F2]/40 pt-2">
          <p>© {new Date().getFullYear()} Korvio. All rights reserved.</p>
          <p className="font-semibold text-[#F7F6F2]/30 uppercase tracking-widest text-[10px]">
            CREATORS × BRANDS. BUILT TO CONNECT.
          </p>
        </div>

      </div>

      {/* Subtle background wordmark watermark */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[clamp(3.5rem,16vw,14rem)] font-black tracking-tighter leading-none select-none pointer-events-none uppercase whitespace-nowrap"
        style={{
          background: "linear-gradient(90deg, #7C3AED 0%, #243BFF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          opacity: 0.06,
        }}
      >
        KORVIO
      </div>
    </footer>
  );
}
