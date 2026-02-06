/*
 * CMS SETTINGS:
 * - label: string — button text
 * - href: string — link destination
 * - visible: boolean — show/hide toggle
 * - variant: 'primary' | 'secondary' — filled or outline style
 * Auto-resolves colors from SectionThemeContext (dark bg → white fill, light bg → dark fill)
 */
"use client";

import { useSectionTheme } from "@/lib/theme";
import type { CTAButtonProps } from "@/lib/types/shared";
import { cn } from "@/lib/utils";
import Link from "next/link";

const brandShadow =
  "shadow-[0_10px_15px_var(--color-brand-shadow),0_4px_6px_var(--color-brand-shadow)]";

export default function CTAButton({
  label,
  href,
  onClick,
  variant = "primary",
  size = "default",
  className,
  icon,
}: CTAButtonProps) {
  const tokens = useSectionTheme();

  const base =
    "inline-flex items-center justify-center rounded-full transition-colors ease-smooth duration-300";

  const sizeClass =
    size === "small" ? "px-6 py-3 text-button-2" : "px-8 py-5 text-button-1";

  const variantClass =
    variant === "primary"
      ? cn(tokens.btnPrimaryBg, tokens.btnPrimaryText, brandShadow)
      : cn(
          "bg-transparent border",
          tokens.btnOutlineBorder,
          tokens.btnOutlineText,
          brandShadow
        );

  const classes = cn(base, sizeClass, variantClass, className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
        {icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {label}
      {icon}
    </button>
  );
}
