"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isServices = pathname === "/services" || pathname.startsWith("/services/");
  const isBlogs = pathname === "/blogs" || pathname.startsWith("/blogs/");
  const isContact = pathname === "/contact";

  return (
    <header 
      className={`fixed top-0 start-0 end-0 z-50 w-full  transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-[#03111F]/85 backdrop-blur-md border-b border-[#D2BB79]/20 py-3 shadow-2xl" 
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[50px] flex items-center justify-between ">
        
        {/* Desktop Navigation Links - Centered in Header on Big Screens (md and above) */}
        <nav 
          aria-label="التنقل الرئيسي" 
          className="hidden md:flex items-center gap-1.5 sm:gap-2.5 z-10 absolute left-1/2 -translate-x-1/2 "
        >
          <Link
            href="/"
            className={`rounded-full px-5 py-2 font-forma text-sm sm:text-base font-bold transition-all focus-visible:outline-2 focus-visible:outline-[#D2BB79] whitespace-nowrap ${
              isHome
                ? "bg-[#5E96B7] text-[#FFF7E6] shadow-md hover:bg-[#5E96B7]/90"
                : "text-[#FFF7E6]/90 hover:text-[#D2BB79]"
            }`}
          >
            الرئيسيه
          </Link>
          <Link
            href="/about"
            className={`rounded-full px-5 py-2 font-forma text-sm sm:text-base font-bold transition-all focus-visible:outline-2 focus-visible:outline-[#D2BB79] whitespace-nowrap ${
              isAbout
                ? "bg-[#5E96B7] text-[#FFF7E6] shadow-md hover:bg-[#5E96B7]/90"
                : "text-[#FFF7E6]/90 hover:text-[#D2BB79]"
            }`}
          >
            من نحن
          </Link>
          <Link
            href="/services"
            className={`rounded-full px-5 py-2 font-forma text-sm sm:text-base font-bold transition-all focus-visible:outline-2 focus-visible:outline-[#D2BB79] whitespace-nowrap ${
              isServices
                ? "bg-[#5E96B7] text-[#FFF7E6] shadow-md hover:bg-[#5E96B7]/90"
                : "text-[#FFF7E6]/90 hover:text-[#D2BB79]"
            }`}
          >
            خدماتنا
          </Link>
          <Link
            href="/blogs"
            className={`rounded-full px-5 py-2 font-forma text-sm sm:text-base font-bold transition-all focus-visible:outline-2 focus-visible:outline-[#D2BB79] whitespace-nowrap ${
              isBlogs
                ? "bg-[#5E96B7] text-[#FFF7E6] shadow-md hover:bg-[#5E96B7]/90"
                : "text-[#FFF7E6]/90 hover:text-[#D2BB79]"
            }`}
          >
            المدونه
          </Link>
          <Link
            href="/contact"
            className={`rounded-full px-5 py-2 font-forma text-sm sm:text-base font-bold transition-all focus-visible:outline-2 focus-visible:outline-[#D2BB79] whitespace-nowrap ${
              isContact
                ? "bg-[#5E96B7] text-[#FFF7E6] shadow-md hover:bg-[#5E96B7]/90"
                : "text-[#FFF7E6]/90 hover:text-[#D2BB79]"
            }`}
          >
            تواصل معنا
          </Link>
        </nav>

        {/* Animated Icon-Only Menu Button on the LEFT - Visible ONLY on Mobile (< md) */}
        <div className="flex md:hidden items-center z-20 absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة الرئيسية"}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-[#0B0B0B]/70 backdrop-blur-xl border border-[#D2BB79]/40 text-[#FFF7E6] shadow-[0_0_15px_rgba(3,17,31,0.8)] transition-all duration-300 hover:border-[#D2BB79] hover:bg-[#03111F]/90 hover:shadow-[0_0_25px_rgba(210,187,121,0.5)] focus-visible:outline-2 focus-visible:outline-[#D2BB79]"
          >
            {/* Animated Morphing Hamburger / Close Icon */}
            <div className="relative flex h-4 w-5 flex-col justify-between items-center">
              <span 
                className={`h-[2px] w-full rounded-full bg-[#FFF7E6] transition-all duration-300 ease-in-out group-hover:bg-[#D2BB79] ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`} 
              />
              <span 
                className={`h-[2px] w-full rounded-full bg-[#FFF7E6] transition-all duration-300 ease-in-out group-hover:bg-[#D2BB79] ${
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`} 
              />
              <span 
                className={`h-[2px] w-full rounded-full bg-[#FFF7E6] transition-all duration-300 ease-in-out group-hover:bg-[#D2BB79] ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Brand Logo physically anchored on the RIGHT side */}
        <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 [direction:ltr]">
          <Link
            href="/"
            aria-label="كاف - الرئيسية"
            className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[#D2BB79] rounded-lg p-1 transition-opacity hover:opacity-90"
          >
            <Image
              src="/kaaf-white-logo.svg"
              alt="شعار كاف"
              width={64}
              height={50}
              priority
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </Link>
        </div>

      </div>

      {/* Mobile Animated Overlay Menu (ONLY on Mobile) */}
      <div 
        className={`md:hidden fixed inset-x-4 sm:inset-x-6 top-20 max-w-sm me-auto z-40 transition-all duration-400 ease-out transform origin-top-right ${
          isOpen 
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="relative rounded-3xl bg-[#03111F]/95 border border-[#D2BB79]/40 backdrop-blur-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Subtle Ambient Golden Glow */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#D2BB79]/15 blur-3xl"
          />

          <nav aria-label="قائمة التصفح للموبايل" className="relative z-10 flex flex-col space-y-2.5">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between rounded-2xl px-5 py-3.5 font-forma text-base font-bold transition-all duration-300 ${
                isHome
                  ? "bg-gradient-to-r from-[#5E96B7] to-[#5E96B7]/80 text-[#FFF7E6] shadow-lg"
                  : "border border-transparent text-[#FFF7E6]/90 hover:border-[#D2BB79]/30 hover:bg-[#0B0B0B]/60 hover:text-[#D2BB79]"
              }`}
            >
              <span>الرئيسيه</span>
              <span 
                className={`rounded-full transition-all ${
                  isHome 
                    ? "h-2 w-2 bg-[#FFF7E6]" 
                    : "h-1.5 w-1.5 bg-transparent group-hover:bg-[#D2BB79]"
                }`} 
              />
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between rounded-2xl px-5 py-3.5 font-forma text-base font-bold transition-all duration-300 ${
                isAbout
                  ? "bg-gradient-to-r from-[#5E96B7] to-[#5E96B7]/80 text-[#FFF7E6] shadow-lg"
                  : "border border-transparent text-[#FFF7E6]/90 hover:border-[#D2BB79]/30 hover:bg-[#0B0B0B]/60 hover:text-[#D2BB79]"
              }`}
            >
              <span>من نحن</span>
              <span 
                className={`rounded-full transition-all ${
                  isAbout 
                    ? "h-2 w-2 bg-[#FFF7E6]" 
                    : "h-1.5 w-1.5 bg-transparent group-hover:bg-[#D2BB79]"
                }`} 
              />
            </Link>

            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between rounded-2xl px-5 py-3.5 font-forma text-base font-bold transition-all duration-300 ${
                isServices
                  ? "bg-gradient-to-r from-[#5E96B7] to-[#5E96B7]/80 text-[#FFF7E6] shadow-lg"
                  : "border border-transparent text-[#FFF7E6]/90 hover:border-[#D2BB79]/30 hover:bg-[#0B0B0B]/60 hover:text-[#D2BB79]"
              }`}
            >
              <span>خدماتنا</span>
              <span 
                className={`rounded-full transition-all ${
                  isServices 
                    ? "h-2 w-2 bg-[#FFF7E6]" 
                    : "h-1.5 w-1.5 bg-transparent group-hover:bg-[#D2BB79]"
                }`} 
              />
            </Link>

            <Link
              href="/blogs"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between rounded-2xl px-5 py-3.5 font-forma text-base font-bold transition-all duration-300 ${
                isBlogs
                  ? "bg-gradient-to-r from-[#5E96B7] to-[#5E96B7]/80 text-[#FFF7E6] shadow-lg"
                  : "border border-transparent text-[#FFF7E6]/90 hover:border-[#D2BB79]/30 hover:bg-[#0B0B0B]/60 hover:text-[#D2BB79]"
              }`}
            >
              <span>المدونه</span>
              <span 
                className={`rounded-full transition-all ${
                  isBlogs 
                    ? "h-2 w-2 bg-[#FFF7E6]" 
                    : "h-1.5 w-1.5 bg-transparent group-hover:bg-[#D2BB79]"
                }`} 
              />
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between rounded-2xl px-5 py-3.5 font-forma text-base font-bold transition-all duration-300 ${
                isContact
                  ? "bg-gradient-to-r from-[#5E96B7] to-[#5E96B7]/80 text-[#FFF7E6] shadow-lg"
                  : "border border-transparent text-[#FFF7E6]/90 hover:border-[#D2BB79]/30 hover:bg-[#0B0B0B]/60 hover:text-[#D2BB79]"
              }`}
            >
              <span>تواصل معنا</span>
              <span 
                className={`rounded-full transition-all ${
                  isContact 
                    ? "h-2 w-2 bg-[#FFF7E6]" 
                    : "h-1.5 w-1.5 bg-transparent group-hover:bg-[#D2BB79]"
                }`} 
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}