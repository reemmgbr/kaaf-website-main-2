import { Navbar } from "@/components/layout/Navbar";
import { PageHeroSection } from "@/components/ui/PageHeroSection";
import { ServiceDetailFeatureSection } from "@/components/sections/ServiceDetailFeatureSection";
import { ServiceCalloutGlassSection } from "@/components/sections/ServiceCalloutGlassSection";
import { ServiceStrategyAccordionSection } from "@/components/sections/ServiceStrategyAccordionSection";
import { ServiceFeatureCardsSection, FeatureCardData } from "@/components/sections/ServiceFeatureCardsSection";
import { ServiceGlassCTASection } from "@/components/sections/ServiceGlassCTASection";
import { ServiceFAQSection } from "@/components/sections/ServiceFAQSection";

export const metadata = {
  title: "SEO - تحسين محركات البحث | كاف - KAAF",
  description: "كل موقع يملك مساحة في جوجل، السر في الوصول إلى الصفحة الأولى هو خطة محسوبة تنافس اليوم، وتثبت نتائجك وتضمن تدفقها من تحسين محركات البحث.",
};

const seoStrategyStepsData = [
  {
    id: "keyword-research",
    number: "01",
    title: "بحث الكلمات المفتاحية",
    content: "نكتشف الكلمات التي يبحث عنها عميلك وبناء عليها نضع استراتيجيتك.",
    defaultOpen: true,
  },
  {
    id: "competitor-analysis",
    number: "02",
    title: "دراسة المنافسين بدقة",
    content: "نفهم أسلوب منافسيك في الظهور لتحديد نقاط تفوقك عليهم.",
    defaultOpen: true,
  },
  {
    id: "internal-site-audit",
    number: "03",
    title: "فحص داخلي للموقع",
    content: "نراجع موقعك بالكامل لاكتشاف أي عائق يمنعك من الصدارة.",
    defaultOpen: true,
  },
  {
    id: "seo-content-writing",
    number: "04",
    title: "كتابة محتوى السيو",
    content: "نكتب محتوى ذكي يخدم البحث ويناسب محركات البحث والعميل.",
    defaultOpen: true,
  },
  {
    id: "onpage-seo",
    number: "05",
    title: "السيو الداخلي",
    content: "نحسن بنية موقعك وصفحاتك لتسهيل وصول جوجل والفهرسة.",
    defaultOpen: true,
  },
  {
    id: "offpage-seo",
    number: "06",
    title: "السيو الخارجي",
    content: "نبني قوة موقعك عبر تحسين الروابط الخلفية وثقة جوجل بك.",
    defaultOpen: true,
  },
];

const seoFeatureCardsData: FeatureCardData[] = [
  {
    id: "seo-card-1",
    image: "/seo-card-1.png",
    alt: "إعادة الزيارات والتحويلات",
    title: "إعادة الزيارات والتحويلات",
    description: "كل زيارة جيدة نضمنها عن طريق محركات البحث تتحول إلى عميل حقيقي.",
  },
  {
    id: "seo-card-2",
    image: "/seo-card-2.png",
    alt: "استغل قوة جوجل",
    title: "استغل قوة جوجل",
    description: "جوجل أكبر محرك بحث، ونضمن لك الظهور بالكلمات المفتاحية الصحيحة.",
  },
  {
    id: "seo-card-3",
    image: "/seo-card-3.png",
    alt: "التوسع في كلمات التسويق",
    title: "التوسع في كلمات التسويق",
    description: "في جوجل كل كلمة تفتح لك باب، نوسع تواجدك على الكلمات المستهدفة.",
  },
  {
    id: "seo-card-4",
    image: "/seo-card-4.png",
    alt: "تفوق على منافسيك",
    title: "تفوق على منافسيك",
    description: "بدراسة وتحليل أداء منافسيك، نضع خطتنا لنتفوق بشكل مستمر.",
  },
];

const seoFaqItemsData = [
  {
    id: "faq-what-is-seo",
    title: "ما هي خدمة السيو؟",
    content: "خدمة تهتم بتحسين ترتيب موقعك الإلكتروني في محركات البحث مثل جوجل لزيادة الزيارات المجانية المستهدفة.",
  },
  {
    id: "faq-suitable-sites",
    title: "هل خدمة السيو تناسب أي نوع موقع؟",
    content: "نعم، السيو يناسب المتاجر الإلكترونية، مواقع الشركات، المدونات، وأي موقع يسعى للوصول إلى جمهور يقتنع بخدماته.",
  },
  {
    id: "faq-onpage-offpage-diff",
    title: "وش الفرق بين السيو الداخلي والخارجي؟",
    content: "السيو الداخلي يتعلق بتحسين محتوى الموقع وبنيته التقنية، بينما السيو الخارجي يتعلق ببناء سلطة الموقع وثقة محركات البحث به عبر الروابط الخلفية.",
  },
];

export default function SEOServicePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        {/* Hero Section */}
        <PageHeroSection
          id="seo-hero"
          title="SEO"
          bgImage="/seo-banner.png"
          bgImageAlt="خدمة تحسين محركات البحث SEO - خلفية كاف"
          breadcrumbLabel="SEO"
          parentBreadcrumb={{
            label: "خدماتنا",
            href: "/services",
          }}
          buttonText="ابدأ معنا الان"
          buttonHref="#contact"
          size="compact"
        />

        {/* Feature Section: Key to your growth */}
        <ServiceDetailFeatureSection
          id="seo-feature"
          title="باب ظهورك... مفتاحه لدينا!"
          description="كل موقع يملك مساحة في جوجل، السر في الوصول إلى الصفحة الأولى هو خطة محسوبة تنافس اليوم، وتثبت نتائجك وتضمن تدفقها من تحسين محركات البحث."
          imageSrc="/seo-section-image.png"
          imageAlt="استراتيجية ومفتاح ظهور موقعك في جوجل"
          imagePosition="left"
        />

        {/* Callout Glass Section: Why SEO matters */}
        <ServiceCalloutGlassSection
          id="seo-callout"
          title="ليش السيو يهمك؟"
          description="زيارات مستمرة من جوجل، ومن غير ما تدفع مقابل كل زيارة عميل جديد.. أي متجر أو موقع محتاج فهم دقيق لمجاله ومنافسيه قبل لا تحرك خطوة، ومن هنا نبني خطة توصلك لجمهورك الحقيقي، تزيد زياراتك، وتكبر مبيعاتك وياها."
          buttonText="ابدأ مع كاف الآن"
          buttonHref="#contact"
        />

        {/* Reusable Strategy Accordion Section */}
        <ServiceStrategyAccordionSection
          id="seo-strategy"
          title="وش هي استراتيجية كاف للسيو؟"
          items={seoStrategyStepsData}
          allowMultiple={true}
        />

        {/* Reusable 4-Card Feature Grid Section */}
        <ServiceFeatureCardsSection
          id="seo-cards"
          title="كيف تساعدك خدمة السيو؟"
          cards={seoFeatureCardsData}
        />

        {/* Consultation Glass CTA Section */}
        <ServiceGlassCTASection
          id="seo-consultation"
          title="جاهز تفتح الباب؟"
          description="باب الظهور اللي كنا نتكلم عنه، وبدء استراتيجية السيو، واضغط تبدأ نفهم موقعك ونبني استراتيجية لزيادة مبيعاتك."
          buttonText="اطلب استشارة مجانية الحين"
          buttonHref="#contact"
        />

        {/* Reusable FAQ Accordion Section */}
        <ServiceFAQSection
          id="seo-faq"
          title="الأسئلة الشائعة"
          items={seoFaqItemsData}
          allowMultiple={true}
        />
      </main>
    </div>
  );
}
