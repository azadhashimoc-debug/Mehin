"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/content";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const { hero } = siteContent;

  return (
    <section className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32 overflow-hidden bg-ivory">
      <Container>
        {/* Desktop: Asymmetric 45/55 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Sol Tərəf: Editorial Tipoqrafiya & CTA (~45%) */}
          <div className="lg:col-span-5 flex flex-col justify-center animate-fade-up">
            {/* Eyebrow */}
            <div className="flex items-center space-x-3 mb-5 sm:mb-6">
              <span className="w-6 sm:w-8 h-[1px] bg-champagne" />
              <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium">
                {hero.eyebrow}
              </span>
            </div>

            {/* Böyük Cormorant Garamond Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal font-normal leading-[1.08] tracking-tight mb-6 sm:mb-8">
              <span>{hero.titleLines.line1}</span>
              <br />
              <span className={hero.titleLines.line2Italic ? "italic font-light" : ""}>
                {hero.titleLines.line2}
              </span>
              <br />
              <span>{hero.titleLines.line3}</span>
            </h1>

            {/* Alt Mətn */}
            <p className="text-taupe text-sm sm:text-base lg:text-lg leading-relaxed font-light mb-8 sm:mb-10 max-w-md">
              {hero.subtitle}
            </p>

            {/* CTA Düymələri */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <Link
                href="/elaqe"
                className="inline-flex items-center justify-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory px-7 py-3.5 rounded-[2px] hover:bg-charcoal-light hover:text-champagne-light transition-all duration-300 border border-charcoal hover:border-champagne/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
              >
                <span>{hero.primaryCta}</span>
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/haqqimda"
                className="group inline-flex items-center text-xs tracking-widest uppercase text-charcoal hover:text-champagne-dark transition-colors duration-300 py-1 border-b border-charcoal/30 hover:border-champagne focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
              >
                <span>{hero.secondaryLink}</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Sağ Tərəf: Real Portret (~55%) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Arxa Fonda Çox İncə #B59668 Ambient Glow */}
              <div className="absolute -inset-4 bg-champagne/10 rounded-2xl filter blur-3xl opacity-70 pointer-events-none -z-10" />

              {/* Editorial Şəkil Konteyneri (~4:5 nisbət, 4px radius, çox zəif shadow) */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] bg-ivory-secondary border border-charcoal/10 shadow-[0_12px_28px_rgba(23,22,20,0.04)]">
                {!imageError ? (
                  <Image
                    src="/images/mehin-hero.jpg"
                    alt={`${hero.imageCaption.name} — ${hero.imageCaption.role}`}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Editorial Monogram & Name Fallback (No fake stock/AI images) */
                  <div className="w-full h-full flex flex-col items-center justify-between p-8 sm:p-10 bg-ivory-secondary text-charcoal">
                    <div className="w-full flex justify-between items-center text-[10px] tracking-widest uppercase text-taupe">
                      <span>PORTRET</span>
                      <span>EDITORIAL 01</span>
                    </div>

                    <div className="text-center my-auto">
                      <div className="w-20 h-20 rounded-full border border-champagne/40 mx-auto flex items-center justify-center mb-5 text-champagne-dark font-serif text-3xl italic">
                        M
                      </div>
                      <span className="font-serif text-2xl sm:text-3xl text-charcoal block">
                        {hero.imageCaption.name}
                      </span>
                      <span className="text-[11px] tracking-widest uppercase text-champagne-dark mt-2 block font-medium">
                        {hero.imageCaption.role}
                      </span>
                    </div>

                    <div className="text-[11px] text-taupe/60 text-center font-serif italic">
                      /public/images/mehin-hero.jpg
                    </div>
                  </div>
                )}

                {/* Şəkil Üzərində İncə Editorial Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent text-ivory">
                  <span className="font-serif text-lg sm:text-xl block tracking-wide">
                    {hero.imageCaption.name}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-champagne-light block">
                    {hero.imageCaption.role}
                  </span>
                </div>
              </div>

              {/* Zərif Champagne Dekorativ Xətt */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-champagne/40 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Hero Altında: Editorial Horizontal Metadata (Kart deyil, vertical divider ilə) */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-charcoal/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-charcoal/10">
            {hero.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`py-4 sm:py-0 ${
                  idx === 0
                    ? "sm:pr-8"
                    : idx === 1
                    ? "sm:px-8"
                    : "sm:pl-8"
                } flex flex-col justify-center`}
              >
                <span className="text-[10px] tracking-widest uppercase text-champagne-dark font-medium mb-1">
                  {stat.number}
                </span>
                <div className="flex items-baseline space-x-3">
                  <span className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
                    {stat.value}
                  </span>
                  <span className="text-xs tracking-wider uppercase text-taupe font-light">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
