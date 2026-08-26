import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/content";

export default function FinalCtaSection() {
  const { finalCta, social } = siteContent;

  return (
    <section className="py-28 sm:py-36 lg:py-44 bg-ivory-secondary/40 border-t border-charcoal/10 relative overflow-hidden">
      {/* Subtle Ambient Champagne Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-champagne/10 rounded-full filter blur-3xl pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="w-6 h-[1px] bg-champagne" />
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium">
              YENİ BAŞLANĞIC
            </span>
            <span className="w-6 h-[1px] bg-champagne" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal font-normal leading-[1.12] mb-6">
            <span>{finalCta.headingLines.line1}</span>
            <br />
            <span className={finalCta.headingLines.line2Italic ? "italic font-light" : ""}>
              {finalCta.headingLines.line2}
            </span>
          </h2>

          <p className="text-taupe text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
            {finalCta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/elaqe"
              className="w-full sm:w-auto inline-flex items-center justify-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory px-8 py-4 rounded-[2px] hover:bg-charcoal-light hover:text-champagne-light transition-all duration-300 border border-charcoal hover:border-champagne/40 focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
            >
              <span>{finalCta.primaryButton}</span>
              <span className="ml-2">→</span>
            </Link>
            <a
              href={social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center text-xs tracking-widest uppercase font-medium bg-transparent text-charcoal px-8 py-4 rounded-[2px] border border-charcoal/20 hover:border-champagne hover:text-champagne-dark transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
            >
              <span>{finalCta.whatsappButton}</span>
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
