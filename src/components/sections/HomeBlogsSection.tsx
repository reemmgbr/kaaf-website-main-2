import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getBlogBySlug, type BlogPost } from "@/data/blogs";

export function HomeBlogsSection() {
  const blogSlugs = [
    "attracting-customers",
    "troubleshooting-store",
    "building-sales-strategy",
  ];

  const featuredBlogs: BlogPost[] = blogSlugs
    .map((slug) => getBlogBySlug(slug))
    .filter((b): b is BlogPost => b !== undefined);

  return (
    <section
      id="home-blogs"
      aria-labelledby="home-blogs-heading"
      className="relative w-full py-16 sm:py-24 bg-[#03111F] overflow-hidden"
    >
      {/* Background subtle radial ambient light blur */}
      <div
        className="pointer-events-none absolute inset-0 m-auto w-[70%] sm:w-[50%] h-[50%] rounded-full bg-[#D2BB79]/05 blur-3xl z-0"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl lg:max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-6 py-1.5 rounded-full bg-white text-[#03111F] font-forma font-bold text-sm sm:text-base mb-1 shadow-md">
            المدونه
          </div>

          {/* Heading */}
          <h2
            id="home-blogs-heading"
            className="font-forma text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D2BB79] tracking-tight leading-tight"
          >
            أفكار تستحق أن تُقرأ
          </h2>

          {/* Subtitle */}
          <p className="font-forma text-base sm:text-lg text-[#FFF7E6] font-bold max-w-2xl text-center leading-relaxed pt-1">
            محتوى مفيد، أفكار ملهمة، ونضائح تساعدك على تطوير مشروعك وصنع تجربة رقمية أفضل.
          </p>
        </div>

        {/* 3 Featured Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mx-auto">
          {featuredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#D2BB79]/40 via-[#E9EDF3]/15 to-transparent hover:from-[#D2BB79] hover:via-[#5E96B7]/40 hover:to-[#D2BB79]/30 transition-all duration-500 shadow-2xl group hover:scale-[1.02] flex flex-col h-full"
            >
              <div className="w-full h-full rounded-[calc(1.5rem-1px)] bg-[#03111F]/85 backdrop-blur-2xl p-5 sm:p-6 flex flex-col items-center text-center justify-between space-y-4 border border-[#E9EDF3]/10 hover:border-transparent transition-all duration-300 font-bold">
                {/* Card Image Frame */}
                <div className="relative w-full aspect-[1.6/1] rounded-2xl overflow-hidden border border-[#5E96B7]/30 shadow-lg bg-[#0B0B0B]">
                  <Image
                    src={blog.coverImage}
                    alt={blog.alt || blog.title}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03111F]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Details: Title and Excerpt */}
                <div className="flex flex-col items-center space-y-2 pt-1 flex-grow justify-start">
                  <h3 className="font-forma text-lg sm:text-xl font-bold text-[#FFF7E6] tracking-tight leading-snug">
                    {blog.title}
                  </h3>
                  <p className="font-forma text-xs sm:text-sm text-[#E9EDF3]/85 font-medium leading-relaxed line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Read More Action Button */}
                <div className="pt-2 w-full flex justify-center mt-auto">
                  <Link
                    href={`/blogs/${blog.slug}`}
                    aria-label={`اقرأ المزيد عن ${blog.title}`}
                    className="w-4/5 min-w-[80%] inline-flex items-center justify-center rounded-full border border-[#D2BB79]/40 bg-[#0B0B0B]/70 py-2.5 font-forma text-sm sm:text-base font-bold text-[#FFF7E6] shadow-md transition-all duration-300 hover:border-[#D2BB79] hover:bg-[#D2BB79] hover:text-[#03111F] hover:shadow-[0_0_20px_rgba(210,187,121,0.4)] focus-visible:outline-2 focus-visible:outline-[#D2BB79] whitespace-nowrap"
                  >
                    اقرأ المزيد
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
