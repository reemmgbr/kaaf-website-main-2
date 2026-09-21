import Image from "next/image";
import { GlowButton } from "@/components/ui/GlowButton";

const keysData = [
  {
    id: "efficiency",
    title: "المفتاح الأول: كفاءة",
    subtitle: "نظام يبدأ بأسس متينة وقراءة دقيقة للسوق والجمهور",
    image: "/key-knowledge.png",
    alt: "مفتاح كفاءة",
  },
  {
    id: "struggle",
    title: "المفتاح الثاني: كفاح",
    subtitle: "نعمل بجد وشغف مستمر لتطوير حملاتك وحلولك",
    image: "/key-struggle.png",
    alt: "مفتاح كفاح",
  },
  {
    id: "perfection",
    title: "المفتاح الثالث: الكمال",
    subtitle: "نصل معك لأعلى مستويات الإتقان والنتائج الملموسة",
    image: "/key-perfection.png",
    alt: "مفتاح الكمال",
  },
];

export function AboutKeysSection() {
  return (
    <section
      id="about-keys"
      aria-labelledby="about-keys-heading"
      className="relative w-full py-16 sm:py-24 bg-[#03111F] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/4 w-[600px] h-[600px] rounded-full bg-[#5E96B7]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Section Badge Header */}
        <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#FFF7E6] text-[#03111F] font-forma text-base sm:text-lg font-bold shadow-lg mb-5">
          مفاتيح كاف الثلاثة
        </div>

        {/* Section Heading */}
        <h2
          id="about-keys-heading"
          className="font-forma text-3xl sm:text-5xl lg:text-6xl font-bold text-[#D2BB79] tracking-tight drop-shadow-md max-w-3xl mx-auto mb-12 leading-tight"
        >
          ثلاثة مفاتيح تفتح لك أبواب النمو المستدام
        </h2>

        {/* 3 Keys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 w-full max-w-6xl mx-auto mb-12">
          {keysData.map((keyItem) => (
            <div
              key={keyItem.id}
              className="group relative rounded-3xl bg-[#0B0B0B]/70 border border-[#D2BB79]/30 backdrop-blur-md p-6 sm:p-8 flex flex-col items-center text-center justify-between space-y-6 shadow-xl transition-all duration-300 hover:border-[#D2BB79] hover:shadow-[0_0_30px_rgba(210,187,121,0.3)] hover:-translate-y-1.5"
            >
              {/* Key Graphic Container */}
              <div className="relative w-full aspect-square max-w-[240px] mx-auto rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src={keyItem.image}
                  alt={keyItem.alt}
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 80vw, 30vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="font-forma text-xl sm:text-2xl font-bold text-[#D2BB79]">
                  {keyItem.title}
                </h3>
                <p className="font-forma text-sm sm:text-base text-[#FFF7E6]/90 font-medium leading-relaxed">
                  {keyItem.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-4">
          <GlowButton href="#contact">تواصل معنا الان</GlowButton>
        </div>
      </div>
    </section>
  );
}
