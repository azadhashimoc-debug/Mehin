"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/content";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-charcoal/10 transition-colors duration-300">
      <Container>
        <div className="flex items-center justify-between h-[72px] sm:h-20">
          {/* Sol: Brand & Profession */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
          >
            <span className="font-serif text-xl sm:text-2xl text-charcoal tracking-wide transition-colors duration-300 group-hover:text-champagne-dark">
              Mehin İsmayılova
            </span>
            <span className="text-[10px] tracking-widest uppercase text-taupe font-normal -mt-0.5">
              Diksiya & Nitq Müəlliməsi
            </span>
          </Link>

          {/* Desktop Navigation & CTA */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-8" aria-label="Əsas naviqasiya">
              {siteContent.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs tracking-editorial uppercase transition-colors duration-300 py-1 relative ${
                      isActive
                        ? "text-charcoal font-medium"
                        : "text-taupe hover:text-charcoal"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-champagne" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/elaqe"
              className="inline-flex items-center justify-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory px-5 py-2.5 rounded-[2px] hover:bg-charcoal-light hover:text-champagne-light transition-all duration-300 border border-charcoal hover:border-champagne/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
            >
              <span>Dərsə müraciət</span>
              <span className="ml-1.5 text-xs">→</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button (min 44px touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-charcoal focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
            aria-label={mobileMenuOpen ? "Menyunu bağla" : "Menyunu aç"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-4 flex flex-col justify-between items-end">
              <span
                className={`h-[1.5px] bg-charcoal transition-all duration-300 ${
                  mobileMenuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
                }`}
              />
              <span
                className={`h-[1.5px] bg-charcoal transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "w-4"
                }`}
              />
              <span
                className={`h-[1.5px] bg-charcoal transition-all duration-300 ${
                  mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Full-Width Ivory Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-charcoal/10 bg-ivory py-6 animate-fade-in">
            <nav className="flex flex-col space-y-4" aria-label="Mobil naviqasiya">
              {siteContent.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xs tracking-widest uppercase py-2.5 transition-colors duration-200 flex items-center justify-between ${
                      isActive ? "text-charcoal font-semibold" : "text-taupe"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-champagne" />}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Link
                  href="/elaqe"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory py-3.5 rounded-[2px] hover:bg-charcoal-light transition-colors"
                >
                  <span>Dərsə müraciət</span>
                  <span className="ml-1.5">→</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
