import { PageHeroSection } from "@/components/ui/PageHeroSection";

export function AboutHeroSection() {
  return (
    <PageHeroSection
      id="about-hero"
      title="من نحن"
      bgImage="/about-hero.png"
      bgImageAlt="من نحن - خلفية كاف"
      breadcrumbLabel="من نحن"
      buttonText="ابدأ معنا الان"
      buttonHref="#contact"
      description={
        <>
          <p>في كل لعبة فيها باب ما ينفتح بالقوة .. ولا بالسرعة ولا حتى بالمحاولة الأولى</p>
          <p>ينفتح فقط إذا عرفت الشفرة ...</p>
          <p>والشفرة عندنا مكوّنة من 3 مفاتيح!</p>
        </>
      }
    />
  );
}
