import { Navbar } from "@/components/layout/Navbar";
import { PageHeroSection } from "@/components/ui/PageHeroSection";
import { ServiceDetailFeatureSection } from "@/components/sections/ServiceDetailFeatureSection";
import { ServiceCalloutGlassSection } from "@/components/sections/ServiceCalloutGlassSection";
import { ServiceStrategyAccordionSection } from "@/components/sections/ServiceStrategyAccordionSection";
import { ServiceFeatureCardsSection, FeatureCardData } from "@/components/sections/ServiceFeatureCardsSection";
import { ServiceGlassCTASection } from "@/components/sections/ServiceGlassCTASection";
import { ServiceFAQSection } from "@/components/sections/ServiceFAQSection";

export const metadata = {
  title: "إدارة محتوى وسائل التواصل الاجتماعي | كاف - KAAF",
  description: "انت دايم حاضر، فاهم! نبني تواصلاً يومياً يخلي علامتك قريبة من جمهورك، حاضرة في باله، وجديرة بثقته، مع خطة متكاملة تزيد التفاعل والمبيعات.",
};

const socialStrategyStepsData = [
  {
    id: "presence-strategy",
    number: "01",
    title: "استراتيجية التواجد",
    content: "نحدد المحاور والمنصات اللي تخدم أهدافك وتوصلك لجمهورك.",
    defaultOpen: true,
  },
  {
    id: "organized-publishing-calendar",
    number: "02",
    title: "تقويم نشر منظم",
    content: "جدولة بوستات منتظمة تضمن حضورك دائماً بدون انقطاع.",
    defaultOpen: true,
  },
  {
    id: "content-design-and-copywriting",
    number: "03",
    title: "تصميم وكتابة المحتوى",
    content: "نبتكر بوستات وتصاميم تعكس هوية براندك وتلفت الانتباه.",
    defaultOpen: true,
  },
  {
    id: "engagement-management",
    number: "04",
    title: "إدارة التفاعل",
    content: "نرد على تعليقات ورسائل متابعينك بطريقة تزيد ثقتهم وتقربهم منك.",
    defaultOpen: true,
  },
  {
    id: "trend-monitoring",
    number: "05",
    title: "متابعة التريندات",
    content: "نوظف التريندات المناسبة لبراندك عشان نزيد تفاعل جمهورك.",
    defaultOpen: true,
  },
  {
    id: "monthly-reports",
    number: "06",
    title: "تقارير شهرية",
    content: "نرصد بالأرقام تطور التفاعل ونحسن الأداء خطوة بخطوة.",
    defaultOpen: true,
  },
];

const socialFeatureCardsData: FeatureCardData[] = [
  {
    id: "social-card-1",
    image: "/social-card-1.png",
    alt: "حضور مستمر بدون غياب منقطع",
    title: "حضور مستمر بدون غياب منقطع",
    description: "جمهورك يشوفك بانتظام وتبقى دايم في باله بدون فترات ركود.",
  },
  {
    id: "social-card-2",
    image: "/social-card-2.png",
    alt: "صورة احترافية موحدة",
    title: "صورة احترافية موحدة",
    description: "كل بوست يعكس قيم براندك ويزيد ثقة العميل فيك ويوضح هويتك.",
  },
  {
    id: "social-card-3",
    image: "/social-card-3.png",
    alt: "علاقة أقرب مع جمهورك",
    title: "علاقة أقرب مع جمهورك",
    description: "التفاعل المستمر يحول المتابع العادي لمستهلك وفي لبراندك.",
  },
  {
    id: "social-card-4",
    image: "/social-card-4.png",
    alt: "قرارات مبنية على أداء فعلي",
    title: "قرارات مبنية على أداء فعلي",
    description: "نعرف بالضبط وش المحتوى اللي يشتغل ونركز على اللي يجيب نتيجة.",
  },
];

const socialFaqItemsData = [
  {
    id: "faq-social-scope",
    title: "وش تشمل خدمة إدارة السوشيال ميديا؟",
    content: "تشمل إعداد استراتيجية المحتوى، تصميم وكتابة البوستات، جدولتها، وإدارة الردود والتفاعل، ومتابعة الأداء بشكل شهري ودوري.",
  },
  {
    id: "faq-social-platforms-count",
    title: "كم منصة تقدرون تديرون في نفس الوقت؟",
    content: "ندير جميع المنصات الرئيسية مثل إنستغرام، تيك توك، إكس، وسناب شات حسب تواجد جمهورك المستهدف.",
  },
  {
    id: "faq-social-review-before-publish",
    title: "هل يراجعني الفريق في المحتوى قبل النشر؟",
    content: "نعم، يتم مشاركة خطة وتقويم المحتوى والتصاميم معك لاعتمادها قبل موعد النشر بوقت كافٍ.",
  },
  {
    id: "faq-social-measure-success",
    title: "كيف أقيس نجاح إدارة السوشيال ميديا؟",
    content: "من خلال تقارير دورية توضح لك نمو المتابعين، معدل التفاعل، والوصول الفعلي لحساباتك.",
  },
];

export default function SocialManagementServicePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        {/* Hero Section */}
        <PageHeroSection
          id="social-management-hero"
          title="إدارة محتوى وسائل التواصل"
          bgImage="/social-media-banner.png"
          bgImageAlt="خدمة إدارة محتوى وسائل التواصل الاجتماعي - خلفية كاف"
          breadcrumbLabel="إدارة محتوى وسائل التواصل"
          parentBreadcrumb={{
            label: "خدماتنا",
            href: "/services",
          }}
          buttonText="ابدأ معنا الان"
          buttonHref="#contact"
          size="compact"
        />

        {/* Feature Section: Always Present */}
        <ServiceDetailFeatureSection
          id="social-management-feature"
          title="انت دايم حاضر، فاهم!"
          description="عميلك يقضي ساعات يسكرول بين البوستات، وأول براند يمسك باله بأسلوبه ومحتواه هو أول خيار في باله.. في كاف، خدمة إدارة وسائل التواصل تبني علاقة يومية تخلي براندك حاضر ومسموع وتولد مبيعات وتفاعل مستمر وياك."
          imageSrc="/social-media-section-image.png"
          imageAlt="إدارة وسائل التواصل وبناء حضور يومي مستمر لعلامتك التجارية"
          imagePosition="left"
        />

        {/* Callout Glass Section: Why Social Media Management matters */}
        <ServiceCalloutGlassSection
          id="social-management-callout"
          title="ليش إدارة محتوى وسائل التواصل يهمك؟"
          description="منصات التواصل صارت أول مكان يتعرف فيه عميلك على براندك، وأول مكان يحكم فيه عليك.. حضور غير منتظم أو محتوى بلا استراتيجية يخليك تختفي وسط الزحمة، بينما صانعك اللي يدير حضوره صح يضل حاضر في ذهن الجمهور."
          buttonText="ابدأ مع كاف الآن"
          buttonHref="#contact"
        />

        {/* Reusable Strategy Accordion Section */}
        <ServiceStrategyAccordionSection
          id="social-management-strategy"
          title="وش نسوي في إدارة منصات التواصل؟"
          items={socialStrategyStepsData}
          allowMultiple={true}
        />

        {/* Reusable 4-Card Feature Grid Section */}
        <ServiceFeatureCardsSection
          id="social-management-cards"
          title="كيف تساعدك إدارة السوشيال ميديا؟"
          cards={socialFeatureCardsData}
        />

        {/* Consultation Glass CTA Section */}
        <ServiceGlassCTASection
          id="social-management-consultation"
          title="جاهز يشوفوك صح؟"
          description="جمهورك موجود على السوشيال ميديا كل يوم، والسؤال مو هل تكون حاضر، السؤال كيف تكون حاضر بطريقة تخليهم يختاروك."
          buttonText="اطلب استشارة مجانية الحين"
          buttonHref="#contact"
        />

        {/* Reusable FAQ Accordion Section */}
        <ServiceFAQSection
          id="social-management-faq"
          title="الأسئلة الشائعة"
          items={socialFaqItemsData}
          allowMultiple={true}
        />
      </main>
    </div>
  );
}
