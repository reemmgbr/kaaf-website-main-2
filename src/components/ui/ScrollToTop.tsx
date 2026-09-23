"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="العودة إلى أعلى الصفحة"
      className={`
        fixed bottom-6 left-6 z-50
        flex h-12 w-12 items-center justify-center
        rounded-full
        border border-[#D2BB79]/30
        bg-[#03111F]/90
        text-[#D2BB79]
        backdrop-blur-md
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        transition-all duration-300 ease-out

        hover:border-[#D2BB79]
        hover:bg-[#D2BB79]
        hover:text-[#03111F]
        hover:-translate-y-1

        ${
          isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        }
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}
