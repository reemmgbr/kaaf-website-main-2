import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";

export function WhoIsKaafSection() {
  return (
    <section 
      id="about"
      aria-labelledby="whoiskaaf-heading"
      className="relative w-full min-h-[550px] lg:min-h-[620px] flex items-center justify-center overflow-hidden py-16 sm:py-20 bg-[#03111F]"
    >
      {/* Background Image filling full section */}
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
        {/* Gradient overlay: transparent on left building visual, fading smoothly to dark navy on right text side */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#03111F]/50 to-[#03111F]" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content Column placed on the right side */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-5 text-start me-auto lg:me-0">
            
            {/* Section Title */}
            <h2 
              id="whoiskaaf-heading"
              className="font-forma text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D2BB79] tracking-tight drop-shadow-md"
            >
              مين هي كاف؟
            </h2>

            {/* Paragraph 1 */}
            <p className="font-forma text-base sm:text-xl text-[#FFF7E6] font-medium leading-relaxed">
              نحن مَن نسعى للكفاءة بالكفاح وُنُنهيه بـ كمال
            </p>

            {/* Paragraph 2 */}
            <p className="font-forma text-base sm:text-xl text-[#FFF7E6] font-medium leading-relaxed">
              ونعرف وش اللي يدور في بالك وأنت تقرأ الحين.. أننا نشبه كثير من الشركات في المظاهر، لكننا في الفعل نختلف!
            </p>

            {/* Paragraph 3 */}
            <p className="font-forma text-base sm:text-xl text-[#FFF7E6] font-medium leading-relaxed">
             نحن فريق متكامل يدخل معك الرحلة من أول سؤال وش اللي يوقف نموك؟ إلى آخر نتيجة كيف نخلي مبيعاتك تتحرك فعلاً؟
            </p>

            {/* Paragraph 4 */}
            <p className="font-forma text-base sm:text-xl text-[#FFF7E6] font-medium leading-relaxed">
             لأننا بضمير نقرأ السوق، نفهم عميلك، نجرب، نطور، ونكمل بنظام لين نوصل للفرق اللي يبان بالأرقام
            </p>

            {/* Reusable Glow Button */}
            <div className="pt-3">
              <GlowButton href="#contact">
                تواصل معنا الان
              </GlowButton>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


