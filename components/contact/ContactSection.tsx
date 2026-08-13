"use client";

import React, { useState } from "react";
import { siteConfig, mailtoUrl, whatsappUrl, socialLinks } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { CreatorApplyButton } from "@/components/ui/CreatorApplyButton";
import { ArrowUpRight, CheckCircle2, Mail, MessageCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "motion/react";

const inquiryOptions = [
  "Creator Campaign",
  "Product Promotion",
  "UGC Content",
  "Influencer Collaboration",
  "Campaign Strategy",
  "Not Sure Yet",
];

interface FormErrors {
  name?: string;
  email?: string;
  brand?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    phone: "",
    inquiryType: "Creator Campaign",
    message: "",
    botcheck: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.brand.trim()) {
      errors.brand = "Brand / Company name is required.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    if (isSubmitting) return;

    // Honeypot spam trap
    if (formData.botcheck) {
      setSubmissionStatus("success");
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus("idle");

    try {
      const payload = {
        access_key: siteConfig.web3FormsAccessKey,
        subject: `New Korvio Brand Inquiry — ${formData.brand.trim()}`,
        from_name: "Korvio Website",
        name: formData.name.trim(),
        email: formData.email.trim(),
        brand: formData.brand.trim(),
        phone: formData.phone.trim() || "N/A",
        looking_for: formData.inquiryType,
        message: formData.message.trim(),
        botcheck: formData.botcheck || "",
      };

      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setSubmissionStatus("success");
      } else {
        console.error("Contact Form Submission Error:", {
          status: response.status,
          success: data?.success ?? false,
          message: data?.message || "Submission failed",
        });
        setSubmissionStatus("error");
      }
    } catch (err) {
      console.error("Form submission exception:", err);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      brand: "",
      phone: "",
      inquiryType: "Creator Campaign",
      message: "",
      botcheck: "",
    });
    setFieldErrors({});
    setSubmissionStatus("idle");
  };

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 bg-[#080808] text-[#F7F6F2] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 text-left">
        
        {/* EDITORIAL ASYMMETRIC TWO-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ──── LEFT COLUMN: HEADLINE, COPY, DIRECT CONTACT & CREATOR CTA (lg:col-span-5) ──── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* 1. EYEBROW */}
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-purple-400">
              FOR BRANDS
            </div>

            {/* 2. MAIN HEADLINE */}
            <h1 className="text-4xl sm:text-6xl lg:text-[clamp(3.75rem,5vw,5rem)] font-extrabold text-[#F7F6F2] tracking-tight leading-[1.06]">
              <span className="block">Let&apos;s build</span>
              <span className="block font-serif-italic font-normal text-[#F7F6F2]">
                something that fits.
              </span>
            </h1>

            {/* 3. SUPPORTING COPY */}
            <p className="text-base sm:text-lg text-[#F7F6F2]/68 font-normal leading-relaxed max-w-[480px]">
              Tell us what you&apos;re building, who you want to reach, and what you&apos;re looking for. We&apos;ll help you find the right creators and shape a collaboration that makes sense.
            </p>

            {/* 4. DIRECT CONTACT */}
            <div className="space-y-4 pt-6 border-t border-[#F7F6F2]/10">
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F6F2]/40">
                PREFER TO TALK DIRECTLY?
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href={mailtoUrl}
                  className="flex items-center gap-3 text-[#F7F6F2]/80 hover:text-[#F7F6F2] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="font-medium">{siteConfig.contact.email}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#F7F6F2]/80 hover:text-purple-400 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="font-medium">{siteConfig.contact.phoneFormatted}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#F7F6F2]/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-4 flex-wrap">
                {socialLinks
                  .filter((s) => ["Instagram", "LinkedIn", "X"].includes(s.label))
                  .map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
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

            {/* 5. CREATOR ALTERNATIVE CTA */}
            <div className="pt-6 border-t border-[#F7F6F2]/10 space-y-2">
              <div className="text-xs sm:text-sm font-bold text-[#F7F6F2]">
                Are you a creator?
              </div>
              <p className="text-xs sm:text-sm text-[#F7F6F2]/50 font-normal leading-relaxed max-w-[420px]">
                Join Korvio and hear about opportunities that fit your content and audience.
              </p>
              <div className="pt-1">
                <CreatorApplyButton
                  label="Join as Creator"
                  variant="ghost"
                  size="sm"
                  showIcon={true}
                  className="px-0 text-xs font-semibold text-purple-400 hover:text-purple-300"
                />
              </div>
            </div>

          </motion.div>

          {/* ──── RIGHT COLUMN: EDITORIAL BRAND INQUIRY FORM (lg:col-span-7) ──── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="border border-[#F7F6F2]/12 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 bg-[#111111]/70 backdrop-blur-sm shadow-2xl">
              
              {/* FORM HEADLINE */}
              <div className="space-y-1.5 pb-6 border-b border-[#F7F6F2]/10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F6F2] tracking-tight">
                  Tell us what you&apos;re working on.
                </h2>
                <p className="text-xs sm:text-sm text-[#F7F6F2]/50 font-normal leading-relaxed">
                  We&apos;ll get back to you with the next step.
                </p>
              </div>

              {submissionStatus === "success" ? (
                /* SUBMISSION CONFIRMATION */
                <div className="py-8 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-400 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F7F6F2] tracking-tight uppercase">
                    MESSAGE RECEIVED.
                  </h3>
                  <p className="text-sm sm:text-base text-[#F7F6F2]/68 leading-relaxed max-w-md">
                    We&apos;ll get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 pt-2 transition-colors cursor-pointer"
                  >
                    ← Send another inquiry
                  </button>
                </div>
              ) : (
                /* BRAND INQUIRY FORM */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* HONEYPOT SPAM PROTECTION (HIDDEN FROM USERS) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    checked={!!formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked ? "true" : "" })}
                  />

                  {/* ERROR BANNER IF SUBMISSION FAILS */}
                  {submissionStatus === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs sm:text-sm text-red-300 space-y-2">
                      <div className="flex items-center gap-2 font-semibold text-red-200">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>Submission Failed</span>
                      </div>
                      <p>
                        Something went wrong. Please try again or email us directly at{" "}
                        <a href={mailtoUrl} className="underline font-semibold hover:text-red-100">
                          {siteConfig.contact.email}
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  {/* FULL NAME & EMAIL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#F7F6F2]/70">
                        FULL NAME <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
                        }}
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F7F6F2]/[0.03] border ${
                          fieldErrors.name ? "border-red-400/80 focus:border-red-400" : "border-[#F7F6F2]/12 focus:border-purple-400/60"
                        } text-[#F7F6F2] text-sm focus:outline-none focus:ring-1 focus:ring-purple-400/60 transition-colors placeholder:text-[#F7F6F2]/25`}
                      />
                      {fieldErrors.name && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#F7F6F2]/70">
                        EMAIL <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
                        }}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F7F6F2]/[0.03] border ${
                          fieldErrors.email ? "border-red-400/80 focus:border-red-400" : "border-[#F7F6F2]/12 focus:border-purple-400/60"
                        } text-[#F7F6F2] text-sm focus:outline-none focus:ring-1 focus:ring-purple-400/60 transition-colors placeholder:text-[#F7F6F2]/25`}
                      />
                      {fieldErrors.email && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* BRAND / COMPANY & PHONE / WHATSAPP */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="brand" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#F7F6F2]/70">
                        BRAND / COMPANY <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="brand"
                        type="text"
                        value={formData.brand}
                        onChange={(e) => {
                          setFormData({ ...formData, brand: e.target.value });
                          if (fieldErrors.brand) setFieldErrors({ ...fieldErrors, brand: undefined });
                        }}
                        placeholder="Brand or company name"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F7F6F2]/[0.03] border ${
                          fieldErrors.brand ? "border-red-400/80 focus:border-red-400" : "border-[#F7F6F2]/12 focus:border-purple-400/60"
                        } text-[#F7F6F2] text-sm focus:outline-none focus:ring-1 focus:ring-purple-400/60 transition-colors placeholder:text-[#F7F6F2]/25`}
                      />
                      {fieldErrors.brand && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{fieldErrors.brand}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#F7F6F2]/70">
                        PHONE / WHATSAPP
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210 (optional)"
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F6F2]/[0.03] border border-[#F7F6F2]/12 text-[#F7F6F2] text-sm focus:outline-none focus:border-purple-400/60 focus:ring-1 focus:ring-purple-400/60 transition-colors placeholder:text-[#F7F6F2]/25"
                      />
                    </div>
                  </div>

                  {/* WHAT ARE YOU LOOKING FOR? */}
                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#F7F6F2]/70">
                      WHAT ARE YOU LOOKING FOR? <span className="text-purple-400">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#F7F6F2]/12 text-[#F7F6F2] text-sm focus:outline-none focus:border-purple-400/60 focus:ring-1 focus:ring-purple-400/60 transition-colors"
                    >
                      {inquiryOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#141414] text-[#F7F6F2]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.15em] text-[#F7F6F2]/70">
                      MESSAGE <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: undefined });
                      }}
                      placeholder="Tell us about your campaign goals, target audience, or what you're looking to create..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F6F2]/[0.03] border ${
                        fieldErrors.message ? "border-red-400/80 focus:border-red-400" : "border-[#F7F6F2]/12 focus:border-purple-400/60"
                      } text-[#F7F6F2] text-sm focus:outline-none focus:ring-1 focus:ring-purple-400/60 transition-colors resize-none placeholder:text-[#F7F6F2]/25`}
                    />
                    {fieldErrors.message && (
                      <p className="text-xs text-red-400 mt-1 font-medium">{fieldErrors.message}</p>
                    )}
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto font-bold px-8 py-3.5 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 text-slate-950 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Start the Conversation</span>
                      )}
                    </Button>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
