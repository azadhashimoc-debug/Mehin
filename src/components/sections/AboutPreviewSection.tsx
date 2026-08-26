"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteContent } from "@/data/content";

export default function AboutPreviewSection() {
  const [imageError, setImageError] = useState(false);
  const { aboutPreview } = siteContent;

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-ivory-secondary/30 border-t border-charcoal/10 overflow-hidden">
      <Container>
        {/* Desktop: Asymmetric 40/60 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Sol Tərəf: Mehin Tək Foto (~40%) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <ScrollReveal delay={0} className="w-full max-w-md lg:max-w-none">
              <div className="relative w-full group">
                {/* Arxa Fonda Çox İncə #B59668 Ambient Glow */}
                <div className="absolute -inset-3 bg-champagne/10 rounded-xl filter blur-2xl opacity-60 pointer-events-none -z-10 transition-opacity duration-700 group-hover:opacity-90" />

                {/* Editorial Konteyner (~3:4 nisbət, 4px radius) */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[4px] bg-ivory-secondary border border-charcoal/10 shadow-[0_10px_25px_rgba(23,22,20,0.03)]">
                  {!imageError ? (
                    <Image
                      src="/images/mehin-teaching.jpg"
                      alt={aboutPreview.imageAlt}
                      fill
                      unoptimized
                      className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Premium Editorial Monoqram Tərtibatı */
                    <div className="w-full h-full flex flex-col items-center justify-between p-8 sm:p-10 bg-ivory-secondary text-charcoal relative">
                      <div className="w-full flex justify-between items-center text-[10px] tracking-widest uppercase text-taupe font-medium">
                        <span>MÜTƏXƏSSİS</span>
                        <span className="text-champagne-dark">FƏLSƏFƏ</span>
                      </div>

                      <div className="text-center my-auto flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full border border-champagne/40 p-1 flex items-center justify-center mb-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
                          <div className="w-full h-full rounded-full border border-champagne/30 bg-ivory flex items-center justify-center transition-colors duration-400 group-hover:border-champagne/60">
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

                  {/* Şəkil Üzərində İncə Editorial Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent text-ivory">
                    <span className="text-xs font-serif tracking-wide block">
                      Mehin İsmayılova
                    </span>
                    <span className="text-[10px] tracking-widest uppercase text-champagne-light block">
                      Diksiya &amp; Nitq Mütəxəssisi
                    </span>
                  </div>
                </div>

                {/* Zərif Champagne Künc Xətti */}
                <div className="absolute -top-3 -left-3 w-14 h-14 border-t border-l border-champagne/40 pointer-events-none transition-all duration-500 group-hover:border-champagne/70" />
              </div>
            </ScrollReveal>
          </div>

          {/* Sağ Tərəf: Bio, Editorial Details & CTA (~60%) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal delay={100} className="max-w-xl">
              <div>
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

                {/* Editorial Details */}
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
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
