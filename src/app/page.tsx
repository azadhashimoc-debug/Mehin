import HeroSection from "@/components/sections/HeroSection";
import StatementSection from "@/components/sections/StatementSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import SeminarShowcaseSection from "@/components/sections/SeminarShowcaseSection";
import MethodologySection from "@/components/sections/MethodologySection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatementSection />
      <ServicesSection />
      <AboutPreviewSection />
      <SeminarShowcaseSection />
      <MethodologySection />
      <FinalCtaSection />
    </>
  );
}
