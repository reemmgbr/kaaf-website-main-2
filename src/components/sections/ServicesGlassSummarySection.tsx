import { GlowButton } from "@/components/ui/GlowButton";
import { GlassSummaryCard } from "@/components/ui/GlassSummaryCard";

export function ServicesGlassSummarySection() {
  return (
    <GlassSummaryCard id="services-summary-glass" ariaLabelledby="services-summary-heading">
      {/* Section Main Heading */}
      <h2 
        id="services-summary-heading"
        className="font-forma text-2xl sm:text-4xl lg:text-5xl font-bold text-[#D2BB79] tracking-tight leading-tight drop-shadow-md"
      >
        خدمات تسويقية متكاملة تصنع الفرق.
      </h2>

      {/* Summary Paragraph Content */}
      <p className="font-forma text-lg sm:text-2xl text-[#FFF7E6] font-medium leading-snug max-w-4xl mx-auto drop-shadow-sm pt-1">
        نقدم منظومة متكاملة من الخدمات التسويقية التي تجمع بين التخطيط والتصميم والتطوير والتسويق الرقمي، لنساعد علامتك التجارية على بناء حضور قوي، والوصول إلى عملاء أكثر، وتحقيق نمو مستدام بثقة وكفاءة.
      </p>

      {/* Glowing CTA Button */}
      <div className="pt-3">
        <GlowButton href="#contact">
          ابدأ مع كاف الآن
        </GlowButton>
      </div>
    </GlassSummaryCard>
  );
}
