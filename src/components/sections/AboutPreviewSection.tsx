"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/content";

export default function AboutPreviewSection() {
  const [imageError, setImageError] = useState(false);
  const { aboutPreview } = siteContent;

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-ivory-secondary/30 border-t border-charcoal/10 overflow-hidden">
      <Container>
        {/* Desktop: Asymmetric 40/60 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Sol Tərəf: Real Foto / Monoqram Kompozisiyası (~40%) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Arxa Fonda Çox İncə #B59668 Ambient Glow */}
              <div className="absolute -inset-3 bg-champagne/10 rounded-xl filter blur-2xl opacity-60 pointer-events-none -z-10" />

              {/* Editorial Konteyner (~3:4 nisbət, 4px radius) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[4px] bg-ivory-secondary border border-charcoal/10 shadow-[0_10px_25px_rgba(23,22,20,0.03)]">
                {!imageError ? (
                  <Image
                    src="/images/mehin-about.jpg"
                    alt={aboutPreview.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Premium Editorial Monoqram Tərtibatı */
                  <div className="w-full h-full flex flex-col items-center justify-between p-8 sm:p-10 bg-ivory-secondary text-charcoal relative">
                    <div className="w-full flex justify-between items-center text-[10px] tracking-widest uppercase text-taupe font-medium">
                      <span>MÜƏLLİMƏ</span>
                      <span className="text-champagne-dark">FƏLSƏFƏ</span>
                    </div>

                    <div className="text-center my-auto flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full border border-champagne/40 p-1 flex items-center justify-center mb-5 animate-monogram">
                        <div className="w-full h-full rounded-full border border-champagne/30 bg-ivory flex items-center justify-center">
                          <span className="text-champagne-dark font-serif text-2xl italic">
                            MI
                          </span>
                        </div>
                      </div>
                      <span className="font-serif italic text-xl sm:text-2xl text-charcoal block mb-2">
                        &ldquo;Hər səs bir kimlikdir&rdquo;
                      </span>
                      <span className="text-[11px] tracking-widest uppercase text-champagne-dark font-medium block">
                        Mehin İsmayılova
                      </span>
                      <div className="w-10 h-px bg-champagne/40 mt-3" />
                    </div>

                    <div className="text-[10px] text-taupe/60 text-center font-serif italic">
                      Diksiya &amp; Nitq Tədrisi
                    </div>
                  </div>
                )}
              </div>

              {/* Zərif Champagne Künc Xətti */}
              <div className="absolute -top-3 -left-3 w-14 h-14 border-t border-l border-champagne/40 pointer-events-none" />
            </div>
          </div>

          {/* Sağ Tərəf: Bio, Editorial Details & CTA (~60%) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="max-w-xl">
              {/* Eyebrow */}
              <div className="flex items-center space-x-3 mb-5 sm:mb-6">
                <span className="w-6 sm:w-8 h-[1px] bg-champagne" />
                <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium">
                  {aboutPreview.eyebrow}
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal leading-[1.12] tracking-tight mb-6 sm:mb-8">
                <span>{aboutPreview.headingLines.line1}</span>
                <br />
                <span className={aboutPreview.headingLines.line2Italic ? "italic font-light text-charcoal/90" : ""}>
                  {aboutPreview.headingLines.line2}
                </span>{" "}
                <span>{aboutPreview.headingLines.line3}</span>
              </h2>

              {/* Səmimi Bio */}
              <p className="text-taupe text-sm sm:text-base lg:text-lg font-light leading-relaxed mb-8">
                {aboutPreview.bio}
              </p>

              {/* Editorial Details (Sadə text + incə divider) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 pb-8 border-y border-charcoal/10 mb-8">
                {aboutPreview.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-charcoal/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div>
                <Link
                  href="/haqqimda"
                  className="group inline-flex items-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory px-7 py-3.5 rounded-[2px] hover:bg-charcoal-light hover:text-champagne-light transition-all duration-300 border border-charcoal hover:border-champagne/40 min-h-[44px]"
                >
                  <span>{aboutPreview.ctaText}</span>
                  <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
