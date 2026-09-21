import { GlowButton } from "@/components/ui/GlowButton";
import { GlassSummaryCard } from "@/components/ui/GlassSummaryCard";

export function AboutGlassSummarySection() {
  return (
    <GlassSummaryCard id="about-summary-glass" ariaLabelledby="about-summary-heading">
      {/* Section Main Heading */}
      <h2 
        id="about-summary-heading"
        className="font-forma text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FFF7E6] tracking-tight leading-tight drop-shadow-md"
      >
        ثلاثة مفاتيح لكن ما لها إلا باب واحد وهو:
        <span className="block text-[#FFF7E6] mt-1">
          الإنجاز اللي يصنع الفرق
        </span>
      </h2>

      {/* Summary Text Content */}
      <div className="font-forma text-lg sm:text-2xl text-[#D2BB79] font-medium leading-snug space-y-1 pt-1 drop-shadow-sm">
        <p>لأن الفوز عندنا مو ضربة حظ..</p>
        <p>الفوز نظام</p>
        <p>ونظامنا يبدأ <span className="text-[#FFF7E6] font-bold">بـ كفاءة</span></p>
        <p>يتقدّم <span className="text-[#FFF7E6] font-bold">بـ كفاح</span></p>
        <p>ويكتمل <span className="text-[#FFF7E6] font-bold">بـ كمال</span></p>
      </div>

      {/* Question Callout Line */}
      <p className="font-forma text-xl sm:text-3xl font-bold text-[#5E96B7] pt-1 drop-shadow-md">
        جاهز تفك شفرة نموك؟
      </p>

      {/* Glowing CTA Button */}
      <div className="pt-2">
        <GlowButton href="#contact">
          ابدأ مع كاف الآن
        </GlowButton>
      </div>
    </GlassSummaryCard>
  );
}
