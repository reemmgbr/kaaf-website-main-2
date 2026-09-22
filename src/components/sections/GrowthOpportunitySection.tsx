"use client";

import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";
        import { motion } from "motion/react";


export function GrowthOpportunitySection() {
  return (
    <section
      id="growth-opportunity"
      aria-labelledby="growth-opportunity-heading"
      className="relative w-full sm:py-12 bg-[#03111F] overflow-hidden flex items-center justify-center"
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

<motion.div
  className="w-full lg:w-1/2 flex flex-col items-center sm:items-start space-y-6 text-start order-1"
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
  {/* Main Heading */}
  <motion.h2
    id="growth-opportunity-heading"
    className="font-forma text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D2BB79] tracking-tight leading-[1.25] drop-shadow-md"
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
    ليش تضيع فرصة نموك؟
  </motion.h2>

  {/* Paragraph Description */}
  <motion.p
    className="font-forma text-lg sm:text-xl text-center sm:text-start lg:text-2xl text-[#FFF7E6] font-medium leading-relaxed max-w-xl"
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
    احصل على استشارة مجانية وصادقة الآن من فريق يبي يساعدك لا يريد منك
    بس فلوس.
  </motion.p>

  {/* Glowing CTA Button */}
  <motion.div
    className="pt-3 sm:pt-5"
    variants={{
      hidden: {
        opacity: 0,
        y: 10,
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
    <GlowButton href="#contact">تواصل معنا الان</GlowButton>
  </motion.div>
</motion.div>

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
