import React from "react";
import { GlowButton } from "@/components/ui/GlowButton";

export interface ServiceCalloutGlassSectionProps {
  id?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export function ServiceCalloutGlassSection({
  id = "service-callout",
  title,
  description,
  buttonText = "ابدأ مع كاف الآن",
  buttonHref = "#contact",
  className = "",
}: ServiceCalloutGlassSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full py-16 sm:py-24 bg-[#03111F] overflow-hidden flex items-center justify-center ${className}`}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-5 sm:space-y-6 max-w-4xl lg:max-w-5xl mx-auto">
          
          {/* Section Gold Title */}
          <h2 
            id={`${id}-heading`}
            className="font-forma text-2xl sm:text-3xl lg:text-4xl font-bold text-[#D2BB79] tracking-tight leading-tight"
          >
            {title}
          </h2>

          {/* Section Cream Paragraph */}
          <div className="font-forma text-base sm:text-lg lg:text-xl text-[#FFF7E6] font-medium leading-relaxed max-w-3xl lg:max-w-4xl mx-auto">
            {description}
          </div>

          {/* Centered CTA Button */}
          {buttonText && (
            <div className="pt-3 sm:pt-4">
              <GlowButton href={buttonHref}>
                {buttonText}
              </GlowButton>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

