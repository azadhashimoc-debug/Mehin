import React from "react";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/content";

export default function MethodologySection() {
  const { methodology } = siteContent;

  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-ivory border-t border-charcoal/10">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-[1px] bg-champagne" />
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium">
              {methodology.eyebrow}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal mb-4">
            {methodology.heading}
          </h2>
          <p className="text-taupe text-sm sm:text-base font-light leading-relaxed">
            {methodology.description}
          </p>
        </div>

        {/* Minimal Editorial Columns (NO heavy cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-8 border-t border-charcoal/10">
          {methodology.pillars.map((pillar) => (
            <div key={pillar.number} className="flex flex-col justify-between">
              <div>
                <span className="text-[11px] tracking-widest uppercase text-champagne-dark font-medium block mb-2">
                  {pillar.number}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-3">
                  {pillar.title}
                </h3>
                <p className="text-taupe text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              {/* Minimal Bottom Line Detail */}
              <div className="w-8 h-px bg-champagne/40 mt-8" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
