import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GlowButton } from "@/components/ui/GlowButton";

export interface PageHeroSectionProps {
  id?: string;
  title: string;
  description?: React.ReactNode;
  bgImage: string;
  bgImageAlt: string;
  breadcrumbLabel: string;
  parentBreadcrumb?: {
    label: string;
    href: string;
  };
  buttonText?: string;
  buttonHref?: string;
  size?: "normal" | "compact";
}

export function PageHeroSection({
  id = "page-hero",
  title,
  description,
  bgImage,
  bgImageAlt,
  breadcrumbLabel,
  parentBreadcrumb,
  buttonText = "ابدأ معنا الان",
  buttonHref = "#contact",
  size = "normal",
}: PageHeroSectionProps) {
  const isCompact = size === "compact";

  return (
    <section 
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full flex flex-col justify-between overflow-hidden bg-[#03111F] ${
        isCompact
          ? "min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] pt-20 sm:pt-28 pb-6 sm:pb-8"
          : "min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] pt-24 sm:pt-32 pb-8 sm:pb-12"
      }`}
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={bgImage}
          alt={bgImageAlt}
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        {/* Soft top and bottom dark gradient overlays for seamless navbar and section blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03111F]/75 via-transparent to-[#03111F]" />
      </div>

      {/* Hero Center Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto pt-2 sm:pt-4">
        
        {/* Main Section Heading */}
        <h1 
          id={`${id}-heading`}
          className="font-forma text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D2BB79] tracking-tight drop-shadow-xl mb-4 sm:mb-6"
        >
          {title}
        </h1>

        {/* Subtitle Description Lines */}
        {description && (
          <div className="font-forma text-lg sm:text-xl lg:text-2xl text-[#FFF7E6] font-medium leading-relaxed space-y-2 mb-6 sm:mb-8 drop-shadow-md max-w-4xl">
            {description}
          </div>
        )}

        {/* Glowing CTA Button */}
        <div className="flex justify-center pt-1">
          <GlowButton href={buttonHref}>
            {buttonText}
          </GlowButton>
        </div>

      </div>

      {/* Breadcrumb Navigation Bar (Anchored on the RIGHT side in RTL) */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-center">
        <nav aria-label="مسار التصفح" className="inline-flex items-center gap-2 text-sm sm:text-base font-forma font-medium text-[#FFF7E6]/80 bg-[#0B0B0B]/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D2BB79]/20 shadow-md">
          <Link href="/" className="transition-colors hover:text-[#D2BB79]">
            الصفحة الرئيسية
          </Link>
          <svg 
            className="w-4 h-4 text-[#D2BB79] shrink-0 stroke-[#D2BB79] stroke-[2.5]" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          {parentBreadcrumb && (
            <>
              <Link href={parentBreadcrumb.href} className="transition-colors hover:text-[#D2BB79]">
                {parentBreadcrumb.label}
              </Link>
              <svg 
                className="w-4 h-4 text-[#D2BB79] shrink-0 stroke-[#D2BB79] stroke-[2.5]" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </>
          )}
          <span className="text-[#D2BB79] font-bold">{breadcrumbLabel}</span>
        </nav>
      </div>

    </section>
  );
}
