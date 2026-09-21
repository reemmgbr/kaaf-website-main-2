import { PageHeroSection } from "@/components/ui/PageHeroSection";

export function ServicesHeroSection() {
  return (
    <PageHeroSection
      id="services-hero"
      title="خدماتنا"
      bgImage="/services-hero.png"
      bgImageAlt="خدماتنا - خلفية كاف"
      breadcrumbLabel="خدماتنا"
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
