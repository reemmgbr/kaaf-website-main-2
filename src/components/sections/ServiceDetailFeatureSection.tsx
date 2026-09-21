import React from "react";
import Image from "next/image";

export interface ServiceDetailFeatureSectionProps {
  id?: string;
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export function ServiceDetailFeatureSection({
  id = "service-detail-feature",
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
}: ServiceDetailFeatureSectionProps) {
  // In RTL mode:
  // imagePosition === 'left' means image column is on the left side of the screen (lg:col-start-1 or 2nd item in flex/grid), text on right (lg:col-start-7).
  const isImageLeft = imagePosition === "left";

  return (
    <section 
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative w-full py-16 sm:py-24 bg-[#03111F] overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text Content Column (On the RIGHT in RTL) */}
          <div 
            className={`flex flex-col items-start text-start space-y-4 ${
              isImageLeft ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"
            }`}
          >
            <h2 
              id={`${id}-heading`}
              className="font-forma text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D2BB79] tracking-tight leading-tight drop-shadow-md"
            >
              {title}
            </h2>

            <div className="font-forma text-lg sm:text-xl text-[#FFF7E6] font-medium leading-relaxed space-y-3 pt-1 drop-shadow-sm max-w-xl">
              {description}
            </div>
          </div>

          {/* Image Column (On the LEFT in RTL - Image with 4-side fade to background) */}
          <div 
            className={`w-full flex justify-center items-center ${
              isImageLeft ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"
            }`}
          >
            <div className="relative w-full max-w-xl flex justify-center items-center overflow-hidden rounded-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={700}
                height={500}
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto max-w-xl object-contain"
              />

              {/* Radial Vignette Overlay: Center is clear, edges blend into #03111F */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_35%,#03111F_90%)]" />

              {/* 4-Side Gradient Overlays fading to background */}
              <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#03111F] via-[#03111F]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#03111F] via-[#03111F]/60 to-transparent pointer-events-none" />
              <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#03111F] via-[#03111F]/60 to-transparent pointer-events-none" />
              <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#03111F] via-[#03111F]/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
