"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const testimonials = [
  {
    id: 1,
    quote: "ما شاء الله التصوير جميل والتعديلات على الصور احترافية، العبارات جذابة ولايقة على القطع جداً.",
  },
  {
    id: 2,
    quote: "شغل المحتوى والإعلانات فرق معنا كثير في المبيعات، احترافية وسرعة في الرد والتجاوب ما قصرتوا والله.",
  },
  {
    id: 3,
    quote: "الهوية والتصاميم طلعت فخمة ومرتبة بالملي، كل اللي شافوا البوستات سألونا مين مسوي لكم الشغل.",
  },
  {
    id: 4,
    quote: "الله يعطيكم العافية على المتابعة والاهتمام بأدق التفاصيل، من أفضل الشركاء اللي تعاملنا معهم.",
  },
  {
    id: 5,
    quote: "التسويق وإدارة الحملات كانت مدروسة بدقة وجابت لنا عملاء مهتمين فعلاً مو مجرد أرقام ومشاهدات.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const isPointerDownRef = useRef(false);

  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isDragging]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
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

    // In RTL direction:
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
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full py-12 sm:pt-14 sm:pb-12 bg-[#03111F] overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Header Badge */}
<motion.div
  className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#FFF7E6] text-[#03111F] font-forma text-base sm:text-lg lg:text-xl font-bold shadow-lg mb-5"
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.25 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  آراء العملاء
</motion.div>

{/* Section Heading */}
<motion.h2
  id="testimonials-heading"
  className="font-forma text-3xl sm:text-5xl lg:text-6xl font-bold text-[#D2BB79] tracking-tight drop-shadow-md max-w-4xl mx-auto mb-1 sm:mb-16 leading-tight"
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.25 }}
  transition={{
    duration: 0.9,
    delay: 0.1,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  ما يمدح السوق إلا مَن ربح فيه!
</motion.h2>

        {/* 3 Cards Slider Container with Drag & Swipe Support */}
        <div 
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full max-w-7xl mx-auto flex items-center justify-center min-h-[460px] sm:min-h-[530px] overflow-visible cursor-grab active:cursor-grabbing touch-pan-y"
        >
          {testimonials.map((item, index) => {
            const total = testimonials.length;
            let diff = (index - currentIndex) % total;
            if (diff < -Math.floor(total / 2)) diff += total;
            if (diff > Math.floor(total / 2)) diff -= total;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            const isHidden = Math.abs(diff) > 1;

            if (isHidden) {
              return (
                <div
                  key={item.id}
                  aria-hidden="true"
                  className="absolute pointer-events-none opacity-0 scale-50 transition-all duration-700 ease-out"
                  style={{
                    transform: diff > 0 ? "translateX(700px)" : "translateX(-700px)",
                  }}
                />
              );
            }

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (Math.abs(currentXRef.current - startXRef.current) > 10) return;
                  if (isLeft) prevSlide();
                  if (isRight) nextSlide();
                }}
                className={`absolute aspect-[569/453] flex items-center justify-center text-center select-none transition-all duration-700 ease-out ${
                  isCenter
                    ? "z-20 w-[330px] sm:w-[500px] lg:w-[580px] opacity-100 translate-x-0 scale-100"
                    : isLeft
                    ? "z-10 w-[270px] sm:w-[360px] lg:w-[420px] opacity-55 -translate-x-[260px] sm:-translate-x-[370px] lg:-translate-x-[470px] scale-[0.88] hover:opacity-90 cursor-pointer"
                    : "z-10 w-[270px] sm:w-[360px] lg:w-[420px] opacity-55 translate-x-[260px] sm:translate-x-[370px] lg:translate-x-[470px] scale-[0.88] hover:opacity-90 cursor-pointer"
                }`}
              >
                {/* 1. CENTER CARD DESIGN */}
                {isCenter && (
                  <>
                    <div className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-0 z-0 pointer-events-none">
                      <Image
                        src="/center-card-light-blue.svg"
                        alt="خلفية بطاقة التقييم زرقاء"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 z-10 pointer-events-none">
                      <Image
                        src="/center-card-navy.svg"
                        alt="بطاقة التقييم الرئيسية"
                        fill
                        className="object-contain drop-shadow-[0_0_35px_rgba(210,187,121,0.4)]"
                      />
                    </div>
                    <div className="relative z-20 px-1 sm:px-8 py-2 sm:py-8 text-center flex flex-col items-center justify-center space-y-1.5 sm:space-y-4 w-full max-w-[68%] sm:max-w-[75%]">
                      {/* Golden Quotes Icon */}
                      <div className="text-[#D2BB79] text-lg sm:text-4xl lg:text-5xl font-serif leading-none drop-shadow">
                        “ ”
                      </div>

                      {/* Real Customer Quote with tighter responsive width */}
                      <p className="font-forma text-[11px] sm:text-lg lg:text-2xl text-[#FFF7E6] font-medium leading-relaxed drop-shadow-sm max-w-[210px] sm:max-w-md mx-auto">
                        {item.quote}
                      </p>
                    </div>
                  </>
                )}

                {/* 2. SIDE CARD DESIGN */}
                {!isCenter && (
                  <>
                    <div className="absolute inset-0 z-10 pointer-events-none">
                      <Image
                        src="/center-card-navy.svg"
                        alt="بطاقة التقييم الجانبية"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative z-20 px-1 sm:px-6 py-2 sm:py-6 text-center flex flex-col items-center justify-center space-y-1 sm:space-y-3 w-full max-w-[62%] sm:max-w-[70%]">
                      <div className="text-[#D2BB79] text-sm sm:text-2xl font-serif leading-none">
                        “ ”
                      </div>
                      <p className="font-forma text-[9px] sm:text-sm lg:text-base text-[#FFF7E6]/90 line-clamp-3 sm:line-clamp-4 leading-relaxed max-w-[160px] sm:max-w-xs mx-auto">
                        {item.quote}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Slider Navigation Controls (Arrows & Connected Pagination Dots Bar) */}
        <div className="flex items-center justify-center gap-6 mt-10 z-30">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="التقييم السابق"
            className="text-[#D2BB79] hover:text-[#FFF7E6] text-2xl sm:text-3xl transition-transform hover:scale-125 focus-visible:outline-2 focus-visible:outline-[#D2BB79] p-2"
          >
            &#10094;
          </button>

          {/* Connected Pagination Dots Bar */}
          <div className="inline-flex items-center justify-center p-1.5 rounded-full bg-[#0B0B0B]/80 border border-[#5E96B7]/30 backdrop-blur-md gap-1.5 shadow-lg">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`الانتقال إلى التقييم ${idx + 1}`}
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
            aria-label="التقييم التالي"
            className="text-[#D2BB79] hover:text-[#FFF7E6] text-2xl sm:text-3xl transition-transform hover:scale-125 focus-visible:outline-2 focus-visible:outline-[#D2BB79] p-2"
          >
            &#10095;
          </button>
        </div>

      </div>
    </section>
  );
}
