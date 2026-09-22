"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { GlowButton } from "@/components/ui/GlowButton";

const MagicRings = dynamic(() => import("@/components/MagicRings"), {
  ssr: false,
});

export function HeroSection() {
  const [shouldLoadWebGL, setShouldLoadWebGL] = useState(true);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex md:min-h-screen w-full items-center justify-center overflow-hidden bg-[#03111F] py-[150px] sm:pt-28 pb-12 sm:pb-16"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 m-auto w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-[#D2BB79]/15 blur-[100px]"
      />

      {/* Magic Rings */}
      {shouldLoadWebGL && (
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-90">
          <MagicRings
            color="#D2BB79"
            colorTwo="#D2BB79"
            speed={0.8}
            ringCount={4}
            attenuation={10}
            lineThickness={2.8}
            baseRadius={0.32}
            radiusStep={0.09}
            scaleRate={0.08}
            opacity={1}
            ringGap={1.4}
            noiseAmount={0.05}
            followMouse={true}
            mouseInfluence={0.15}
          />
        </div>
      )}

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl flex flex-col items-center justify-center space-y-6 sm:space-y-8">

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ willChange: "transform, opacity" }}
            className="font-forma text-4xl sm:text-6xl lg:text-7xl font-bold text-[#FFF7E6] leading-[1.3] sm:leading-[1.25] tracking-tight drop-shadow-md"
          >
            الفوز مو بس أرباح و أرقام .. <br />
            الفوز نظام !
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ willChange: "transform, opacity" }}
            className="font-forma text-xl sm:text-2xl lg:text-3xl font-medium text-[#D2BB79] max-w-3xl leading-relaxed"
          >
            ونظامنا يبدأ بكفاءة، يتقدّم بكفاح ، ويكتمل بكمال
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ willChange: "transform, opacity" }}
            className="pt-2 sm:pt-4 flex justify-center"
          >
            <GlowButton href="#contact">
              تواصل معنا الان
            </GlowButton>
          </motion.div>

        </div>
      </div>
    </section>
  );
}