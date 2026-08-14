"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Button, ButtonProps } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface CreatorApplyButtonProps extends Omit<ButtonProps, "href" | "children"> {
  label?: string;
  showIcon?: boolean;
}

export function CreatorApplyButton({
  label = "Join Korvio",
  showIcon = true,
  variant = "creator",
  size = "md",
  onClick,
  ...props
}: CreatorApplyButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    trackEvent("join_creator_clicked");
    trackEvent("creator_form_clicked");
    if (onClick) {
      onClick(e as any);
    }
  };

  return (
    <Button
      href={siteConfig.creatorFormUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      onClick={handleClick}
      icon={showIcon ? <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> : undefined}
      iconPosition="right"
      {...props}
    >
      {label}
    </Button>
  );
}
