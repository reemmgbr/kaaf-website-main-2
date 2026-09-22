"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GlowButton } from "@/components/ui/GlowButton";

import { motion } from "motion/react";

const servicesData = [
  {
    id: "marketing-content",
    title: "المحتوى التسويقي",
    description: "نصنع محتوى يفهم احتياج عميلك، يجاوب أسئلته ويعطيه سببًا يكمل معك بدل ما يتجاهلك.",
    image: "/marketing-content.png",
    alt: "خدمة صناعة المحتوى التسويقي",
    href: "/services/marketing-content",
  },
  {
    id: "studio",
    title: "ستوديو كـافـ",
    description: "نحوّل رسالتك إلى هوية وتصاميم توقف العين، توضح قيمتك، وتخلي براندك سهل التذكر.",
    image: "/kaaf-studio.png",
    alt: "خدمة ستوديو كاف والتصاميم الهوية",
    href: "/services/studio",
  },
  {
    id: "social-management",
    title: "إدارة محتوى وسائل التواصل",
    description: "نبني تواصلاً يومياً يخلي علامتك قريبة من جمهورك، حاضرة في باله، وجديرة بثقته.",
    image: "/social-media.png",
    alt: "خدمة إدارة محتوى حسابات وسائل التواصل الاجتماعي",
    href: "/services/social-management",
  },
  {
    id: "media-buying",
    title: "ميديا باينج",
    description: "ندير حملاتك بقرارات مبنية على البيانات، ونوجه ميزانيتك للفرص اللي تقدر تتحول إلى مبيعات فعلية.",
    image: "/media-buying.png",
    alt: "خدمة إعلانات ميديا باينج والمبيعات",
    href: "/services/media-buying",
  },
];

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

function ServiceCard({ service }: { service: Service }) {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const x = e.clientX - card.getBoundingClientRect().left;
    const y = e.clientY - card.getBoundingClientRect().top;

    // throttle بسيط عن طريق requestAnimationFrame عشان الأداء
    if (frameRef.current !== null) return;

    frameRef.current = requestAnimationFrame(() => {
      spotlightRef.current?.style.setProperty("--x", `${x}px`);
      spotlightRef.current?.style.setProperty("--y", `${y}px`);
      frameRef.current = null;
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl p-[3px] shadow-2xl transition-transform duration-300 hover:scale-[1.01] overflow-hidden"
    >
      {/* الطبقة 1: الجراديانت الافتراضي - ظاهر طول الوقت */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            "linear-gradient(224.16deg, #D2BB79 16.6%, rgba(255, 255, 255, 0) 62.77%)",
        }}
      />

      {/* الطبقة 2: السبوت لايت اللي بيتبع الماوس - شفاف عادي، يظهر عند الهوفر */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(450px circle at var(--x, 50%) var(--y, 50%), #D2BB79 0%, rgba(210, 187, 121, 0.45) 35%, rgba(255, 255, 255, 0) 75%)",
        }}
      />

      {/* المحتوى فوق الطبقتين */}
      <div className="relative z-10 w-full h-full rounded-[calc(1.5rem-3px)] bg-[#03111F] p-6 sm:p-8 flex flex-col items-center text-center justify-between space-y-6">
        {/* Card Banner Image Frame */}
        <div className="relative w-full aspect-[1.85/1] rounded-2xl overflow-hidden border border-[#5E96B7]/20 shadow-inner">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            quality={80}
            sizes="(max-width: 640px) 360px, (max-width: 1024px) 500px, 600px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Card Content (Title & Description) */}
        <div className="flex flex-col items-center space-y-3">
          <h3 className="font-forma text-2xl sm:text-3xl font-bold text-[#FFF7E6] tracking-tight">
            {service.title}
          </h3>
          <p className="font-forma text-base sm:text-lg text-[#FFF7E6]/90 font-medium leading-relaxed max-w-md">
            {service.description}
          </p>
        </div>

        {/* Card Button */}
        <div className="pt-2">
          <Link
            href={service.href}
            aria-label={`تعرف على تفاصيل خدمة ${service.title}`}
            className="inline-flex items-center justify-center rounded-full border border-[#D2BB79]/40 bg-[#0B0B0B]/70 px-7 py-2.5 font-forma text-sm sm:text-base font-bold text-[#FFF7E6] shadow-md transition-all duration-300 hover:border-[#D2BB79] hover:bg-[#D2BB79] hover:text-[#03111F] focus-visible:outline-2 focus-visible:outline-[#D2BB79] whitespace-nowrap"
          >
            تعرف على الخدمة من هنا
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full   bg-[#03111F] overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Section Badge Header */}
        <motion.div
      className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#FFF7E6] text-[#03111F] font-forma text-base sm:text-lg lg:text-xl font-bold shadow-lg mb-5"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      خدماتنا
    </motion.div>

        {/* Section Heading */}
    <motion.h2
      id="services-heading"
      className="font-forma text-2xl sm:text-5xl lg:text-6xl font-bold text-[#D2BB79] tracking-tight drop-shadow-md max-w-4xl mx-auto mb-6 leading-tight"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        duration: 0.7,
        delay: 0.15,
        ease: "easeOut",
      }}
    >
      ما تحتاجه علامتك التجارية من خدمات تسويقية في مكان واحد!
    </motion.h2>

        {/* CTA View All Services Button */}
       <motion.div
      className="flex justify-center mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      }}
    >
      <GlowButton href="/services">
        شاهد جميع خدماتنا
      </GlowButton>
    </motion.div>


        {/* Services Cards 2x2 Grid with Interactive Spotlight Gradient Border */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 w-full max-w-6xl mx-auto">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}