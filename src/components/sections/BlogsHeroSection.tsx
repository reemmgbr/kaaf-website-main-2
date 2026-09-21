import { PageHeroSection } from "@/components/ui/PageHeroSection";

export function BlogsHeroSection() {
  return (
    <PageHeroSection
      id="blogs-hero"
      title="المدونه"
      bgImage="/blogs-banner.png"
      bgImageAlt="المدونة - خلفية مقالات كاف للتسويق الرقمي"
      breadcrumbLabel="المدونه"
      buttonText="ابدأ معنا الان"
      buttonHref="#contact"
      size="compact"
      description={
        <p>
          نجمع بين الاستراتيجية والإبداع والتنفيذ لنقدم حلولاً تسويقية متكاملة تساعد علامتك التجارية على الوصول إلى جمهورها، وتعزيز حضورها، وتحويل الفرص إلى نتائج حقيقية.
        </p>
      }
    />
  );
}
