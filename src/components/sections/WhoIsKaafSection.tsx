"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { GlowButton } from "@/components/ui/GlowButton";

export function WhoIsKaafSection() {
  return (
    <section
      id="about"
      aria-labelledby="whoiskaaf-heading"
      className="relative w-full min-h-[550px] lg:min-h-[620px] flex items-center justify-center overflow-hidden py-16 sm:py-20 bg-[#03111F]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/whoiskaaf.png"
          alt="مبنى كاف KAAF"
          fill
          priority={false}
          quality={80}
          sizes="100vw"
          className="object-cover object-left opacity-100"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#03111F]/50 to-[#03111F]" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-6 flex flex-col items-start space-y-5 text-start me-auto lg:me-0"
          >

            {/* Title */}
            <motion.h2
              id="whoiskaaf-heading"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="font-forma text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D2BB79] tracking-tight drop-shadow-md"
            >
              مين هي كاف؟
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="font-forma text-base !text-[20px] sm:text-xl text-[#FFF7E6] font-medium leading-relaxed"
            >
          نحن من نسعى للكفاءة بالكفاح وننهيه بـ كمال
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="font-forma text-base !text-[20px] sm:text-xl text-[#FFF7E6] font-medium leading-relaxed"
            >
               ونعرف وش اللي يدور في بالك وأنت تقرأ الحين.. أننا نشبه كثير من الشركات في المظاهر، لكننا في الفعل نختلف!  
            </motion.p>

            {/* Paragraph 3 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="font-forma text-base !text-[20px] sm:text-xl text-[#FFF7E6] font-medium leading-relaxed"
            >
              نحن فريق متكامل يدخل معك الرحلة من أول سؤال وش اللي يوقف نموك؟ إلى آخر نتيجة كيف نخلي مبيعاتك تتحرك فعلاً؟       
            </motion.p>

            {/* Paragraph 4 */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="font-forma text-base !text-[20px] sm:text-xl text-[#FFF7E6] font-medium leading-relaxed"
            >
           لأننا بضمير نقرأ السوق، نفهم عميلك، نجرب، نطور، ونكمل بنظام لين نوصل للفرق اللي يبان بالأرقام
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                delay: 0.65,
                ease: "easeOut",
              }}
              className="pt-3"
            >
              <GlowButton href="#contact">
                تواصل معنا الان
              </GlowButton>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}