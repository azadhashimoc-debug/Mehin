import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="py-32 sm:py-44 bg-ivory text-center">
      <Container>
        <div className="max-w-md mx-auto">
          <span className="text-[10px] tracking-widest uppercase text-champagne-dark font-medium block mb-3">
            404 — SƏHİFƏ TAPILMADI
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal font-normal mb-6">
            Axtardığınız səhifə mövcud deyil.
          </h1>
          <p className="text-taupe text-sm font-light mb-8">
            Daxil etdiyiniz keçid dəyişdirilmiş və ya silinmiş ola bilər.
          </p>
          <Link
            href="/"
            className="inline-flex items-center text-xs tracking-widest uppercase font-medium bg-charcoal text-ivory px-7 py-3.5 rounded-[2px] hover:bg-charcoal-light hover:text-champagne-light transition-all"
          >
            <span>Ana səhifəyə qayıt</span>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
