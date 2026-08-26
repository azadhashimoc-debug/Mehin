"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { siteContent } from "@/data/content";

export default function ContactPage() {
  const { contactPage, social } = siteContent;
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    direction: contactPage.form.directions[0],
    format: contactPage.form.formats[0],
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Salam Mehin xanım. Dərslərə müraciət edirəm.\n\nAd və Soyad: ${formData.name}\nTelefon: ${formData.phone}\nE-poçt: ${formData.email || "Göstərilməyib"}\nİstiqamət: ${formData.direction}\nFormat: ${formData.format}\nQeyd: ${formData.message || "Yoxdur"}`
    );
    window.open(`${social.whatsapp}?text=${text}`, "_blank");
    setIsSubmitted(true);
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="pt-12 sm:pt-16 lg:pt-20 bg-ivory">
      {/* 1. Hero Section */}
      <Container>
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-6 h-[1px] bg-champagne" />
            <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium">
              {contactPage.hero.eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal font-normal leading-[1.08] mb-6">
            <span>{contactPage.hero.headingLines.line1}</span>
            <br />
            <span className={contactPage.hero.headingLines.line2Italic ? "italic font-light" : ""}>
              {contactPage.hero.headingLines.line2}
            </span>
          </h1>

          <p className="text-taupe text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
            {contactPage.hero.subtitle}
          </p>
        </div>

        {/* 2. Main Two-Column Layout (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-24 sm:pb-32 border-b border-charcoal/10 items-start">
          {/* Sol: Əlaqə Kanalları (Editorial List, kart deyil) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-3">
                {contactPage.sidebar.heading}
              </h2>
              <p className="text-taupe text-sm sm:text-base font-light leading-relaxed">
                {contactPage.sidebar.description}
              </p>
            </div>

            {/* Editorial Contact List with thin dividers */}
            <div className="divide-y divide-charcoal/10 border-y border-charcoal/10 pt-2">
              {/* WhatsApp */}
              <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-champagne-dark font-medium block">
                    WHATSAPP
                  </span>
                  <span className="text-xs text-taupe font-light">
                    Sürətli və birbaşa ünsiyyət
                  </span>
                </div>
                <a
                  href={social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs tracking-wider uppercase font-medium text-charcoal group-hover:text-champagne-dark transition-colors py-1"
                >
                  <span>Birbaşa yazın</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>

              {/* Instagram */}
              <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-champagne-dark font-medium block">
                    INSTAGRAM
                  </span>
                  <span className="text-xs text-taupe font-light">
                    {social.instagramHandle}
                  </span>
                </div>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs tracking-wider uppercase font-medium text-charcoal group-hover:text-champagne-dark transition-colors py-1"
                >
                  <span>Səhifəyə baxın</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>

              {/* E-Poçt */}
              <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-champagne-dark font-medium block">
                    E-POÇT
                  </span>
                  <span className="text-xs text-taupe font-light">
                    {social.email}
                  </span>
                </div>
                <a
                  href={`mailto:${social.email}`}
                  className="inline-flex items-center text-xs tracking-wider uppercase font-medium text-charcoal group-hover:text-champagne-dark transition-colors py-1"
                >
                  <span>Məktub göndərin</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Sağ: Dərsə Müraciət Formu */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-ivory border border-charcoal/15 rounded-[4px]">
              <div className="mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal">
                  {contactPage.form.title}
                </h3>
                <p className="text-taupe text-xs sm:text-sm font-light mt-1">
                  {contactPage.form.subtitle}
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-champagne/20 text-champagne-dark mx-auto flex items-center justify-center font-serif text-xl">
                    ✓
                  </div>
                  <h4 className="font-serif text-2xl text-charcoal">
                    {contactPage.form.successTitle}
                  </h4>
                  <p className="text-taupe text-sm max-w-md mx-auto font-light leading-relaxed">
                    {contactPage.form.successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Ad və Soyad */}
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-charcoal font-medium mb-2">
                      {contactPage.form.fields.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={contactPage.form.fields.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-ivory border border-charcoal/15 focus:border-champagne focus:outline-none px-4 py-3.5 text-sm text-charcoal placeholder:text-taupe/40 rounded-[4px] transition-colors"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-charcoal font-medium mb-2">
                      {contactPage.form.fields.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={contactPage.form.fields.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-ivory border border-charcoal/15 focus:border-champagne focus:outline-none px-4 py-3.5 text-sm text-charcoal placeholder:text-taupe/40 rounded-[4px] transition-colors"
                    />
                  </div>

                  {/* E-mail (Könüllü) */}
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-charcoal font-medium mb-2">
                      {contactPage.form.fields.emailLabel}
                    </label>
                    <input
                      type="email"
                      placeholder={contactPage.form.fields.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-ivory border border-charcoal/15 focus:border-champagne focus:outline-none px-4 py-3.5 text-sm text-charcoal placeholder:text-taupe/40 rounded-[4px] transition-colors"
                    />
                  </div>

                  {/* Dərs İstiqaməti & Format Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] tracking-widest uppercase text-charcoal font-medium mb-2">
                        {contactPage.form.fields.directionLabel}
                      </label>
                      <select
                        value={formData.direction}
                        onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
                        className="w-full bg-ivory border border-charcoal/15 focus:border-champagne focus:outline-none px-4 py-3.5 text-sm text-charcoal rounded-[4px] transition-colors cursor-pointer"
                      >
                        {contactPage.form.directions.map((dir, idx) => (
                          <option key={idx} value={dir}>
                            {dir}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] tracking-widest uppercase text-charcoal font-medium mb-2">
                        {contactPage.form.fields.formatLabel}
                      </label>
                      <select
                        value={formData.format}
                        onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                        className="w-full bg-ivory border border-charcoal/15 focus:border-champagne focus:outline-none px-4 py-3.5 text-sm text-charcoal rounded-[4px] transition-colors cursor-pointer"
                      >
                        {contactPage.form.formats.map((fmt, idx) => (
                          <option key={idx} value={fmt}>
                            {fmt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Qısa Mesaj */}
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-charcoal font-medium mb-2">
                      {contactPage.form.fields.messageLabel}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={contactPage.form.fields.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-ivory border border-charcoal/15 focus:border-champagne focus:outline-none px-4 py-3.5 text-sm text-charcoal placeholder:text-taupe/40 rounded-[4px] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory py-4 rounded-[2px] hover:bg-charcoal-light hover:text-champagne-light transition-all duration-300 border border-charcoal hover:border-champagne/40"
                    >
                      <span>{contactPage.form.submitButton}</span>
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </form>
              )}

              {/* 4. WhatsApp Alternative */}
              <div className="mt-8 pt-6 border-t border-charcoal/10 text-center">
                <p className="text-xs text-taupe font-light mb-2">
                  {contactPage.whatsappAlternative.question}
                </p>
                <a
                  href={social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs tracking-wider uppercase font-medium text-charcoal hover:text-champagne-dark transition-colors"
                >
                  <span>{contactPage.whatsappAlternative.linkText}</span>
                  <span className="ml-1.5">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5. FAQ Section (Minimal Accordion with dividers) */}
        <div className="py-20 sm:py-28">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1px] bg-champagne" />
              <span className="text-[10px] sm:text-[11px] tracking-widest uppercase text-champagne-dark font-medium">
                {contactPage.faq.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal mb-3">
              {contactPage.faq.heading}
            </h2>
            <p className="text-taupe text-sm font-light">
              {contactPage.faq.subtitle}
            </p>
          </div>

          <div className="max-w-3xl divide-y divide-charcoal/10 border-y border-charcoal/10">
            {contactPage.faq.items.map((item) => {
              const isOpen = activeFaq === item.id;

              return (
                <div key={item.id} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="font-serif text-xl sm:text-2xl text-charcoal group-hover:text-champagne-dark transition-colors pr-6">
                      {item.question}
                    </span>
                    <span className="text-xl font-light text-champagne-dark shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pr-12 text-taupe text-sm sm:text-base font-light leading-relaxed animate-fade-in">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* 6. Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
