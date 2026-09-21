"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs as allBlogs, type BlogPost } from "@/data/blogs";

export function BlogCard({ blog }: { blog: BlogPost }) {
  const href = `/blogs/${blog.slug}`;

  return (
    <article className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#D2BB79]/40 via-[#E9EDF3]/15 to-transparent hover:from-[#D2BB79] hover:via-[#5E96B7]/40 hover:to-[#D2BB79]/30 transition-all duration-500 shadow-2xl group hover:scale-[1.02] flex flex-col h-full">
      <div className="w-full h-full rounded-[calc(1.5rem-1px)] bg-[#03111F]/75 backdrop-blur-2xl p-5 sm:p-6 flex flex-col items-center text-center justify-between space-y-4 border border-[#E9EDF3]/10 hover:border-transparent transition-all duration-300">
        
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
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#03111F]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content Details: Title and Excerpt */}
        <div className="flex flex-col items-center space-y-2 pt-1 flex-grow justify-start">
          <h2 className="font-forma text-xl sm:text-2xl font-bold text-[#FFF7E6] tracking-tight leading-snug">
            {blog.title}
          </h2>
          <p className="font-forma text-sm sm:text-base text-[#D2BB79] font-medium leading-relaxed">
            {blog.excerpt}
          </p>
        </div>

        {/* Read More Action Button */}
        <div className="pt-2 w-full flex justify-center mt-auto">
          <Link
            href={href}
            aria-label={`اقرأ المزيد عن ${blog.title}`}
            className="w-4/5 min-w-[80%] inline-flex items-center justify-center rounded-full border border-[#D2BB79]/40 bg-[#0B0B0B]/70 py-2.5 font-forma text-sm sm:text-base font-bold text-[#FFF7E6] shadow-md transition-all duration-300 hover:border-[#D2BB79] hover:bg-[#D2BB79] hover:text-[#03111F] hover:shadow-[0_0_20px_rgba(210,187,121,0.4)] focus-visible:outline-2 focus-visible:outline-[#D2BB79] whitespace-nowrap"
          >
            اقرأ المزيد
          </Link>
        </div>

      </div>
    </article>
  );
}

export function BlogsGridSection({ blogs = allBlogs }: { blogs?: BlogPost[] }) {
  const topRowBlogs = blogs.slice(0, 3);
  const bottomRowBlogs = blogs.slice(3);

  return (
    <section 
      id="blogs-grid"
      aria-label="قائمة مقالات المدونة"
      className="relative w-full py-16 sm:py-24 bg-[#03111F] overflow-hidden"
    >
      {/* Background subtle radial ambient light blur matching FeatureCards */}
      <div 
        className="pointer-events-none absolute inset-0 m-auto w-[70%] sm:w-[50%] h-[50%] rounded-full bg-[#D2BB79]/05 blur-3xl z-0"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl lg:max-w-7xl">
        
        {/* Desktop 3-Card Top Row & 2-Card Centered Bottom Row Layout */}
        <div className="hidden lg:flex flex-col gap-8 mx-auto">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-3 gap-8">
            {topRowBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          {bottomRowBlogs.length > 0 && (
            <div className="flex justify-center gap-8">
              {bottomRowBlogs.map((blog) => (
                <div key={blog.id} className="w-[calc(33.333%-1.334rem)]">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile and Tablet Layout (1 or 2 Columns Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:hidden max-w-4xl mx-auto">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

      </div>
    </section>
  );
}
