"use client";

import React, { useState } from "react";

export interface AccordionItemData {
  id: string;
  number?: string;
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

export interface GlassAccordionItemProps {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export function GlassAccordionItem({
  item,
  isOpen,
  onToggle,
  className = "",
}: GlassAccordionItemProps) {
  return (
    <div
      className={`relative w-full rounded-2xl border backdrop-blur-xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-[#D2BB79]/45 bg-[#03111F]/50 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(210,187,121,0.07),transparent_100%)] shadow-[0_0_20px_rgba(210,187,121,0.1)]"
          : "border-white/15 bg-[#03111F]/30 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(210,187,121,0.03),transparent_100%)] hover:border-[#D2BB79]/30 hover:bg-[#03111F]/45 shadow-sm"
      } ${className}`}
    >
      {/* Header Button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        id={`accordion-header-${item.id}`}
        className="w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between text-start gap-3 sm:gap-4 transition-colors focus-visible:outline-2 focus-visible:outline-[#D2BB79] focus-visible:outline-offset-2"
      >
        {/* Title and Step Number (RTL Start) */}
        <div className="flex items-center gap-2.5 sm:gap-4 flex-1 min-w-0">
          {item.number && (
            <span className="font-forma text-sm sm:text-lg font-bold text-[#5E96B7] shrink-0">
              {item.number}
            </span>
          )}
          <h3 className="font-forma text-base sm:text-xl lg:text-2xl font-bold text-[#FFF7E6] tracking-tight leading-snug break-words">
            {item.title}
          </h3>
        </div>

        {/* Toggle Icon Button (RTL End) */}
        <div 
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border shrink-0 transition-all duration-300 ${
            isOpen
              ? "border-[#D2BB79] bg-[#D2BB79]/20 text-[#D2BB79] rotate-180"
              : "border-[#5E96B7]/40 bg-[#5E96B7]/10 text-[#5E96B7]"
          }`}
          aria-hidden="true"
        >
          {isOpen ? (
            <svg className="w-4 h-4 fill-current stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M5 12h14" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="w-4 h-4 fill-current stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          )}
        </div>
      </button>

      {/* Expandable Content Panel */}
      <div
        id={`accordion-content-${item.id}`}
        role="region"
        aria-labelledby={`accordion-header-${item.id}`}
        className={`transition-all duration-300 ease-in-out ${
          isOpen 
            ? "max-h-[800px] opacity-100 pb-5 sm:pb-6 px-4 sm:px-8 pt-0" 
            : "max-h-0 opacity-0 overflow-hidden py-0 px-4 sm:px-8"
        }`}
      >
        <div className="font-forma text-sm sm:text-lg text-[#D2BB79] font-medium leading-relaxed border-t border-[#D2BB79]/20 pt-3 sm:pt-4 break-words">
          {item.content}
        </div>
      </div>
    </div>
  );
}

export interface GlassAccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export function GlassAccordion({
  items,
  allowMultiple = true,
  className = "",
}: GlassAccordionProps) {
  // Initialize open items state
  const [openIds, setOpenIds] = useState<string[]>(() =>
    items.filter((i) => i.defaultOpen).map((i) => i.id)
  );

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`w-full flex flex-col space-y-3.5 sm:space-y-5 ${className}`}>
      {items.map((item) => (
        <GlassAccordionItem
          key={item.id}
          item={item}
          isOpen={openIds.includes(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
