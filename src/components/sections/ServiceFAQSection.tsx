"use client";

import React from "react";
import { GlassAccordion, AccordionItemData } from "@/components/ui/GlassAccordion";

export interface ServiceFAQSectionProps {
  id?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export function ServiceFAQSection({
  id = "service-faq",
  title = "الأسئلة الشائعة",
  subtitle,
  items,
  allowMultiple = true,
  className = "",
}: ServiceFAQSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative w-full py-16 sm:py-24 bg-[#03111F] overflow-hidden ${className}`}
    >
      {/* Soft, subtle ambient gold radial background glow */}
      <div 
        className="pointer-events-none absolute inset-0 m-auto w-[60%] sm:w-[50%] h-[50%] rounded-full bg-[#D2BB79]/06 blur-3xl z-0"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl lg:max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-10 sm:mb-14">
          <h2
            id={`${id}-heading`}
            className="font-forma text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D2BB79] tracking-tight leading-tight"
          >
            {title}
          </h2>

          {subtitle && (
            <p className="font-forma text-lg sm:text-xl text-[#FFF7E6]/90 font-medium max-w-2xl">
              {subtitle}
            </p>
          )}

          {/* Underline accent line matching screenshot */}
          <div 
            className="w-24 sm:w-32 h-[3px] bg-gradient-to-r from-[#D2BB79]/20 via-[#D2BB79] to-[#D2BB79]/20 rounded-full mt-2"
            aria-hidden="true"
          />
        </div>

        {/* Reusable Accordion List */}
        <GlassAccordion items={items} allowMultiple={allowMultiple} />
      </div>
    </section>
  );
}
