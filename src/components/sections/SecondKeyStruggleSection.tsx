import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";

export function SecondKeyStruggleSection() {
  return (
    <section 
      id="second-key-struggle"
      aria-labelledby="second-key-heading"
      className="relative w-full aspect-[1920/1080] min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden py-12 sm:py-16 bg-[#03111F]"
    >
      {/* Background Image filling full section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Frame 2147223325.png"
          alt="المفتاح الثاني الكفاح - رجل يسير في متاهة"
          fill
          priority={false}
          quality={80}
          sizes="100vw"
          className="object-cover object-center opacity-100"
        />
        {/* Vertical gradient overlay fading only on the very top and very bottom */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#03111F_0%,transparent_15%,transparent_85%,#03111F_100%)] pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Content Column physically placed on the LEFT side in RTL, centered text alignment */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col items-center justify-center space-y-4 text-center ms-auto me-0">
            
            {/* Section Title */}
            <h2 
              id="second-key-heading"
              className="font-forma text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D2BB79] tracking-tight drop-shadow-md text-center"
            >
              المفتاح الثاني الكفاح
            </h2>

            {/* Subheading with underline decoration */}
            <h3 className="font-forma text-2xl sm:text-3xl font-bold text-[#5E96B7] tracking-tight underline decoration-[#FFF7E6]/40 underline-offset-8 pb-2 text-center">
              هنا تظهر التحديات
            </h3>

            {/* Bullet Paragraphs */}
            <div className="font-forma text-lg sm:text-xl lg:text-2xl text-[#FFF7E6] font-medium leading-relaxed space-y-2 max-w-xl pt-1 text-center">
              <p>يتأخر الحل تتغيّر الظروف</p>
              <p>ويبان الفرق بين اللي بدأ واللي يعرف يكمل</p>
              <p>الكفاح مو تعب بدون اتجاه</p>
              <p>الكفاح إنك تتمسك بالهدف وتغيّر خطتك</p>
              <p>بدون ما تغيّر وعدك.</p>
              <p>ومع ذلك...</p>
              <p className="text-[#5E96B7] font-bold pt-1">
                الباب للحين ما انفتح باقي المفتاح الأخير!
              </p>
            </div>

            {/* Reusable Glow Button */}
            <div className="pt-4 flex justify-center">
              <GlowButton href="#contact">
                ابدأ معنا الان
              </GlowButton>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
