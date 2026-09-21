import React from "react";
import { GlowButton } from "@/components/ui/GlowButton";
import { GlassSummaryCard } from "@/components/ui/GlassSummaryCard";

export interface ServiceGlassCTASectionProps {
  id?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function ServiceGlassCTASection({
  id = "service-glass-cta",
  title,
  description,
  buttonText = "اطلب استشارة مجانية الحين",
  buttonHref = "#contact",
  className = "",
}: ServiceGlassCTASectionProps) {
  return (
    <GlassSummaryCard id={id} ariaLabelledby={`${id}-heading`} className={className}>
      {/* Title */}
      <h2 
        id={`${id}-heading`}
        className="font-forma text-2xl sm:text-4xl lg:text-5xl font-bold text-[#FFF7E6] tracking-tight leading-tight drop-shadow-md"
      >
        {title}
      </h2>

      {/* Description */}
      <div className="font-forma text-base sm:text-xl lg:text-2xl text-[#5E96B7] font-medium leading-relaxed max-w-3xl lg:max-w-4xl mx-auto pt-1 sm:pt-2">
        {description}
      </div>

      {/* Glow Button CTA */}
      {buttonText && (
        <div className="pt-3 sm:pt-4">
          <GlowButton href={buttonHref}>
            {buttonText}
          </GlowButton>
        </div>
      )}
    </GlassSummaryCard>
  );
}
