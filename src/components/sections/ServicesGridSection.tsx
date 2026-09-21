"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

export const allServicesData: ServiceItem[] = [
  {
    id: "marketing-content",
    title: "المحتوى التسويقي",
    description: "نصنع محتوى يفهم احتياج عميلك، يجاوب أسئلته ويعطيه سببًا يكمل معك بدل ما يتجاهلك.",
    image: "/marketing-content.png",
    alt: "خدمة المحتوى التسويقي",
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
    alt: "خدمة إدارة محتوى وسائل التواصل الاجتماعي",
    href: "/services/social-management",
  },
  {
    id: "media-buying",
    title: "ميديا باينج",
    description: "ندير حملاتك بقرارات مبنية على البيانات، ونوجه ميزانيتك للفرص اللي تقدر تتحول إلى مبيعات فعلية.",
    image: "/media-buying.png",
    alt: "خدمة ميديا باينج والإعلانات الممولة",
    href: "/services/media-buying",
  },
  {
    id: "seo",
    title: "تحسين محركات البحث SEO",
    description: "نساعد موقعك يظهر لجمهورك في اللحظة اللي يبحث فيها عن خدماتك بدون ما تعتمد على الإعلانات فقط.",
    image: "/seo.png",
    alt: "خدمة تحسين محركات البحث SEO",
    href: "/services/seo",
  },
  {
    id: "influencer-marketing",
    title: "الإنفلونسر ماركتنج",
    description: "نوصل رسالتك من خلال المؤثر المناسب، أمام الجمهور المناسب، بطريقة تحافظ على مصداقية البراند.",
    image: "/influencer-marketing.png",
    alt: "خدمة التسويق عبر المؤثرين والإنفلونسرز",
    href: "/services/influencer-marketing",
  },
  {
    id: "mobile-apps",
    title: "تطبيقات الموبايل",
    description: "نطور تطبيقات تربط العميل بعلامتك، تسهل عليه الوصول لخدماتك، وتتحول التجربة إلى فرصة بيع وولاء.",
    image: "/mobile-apps.png",
    alt: "خدمة تطوير وتصميم تطبيقات الموبايل",
    href: "/services/mobile-apps",
  },
];

export function ServiceCard({ service }: { service: ServiceItem }) {
  const [style, setStyle] = useState({
    background: "linear-gradient(224.16deg, #D2BB79 16.6%, rgba(255, 255, 255, 0) 62.77%)",
    transition: "background 0.5s ease-out",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const mouseX = Math.round(e.clientX - rect.left);
    const mouseY = Math.round(e.clientY - rect.top);

    setStyle({
      background: `radial-gradient(450px circle at ${mouseX}px ${mouseY}px, #D2BB79 0%, rgba(210, 187, 121, 0.45) 35%, rgba(255, 255, 255, 0) 75%)`,
      transition: "background 0.05s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      background: "linear-gradient(224.16deg, #D2BB79 16.6%, rgba(255, 255, 255, 0) 62.77%)",
      transition: "background 0.5s ease-out",
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl p-[3px] shadow-2xl group transition-all duration-300 hover:scale-[1.01]"
      style={style}
    >
      <div className="w-full h-full rounded-[calc(1.5rem-3px)] bg-[#03111F] p-6 sm:p-8 flex flex-col items-center text-center justify-between space-y-6">
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

export function ServicesGridSection() {
  return (
    <section 
      id="services-grid"
      aria-label="قائمة خدمات كاف"
      className="relative w-full py-16 sm:py-24 bg-[#03111F] overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Cards 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 w-full max-w-6xl mx-auto">
          {allServicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
