import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "كاف KAAF - وكالة تسويق متكاملة",
  description: "نحن مَن نسعى للكفاءة بالكفاح وُنُنهيه بـ كمال",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cn("h-full antialiased font-forma")}>
      <body className="min-h-full flex flex-col bg-[#03111F] text-[#FFF7E6] font-forma">
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
