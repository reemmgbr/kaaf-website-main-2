import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { SingleBlogHeroSection } from "@/components/sections/SingleBlogHeroSection";
import { SingleBlogContentSection } from "@/components/sections/SingleBlogContentSection";
import { getAllBlogs, getBlogBySlug } from "@/data/blogs";

export interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "المدونة | كاف",
      description: "مقالات واستراتيجيات متخصصة في التجارة الإلكترونية والتسويق الرقمي من كاف.",
    };
  }

  return {
    title: blog.metaTitle || `${blog.title} | كاف`,
    description: blog.metaDescription || blog.excerpt,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: [
        {
          url: blog.coverImage || "/blogs-banner.png",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        <SingleBlogHeroSection title={blog.title} />
        <SingleBlogContentSection blog={blog} />
      </main>
    </div>
  );
}
