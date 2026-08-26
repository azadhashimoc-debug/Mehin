import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteContent } from "@/data/content";

export default function FinalCtaSection() {
  return (
    <section className="py-28 sm:py-36 lg:py-44 bg-ivory-secondary border-t border-charcoal/10 relative overflow-hidden">
      {/* Subtle Ambient Champagne Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-champagne/15 rounded-full filter blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-[11px] tracking-widest uppercase text-champagne-dark font-medium block mb-6">
            YENİ BAŞLANĞIC
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal font-normal leading-[1.15] mb-6 whitespace-pre-line">
            {siteContent.finalCta.heading}
          </h2>

          <p className="text-taupe text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
            {siteContent.finalCta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button href="/elaqe" variant="primary" className="w-full sm:w-auto">
              {siteContent.finalCta.primaryButton}
            </Button>
            <Button
              href={siteContent.social.whatsapp}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              {siteContent.finalCta.whatsappButton} ↗
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
