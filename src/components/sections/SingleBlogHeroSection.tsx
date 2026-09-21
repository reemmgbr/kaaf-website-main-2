import Image from "next/image";

interface SingleBlogHeroSectionProps {
  title: string;
  bgImage?: string;
  bgImageAlt?: string;
}

export function SingleBlogHeroSection({
  title,
  bgImage = "/blogs-banner.png",
  bgImageAlt = "خلفية المقالة - كاف",
}: SingleBlogHeroSectionProps) {
  return (
    <section 
      id="single-blog-hero"
      aria-labelledby="single-blog-heading"
      className="relative w-full flex flex-col justify-center items-center overflow-hidden bg-[#03111F] min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] pt-24 sm:pt-32 pb-8 sm:pb-12"
    >
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={bgImage}
          alt={bgImageAlt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        {/* Soft top and bottom dark gradient overlays for seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03111F]/80 via-[#03111F]/50 to-[#03111F]" />
      </div>

      {/* Hero Center Title */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center max-w-4xl">
        <h1 
          id="single-blog-heading"
          className="font-forma text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D2BB79] tracking-tight leading-snug drop-shadow-xl"
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
