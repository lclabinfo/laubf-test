"use client";

import { useState, useCallback } from "react";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import HeroNav from "./HeroNav";
import ScrollNav from "./ScrollNav";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const isScrolled = useNavbarScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      {/* Hero overlay nav — transparent, positioned absolute over the hero */}
      {!isScrolled && (
        <div className="fixed top-0 left-0 right-0 z-40">
          <HeroNav onMobileMenuOpen={openMobileMenu} />
        </div>
      )}

      {/* Scrolled fixed nav — white background, slides in */}
      <ScrollNav visible={isScrolled} onMobileMenuOpen={openMobileMenu} />

      {/* Mobile drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
