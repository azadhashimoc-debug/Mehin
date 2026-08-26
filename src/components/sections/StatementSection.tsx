import React from "react";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/content";

export default function StatementSection() {
  const { statement } = siteContent;

  return (
    <section className="py-28 sm:py-36 lg:py-44 bg-ivory relative overflow-hidden border-t border-charcoal/10">
      <Container>
        <div className="max-w-[900px] mx-auto text-center">
          {/* Eyebrow with Subtle Gold Accent Lines */}
          <div className="inline-flex items-center justify-center space-x-3 mb-8 sm:mb-10">
            <span className="w-6 h-[1px] bg-champagne" />
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium">
              {statement.eyebrow}
            </span>
            <span className="w-6 h-[1px] bg-champagne" />
          </div>

          {/* Large Editorial Serif Statement */}
          <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal font-normal leading-[1.18] tracking-tight">
            <span>{statement.quoteLines.line1}</span>{" "}
            <span className={statement.quoteLines.line2Italic ? "italic font-light text-charcoal/90" : ""}>
              {statement.quoteLines.line2}
            </span>
            <br className="hidden sm:inline" />{" "}
            <span>{statement.quoteLines.line3}</span>{" "}
            <span className={statement.quoteLines.line4Italic ? "italic font-light text-charcoal/90" : ""}>
              {statement.quoteLines.line4}
            </span>
          </blockquote>

          {/* Minimal Divider & Author */}
          <div className="mt-12 sm:mt-16 flex flex-col items-center">
            <div className="w-10 h-px bg-champagne mb-4" />
            <cite className="not-italic text-[11px] sm:text-xs tracking-widest uppercase text-taupe font-medium">
              {statement.author}
            </cite>
          </div>
        </div>
      </Container>
    </section>
  );
}
