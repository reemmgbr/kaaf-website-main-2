import React from "react";
import Image from "next/image";
import Link from "next/link";

export function ContactHeroSection() {
  return (
    <section 
      id="contact-hero"
      aria-labelledby="contact-hero-heading"
      className="relative w-full flex flex-col justify-between overflow-hidden bg-[#03111F] min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] pt-24 sm:pt-32 pb-8 sm:pb-12"
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/contact-hero.png"
          alt="تواصل مع شركة كاف للتسويق الرقمي"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-top opacity-90"
        />
        {/* Soft top and bottom dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03111F]/70 via-transparent to-[#03111F]" />
      </div>

      {/* Hero Center Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto pt-6 sm:pt-10">
        {/* Ambient Gold Glow behind Title */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#D2BB79]/[0.09] blur-3xl"
        />

        {/* Main Page Heading */}
        <h1 
          id="contact-hero-heading"
          className="relative z-10 font-forma text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#D2BB79] tracking-tight drop-shadow-xl"
        >
         60 ثانية بس تفصلك عن خطة مختلفة للبزنس حقك 
        </h1>
      </div>

      {/* Breadcrumb Navigation Bar (Anchored in RTL start) */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-center">
        <nav 
          aria-label="مسار التصفح" 
          className="inline-flex items-center gap-2 text-sm sm:text-base font-forma font-medium text-[#FFF7E6]/80 bg-[#0B0B0B]/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D2BB79]/20 shadow-md"
        >
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
            <path d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[#D2BB79] font-bold" aria-current="page">
            تواصل معنا
          </span>
        </nav>
      </div>
    </section>
  );
}
