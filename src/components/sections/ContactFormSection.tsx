"use client";

import React, { useState } from "react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(
          data?.error || "حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى."
        );
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error: unknown) {
      console.error("Error submitting contact form:", error);
      if (error instanceof Error && error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(
          "حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact-form-section"
      aria-label="نموذج وبيانات التواصل"
      className="relative w-full py-16 sm:py-24 bg-[#03111F] text-[#FFF7E6] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 end-1/4 w-[420px] h-[420px] rounded-full bg-[#D2BB79]/[0.07] blur-[100px]"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/4 start-10 w-[380px] h-[380px] rounded-full bg-[#5E96B7]/[0.06] blur-[90px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── Right Column: Info & Context ── */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-start">
            <h2 className="font-forma text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D2BB79] tracking-tight leading-tight">
               مو خطة جاهزة نكررها على الكل
            </h2>

            <p className="font-forma text-base sm:text-lg lg:text-xl text-[#FFF7E6]/90 leading-relaxed max-w-xl">
              هي خطة مبنية على وضعك انت بالضبط
              <br />
              وناقصها بس ٦٠ ثانية من وقتك
            </p>

            {/* Gold Accent Divider */}
            <div className="w-48 sm:w-64 h-[2px] bg-[#D2BB79] my-2" aria-hidden="true" />

            {/* Phone / WhatsApp Link */}
            <div className="pt-2">
              <a
                href="https://wa.me/966579534107"
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="inline-flex items-center gap-3 font-forma text-lg sm:text-xl font-bold text-[#FFF7E6] hover:text-[#D2BB79] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#D2BB79]"
              >
                <span>+966 57 953 4107</span>
                <svg 
                  className="w-5 h-5 text-[#D2BB79] fill-current" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/966579534107"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل معنا عبر واتساب"
                className="w-10 h-10 rounded-full bg-[#0B0B0B]/70 border border-[#D2BB79]/40 flex items-center justify-center text-[#D2BB79] transition-all duration-300 hover:bg-[#D2BB79] hover:text-[#03111F] hover:border-[#D2BB79] hover:scale-110 shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kaaf_marketing?igsh=aTU5YTdkcGlqMGds"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="إنستغرام كاف"
                className="w-10 h-10 rounded-full bg-[#0B0B0B]/70 border border-[#D2BB79]/40 flex items-center justify-center text-[#FFF7E6] transition-all duration-300 hover:bg-[#D2BB79] hover:text-[#03111F] hover:border-[#D2BB79] hover:scale-110 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@kaaf_marketing?_r=1&_t=ZS-98nTllJ8GQu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تيك توك كاف"
                className="w-10 h-10 rounded-full bg-[#0B0B0B]/70 border border-[#D2BB79]/40 flex items-center justify-center text-[#FFF7E6] transition-all duration-300 hover:bg-[#D2BB79] hover:text-[#03111F] hover:border-[#D2BB79] hover:scale-110 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.89-2.88 2.89 2.89 0 0 1 2.89-2.88c.28 0 .54.04.8.1v-3.5a6.37 6.37 0 0 0-.8-.05A6.34 6.34 0 0 0 3 15.67 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.33V9.05a8.16 8.16 0 0 0 4.82 1.56V7.16a4.85 4.85 0 0 1-.91-.47z" />
                </svg>
              </a>

              {/* Snapchat */}
              <a
                href="https://www.snapchat.com/add/kaaf_marketing?share_id=yF3PkOqO3LQ&locale=en-US"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="سناب شات كاف"
                className="w-10 h-10 rounded-full bg-[#0B0B0B]/70 border border-[#D2BB79]/40 flex items-center justify-center text-[#FFF7E6] transition-all duration-300 hover:bg-[#D2BB79] hover:text-[#03111F] hover:border-[#D2BB79] hover:scale-110 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.798 16.987c-2.866-.472-4.151-3.401-4.204-3.526l-.005-.012a1.07 1.07 0 0 1-.102-.898c.193-.454.83-.656 1.251-.79.105-.033.205-.065.283-.096.763-.301.918-.613.914-.822a.662.662 0 0 0-.501-.544l-.006-.002a.946.946 0 0 0-.356-.068.755.755 0 0 0-.313.062 2.54 2.54 0 0 1-.955.266.821.821 0 0 1-.53-.177c.01-.17.02-.345.032-.53l.004-.066a10.102 10.102 0 0 0-.241-4.034 5.248 5.248 0 0 0-4.873-3.14q-.201.002-.402.004a5.24 5.24 0 0 0-4.869 3.097 10.09 10.09 0 0 0-.241 4.031q.019.299.036.598a.848.848 0 0 1-.584.178 2.453 2.453 0 0 1-1.014-.268.575.575 0 0 0-.245-.049.834.834 0 0 0-.811.533c-.082.43.533.742.907.89.079.031.178.063.283.096.422.134 1.059.336 1.252.79a1.072 1.072 0 0 1-.102.898l-.005.012a7.028 7.028 0 0 1-1.07 1.662 5.215 5.215 0 0 1-3.134 1.864.24.24 0 0 0-.2.25.38.38 0 0 0 .03.13c.176.41 1.059.75 2.553.98.14.022.198.25.28.623.033.15.066.304.113.464a.293.293 0 0 0 .32.229c.14-.015.281-.035.424-.061a5.53 5.53 0 0 1 1.12-.127 4.954 4.954 0 0 1 .808.068 3.877 3.877 0 0 1 1.535.784 4.443 4.443 0 0 0 2.69 1.06c.034 0 .067-.001.1-.004.041.002.095.004.152.004a4.448 4.448 0 0 0 2.691-1.06 3.873 3.873 0 0 1 1.534-.784 4.973 4.973 0 0 1 .808-.068 5.593 5.593 0 0 1 1.12.119 2.391 2.391 0 0 0 .425.053h.024a.279.279 0 0 0 .295-.22c.046-.159.08-.31.114-.462.08-.371.14-.598.28-.62 1.494-.23 2.376-.57 2.551-.978a.385.385 0 0 0 .032-.131.24.24 0 0 0-.203-.244Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Left Column: Glassmorphism Form Card ── */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#D2BB79]/50 via-[#E9EDF3]/20 to-transparent shadow-2xl">
              <div className="rounded-[calc(1.5rem-1px)] bg-[#03111F]/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10 border border-[#E9EDF3]/10">
                
                {/* Form Card Header */}
                <div className="mb-6 sm:mb-8 text-center flex flex-col items-center">
                  <h3 className="font-forma text-lg sm:text-xl md:text-2xl font-bold text-[#D2BB79] leading-relaxed pb-3">
                   لا تفوّت فرصة الحصول على الحل المناسب لمشروعك… ادخل بياناتك الحين 
                  </h3>
                  <div className="w-48 sm:w-64 h-[2px] bg-[#D2BB79] mx-auto rounded-full" aria-hidden="true" />
                </div>

                {submitted ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#D2BB79]/20 border border-[#D2BB79] flex items-center justify-center text-[#D2BB79]">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-forma text-2xl font-bold text-[#D2BB79]">
                      تم استلام رسالتك بنجاح!
                    </h4>
                    <p className="font-forma text-sm sm:text-base text-[#FFF7E6]/90 max-w-sm">
                      شكرًا لتواصلك معنا. سيقوم أحد مستشارينا بالتواصل معك في أقرب وقت.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="mt-4 px-6 py-2 rounded-xl border border-[#D2BB79] text-[#D2BB79] hover:bg-[#D2BB79] hover:text-[#03111F] font-forma font-bold text-sm transition-all"
                    >
                      إرسال رسالة أخرى
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col space-y-5 text-start">
                    
                    {/* Name Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="contact-name" className="font-forma text-sm font-bold text-[#FFF7E6]">
                        الأسم
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="ادخل اسمك هنا ..."
                        className="w-full bg-[#03111F]/80 border border-[#5E96B7]/30 rounded-xl px-4 py-3.5 text-[#FFF7E6] placeholder-[#FFF7E6]/40 font-forma text-sm sm:text-base focus:outline-none focus:border-[#D2BB79] focus:ring-1 focus:ring-[#D2BB79] transition-all disabled:opacity-60"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="contact-email" className="font-forma text-sm font-bold text-[#FFF7E6]">
                        البريد الإلكتروني
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ادخل بريدك الإلكتروني ..."
                        className="w-full bg-[#03111F]/80 border border-[#5E96B7]/30 rounded-xl px-4 py-3.5 text-[#FFF7E6] placeholder-[#FFF7E6]/40 font-forma text-sm sm:text-base focus:outline-none focus:border-[#D2BB79] focus:ring-1 focus:ring-[#D2BB79] transition-all disabled:opacity-60"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="contact-message" className="font-forma text-sm font-bold text-[#FFF7E6]">
                        نص الرساله
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        disabled={isSubmitting}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="ادخل رسالتك ..."
                        className="w-full bg-[#03111F]/80 border border-[#5E96B7]/30 rounded-xl px-4 py-3.5 text-[#FFF7E6] placeholder-[#FFF7E6]/40 font-forma text-sm sm:text-base focus:outline-none focus:border-[#D2BB79] focus:ring-1 focus:ring-[#D2BB79] transition-all resize-none disabled:opacity-60"
                      />
                    </div>

                    {/* Error Message if any */}
                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm font-forma">
                        {errorMessage}
                      </div>
                    )}

                    {/* Submit Button (Less rounded) */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl bg-[#FFF7E6] text-[#03111F] font-forma font-bold text-base sm:text-lg hover:bg-[#D2BB79] hover:text-[#03111F] transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? "جاري الإرسال..." : "ارسال"}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
