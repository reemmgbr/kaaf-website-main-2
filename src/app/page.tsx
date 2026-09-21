import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoIsKaafSection } from "@/components/sections/WhoIsKaafSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BannerSection } from "@/components/sections/BannerSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { HomeBlogsSection } from "@/components/sections/HomeBlogsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GrowthOpportunitySection } from "@/components/sections/GrowthOpportunitySection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        {/* 1. الفــــــوز مــــو بــــس أربــــاح و أرقــــام . . الفــــوز نظــــام ! */}
        <HeroSection />

        {/* 2. مين هي كاف؟ */}
        <WhoIsKaafSection />

        {/* 3. شاهد كيف حقق عملاؤنا نموًا ملحوظًا. */}
        <ResultsSection />

        {/* 4. ما تحتاجه علامتك التجارية من خدمات تسويقية في مكان واحد! */}
        <ServicesSection />

        {/* 5. التسويــــق مــــو بــــس انتشــــار . . التسويــــق تــــأثيــــر! */}
        <BannerSection />

        {/* 6. قصص نجاح حقيقية من عملائنا */}
        <CaseStudiesSection />

        {/* 7. أفكار تستحق أن تُقرأ */}
        <HomeBlogsSection />

        {/* 8. ورا كل إنجاز، شراكة صنعت الفرق. */}
        <PartnersSection />

        {/* 9. ما يمدح السوق إلا مَن ربح فيه! */}
        <TestimonialsSection />

        {/* 10. ليش تضيع فرصة نموك؟ */}
        <GrowthOpportunitySection />
      </main>
    </div>
  );
}
