import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { siteContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Haqqımda — Mehin İsmayılova",
  description: "Mehin İsmayılovanın diksiya və nitq sənətinə fərdi yanaşması, pedaqoji fəlsəfəsi və tədris prinsipləri.",
};

export default function AboutPage() {
  const { aboutPage, aboutPreview } = siteContent;

  return (
    <div className="pt-12 sm:pt-16 lg:pt-20 bg-ivory">
      {/* Page Header (Hero) */}
      <Container>
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-[1px] bg-champagne" />
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium">
              {aboutPage.hero.eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal font-normal leading-[1.08] mb-6">
            {aboutPage.hero.heading}
          </h1>

          <p className="text-taupe text-lg sm:text-xl font-serif italic text-charcoal/80">
            &ldquo;{aboutPage.hero.subtitle}&rdquo;
          </p>
        </div>

        {/* Editorial Presentation: Portrait + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 sm:pb-28 border-b border-charcoal/10 items-start">
          {/* Sol: Portret */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[4px] bg-ivory-secondary border border-charcoal/10 shadow-[0_12px_28px_rgba(23,22,20,0.03)] mb-6">
              <Image
                src="/images/mehin-about.jpg"
                alt={aboutPreview.imageAlt}
                fill
                priority
                className="object-cover object-center"
              />
            </div>
            <div className="p-6 bg-ivory-secondary/40 rounded-[2px] border border-charcoal/10">
              <span className="text-[10px] tracking-widest uppercase text-champagne-dark font-medium block mb-1">
                FƏALİYYƏT
              </span>
              <p className="font-serif text-lg text-charcoal">
                Mehin İsmayılova
              </p>
              <p className="text-xs text-taupe mt-1 font-light">
                Diksiya & Nitq Müəlliməsi
              </p>
            </div>
          </div>

          {/* Sağ: Şəxsi Təqdimat və Fəlsəfə */}
          <div className="lg:col-span-7 space-y-8 text-taupe text-base sm:text-lg font-light leading-relaxed">
            {aboutPage.introParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            {/* Philosophy Highlight Quote */}
            <div className="border-l-2 border-champagne pl-6 py-2 my-8 bg-ivory-secondary/30">
              <blockquote className="font-serif italic text-xl sm:text-2xl text-charcoal leading-snug">
                &ldquo;{aboutPage.philosophyQuote}&rdquo;
              </blockquote>
            </div>

            {/* Pedaqoji Yanaşma və Prinsiplər (Sadə text + dividers, kart deyil) */}
            <div className="pt-8 border-t border-charcoal/10">
              <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium block mb-6">
                PEDAQOJİ PRİNSİPLƏR
              </span>

              <div className="space-y-6">
                {aboutPage.principles.map((principle) => (
                  <div key={principle.number} className="pb-6 border-b border-charcoal/10 last:border-0 last:pb-0">
                    <div className="flex items-baseline space-x-3 mb-2">
                      <span className="text-xs font-serif text-champagne-dark font-medium">
                        {principle.number}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-normal">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-taupe text-sm sm:text-base font-light leading-relaxed pl-6">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dərslərdə Fokuslandığımız İstiqamətlər (Editorial List) */}
        <div className="py-20 sm:py-28 border-b border-charcoal/10">
          <div className="max-w-2xl mb-14">
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium block mb-3">
              METODİK TƏMƏLLƏR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
              Dərslərdə nəyə fokuslanırıq?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutPage.focusAreas.map((area) => (
              <div key={area.number} className="flex flex-col justify-between pt-4 border-t border-charcoal/10">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-champagne-dark font-medium block mb-2">
                    {area.number}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-normal mb-3">
                    {area.title}
                  </h3>
                  <p className="text-taupe text-sm font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="w-8 h-px bg-champagne/40 mt-6" />
              </div>
            ))}
          </div>

          <div className="mt-14 pt-6 flex justify-start">
            <Link
              href="/elaqe"
              className="inline-flex items-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory px-7 py-3.5 rounded-[2px] hover:bg-charcoal-light hover:text-champagne-light transition-all duration-300 border border-charcoal hover:border-champagne/40"
            >
              <span>Dərsə müraciət edin</span>
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </Container>

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
