"use client";

import { motion } from "motion/react";
import React from "react";
import Image from "next/image";

const partnerLogos = [
  { src: "/partner-frame-main.png", alt: "شريك كاف" },
  { src: "/partner-frame-1.png", alt: "شريك كاف" },
  { src: "/partner-frame-2.png", alt: "سلة" },
  { src: "/partner-frame-3.png", alt: "شوبيفاي" },
  { src: "/partner-google-tag-manager.png", alt: "Google Tag Manager" },
];

// Set A
const setA = [
  ...partnerLogos,
  ...partnerLogos,
  ...partnerLogos,
];

// Full continuous strip = Set A + Set B (exact identical half)
const allMarqueeLogos = [...setA, ...setA];

export function PartnersSection() {
  return (
    <section
      id="partners"
      aria-label="شركاء النجاح"
      className="relative w-full bg-[#03111F] overflow-hidden"
    >
      {/* ── Section Header ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8   pb-10 sm:pb-14">
       <motion.div
      className="flex flex-col items-center text-center space-y-3"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.25,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {/* Badge */}
      <motion.div
        className="inline-flex items-center justify-center px-6 py-1.5 rounded-full bg-white text-[#03111F] font-forma font-bold text-[16px] sm:text-base mb-3 shadow-md"
        variants={{
          hidden: {
            opacity: 0,
            y: 12,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        شركاء النجاح
      </motion.div>

      {/* Heading */}
      <motion.h2
        id="partners-heading"
        className="font-forma text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D2BB79] tracking-tight leading-tight"
        variants={{
          hidden: {
            opacity: 0,
            y: 16,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        ورا كل إنجاز، شراكة صنعت الفرق.
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="font-forma text-base sm:text-lg text-[#FFF7E6] font-bold max-w-3xl text-center leading-relaxed pt-1"
        variants={{
          hidden: {
            opacity: 0,
            y: 12,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        ما نختار نكون مجرد مزوّد خدمات، نختار نكون شريك يفهم رؤيتك، يعيش معك
        التحديات، ويشتغل معك عشان نصنع نمو مستدام ونتائج تفرق فعلًا.
      </motion.p>
    </motion.div>
      </div>

      {/* ── Marquee Logo Strip with 3px gradient border and soft side fades ── */}
      <div className="relative w-full py-5 sm:py-6 partner-marquee-border overflow-hidden bg-[#03111F]">
        {/* Subtle #5E96B7 Left Side Fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-28 md:w-40 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(94, 150, 183, 0.35) 0%, rgba(94, 150, 183, 0.1) 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        {/* Subtle #5E96B7 Right Side Fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-28 md:w-40 z-10"
          style={{
            background:
              "linear-gradient(to left, rgba(94, 150, 183, 0.35) 0%, rgba(94, 150, 183, 0.1) 50%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── 100% True Infinite Loop Marquee (0% -> -50% translation of 2x identical halves) ── */}
        <div dir="ltr" className="w-full flex overflow-hidden select-none">
          <div className="animate-marquee-track items-center py-2">
            {allMarqueeLogos.map((logo, index) => (
              <div
                key={index}
                className="group/logo relative shrink-0 px-10 sm:px-16 py-3 flex items-center justify-center cursor-pointer"
              >
                <div className="relative h-11 sm:h-14 w-auto max-w-[150px] sm:max-w-[190px] flex items-center justify-center p-1 transition-transform duration-300 ease-out group-hover/logo:scale-110">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    height={56}
                    width={190}
                    quality={90}
                    className="object-contain h-full w-auto max-h-11 sm:max-h-14 opacity-85 group-hover/logo:opacity-100 transition-opacity duration-300"
                    sizes="190px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
