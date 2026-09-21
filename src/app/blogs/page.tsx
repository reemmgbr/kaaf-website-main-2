import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { BlogsHeroSection } from "@/components/sections/BlogsHeroSection";
import { BlogsGridSection } from "@/components/sections/BlogsGridSection";
import { BlogsGlassSummarySection } from "@/components/sections/BlogsGlassSummarySection";

export const metadata: Metadata = {
  title: "المدونة | كاف - KAAF",
  description: "نجمع بين الاستراتيجية والإبداع والتنفيذ لنقدم مقالات وحلولاً تسويقية متكاملة تساعد علامتك التجارية على النمو وتحقيق أفضل النتائج.",
  openGraph: {
    title: "المدونة | كاف - KAAF",
    description: "نجمع بين الاستراتيجية والإبداع والتنفيذ لنقدم مقالات وحلولاً تسويقية متكاملة تساعد علامتك التجارية على النمو وتحقيق أفضل النتائج.",
    images: [
      {
        url: "/blogs-banner.png",
        width: 1200,
        height: 630,
        alt: "مدونة كاف للتسويق الرقمي",
      },
    ],
  },
};

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        <BlogsHeroSection />
        <BlogsGridSection />
        <BlogsGlassSummarySection />
      </main>
    </div>
  );
}
