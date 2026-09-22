"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { caseStudiesData, caseStudyCategories } from "@/data/caseStudies";
import { motion } from "motion/react";

export function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  // Filter Tabs Drag-to-Scroll & Navigation Arrows State
  const tabsRef = React.useRef<HTMLDivElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const filteredCaseStudies = useMemo(() => {
    if (activeCategory === "all") {
      return caseStudiesData;
    }
    return caseStudiesData.filter((study) => study.category === activeCategory);
  }, [activeCategory]);

  const updateScrollArrows = React.useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 2) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const currentScroll = Math.abs(el.scrollLeft);
    
    // In RTL:
    // Left arrow (go forward/left): only show if NOT at far left end
    setCanScrollLeft(currentScroll < maxScroll - 4);
    
    // Right arrow (go backward/right): only show if NOT at start (has scrolled)
    setCanScrollRight(currentScroll > 4);
  }, []);

  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    
    updateScrollArrows();

    const onScroll = () => {
      updateScrollArrows();
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollArrows);
    
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollArrows);
    };
  }, [updateScrollArrows, activeCategory]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = tabsRef.current;
    if (!el) return;
    setIsMouseDown(true);
    setHasDragged(false);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    updateScrollArrows();
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    updateScrollArrows();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    const el = tabsRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 4) {
      setHasDragged(true);
    }
    el.scrollLeft = scrollLeftState - walk;
    updateScrollArrows();
  };

  const scrollByAmount = (direction: "left" | "right") => {
    const el = tabsRef.current;
    if (!el) return;
    const delta = direction === "right" ? 220 : -220;
    el.scrollBy({ left: delta, behavior: "smooth" });
    setTimeout(updateScrollArrows, 150);
    setTimeout(updateScrollArrows, 350);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="relative w-full  bg-[#03111F] overflow-hidden"
    >
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 m-auto w-[70%] sm:w-[50%] h-[50%] rounded-full bg-[#D2BB79]/05 blur-3xl z-0"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
   {/* Section Header */}
<div className="flex flex-col items-center text-center space-y-3 mb-8 sm:mb-14">
  {/* Badge */}
  <motion.div
    className="inline-flex items-center justify-center px-6 py-1.5 rounded-full bg-white text-[#03111F] font-forma font-bold text-[16px] sm:text-base mb-4 shadow-md"
    initial={{
      opacity: 0,
      y: 25,
      scale: 0.9,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    viewport={{
      once: false,
      amount: 0.5,
    }}
    transition={{
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    خبرتنا
  </motion.div>

  {/* Heading */}
  <motion.h2
    id="case-studies-heading"
    className="font-forma text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D2BB79] tracking-tight leading-tight"
    initial={{
      opacity: 0,
      y: 30,
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
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    قصص نجاح حقيقية من عملائنا
  </motion.h2>
</div>

        {/* Filter Tabs Bar with Grab-to-Scroll & Left/Right Navigation Arrows */}
        <div className="relative w-full flex items-center justify-center mb-10 sm:mb-16">
          {/* Right Arrow Button (Only visible if canScrollRight) */}
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            aria-label="التمرير لليمين"
            className={`shrink-0 w-8 h-8 rounded-full bg-[#03111F]/90 border border-[#D2BB79]/40 text-[#D2BB79] flex items-center justify-center shadow-lg hover:bg-[#D2BB79] hover:text-[#03111F] transition-all duration-300 cursor-pointer ${
              canScrollRight
                ? "opacity-100 scale-100 pointer-events-auto me-2"
                : "opacity-0 scale-75 pointer-events-none w-0 me-0 overflow-hidden border-0"
            }`}
          >
            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Grab Scrollable Filter Track */}
          <div
            ref={tabsRef}
            onScroll={updateScrollArrows}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`w-full flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 py-2 px-1 select-none ${
              isMouseDown ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {caseStudyCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (!hasDragged) {
                      setActiveCategory(cat.id);
                    }
                  }}
                  type="button"
                  className={`shrink-0 font-forma text-sm sm:text-base font-bold px-5 sm:px-6 py-2 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-white text-[#03111F] shadow-lg scale-105"
                      : "bg-[#0B0B0B]/60 text-[#E9EDF3] border border-[#E9EDF3]/15 hover:border-[#D2BB79]/50 hover:text-[#D2BB79]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Left Arrow Button (Only visible if canScrollLeft) */}
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            aria-label="التمرير لليسار"
            className={`shrink-0 w-8 h-8 rounded-full bg-[#03111F]/90 border border-[#D2BB79]/40 text-[#D2BB79] flex items-center justify-center shadow-lg hover:bg-[#D2BB79] hover:text-[#03111F] transition-all duration-300 cursor-pointer ${
              canScrollLeft
                ? "opacity-100 scale-100 pointer-events-auto ms-2"
                : "opacity-0 scale-75 pointer-events-none w-0 ms-0 overflow-hidden border-0"
            }`}
          >
            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* 3-Column Case Studies Grid matching Blog Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {filteredCaseStudies.map((study, index) => (
            <article
              key={`${activeCategory}-${study.id}`}
              style={{ animationDelay: `${index * 55}ms` }}
              className="animate-filter-card relative rounded-3xl p-[1px] bg-gradient-to-b from-[#D2BB79]/40 via-[#E9EDF3]/15 to-transparent hover:from-[#D2BB79] hover:via-[#5E96B7]/40 hover:to-[#D2BB79]/30 transition-all duration-500 shadow-2xl group hover:scale-[1.02] flex flex-col h-full"
            >
              <div className="w-full h-full rounded-[calc(1.5rem-1px)] bg-[#03111F]/90 backdrop-blur-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4 border border-[#E9EDF3]/10 hover:border-transparent transition-all duration-300">
                
                {/* Screenshot Image Frame with Hover Zoom Button */}
                <div
                  onClick={() => setSelectedImage({ src: study.image, title: study.title })}
                  className="relative w-full aspect-[1.65/1] rounded-2xl overflow-hidden border border-[#5E96B7]/30 shadow-lg bg-[#0B0B0B] cursor-pointer group/image"
                  title="انقر لتكبير الصورة"
                >
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover object-center group-hover/image:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03111F]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Mobile Always-Visible Zoom Icon (no hover, no blur, no dimming) */}
                  <div 
                    className="sm:hidden absolute bottom-2.5 end-2.5 w-8 h-8 rounded-full bg-[#03111F]/85 border border-[#D2BB79] text-[#D2BB79] flex items-center justify-center shadow-lg"
                    aria-label="تكبير الصورة"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>

                  {/* Desktop Hover Overlay with Zoom Icon */}
                  <div className="hidden sm:flex absolute inset-0 bg-[#03111F]/45 backdrop-blur-[2px] opacity-0 group-hover/image:opacity-100 group-hover:opacity-100 transition-all duration-300 items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#03111F]/90 border border-[#D2BB79] text-[#D2BB79] flex items-center justify-center shadow-[0_0_20px_rgba(210,187,121,0.5)] scale-75 group-hover/image:scale-100 group-hover:scale-100 transition-transform duration-300">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-forma text-base sm:text-lg font-bold text-[#FFF7E6] tracking-tight leading-snug text-center pt-1 min-h-[48px] flex items-center justify-center">
                  {study.title}
                </h3>

                {/* 3 Detail Blocks (المشكلة، الحل، النتيجة) */}
                <div className="flex flex-col space-y-4 pt-2 text-xs sm:text-sm font-forma">
                  {/* المشكلة */}
                  <div className="flex items-stretch gap-3.5">
                    <div className="shrink-0 w-8 sm:w-9 min-w-[34px] sm:min-w-[38px] rounded-xl border border-[#D2BB79] bg-[#D2BB79]/[0.27] backdrop-blur-md flex items-center justify-center px-2 py-4 sm:py-5 shadow-sm overflow-hidden">
                      <span className="-rotate-90 whitespace-nowrap font-forma font-bold text-[11px] sm:text-xs text-white tracking-wider select-none">
                        المشكلة
                      </span>
                    </div>
                    <div className="flex-1 flex items-center">
                      <p className="font-forma text-[#D2BB79] leading-relaxed font-bold">
                        {study.problem}
                      </p>
                    </div>
                  </div>

                  {/* الحل */}
                  <div className="flex items-stretch gap-3.5">
                    <div className="shrink-0 w-8 sm:w-9 min-w-[34px] sm:min-w-[38px] rounded-xl border border-[#D2BB79] bg-[#D2BB79]/[0.27] backdrop-blur-md flex items-center justify-center px-2 py-4 sm:py-5 shadow-sm overflow-hidden">
                      <span className="-rotate-90 whitespace-nowrap font-forma font-bold text-[11px] sm:text-xs text-white tracking-wider select-none">
                        الحل
                      </span>
                    </div>
                    <div className="flex-1 flex items-center">
                      <p className="font-forma text-[#D2BB79] leading-relaxed font-bold">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* النتيجة */}
                  <div className="flex items-stretch gap-3.5">
                    <div className="shrink-0 w-8 sm:w-9 min-w-[34px] sm:min-w-[38px] rounded-xl border border-[#D2BB79] bg-[#D2BB79]/[0.27] backdrop-blur-md flex items-center justify-center px-2 py-4 sm:py-5 shadow-sm overflow-hidden">
                      <span className="-rotate-90 whitespace-nowrap font-forma font-bold text-[11px] sm:text-xs text-white tracking-wider select-none">
                        النتيجة
                      </span>
                    </div>
                    <div className="flex-1 flex items-center">
                      <ul className="font-forma space-y-1 text-white font-bold list-disc list-inside w-full">
                        {study.results.map((res, i) => (
                          <li key={i} className="font-forma leading-relaxed text-white">
                            {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Image Lightbox Modal ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 lg:p-10 bg-[#03111F]/90 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[92vh] rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-b from-[#D2BB79] via-[#5E96B7]/40 to-[#D2BB79]/30 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full rounded-[calc(1rem-1px)] sm:rounded-[calc(1.5rem-1px)] bg-[#03111F] p-3 sm:p-6 flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              
              {/* Header Bar: Title & Close Button */}
              <div className="w-full flex items-center justify-between border-b border-[#E9EDF3]/10 pb-2.5 sm:pb-3">
                <h3 className="font-forma text-sm sm:text-xl font-bold text-[#D2BB79] truncate pe-3">
                  {selectedImage.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0B0B0B] border border-[#D2BB79]/40 text-[#FFF7E6] hover:bg-[#D2BB79] hover:text-[#03111F] transition-colors flex items-center justify-center font-bold text-base sm:text-lg cursor-pointer"
                  aria-label="إغلاق"
                >
                  ✕
                </button>
              </div>

              {/* Large Full-Width Image Display on Mobile */}
              <div className="relative w-full aspect-[1.4/1] sm:aspect-[16/9] max-h-[75vh] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0B0B0B] border border-[#5E96B7]/20">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  quality={95}
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-contain object-center"
                />
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
