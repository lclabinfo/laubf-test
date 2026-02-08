"use client";

import { useState, useEffect, useCallback } from "react";

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const heroEl = document.getElementById("hero-section");
    if (!heroEl) {
      setIsScrolled(true);
      return;
    }

    const rect = heroEl.getBoundingClientRect();
    const heroHeight = rect.height;
    // Calculate how much of the hero is still visible in the viewport
    const visibleHeight =
      Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    const visibilityRatio = Math.max(0, visibleHeight / heroHeight);

    // Transition to opaque navbar when hero is less than 90% visible
    setIsScrolled(visibilityRatio < 0.9);
  }, []);

  useEffect(() => {
    const heroEl = document.getElementById("hero-section");
    if (!heroEl) {
      setIsScrolled(true);
      return;
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isScrolled;
}
