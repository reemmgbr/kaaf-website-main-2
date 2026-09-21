import { Navbar } from "@/components/layout/Navbar";
import { ContactHeroSection } from "@/components/sections/ContactHeroSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

export const metadata = {
  title: "تواصل معنا | كاف للتسويق الرقمي - KAAF",
  description: "خلّنا نبدأ من هنا. عندك فكرة، تحدي، أو هدف تبي توصل له؟ شاركنا تفاصيلك وفريقنا بيتواصل معك عشان نفهم مشروعك واحتياجك بشكل أفضل.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        <ContactHeroSection />
        <ContactFormSection />
      </main>
    </div>
  );
}
