import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteContent } from "@/data/content";

export default function MethodologySection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <SectionHeading
            eyebrow={siteContent.methodology.eyebrow}
            title={siteContent.methodology.heading}
            description={siteContent.methodology.description}
            className="mb-0"
          />
        </div>

        {/* Minimal Typography Pillars (NO heavy cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-8 border-t border-charcoal/10">
          {siteContent.methodology.pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col justify-between">
              <div>
                <span className="text-[11px] tracking-widest uppercase text-champagne-dark font-medium block mb-3">
                  {pillar.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-4">
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
