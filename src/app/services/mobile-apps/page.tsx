import { Navbar } from "@/components/layout/Navbar";
import { PageHeroSection } from "@/components/ui/PageHeroSection";
import { ServiceDetailFeatureSection } from "@/components/sections/ServiceDetailFeatureSection";
import { ServiceCalloutGlassSection } from "@/components/sections/ServiceCalloutGlassSection";
import { ServiceStrategyAccordionSection } from "@/components/sections/ServiceStrategyAccordionSection";
import { ServiceFeatureCardsSection, FeatureCardData } from "@/components/sections/ServiceFeatureCardsSection";
import { ServiceGlassCTASection } from "@/components/sections/ServiceGlassCTASection";
import { ServiceFAQSection } from "@/components/sections/ServiceFAQSection";

export const metadata = {
  title: "تطبيقات الموبايل - تصميم وتطوير التطبيقات | كاف - KAAF",
  description: "غير من نمط خدمتك لعملائك! نطور تطبيقات تربط العميل بعلامتك، تسهل عليه الوصول لخدماتك، وتتحول التجربة إلى فرصة بيع وولاء مستمر.",
};

const mobileAppsStrategyStepsData = [
  {
    id: "idea-and-target-study",
    number: "01",
    title: "دراسة الفكرة والمستهدف",
    content: "نفهم هدف تطبيقك، واحتياج عميلك، ونحدد المسار الأنسب.",
    defaultOpen: true,
  },
  {
    id: "ui-ux-design",
    number: "02",
    title: "تصميم تجربة المستخدم (UI/UX)",
    content: "تصميمات سلسة وسهلة وتناسب نمط استخدام عميلك للجوال.",
    defaultOpen: true,
  },
  {
    id: "app-development-ios-android",
    number: "03",
    title: "تطوير التطبيق (iOS & Android)",
    content: "برمجة التطبيق بكفاءة عالية وأداء يتوافق مع كل الأجهزة.",
    defaultOpen: true,
  },
  {
    id: "backend-integration",
    number: "04",
    title: "ربط التطبيق بالأنظمة الخلفية",
    content: "نوصل تطبيقك بقواعد البيانات والأنظمة التي تحتاجها ليعمل بمرونة.",
    defaultOpen: true,
  },
  {
    id: "quality-testing",
    number: "05",
    title: "اختبار الجودة",
    content: "نفحص كل ميزة قبل الإطلاق عشان نضمن تجربة سريعة بدون مشاكل.",
    defaultOpen: true,
  },
  {
    id: "publishing-and-support",
    number: "06",
    title: "النشر والدعم الفني",
    content: "ننشر تطبيقك على المتاجر، وندعمك في أي تحديث تحتاجه.",
    defaultOpen: true,
  },
];

const mobileAppsFeatureCardsData: FeatureCardData[] = [
  {
    id: "mobile-card-1",
    image: "/mobile-card-1.png",
    alt: "حضور دائم في جيب عميلك",
    title: "حضور دائم في جيب عميلك",
    description: "تطبيقك شغال ومتاح 24/7 على جواله، ويقربك منه في كل لحظة.",
  },
  {
    id: "mobile-card-2",
    image: "/mobile-card-2.png",
    alt: "تجربة أسرع من الموقع",
    title: "تجربة أسرع من الموقع",
    description: "التطبيق يوفر أداء سلس وسرعة استجابة تحفز العميل يشتري أسهل.",
  },
  {
    id: "mobile-card-3",
    image: "/mobile-card-3.png",
    alt: "تواصل مباشر عبر الإشعارات",
    title: "تواصل مباشر عبر الإشعارات",
    description: "تبلغ عميلك بالعروض والمنتجات الجديدة مباشرة وبدون تكلفة إعلانية.",
  },
  {
    id: "mobile-card-4",
    image: "/mobile-card-4.png",
    alt: "ولاء عملاء أعلى",
    title: "ولاء عملاء أعلى",
    description: "العميل اللي يثبت تطبيقك هو عميل جاهز يكرر الشراء ويثق فيك.",
  },
];

const mobileAppsFaqItemsData = [
  {
    id: "faq-mobile-duration",
    title: "كم المدة التي تحتاجها لتطوير تطبيق موبايل؟",
    content: "تختلف المدة حسب حجم التطبيق ومميزاته، ونحدد لك جدولاً زمنياً دقيقاً بعد دراسة متطلبات مشروعك.",
  },
  {
    id: "faq-mobile-cross-platform",
    title: "هل تطورون لأنظمة الأندرويد والآيفون مع بعض؟",
    content: "نعم، نقوم بتطوير تطبيقات تعمل على كلا النظامين بأعلى كفاءة وسرعة.",
  },
  {
    id: "faq-mobile-maintenance",
    title: "هل التطبيق يحتاج صيانة بعد الإطلاق؟",
    content: "نعم، نوفر لك باقات دعم وصيانة مستمرة لضمان عمل التطبيق بدون أي مشاكل ومواكبة التحديثات.",
  },
  {
    id: "faq-mobile-suitable",
    title: "هل تطبيق الموبايل مناسب لكل نوع أعمال؟",
    content: "يعتمد على طبيعة نشاطك وحجم تفاعل عملائك، ونساعدك في تقييم مدى جدوى التطبيق لنمو أعمالك.",
  },
];

export default function MobileAppsServicePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        {/* Hero Section */}
        <PageHeroSection
          id="mobile-apps-hero"
          title="تطبيقات الموبايل"
          bgImage="/mobile-banner1.png"
          bgImageAlt="خدمة تطوير تطبيقات الموبايل - خلفية كاف"
          breadcrumbLabel="تطبيقات الموبايل"
          parentBreadcrumb={{
            label: "خدماتنا",
            href: "/services",
          }}
          buttonText="ابدأ معنا الان"
          buttonHref="#contact"
          size="compact"
        />

        {/* Feature Section: Transform your customer service */}
        <ServiceDetailFeatureSection
          id="mobile-apps-feature"
          title="غير من نمط خدمتك لعملائك!"
          description="عميلك يقضي ساعات على جواله، وأقرب طريق له إنك تكون في جيبه بضغطة زر.. في كاف، خدمة تطوير تطبيقات الموبايل تصمم وتبرمج لتتحول رحلة العميل لتجربة ولاء مستمر لا مجرد عملية شراء وانتهت."
          imageSrc="/mobile-apps-section-image.png"
          imageAlt="تطوير تطبيقات الموبايل وتحويل رحلة العميل لتجربة ولاء مستمرة"
          imagePosition="left"
        />

        {/* Callout Glass Section: Why Mobile App matters */}
        <ServiceCalloutGlassSection
          id="mobile-apps-callout"
          title="ليش تطبيق الموبايل يهمك؟"
          description="عميلك ما يفتح المتصفح كل مرة يحتاجك فيها، هو يفتح تطبيقات مثبتة عنده. وجودك بتطبيق يختصر له الطريق، ويخليك أقرب له من أي منافس يعتمد على البحث أو الإعلانات بس."
          buttonText="ابدأ مع كاف الآن"
          buttonHref="#contact"
        />

        {/* Reusable Strategy Accordion Section */}
        <ServiceStrategyAccordionSection
          id="mobile-apps-strategy"
          title="وش نسوي في تطوير تطبيقات الموبايل؟"
          items={mobileAppsStrategyStepsData}
          allowMultiple={true}
        />

        {/* Reusable 4-Card Feature Grid Section */}
        <ServiceFeatureCardsSection
          id="mobile-apps-cards"
          title="كيف يساعدك تطبيق الموبايل؟"
          cards={mobileAppsFeatureCardsData}
        />

        {/* Consultation Glass CTA Section */}
        <ServiceGlassCTASection
          id="mobile-apps-consultation"
          title="جاهز تكون في جيب عميلك؟"
          description="براندك ما يحتاج يبقى بس في الذاكرة، خليه في يده وفي كل لحظة يحتاجه فيها بضغطة زر واحدة."
          buttonText="اطلب استشارة مجانية الحين"
          buttonHref="#contact"
        />

        {/* Reusable FAQ Accordion Section */}
        <ServiceFAQSection
          id="mobile-apps-faq"
          title="الأسئلة الشائعة"
          items={mobileAppsFaqItemsData}
          allowMultiple={true}
        />
      </main>
    </div>
  );
}
