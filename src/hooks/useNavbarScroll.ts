"use client";

import { useState, useEffect } from "react";

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero-section");
    if (!heroEl) {
      // No hero section on this page — show scrolled nav by default
      setIsScrolled(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero is less than ~10% visible, show scrolled nav
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.9 }, // triggers when less than 90% visible (i.e., much sooner)
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return isScrolled;
}
