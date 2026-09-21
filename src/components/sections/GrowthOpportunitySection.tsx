import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";

export function GrowthOpportunitySection() {
  return (
    <section
      id="growth-opportunity"
      aria-labelledby="growth-opportunity-heading"
      className="relative w-full py-16 sm:py-24 bg-[#03111F] overflow-hidden flex items-center justify-center"
    >
      {/* Ambient background glow effects */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[#5E96B7]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[#D2BB79]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Text Content Column (Positioned on the RIGHT side in RTL) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 text-start order-1">
            {/* Main Heading */}
            <h2
              id="growth-opportunity-heading"
              className="font-forma text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D2BB79] tracking-tight leading-[1.25] drop-shadow-md"
            >
              ليش تضيع فرصة نموك؟
            </h2>

            {/* Paragraph Description */}
            <p className="font-forma text-lg sm:text-xl lg:text-2xl text-[#FFF7E6] font-medium leading-relaxed max-w-xl">
              احصل على استشارة مجانية وصادقة الآن من فريق يبي يساعدك لا يريد منك
              بس فلوس.
            </p>

            {/* Glowing CTA Button */}
            <div className="pt-3 sm:pt-5">
              <GlowButton href="#contact">تواصل معنا الان</GlowButton>
            </div>
          </div>

          {/* Glass 3D Logo Animated GIF Column (Positioned on the LEFT side in RTL) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center order-2">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-square flex items-center justify-center">
              <Image
                src="/kaaf.svg"
                alt="شعار كاف الثلاثي الأبعاد"
                width={600}
                height={600}
                unoptimized
                priority={false}
                className="object-contain w-full h-auto drop-shadow-[0_10px_40px_rgba(94,150,183,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
