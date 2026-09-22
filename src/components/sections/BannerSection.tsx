"use client";
import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";
import { motion } from "motion/react";

export function BannerSection() {
  return (
    <section 
      id="cta-banner"
      aria-labelledby="banner-heading"
      className="relative w-full min-h-[380px] sm:min-h-[520px] lg:min-h-[640px] flex items-center justify-center overflow-hidden py-12 sm:py-20 lg:py-24 bg-[#03111F]"
    >
      {/* Background Image filling full section with responsive scaling */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner-image.png"
          alt="كاف - التسويق مو بس انتشار.. التسويق تأثير!"
          fill
          priority={false}
          quality={80}
          sizes="100vw"
          className="object-cover object-center opacity-100"
        />
        {/* Soft subtle top and bottom gradient vignettes for seamless section integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03111F]/50 via-transparent to-[#03111F]/60 pointer-events-none" />
      </div>

      {/* Content Container positioned right inside the center illuminated display area */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
{/* Main Banner Heading */}
<motion.h2 
  id="banner-heading"
  className="font-forma text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.3] text-center drop-shadow-xl max-w-xs sm:max-w-2xl mb-6 sm:mb-8"
  initial={{
    opacity: 0,
    y: 35,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: false,
    amount: 0.5,
  }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <span className="text-[#FFF7E6] block">
    التسويق مو بس انتشار. .
  </span>

  <motion.span
    className="text-[#D2BB79] block mt-1 sm:mt-2"
    initial={{
      opacity: 0,
      y: 20,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: false,
      amount: 0.5,
    }}
    transition={{
      duration: 0.7,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    التسويق تأثير!
  </motion.span>
</motion.h2>

{/* CTA Button */}
<motion.div
  className="flex justify-center"
  initial={{
    opacity: 0,
    y: 25,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: false,
    amount: 0.5,
  }}
  transition={{
    duration: 0.7,
    delay: 0.35,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <GlowButton href="#contact">
    دعنا نبني علامتك
  </GlowButton>
</motion.div>
      </div>
    </section>
  );
}
