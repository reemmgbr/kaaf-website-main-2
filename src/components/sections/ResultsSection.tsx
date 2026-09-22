"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";
import { motion } from "motion/react";

const carouselImages = [
  {
    src: "/result-1.png",
    alt: "نتائج أداء العملاء - ملخص المبيعات والتكاليف",
  },
  {
    src: "/result-2.png",
    alt: "نتائج أداء العملاء - رسم بياني للمبيعات",
  },
  {
    src: "/result-3.png",
    alt: "نتائج أداء العملاء - تحليل الأرباح والنمو",
  },
  {
    src: "/result-4.png",
    alt: "نتائج أداء العملاء - ملخص العمليات",
  },
  {
    src: "/result-5.png",
    alt: "نتائج أداء العملاء - مؤشرات الأداء الرئيسية",
  },
];

export function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const isPointerDownRef = useRef(false);

  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isDragging]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  // Drag & Swipe Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isPointerDownRef.current = true;
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    currentXRef.current = e.clientX;
  };

  const handlePointerUp = () => {
    if (!isPointerDownRef.current) return;
    const diff = currentXRef.current - startXRef.current;
    const threshold = 40;

    // In LTR container / standard drag direction:
    if (diff > threshold) {
      prevSlide();
    } else if (diff < -threshold) {
      nextSlide();
    }

    isPointerDownRef.current = false;
    setIsDragging(false);
  };

  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="relative w-full py-8 sm:py-24 bg-[#03111F] overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Side background watermark graphics */}
      <div
        className="absolute -left-36 sm:-left-28 lg:-left-36 top-1/2 -translate-y-1/2 w-[300px] sm:w-[550px] lg:w-[700px] h-[600px] sm:h-[850px] pointer-events-none opacity-100 mix-blend-screen z-0"
        aria-hidden="true"
      >
        <Image
          src="/graidient-gold.png"
          alt="خلفية كاف ذهبية"
          fill
          quality={75}
          sizes="(max-width: 768px) 180px, 350px"
          className="object-contain object-left"
        />
      </div>

      <div
        className="absolute -right-36 sm:-right-28 lg:-right-36 top-1/2 -translate-y-1/2 w-[300px] sm:w-[550px] lg:w-[700px] h-[600px] sm:h-[850px] pointer-events-none opacity-100 mix-blend-screen z-0"
        aria-hidden="true"
      >
        <Image
          src="/graidient-blue.png"
          alt="خلفية كاف زرقاء"
          fill
          quality={75}
          sizes="(max-width: 768px) 180px, 350px"
          className="object-contain object-right"
        />
      </div>

      {/* Header Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Header Badge */}
     <motion.div
  className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#FFF7E6] text-[#03111F] font-forma text-base sm:text-lg lg:text-xl font-bold shadow-lg mb-5"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  نتائج عملائنا
</motion.div>

        {/* Section Heading */}
  <motion.h2
  id="results-heading"
  className="font-forma text-3xl sm:text-5xl lg:text-6xl font-bold text-[#D2BB79] tracking-tight drop-shadow-md max-w-4xl mx-auto mb-6 leading-tight"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
>
  شاهد كيف حقق عملاؤنا نموًا ملحوظًا.
</motion.h2>
        {/* CTA Button */}
   <motion.div
  className="flex justify-center mb-8 sm:mb-12"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.5 }}
  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
>
  <GlowButton href="#contact">تواصل معنا الان</GlowButton>
</motion.div>
      </div>

      {/* Tablet Mockup Wrapper with Drag Support */}
      <div className="relative w-full max-w-none mx-auto z-10">
        <div className="relative w-full aspect-[3198/1690] mx-auto">
          {/* Base Tablet Image with hands */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <Image
              src="/tablet-in-hand.png"
              alt="جهاز تابلت يعرض نتائج أداء عملاء كاف"
              fill
              quality={80}
              sizes="(max-width: 640px) 420px, (max-width: 1024px) 800px, 1100px"
              className="object-contain"
            />
          </div>

          {/* Carousel Container on top of tablet screen area with Dragging / Swiping */}
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="absolute top-[5.2%] left-[20.8%] right-[21.8%] bottom-[19.3%] z-20 rounded-[1.2vw] sm:rounded-[1.8vw] lg:rounded-[2.4rem] overflow-hidden [direction:ltr] cursor-grab active:cursor-grabbing touch-pan-y"
            aria-label="سلايدر نتائج العملاء"
          >
            {/* Sliding Track */}
            <div
              className="flex w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselImages.map((img) => (
                <div
                  key={img.src}
                  className="w-full h-full flex-shrink-0 relative select-none"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    quality={80}
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 550px, 750px"
                    draggable={false}
                    className="object-cover object-top pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slider Navigation Controls Underneath (Arrows & Connected Pagination Dots Bar) */}
      <div className="flex items-center justify-center gap-6 mt-4 sm:mt-6 z-30">
        {/* Previous Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="النتيجة السابقة"
          className="text-[#D2BB79] hover:text-[#FFF7E6] text-2xl sm:text-3xl transition-transform hover:scale-125 focus-visible:outline-2 focus-visible:outline-[#D2BB79] p-2"
        >
          &#10094;
        </button>

        {/* Connected Pagination Dots Bar */}
        <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-[#0B0B0B]/80 border border-[#5E96B7]/30 backdrop-blur-md gap-1.5 shadow-lg">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`الانتقال إلى الشريحة ${idx + 1}`}
              className={`relative h-2.5 rounded-full transition-all duration-500 before:absolute before:-inset-2 before:content-[''] ${
                idx === currentIndex 
                  ? "w-8 bg-[#D2BB79] shadow-[0_0_12px_#D2BB79]" 
                  : "w-2.5 bg-[#5E96B7]/40 hover:bg-[#5E96B7]"
              }`}
            />
          ))}
        </div>

        {/* Next Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="النتيجة التالية"
          className="text-[#D2BB79] hover:text-[#FFF7E6] text-2xl sm:text-3xl transition-transform hover:scale-125 focus-visible:outline-2 focus-visible:outline-[#D2BB79] p-2"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
