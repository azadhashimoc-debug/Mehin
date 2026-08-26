import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ivory border-t border-charcoal/10 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-charcoal/10">
          {/* Brand & Bio summary */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl text-charcoal tracking-wide block">
                Mehin İsmayılova
              </span>
              <span className="text-xs tracking-widest uppercase text-taupe font-normal mt-1 block">
                Diksiya &amp; Nitq Mütəxəssisi
              </span>
              <p className="mt-4 text-taupe text-sm leading-relaxed max-w-sm font-light">
                Düzgün tələffüz, aydın səs və özünəinamlı ictimai çıxış üzrə fərdi və peşəkar təlimlər.
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <span className="text-[11px] tracking-widest uppercase text-champagne-dark font-medium block mb-4">
              Naviqasiya
            </span>
            <ul className="space-y-2.5">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-taupe hover:text-charcoal transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="md:col-span-4">
            <span className="text-[11px] tracking-widest uppercase text-champagne-dark font-medium block mb-4">
              Əlaqə &amp; Sosial
            </span>
            <ul className="space-y-2.5 text-sm text-taupe">
              <li>
                <a
                  href={siteContent.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal transition-colors duration-200 inline-flex items-center space-x-1.5"
                >
                  <span>Instagram</span>
                  <span className="text-champagne text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={siteContent.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-charcoal transition-colors duration-200 inline-flex items-center space-x-1.5"
                >
                  <span>WhatsApp</span>
                  <span className="text-champagne text-xs">↗</span>
                </a>
              </li>
              <li>
                <Link
                  href="/elaqe"
                  className="hover:text-charcoal transition-colors duration-200"
                >
                  Müraciət forması
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-taupe/80 space-y-4 sm:space-y-0">
          <p>© {currentYear} Mehin İsmayılova. Bütün hüquqlar qorunur.</p>
          <p className="font-light tracking-wide">
            Diksiya və Nitq Sənəti
          </p>
        </div>
      </Container>
    </footer>
  );
}
