"use client";

import { createContext, useContext } from "react";

export type SectionTheme = "dark" | "light";

export interface ThemeTokens {
  bg: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  btnPrimaryBg: string;
  btnPrimaryText: string;
  btnOutlineBorder: string;
  btnOutlineText: string;
  borderColor: string;
}

export const themeTokens: Record<SectionTheme, ThemeTokens> = {
  dark: {
    bg: "bg-black-1",
    textPrimary: "text-white-1",
    textSecondary: "text-white-2",
    textMuted: "text-white-3",
    btnPrimaryBg: "bg-white-1",
    btnPrimaryText: "text-black-1",
    btnOutlineBorder: "border-white-1/30",
    btnOutlineText: "text-white-1",
    borderColor: "border-white-1/10",
  },
  light: {
    bg: "bg-white-1",
    textPrimary: "text-black-1",
    textSecondary: "text-black-2",
    textMuted: "text-black-3",
    btnPrimaryBg: "bg-black-1",
    btnPrimaryText: "text-white-1",
    btnOutlineBorder: "border-black-1/30",
    btnOutlineText: "text-black-1",
    borderColor: "border-border-light",
  },
};

export const SectionThemeContext = createContext<SectionTheme>("light");

export function useSectionTheme(): ThemeTokens {
  const theme = useContext(SectionThemeContext);
  return themeTokens[theme];
}

export function useRawSectionTheme(): SectionTheme {
  return useContext(SectionThemeContext);
}
