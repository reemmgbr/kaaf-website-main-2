import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer 
      id="contact"
      role="contentinfo" 
      aria-label="تذييل الموقع والتواصل" 
      className="relative w-full overflow-hidden bg-[#03111F] pt-20 pb-10 text-[#FFF7E6]"
    >
      {/* Background Building Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/footer-building-bg.png"
          alt="مبنى مقر شركة كاف"
          fill
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Smooth top-only fade to blend seamlessly with preceding section */}
        <div className="absolute top-0 inset-x-0 h-32 sm:h-40 bg-gradient-to-b from-[#03111F] via-[#03111F]/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Top Navigation Links */}
        <nav aria-label="روابط التذييل" className="mb-10 sm:mb-12">
          <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-base sm:text-lg font-forma font-medium text-[#FFF7E6]/90">
            <li>
              <Link 
                href="/" 
                className="transition-colors duration-300 hover:text-[#D2BB79] focus-visible:outline-2 focus-visible:outline-[#D2BB79]"
              >
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="transition-colors duration-300 hover:text-[#D2BB79] focus-visible:outline-2 focus-visible:outline-[#D2BB79]"
              >
                من نحن
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="transition-colors duration-300 hover:text-[#D2BB79] focus-visible:outline-2 focus-visible:outline-[#D2BB79]"
              >
                خدماتنا
              </Link>
            </li>
            <li>
              <Link 
                href="/blogs" 
                className="transition-colors duration-300 hover:text-[#D2BB79] focus-visible:outline-2 focus-visible:outline-[#D2BB79]"
              >
                المدونة
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="transition-colors duration-300 hover:text-[#D2BB79] focus-visible:outline-2 focus-visible:outline-[#D2BB79]"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>

        {/* Center Official Badges Section (QR Code + Vision 2030 + Saudi Business Center) */}
        <div className="flex flex-col items-center space-y-6 mb-8 sm:mb-10">
          
          {/* QR Code & Vision 2030 Row */}
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            {/* Official QR Code with clean white background and rounded frame */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 p-1.5 bg-white rounded-xl shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105">
              <Image
                src="/footer-qr.png"
                alt="رمز الاستجابة السريع للتحقق الرسمي"
                fill
                sizes="96px"
                className="object-contain p-1"
              />
            </div>

            {/* Vision 2030 Logo */}
            <div className="relative w-32 sm:w-40 h-16 sm:h-20 transition-transform duration-300 hover:scale-105">
              <Image
                src="/vision-2030.png"
                alt="رؤية المملكة 2030 - Vision 2030"
                fill
                sizes="(max-width: 640px) 130px, 160px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Saudi Business Center Logo */}
          <div className="relative w-64 sm:w-80 h-14 sm:h-16 transition-transform duration-300 hover:scale-105">
            <Image
              src="/saudi-business-center.png"
              alt="المركز السعودي للأعمال - Saudi Business Center"
              fill
              sizes="(max-width: 640px) 260px, 320px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Social Media Channels & WhatsApp Icons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
          {/* WhatsApp */}
          <a
            href="https://wa.me/966579534107"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل معنا عبر واتساب"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B0B0B]/70 border border-[#D2BB79]/40 flex items-center justify-center text-[#D2BB79] transition-all duration-300 hover:bg-[#D2BB79] hover:text-[#03111F] hover:border-[#D2BB79] hover:scale-110 shadow-md"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kaaf_marketing?igsh=aTU5YTdkcGlqMGds"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="إنستغرام كاف"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B0B0B]/70 border border-[#D2BB79]/40 flex items-center justify-center text-[#FFF7E6] transition-all duration-300 hover:bg-[#D2BB79] hover:text-[#03111F] hover:border-[#D2BB79] hover:scale-110 shadow-md"
          >
            <svg className="w-5 h-5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@kaaf_marketing?_r=1&_t=ZS-98nTllJ8GQu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تيك توك كاف"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B0B0B]/70 border border-[#D2BB79]/40 flex items-center justify-center text-[#FFF7E6] transition-all duration-300 hover:bg-[#D2BB79] hover:text-[#03111F] hover:border-[#D2BB79] hover:scale-110 shadow-md"
          >
            <svg className="w-5 h-5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.89-2.88 2.89 2.89 0 0 1 2.89-2.88c.28 0 .54.04.8.1v-3.5a6.37 6.37 0 0 0-.8-.05A6.34 6.34 0 0 0 3 15.67 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.33V9.05a8.16 8.16 0 0 0 4.82 1.56V7.16a4.85 4.85 0 0 1-.91-.47z" />
            </svg>
          </a>

          {/* Snapchat */}
          <a
            href="https://www.snapchat.com/add/kaaf_marketing?share_id=yF3PkOqO3LQ&locale=en-US"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="سناب شات كاف"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B0B0B]/70 border border-[#D2BB79]/40 flex items-center justify-center text-[#FFF7E6] transition-all duration-300 hover:bg-[#D2BB79] hover:text-[#03111F] hover:border-[#D2BB79] hover:scale-110 shadow-md"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21.798 16.987c-2.866-.472-4.151-3.401-4.204-3.526l-.005-.012a1.07 1.07 0 0 1-.102-.898c.193-.454.83-.656 1.251-.79.105-.033.205-.065.283-.096.763-.301.918-.613.914-.822a.662.662 0 0 0-.501-.544l-.006-.002a.946.946 0 0 0-.356-.068.755.755 0 0 0-.313.062 2.54 2.54 0 0 1-.955.266.821.821 0 0 1-.53-.177c.01-.17.02-.345.032-.53l.004-.066a10.102 10.102 0 0 0-.241-4.034 5.248 5.248 0 0 0-4.873-3.14q-.201.002-.402.004a5.24 5.24 0 0 0-4.869 3.097 10.09 10.09 0 0 0-.241 4.031q.019.299.036.598a.848.848 0 0 1-.584.178 2.453 2.453 0 0 1-1.014-.268.575.575 0 0 0-.245-.049.834.834 0 0 0-.811.533c-.082.43.533.742.907.89.079.031.178.063.283.096.422.134 1.059.336 1.252.79a1.072 1.072 0 0 1-.102.898l-.005.012a7.028 7.028 0 0 1-1.07 1.662 5.215 5.215 0 0 1-3.134 1.864.24.24 0 0 0-.2.25.38.38 0 0 0 .03.13c.176.41 1.059.75 2.553.98.14.022.198.25.28.623.033.15.066.304.113.464a.293.293 0 0 0 .32.229c.14-.015.281-.035.424-.061a5.53 5.53 0 0 1 1.12-.127 4.954 4.954 0 0 1 .808.068 3.877 3.877 0 0 1 1.535.784 4.443 4.443 0 0 0 2.69 1.06c.034 0 .067-.001.1-.004.041.002.095.004.152.004a4.448 4.448 0 0 0 2.691-1.06 3.873 3.873 0 0 1 1.534-.784 4.973 4.973 0 0 1 .808-.068 5.593 5.593 0 0 1 1.12.119 2.391 2.391 0 0 0 .425.053h.024a.279.279 0 0 0 .295-.22c.046-.159.08-.31.114-.462.08-.371.14-.598.28-.62 1.494-.23 2.376-.57 2.551-.978a.385.385 0 0 0 .032-.131.24.24 0 0 0-.203-.244Z"/>
            </svg>
          </a>
        </div>

        {/* Contact WhatsApp / Phone Number */}
        <div className="flex items-center justify-center mb-8">
          <a
            href="https://wa.me/966579534107"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل معنا عبر واتساب"
            className="inline-flex items-center gap-2.5 font-forma text-base sm:text-lg font-bold text-[#FFF7E6] transition-colors duration-300 hover:text-[#D2BB79] focus-visible:outline-2 focus-visible:outline-[#D2BB79]"
            dir="ltr"
          >
            <svg 
              className="w-5 h-5 text-[#D2BB79] fill-current" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>+966 57 953 4107</span>
          </a>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" aria-hidden="true" />

        {/* Copyright notice */}
        <p className="font-forma text-xs sm:text-sm text-[#FFF7E6]/70 font-medium">
          جميع الحقوق محفوظة لدى شركة كاف © {currentYear}
        </p>

      </div>
    </footer>
  );
}
