"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function SeminarShowcaseSection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory border-t border-charcoal/10 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Sol Tərəf: Seminar & Təşəkkürnamə Fotosu (~50%) */}
          <div className="lg:col-span-6">
            <ScrollReveal>
              <div className="relative group">
                <div className="absolute -inset-3 bg-champagne/10 rounded-xl filter blur-2xl opacity-60 pointer-events-none -z-10 transition-opacity duration-700 group-hover:opacity-90" />

                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[4px] bg-ivory-secondary border border-charcoal/10 shadow-[0_12px_28px_rgba(23,22,20,0.04)]">
                  <Image
                    src="/images/mehin-seminar.jpg"
                    alt="Mehin İsmayılova seminar və təşəkkürnamə təqdimatı"
                    fill
                    unoptimized
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent text-ivory">
                    <span className="text-xs font-serif tracking-wide block">
                      Seminar &amp; Tədris Fəaliyyəti
                    </span>
                    <span className="text-[10px] tracking-widest uppercase text-champagne-light block mt-0.5">
                      Mükəmməllik Mərkəzi • &ldquo;Səlis Nitq&rdquo; Seminarı
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 w-14 h-14 border-b border-r border-champagne/40 pointer-events-none transition-all duration-500 group-hover:border-champagne/70" />
              </div>
            </ScrollReveal>
          </div>

          {/* Sağ Tərəf: Təsvir & Fəlsəfə (~50%) */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={100}>
              <div className="max-w-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="w-6 h-[1px] bg-champagne" />
                  <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium">
                    TƏCRÜBƏ VƏ NƏTİCƏ
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-[1.14] mb-5">
                  Praktiki təlimlər və seminar çıxışları
                </h2>

                <p className="text-taupe text-sm sm:text-base font-light leading-relaxed mb-6">
                  Akademik və ictimai platformalarda, o cümlədən Mükəmməllik Mərkəzinin “Səlis Nitq” natiqlik klublarında fəal seminar və ustad dərsləri keçirərək yüzlərlə dinləyicinin özünəinamını artırmağa dəstək olmuşdur.
                </p>

                <div className="border-l-2 border-champagne pl-4 py-2 mb-8 bg-ivory-secondary/40">
                  <p className="font-serif italic text-base sm:text-lg text-charcoal leading-snug">
                    &ldquo;Hər bir tələbənin inkişafı və auditoriya qarşısındakı inamı bizim ən böyük uğurumuzdur.&rdquo;
                  </p>
                </div>

                <Link
                  href="/elaqe"
                  className="group inline-flex items-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory px-7 py-3.5 rounded-[2px] hover:bg-charcoal-light hover:text-champagne-light transition-all duration-300 border border-charcoal hover:border-champagne/40 min-h-[44px]"
                >
                  <span>Dərslərə qoşulun</span>
                  <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
