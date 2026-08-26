"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteContent } from "@/data/content";

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { services } = siteContent;

  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-ivory border-t border-charcoal/10">
      <Container>
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-charcoal/10">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-6 h-[1px] bg-champagne" />
                <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium">
                  {services.eyebrow}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal leading-[1.12] whitespace-pre-line">
                {services.heading}
              </h2>
            </div>

            <p className="mt-4 md:mt-0 text-taupe text-sm sm:text-base max-w-xs font-light leading-relaxed">
              {services.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Editorial Rows (NO card grid) */}
        <div className="divide-y divide-charcoal/10 border-b border-charcoal/10">
          {services.items.map((item, idx) => {
            const isHovered = hoveredId === item.id;

            return (
              <ScrollReveal key={item.id} delay={idx * 100}>
                <Link
                  href={item.href}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative block py-8 sm:py-12 transition-colors duration-400 min-h-[44px] focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
                >
                  {/* Subtle Gold Horizontal Animated Line on Hover */}
                  <div
                    className={`absolute top-0 left-0 h-[1.5px] bg-champagne transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isHovered ? "w-full" : "w-0"
                    }`}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
                    {/* Sol: 01 / 02 / 03 */}
                    <div className="md:col-span-2 flex items-center">
                      <span className="font-serif text-2xl sm:text-3xl text-champagne-dark font-normal transition-colors duration-300">
                        {item.number}
                      </span>
                    </div>

                    {/* Orta: Xidmət Adı (translates 4-6px right on hover) */}
                    <div className="md:col-span-5">
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-normal transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-champagne-dark group-hover:translate-x-1.5">
                        {item.title}
                      </h3>
                    </div>

                    {/* Sağ: Qısa Description (opacity 0.75 -> 1) + Arrow (translates 4px) */}
                    <div className="md:col-span-5 flex items-center justify-between space-x-4 pt-2 md:pt-0">
                      <p className="text-taupe opacity-75 group-hover:opacity-100 transition-opacity duration-400 text-sm sm:text-base font-light leading-relaxed max-w-sm">
                        {item.description}
                      </p>
                      <span className="text-charcoal group-hover:text-champagne-dark text-xl sm:text-2xl font-light transform transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 shrink-0">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
