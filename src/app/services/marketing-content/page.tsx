import { Navbar } from "@/components/layout/Navbar";
import { PageHeroSection } from "@/components/ui/PageHeroSection";
import { ServiceDetailFeatureSection } from "@/components/sections/ServiceDetailFeatureSection";
import { ServiceCalloutGlassSection } from "@/components/sections/ServiceCalloutGlassSection";
import { ServiceStrategyAccordionSection } from "@/components/sections/ServiceStrategyAccordionSection";
import { ServiceGlassCTASection } from "@/components/sections/ServiceGlassCTASection";
import { ServiceFAQSection } from "@/components/sections/ServiceFAQSection";

export const metadata = {
  title: "المحتوى التسويقي | كاف - KAAF",
  description: "70% من قرارات الشراء تتحدد قبل ما العميل يكلمك! المحتوى الزين مو اللي ينقال، هو اللي يوصل ويضل عالق في دماغ العميل.. في كاف الكونتنت ماركتنج عندنا خطة متكاملة تحوّل كلامك لعلاقة، وعلاقتك لمبيعات.",
};

const strategyStepsData = [
  {
    id: "audience-research",
    number: "01",
    title: "دراسة الجمهور المستهدف",
    content: "نفهم من عميلك، وش همومه، وين يقضي وقته أونلاين",
    defaultOpen: true,
  },
  {
    id: "strategy-building",
    number: "02",
    title: "بناء استراتيجية المحتوى",
    content: "نحدد المحاور والمنصات والتوقيت اللي يحقق أعلى تفاعل",
    defaultOpen: true,
  },
  {
    id: "content-creation",
    number: "03",
    title: "كتابة المحتوى",
    content: "ننتج محتوى مكتوب وموائم يعكس صوت براندك بأسلوب يميزك",
    defaultOpen: true,
  },
  {
    id: "publishing-calendar",
    number: "04",
    title: "تقويم النشر",
    content: "نجدول المحتوى بانتظام عشان جمهورك يعرف متى يتوقع منك جديد",
    defaultOpen: true,
  },
  {
    id: "performance-measurement",
    number: "05",
    title: "قياس الأداء",
    content: "نتابع التفاعل والنتائج ونعدل الخطة على أساس بيانات حقيقية",
    defaultOpen: true,
  },
  {
    id: "continuous-improvement",
    number: "06",
    title: "تحسين مستمر",
    content: "نطور المحتوى باستمرار حسب اللي يشتغل فعلياً مع جمهورك",
    defaultOpen: true,
  },
];

const faqItemsData = [
  {
    id: "faq-what-is-marketing-content",
    title: "وش هي خدمة الكونتنت ماركتنج؟",
    content: "خدمة نخطط فيها وننتج محتوى تسويقي قيم وهادف يبني علاقة ثقة بين علامتك التجارية وجمهورك، ويوجههم تدريجياً نحو اتخاذ قرار الشراء.",
  },
  {
    id: "faq-suitable-for-any-field",
    title: "هل الكونتنت ماركتنج يناسب أي مجال؟",
    content: "نعم، المحتوى التسويقي يناسب مختلف المجالات والأنشطة التجارية، لأن أي عمل يحتاج إلى التواصل الفعّال وبناء الثقة مع عملائه المستهدفين.",
  },
  {
    id: "faq-duration-for-results",
    title: "كم المدة اللي تحتاجها نتائج الكونتنت ماركتنج؟",
    content: "المحتوى التسويقي استثمار متوسط إلى طويل الأجل، وتبدأ النتائج الملموسة في الظهور عادةً خلال 3 إلى 6 أشهر من التطوير والاستمرارية في النشر.",
  },
  {
    id: "faq-diff-paid-ads",
    title: "وش الفرق بين الكونتنت ماركتنج والإعلانات المدفوعة؟",
    content: "الإعلانات المدفوعة تمنحك نتائج سريعة ومؤقتة عند دفع الميزانية، بينما المحتوى التسويقي يبني أصولاً مستدامة وعلاقة طويلة الأمد تواصل جذب العملاء حتى بدون إعلانات.",
  },
];

export default function MarketingContentServicePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        {/* Hero Section */}
        <PageHeroSection
          id="marketing-content-hero"
          title="المحتوى التسويقي"
          bgImage="/marketing-content-detail.png"
          bgImageAlt="المحتوى التسويقي - خلفية كاف"
          breadcrumbLabel="المحتوى التسويقي"
          parentBreadcrumb={{
            label: "خدماتنا",
            href: "/services",
          }}
          buttonText="ابدأ معنا الان"
          buttonHref="#contact"
          size="compact"
        />

        {/* Feature Section: 70% of purchase decisions */}
        <ServiceDetailFeatureSection
          id="marketing-content-feature"
          title="70% من قرارات الشراء تتحدد قبل ما العميل يكلمك!"
          description="المحتوى الزين مو اللي ينقال، هو اللي يوصل ويضل عالق في دماغ العميل.. في كاف الكونتنت ماركتنج عندنا خطة متكاملة تحوّل كلامك لعلاقة، وعلاقتك لمبيعات."
          imageSrc="/marketing-content-hero.png"
          imageAlt="عمل وتخطيط استراتيجية المحتوى التسويقي"
          imagePosition="left"
        />

        {/* Callout Glass Card Section: Why marketing content matters */}
        <ServiceCalloutGlassSection
          id="marketing-content-callout"
          title="ليش يهمك المحتوى التسويقي؟"
          description="عميلك اليوم ما يشتري من أول إعلان يشوفه، هو يتابع، يقارن، ويثق قبل لا يقرر.. لذلك المحتوى هو اللي يبني هالثقة خطوة بخطوة، فيتحول المتابع لعميل، والعميل لمروّج لبراندك بدون ما تطلب منه."
          buttonText="ابدأ مع كاف الآن"
          buttonHref="#contact"
        />

        {/* Reusable Strategy Accordion Section */}
        <ServiceStrategyAccordionSection
          id="marketing-content-strategy"
          title="وش هي استراتيجية كاف للكونتنت ماركتنج؟"
          items={strategyStepsData}
          allowMultiple={true}
        />

        {/* Consultation Glass CTA Section */}
        <ServiceGlassCTASection
          id="marketing-content-consultation"
          title="جاهز يسمعوك صح؟"
          description="صوت براندك مو بس كلام هو استراتيجية محتوى تخلي كل منشور يقرب عميلك خطوة من قرار الشراء"
          buttonText="اطلب استشارة مجانية الحين"
          buttonHref="#contact"
        />

        {/* Reusable FAQ Accordion Section */}
        <ServiceFAQSection
          id="marketing-content-faq"
          title="الأسئلة الشائعة"
          items={faqItemsData}
          allowMultiple={true}
        />
      </main>
    </div>
  );
}

