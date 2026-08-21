import type { LucideIcon } from "lucide-react";
import { Mail } from "lucide-react";
import { InstagramIcon, LinkedinIcon, XIcon } from "@/components/ui/Icons";

/**
 * Single source of truth for everything a non-developer might need to change.
 * All contact and social details below are verified real Korvio business details.
 */

export type Audience = "brand" | "creator";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  /** Shown next to the icon in the contact section. */
  handle: string;
}

export const siteConfig = {
  name: "Korvio",
  domain: "korvio.in",
  url: "https://korvio.in",
  tagline: "Creators × Brands. Built to Connect.",
  description:
    "Korvio is a Karnataka-based influencer marketing agency connecting brands with relevant creators across India for authentic partnerships and campaign collaborations.",
  shortDescription: "Karnataka-based influencer marketing agency connecting brands with creators across India.",

  contact: {
    email: "hello.korvio@gmail.com",
    instagram: "https://www.instagram.com/korvio.in",
    instagramHandle: "@korvio.in",
    linkedin: "https://www.linkedin.com/in/korvio-in-6b9890428/",
    linkedinHandle: "Korvio In",
    x: "https://x.com/KorvioIn",
    xHandle: "@KorvioIn",
    location: "Karnataka, India",
  },

  /**
   * Google Form URL for creator applications.
   * Override with NEXT_PUBLIC_CREATOR_FORM_URL in .env if needed.
   */
  creatorFormUrl:
    process.env.NEXT_PUBLIC_CREATOR_FORM_URL ??
    "https://docs.google.com/forms/d/e/1FAIpQLScMYbOmMzRyYB4eijeKgZyNS76wbJTtRROodFy_Qm3iz0e5lg/viewform?usp=dialog",

  /**
   * Web3Forms API configuration for Brand Inquiry contact form.
   * Access key can be set via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local
   */
  web3FormsAccessKey:
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "dbd23e29-0325-4391-9837-a7da5a4ac004",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "https://api.web3forms.com/submit",
} as const;

export const mailtoUrl = `mailto:${siteConfig.contact.email}`;

export const navItems: readonly NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Why Korvio", href: "/#why-korvio" },
  { label: "Contact", href: "/#contact" },
] as const;

export const primaryCta = { label: "Work With Korvio", href: "#contact" } as const;

export const audienceCtas = {
  brand: { label: "I'm a Brand", href: "#brands" },
  creator: { label: "I'm a Creator", href: "#creators" },
} as const;

export const socialLinks: readonly SocialLink[] = [
  {
    label: "Email",
    href: mailtoUrl,
    icon: Mail,
    handle: siteConfig.contact.email,
  },
  {
    label: "Instagram",
    href: siteConfig.contact.instagram,
    icon: InstagramIcon as any,
    handle: siteConfig.contact.instagramHandle,
  },
  {
    label: "LinkedIn",
    href: siteConfig.contact.linkedin,
    icon: LinkedinIcon as any,
    handle: siteConfig.contact.linkedinHandle,
  },
  {
    label: "X",
    href: siteConfig.contact.x,
    icon: XIcon as any,
    handle: siteConfig.contact.xHandle,
  },
] as const;

export const footerLinks: readonly NavItem[] = [
  { label: "Brands", href: "#brands" },
  { label: "Creators", href: "#creators" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
