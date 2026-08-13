"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/config/site";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < 30) {
        setIsVisible(true);
      } else if (currentScrollPos > prevScrollPos + 8) {
        setIsVisible(false); // Scrolling down
      } else if (currentScrollPos < prevScrollPos - 8) {
        setIsVisible(true); // Scrolling up
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Why Korvio", href: "/#why-korvio" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const hash = href.replace("/#", "#");
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        e.preventDefault();
        setMobileMenuOpen(false);
        targetEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", hash);
      } else {
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-4 sm:top-5 left-0 right-0 z-50 px-4 max-w-[760px] mx-auto pointer-events-none transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-[160%]"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-[16px] shadow-md shadow-black/10 border border-slate-200/80 px-4 py-1.5 sm:py-2 flex items-center justify-between pointer-events-auto h-[48px] sm:h-[52px]">
        
        {/* LEFT: Compact Korvio Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 group shrink-0"
        >
          <div className="relative h-5 w-auto flex items-center">
            <Image
              src="/brand/logo.png"
              alt="Korvio Logo"
              width={96}
              height={24}
              className="h-5 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* CENTER: Compact Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 sm:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[12px] font-medium text-slate-700 hover:text-slate-950 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT: Compact CTAs */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <CreatorApplyButton
            label="Join as Creator"
            size="sm"
            variant="ghost"
            showIcon={false}
            className="text-[11px] font-medium text-slate-700 hover:text-slate-950 px-2.5 py-1"
          />

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#222222] hover:bg-black text-white text-[11px] sm:text-[12px] font-medium pl-3.5 pr-1 py-1 rounded-full transition-all duration-300 group shadow-sm active:scale-95"
          >
            <span>Work With Korvio</span>
            <span className="w-5.5 h-5.5 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </Link>
        </div>

        {/* MOBILE: Compact Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-slate-800 hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-white rounded-[16px] border border-slate-200 p-4 shadow-xl space-y-3 pointer-events-auto"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium py-2 px-3 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <CreatorApplyButton
                label="Join as Creator →"
                size="sm"
                variant="outline"
                showIcon={false}
                fullWidth
                className="text-xs text-slate-800 border-slate-300"
              />

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full bg-[#222222] hover:bg-black text-white text-xs font-medium px-4 py-2.5 rounded-full transition-colors"
              >
                <span>Work With Korvio</span>
                <span className="w-5.5 h-5.5 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
