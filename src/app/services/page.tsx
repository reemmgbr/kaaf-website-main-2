import { Navbar } from "@/components/layout/Navbar";
import { ServicesHeroSection } from "@/components/sections/ServicesHeroSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { ServicesGlassSummarySection } from "@/components/sections/ServicesGlassSummarySection";

export const metadata = {
  title: "خدماتنا | كاف - KAAF",
  description: "نجمع بين الاستراتيجية والإبداع والتنفيذ لنقدم حلولاً تسويقية متكاملة تساعد علامتك التجارية على الوصول إلى جمهورها، وتعزيز حضورها، وتحويل الفرص إلى نتائج حقيقية.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        <ServicesHeroSection />
        <ServicesGridSection />
        <ServicesGlassSummarySection />
      </main>
    </div>
  );
}
