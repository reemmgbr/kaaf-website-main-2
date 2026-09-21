import { Navbar } from "@/components/layout/Navbar";
import { PageHeroSection } from "@/components/ui/PageHeroSection";
import { ServiceDetailFeatureSection } from "@/components/sections/ServiceDetailFeatureSection";
import { ServiceCalloutGlassSection } from "@/components/sections/ServiceCalloutGlassSection";
import { ServiceStrategyAccordionSection } from "@/components/sections/ServiceStrategyAccordionSection";
import { ServiceFeatureCardsSection, FeatureCardData } from "@/components/sections/ServiceFeatureCardsSection";
import { ServiceGlassCTASection } from "@/components/sections/ServiceGlassCTASection";
import { ServiceFAQSection } from "@/components/sections/ServiceFAQSection";

export const metadata = {
  title: "ميديا باينج - الحملات الإعلانية المدفوعة | كاف - KAAF",
  description: "ميزانيتك تستاهل خطة، مو تخمين! ندير حملاتك الإعلانية باستراتيجية مبنية على بيانات لضمان وصولك للعميل الصحيح وتحقيق أعلى عائد استثماري.",
};

const mediaBuyingStrategyStepsData = [
  {
    id: "precise-targeting",
    number: "01",
    title: "استهداف دقيق للجمهور",
    content: "نوصلك للعملاء اللي فعلاً يحتاجون من تفاعلك، مو مجرد مشاهدات.",
    defaultOpen: true,
  },
  {
    id: "budget-distribution",
    number: "02",
    title: "توزيع الميزانية على الأدوات الصح",
    content: "نحدد أفضل منصة تعطي أعلى عائد حسب طبيعة نشاطك.",
    defaultOpen: true,
  },
  {
    id: "ab-testing",
    number: "03",
    title: "اختبار (A/B Testing)",
    content: "نجرب أكثر من نسخة إعلانية عشان نوصل للأفضل أداءً.",
    defaultOpen: true,
  },
  {
    id: "continuous-optimization",
    number: "04",
    title: "تحسين مستمر لأداء الحملة",
    content: "نراقب الأداء يومياً ونعدل الاستهداف والميزانية أول بأول.",
    defaultOpen: true,
  },
  {
    id: "post-production-editing",
    number: "05",
    title: "مونتاج وما بعد الإنتاج",
    content: "ندير ميزانيتك باحترافية وتوجيه دائم حتى تحقق نتائج حقيقية.",
    defaultOpen: true,
  },
  {
    id: "clear-performance-reports",
    number: "06",
    title: "تقارير أداء واضحة",
    content: "نعرض لك بالضبط أين راح كل ريال وش جاب لك مقابل كل ميزانية.",
    defaultOpen: true,
  },
  {
    id: "customer-funnel-optimization",
    number: "07",
    title: "تحسين رحلة الشراء للعميل",
    content: "نقلل الهدر ونركز على القنوات اللي تجيب لك عملاء جاهزين.",
    defaultOpen: true,
  },
];

const mediaBuyingFeatureCardsData: FeatureCardData[] = [
  {
    id: "media-buying-card-1",
    image: "/media-buying-card-1.png",
    alt: "صرف أقل، نتائج أكبر",
    title: "صرف أقل، نتائج أكبر",
    description: "ميزانيتك تروح لإعلان باستراتيجية محسوبة بدل ما تروح عشوائياً.",
  },
  {
    id: "media-buying-card-2",
    image: "/media-buying-card-2.png",
    alt: "وصول للعميل الصح",
    title: "وصول للعميل الصح",
    description: "استهداف بالظبط اللي ينتمي لمنتجك مو أي حد وخلاص.",
  },
  {
    id: "media-buying-card-3",
    image: "/media-buying-card-3.png",
    alt: "قرارات مبنية على أرقام",
    title: "قرارات مبنية على أرقام",
    description: "كل تعديل في الحملة يجي من بيانات حقيقية مو حدس.",
  },
  {
    id: "media-buying-card-4",
    image: "/media-buying-card-4.png",
    alt: "نمو قابل للقياس",
    title: "نمو قابل للقياس",
    description: "تقدر تشوف كل ريال يصرف والنتائج بشكل واضح.",
  },
];

const mediaBuyingFaqItemsData = [
  {
    id: "faq-what-is-media-buying",
    title: "وش هي خدمة الميديا باينج؟",
    content: "خدمة تخطيط وإدارة ومتابعة الحملات الإعلانية المدفوعة على مختلف المنصات الرقمية لضمان تحقيق أعلى عائد على الاستثمار.",
  },
  {
    id: "faq-diff-social-media",
    title: "هل الميديا باينج تختلف عن إدارة السوشيال ميديا؟",
    content: "نعم، إدارة السوشيال ميديا تركز على التواجد اليومي والمحتوى العادي، بينما الميديا باينج يركز على الحملات المأجورة والميزانيات الموجهة للمبيعات.",
  },
  {
    id: "faq-appropriate-budget",
    title: "كم الميزانية المناسبة لبدء الحملات؟",
    content: "تختلف الميزانية حسب هدف الحملة والمنصة والمجال، ونحدد الميزانية الأمثل بعد تحليل نشاطك التجاري.",
  },
  {
    id: "faq-ad-campaign-success",
    title: "كيف أعرف إن الحملة الإعلانية ناجحة؟",
    content: "عن طريق متابعة تقارير الأداء التفصيلية، قياس عدد المبيعات أو التفاعلات المحققة، ومقارنتها بتكلفة الوصول والتكلفة لكل عميل.",
  },
];

export default function MediaBuyingServicePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        {/* Hero Section */}
        <PageHeroSection
          id="media-buying-hero"
          title="ميديا باينج"
          bgImage="/media-buying-banner.png"
          bgImageAlt="خدمة ميديا باينج - خلفية كاف"
          breadcrumbLabel="ميديا باينج"
          parentBreadcrumb={{
            label: "خدماتنا",
            href: "/services",
          }}
          buttonText="ابدأ معنا الان"
          buttonHref="#contact"
          size="compact"
        />

        {/* Feature Section: Budget deserves a plan */}
        <ServiceDetailFeatureSection
          id="media-buying-feature"
          title="ميزانيتك تستاهل خطة، مو تخمين!"
          description="كل ريال تصرفه في الإعلانات إما يكون استثمار يعمل لكاسبك، أو يضيع بدون نتيجة.. في كاف، خدمة الميديا باينج تدير ميزانيتك الإعلانية باستراتيجية مبنية على بيانات عشان كل حملة تكون محسوبة وترجع لك بنتيجة."
          imageSrc="/media-buying-section-image.png"
          imageAlt="إدارة ميزانيتك الإعلانية باستراتيجية واضحة"
          imagePosition="left"
        />

        {/* Callout Glass Section: Why our Media Buying is different */}
        <ServiceCalloutGlassSection
          id="media-buying-callout"
          title="ليش الميديا باينج عندنا مختلف؟"
          description="كثير من البراندات تصرف ميزانيات كبيرة على إعلانات ما توصل للجمهور الصح، فتضيع الفلوس بدون نتيجة تذكر.. والفرق بين إعلان ناجح وإعلان يستهلك ميزانيتك مو حجم الصرف، هو دقة الاستهداف وذكاء الإدارة."
          buttonText="ابدأ مع كاف الآن"
          buttonHref="#contact"
        />

        {/* Reusable Strategy Accordion Section */}
        <ServiceStrategyAccordionSection
          id="media-buying-strategy"
          title="وش نسوي في الميديا باينج؟"
          items={mediaBuyingStrategyStepsData}
          allowMultiple={true}
        />

        {/* Reusable 4-Card Feature Grid Section */}
        <ServiceFeatureCardsSection
          id="media-buying-cards"
          title="كيف تساعدك الميديا باينج؟"
          cards={mediaBuyingFeatureCardsData}
        />

        {/* Consultation Glass CTA Section */}
        <ServiceGlassCTASection
          id="media-buying-consultation"
          title="جاهز تخلي ميزانيتك تشتغل لك؟"
          description="الميزانية اللي كانت تروح عشوائياً تصير خطة محسوبة توصلك للعميل الصح بأقل تكلفة وأعلى عائد."
          buttonText="اطلب استشارة مجانية الحين"
          buttonHref="#contact"
        />

        {/* Reusable FAQ Accordion Section */}
        <ServiceFAQSection
          id="media-buying-faq"
          title="الأسئلة الشائعة"
          items={mediaBuyingFaqItemsData}
          allowMultiple={true}
        />
      </main>
    </div>
  );
}
