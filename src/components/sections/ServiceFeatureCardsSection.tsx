import React from "react";
import Image from "next/image";

export interface FeatureCardData {
  id: string;
  image: string;
  alt?: string;
  title: string;
  description: string;
}

export interface ServiceFeatureCardsSectionProps {
  id?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  cards: FeatureCardData[];
  className?: string;
}

export function FeatureCard({ card }: { card: FeatureCardData }) {
  return (
    <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#D2BB79]/40 via-white/15 to-transparent hover:from-[#D2BB79] hover:via-[#5E96B7]/40 hover:to-[#D2BB79]/30 transition-all duration-500 shadow-2xl group hover:scale-[1.02]">
      <div className="w-full h-full rounded-[calc(1.5rem-1px)] bg-[#03111F]/75 backdrop-blur-2xl p-5 sm:p-6 flex flex-col items-center text-center space-y-4 border border-white/10 hover:border-transparent transition-all duration-300">
        {/* Card Image Frame */}
        <div className="relative w-full aspect-[1.6/1] rounded-2xl overflow-hidden border border-[#5E96B7]/30 shadow-lg">
          <Image
            src={card.image}
            alt={card.alt || card.title}
            fill
            quality={80}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#03111F]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Card Title & Description */}
        <div className="flex flex-col items-center space-y-2 pt-1">
          <h3 className="font-forma text-xl sm:text-2xl font-bold text-[#FFF7E6] tracking-tight group-hover:text-[#D2BB79] transition-colors duration-300">
            {card.title}
          </h3>
          <p className="font-forma text-sm sm:text-base text-[#E9EDF3]/85 font-medium leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServiceFeatureCardsSection({
  id = "service-feature-cards",
  title,
  subtitle,
  cards,
  className = "",
}: ServiceFeatureCardsSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full py-16 sm:py-24 bg-[#03111F] overflow-hidden ${className}`}
    >
      {/* Background subtle radial ambient light blur */}
      <div 
        className="pointer-events-none absolute inset-0 m-auto w-[70%] sm:w-[50%] h-[50%] rounded-full bg-[#D2BB79]/05 blur-3xl z-0"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl lg:max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12 sm:mb-16">
          <h2
            id={`${id}-heading`}
            className="font-forma text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D2BB79] tracking-tight leading-tight"
          >
            {title}
          </h2>

          {subtitle && (
            <p className="font-forma text-lg sm:text-xl text-[#FFF7E6]/90 font-medium max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* Underline accent line */}
          <div 
            className="w-24 sm:w-32 h-[3px] bg-gradient-to-r from-[#D2BB79]/20 via-[#D2BB79] to-[#D2BB79]/20 rounded-full mt-2"
            aria-hidden="true"
          />
        </div>

        {/* 4 Cards Grid Layout (1 col mobile, 2 cols tablet, 4 cols desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
          {cards.map((card) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
