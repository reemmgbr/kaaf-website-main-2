import blogsDataJson from "./blogs.json";

export interface TextLine {
  text: string;
  color?: "gold" | "white" | "steel-blue" | "light-grey";
  bold?: boolean;
}

export interface ParagraphBlock {
  lines?: TextLine[];
  text?: string;
  color?: "gold" | "white" | "steel-blue" | "light-grey";
  bold?: boolean;
  align?: "center" | "start" | "right";
}

export interface StrategyCardData {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export interface MistakeItem {
  title: string;
  description: string;
}

export interface BlogContentSection {
  id: string;
  title: string;
  titleTheme?: "white" | "steel-blue" | "gold";
  titleSize?: "small" | "normal";
  titleAlign?: "center" | "start";
  paragraphs?: ParagraphBlock[];
  subheading?: {
    text: string;
    color?: "gold" | "white" | "steel-blue";
  };
  calloutGrid?: string[];
  bulletItems?: string[];
  bulletColor?: "gold" | "white" | "steel-blue";
  numberedItems?: {
    prefix?: string;
    title?: string;
    description: string;
  }[] | string[];
  cards?: StrategyCardData[];
  mistakeItems?: MistakeItem[];
  postText?: string;
  conclusionParagraphs?: (string | ParagraphBlock)[];
}

export interface BlogContent {
  introParagraphs: ParagraphBlock[];
  questions?: {
    lead: string;
    q1: string;
    transition: string;
    q2: string;
  };
  sections: BlogContentSection[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  coverImage: string;
  alt: string;
  content?: BlogContent;
}

export const blogs: BlogPost[] = blogsDataJson as BlogPost[];

export function getAllBlogs(): BlogPost[] {
  return blogs;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug);
}
