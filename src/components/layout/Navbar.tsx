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
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-charcoal/10 transition-colors duration-300 anim-navbar-fade">
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
              Diksiya &amp; Nitq Mütəxəssisi
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
                    className={`text-xs tracking-editorial uppercase transition-colors duration-300 py-1 nav-link-underline ${
                      isActive
                        ? "text-charcoal font-medium active"
                        : "text-taupe hover:text-charcoal"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/elaqe"
              className="inline-flex items-center justify-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory px-5 py-2.5 rounded-[2px] hover:bg-champagne hover:text-charcoal hover:border-champagne transition-all duration-400 border border-charcoal focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne group"
            >
              <span>Dərsə müraciət</span>
              <span className="ml-1.5 text-xs transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-charcoal focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
            aria-label={mobileMenuOpen ? "Menyunu bağla" : "Menyunu aç"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-4 flex flex-col justify-between items-end">
              <span
                className={`h-[1.5px] bg-charcoal transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileMenuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
                }`}
              />
              <span
                className={`h-[1.5px] bg-charcoal transition-opacity duration-200 ${
                  mobileMenuOpen ? "opacity-0" : "w-4"
                }`}
              />
              <span
                className={`h-[1.5px] bg-charcoal transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Full-Width Ivory Menu with Staggered Items */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-charcoal/10 bg-ivory py-6 animate-fade-in">
            <nav className="flex flex-col space-y-3" aria-label="Mobil naviqasiya">
              {siteContent.navigation.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      animationDelay: `${idx * 50}ms`,
                    }}
                    className={`text-xs tracking-widest uppercase py-2.5 transition-colors duration-200 flex items-center justify-between anim-hero-eyebrow ${
                      isActive ? "text-charcoal font-semibold" : "text-taupe"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-champagne" />}
                  </Link>
                );
              })}
              <div
                style={{
                  animationDelay: `${siteContent.navigation.length * 50}ms`,
                }}
                className="pt-4 anim-hero-eyebrow"
              >
                <Link
                  href="/elaqe"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory py-3.5 rounded-[2px] hover:bg-champagne hover:text-charcoal transition-colors duration-300"
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
