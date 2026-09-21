import { Navbar } from "@/components/layout/Navbar";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { FirstKeyEfficiencySection } from "@/components/sections/FirstKeyEfficiencySection";
import { SecondKeyStruggleSection } from "@/components/sections/SecondKeyStruggleSection";
import { ThirdKeyPerfectionSection } from "@/components/sections/ThirdKeyPerfectionSection";
import { AboutGlassSummarySection } from "@/components/sections/AboutGlassSummarySection";

export const metadata = {
  title: "من نحن | كاف - KAAF",
  description: "في كل لعبة فيها باب ما ينفتح بالقوة .. ولا بالسرعة .. ينفتح فقط إذا عرفت الشفرة! والشفرة عندنا مكوّنة من 3 مفاتيح! تعرف على كاف.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        <AboutHeroSection />
        <FirstKeyEfficiencySection />
        <SecondKeyStruggleSection />
        <ThirdKeyPerfectionSection />
        <AboutGlassSummarySection />
      </main>
    </div>
  );
}
