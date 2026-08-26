"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/content";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-ivory border-b border-charcoal/10 transition-colors duration-300">
      <Container>
        <div className="flex items-center justify-between h-20 max-h-[80px]">
          {/* Sol: Brand & Profession */}
          <Link href="/" className="group flex flex-col focus:outline-none">
            <span className="font-serif text-xl sm:text-2xl text-charcoal tracking-wide transition-colors duration-300 group-hover:text-champagne-dark">
              Mehin İsmayılova
            </span>
            <span className="text-[10px] tracking-widest uppercase text-taupe font-normal -mt-0.5">
              Diksiya & Nitq Müəlliməsi
            </span>
          </Link>

          {/* Sağ Desktop: Links & Minimal CTA */}
          <div className="hidden md:flex items-center space-x-10">
            <nav className="flex items-center space-x-8">
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
              className="inline-flex items-center justify-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory px-5 py-2.5 rounded-sm hover:bg-charcoal-light hover:text-champagne-light transition-all duration-300 border border-charcoal"
            >
              Dərsə müraciət
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal focus:outline-none"
            aria-label="Menyunu aç"
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

        {/* Mobile Full-Width Ivory Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-charcoal/10 bg-ivory py-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {siteContent.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xs tracking-widest uppercase py-2 transition-colors duration-200 ${
                      isActive ? "text-charcoal font-semibold" : "text-taupe"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link
                  href="/elaqe"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory py-3 rounded-sm hover:bg-charcoal-light transition-colors"
                >
                  Dərsə müraciət
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
