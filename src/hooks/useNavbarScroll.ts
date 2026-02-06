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
        // When hero is less than 50% visible, show scrolled nav
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return isScrolled;
}
