import { Navbar } from "@/components/layout/Navbar";
import { PageHeroSection } from "@/components/ui/PageHeroSection";
import { ServiceDetailFeatureSection } from "@/components/sections/ServiceDetailFeatureSection";
import { ServiceCalloutGlassSection } from "@/components/sections/ServiceCalloutGlassSection";
import { ServiceStrategyAccordionSection } from "@/components/sections/ServiceStrategyAccordionSection";
import { ServiceFeatureCardsSection, FeatureCardData } from "@/components/sections/ServiceFeatureCardsSection";
import { ServiceGlassCTASection } from "@/components/sections/ServiceGlassCTASection";
import { ServiceFAQSection } from "@/components/sections/ServiceFAQSection";

export const metadata = {
  title: "الإنفلونسر ماركتنج - التسويق عبر المؤثرين | كاف - KAAF",
  description: "جمهوره يثق فيه، وثقته هدية لبراندك! نوصل رسالتك من خلال المؤثر المناسب، أمام الجمهور المناسب، بطريقة تحافظ على مصداقية البراند وتحقق أعلى عائد.",
};

const influencerStrategyStepsData = [
  {
    id: "choose-influencers",
    number: "01",
    title: "اختيار المؤثرين المناسبين",
    content: "نطابق بين قيم براندك وجمهور المؤثر عشان التعاون يكون طبيعي مو مفروض.",
    defaultOpen: true,
  },
  {
    id: "negotiation-coordination",
    number: "02",
    title: "التفاوض والتنسيق الكامل",
    content: "ندير كل التفاصيل المالية واللوجستية من الألف للياء بدون ما تشيل هم.",
    defaultOpen: true,
  },
  {
    id: "content-guidance",
    number: "03",
    title: "توجيه المحتوى",
    content: "نوجه المؤثر بما يخدم رسالتك مع الحفاظ على أسلوبه الطبيعي.",
    defaultOpen: true,
  },
  {
    id: "campaign-monitoring",
    number: "04",
    title: "متابعة الحملة لحظة بلحظة",
    content: "نراقب الإحصاءات لايف ونتدخل لو احتجنا لأي تعديل.",
    defaultOpen: true,
  },
  {
    id: "result-measurement",
    number: "05",
    title: "قياس النتائج",
    content: "نحلل أداء الوصول، والتفاعل، والمردود الفعلي من كل استهداف.",
    defaultOpen: true,
  },
  {
    id: "long-term-relationships",
    number: "06",
    title: "بناء علاقات طويلة المدى",
    content: "ننسق تعاونات مستمرة مع مؤثرين يصيرون امتداد طبيعي لبراندك.",
    defaultOpen: true,
  },
];

const influencerFeatureCardsData: FeatureCardData[] = [
  {
    id: "influencer-card-1",
    image: "/influencer-card-1.png",
    alt: "ثقة أسرع من أي إعلان",
    title: "ثقة أسرع من أي إعلان",
    description: "توصية من صوت موثوق تختصر عليك مراحل بناء الثقة.",
  },
  {
    id: "influencer-card-2",
    image: "/influencer-card-2.png",
    alt: "وصول لجمهور جاهز",
    title: "وصول لجمهور جاهز",
    description: "جمهور المؤثر متواجد أصلاً ومستعد للرسالة، فيصل إعلانك مسرع.",
  },
  {
    id: "influencer-card-3",
    image: "/influencer-card-3.png",
    alt: "محتوى يحس طبيعي",
    title: "محتوى يحس طبيعي",
    description: "التوصية توصل للمستهلك كأنها حل مو إعلان تقليدي ثقيل.",
  },
  {
    id: "influencer-card-4",
    image: "/influencer-card-4.png",
    alt: "نتائج ملموسة وقابلة للقياس",
    title: "نتائج ملموسة وقابلة للقياس",
    description: "تعرف بالضبط كم تفاعل وكم تحويل جاك من كل مؤثر.",
  },
];

const influencerFaqItemsData = [
  {
    id: "faq-what-is-influencer-marketing",
    title: "وش هي خدمة الإنفلونسر ماركتنج؟",
    content: "خدمة نربط فيها علامتك التجارية بالمؤثرين المناسبين لجمهورك المستهدف، مع إدارة كامل الحملة من اختيار المؤثر وصياغة الفكرة وتوجيه المحتوى وحتى قياس العائد والنتائج.",
  },
  {
    id: "faq-how-to-choose-influencer",
    title: "كيف تختارون المؤثر المناسب لبراندي؟",
    content: "نحلل ديموغرافية جمهور المؤثر، نسبة التفاعل الحقيقية، مدى ملاءمة محتواه وقيمه مع هويتك التجارية، لضمان أن التوصية تظهر بشكل طبيعي ومقنع للجمهور.",
  },
  {
    id: "faq-one-time-or-ongoing",
    title: "هل التعاون يكون مرة واحدة أو مستمر؟",
    content: "نقدم الخيارين حسب أهدافك؛ سواء حملات ترويجية فردية لإطلاق منتج أو عروض محددة، أو شراكات مستمرة طويلة الأجل تجعل المؤثر سفيراً لعلامتك التجارية.",
  },
  {
    id: "faq-measure-campaign-success",
    title: "كيف أقيس نجاح حملة الإنفلونسر ماركتنج؟",
    content: "عن طريق تقارير دقيقة توضح حجم الوصول، معدل التفاعل، عدد النقرات والزيارات عبر روابط التتبع المخصصة وأكواد الخصم، والمبيعات المباشرة المحققة من كل مؤثر.",
  },
];

export default function InfluencerMarketingServicePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        {/* Hero Section */}
        <PageHeroSection
          id="influencer-hero"
          title="الإنفلونسر ماركتنج"
          bgImage="/influencer-banner1.png"
          bgImageAlt="خدمة الإنفلونسر ماركتنج - خلفية كاف"
          breadcrumbLabel="الإنفلونسر ماركتنج"
          parentBreadcrumb={{
            label: "خدماتنا",
            href: "/services",
          }}
          buttonText="ابدأ معنا الان"
          buttonHref="#contact"
          size="compact"
        />

        {/* Feature Section: Audience trusts them */}
        <ServiceDetailFeatureSection
          id="influencer-feature"
          title="جمهوره يثق فيه، وثقته هدية لبراندك!"
          description="عميلك ما يثق في إعلاناتك كثر ما يثق في شخص يتابعه ويهتم برأيه.. في كاف، خدمة الإنفلونسر ماركتنج تربطك بالصوت الصح اللي يوصل رسالتك لجمهور جاهز يسمع ويثق."
          imageSrc="/influencer-section-image.png"
          imageAlt="خدمة التسويق عبر المؤثرين والوصول للجمهور الموثوق"
          imagePosition="left"
        />

        {/* Callout Glass Section: Why Influencer Marketing matters */}
        <ServiceCalloutGlassSection
          id="influencer-callout"
          title="ليش الإنفلونسر ماركتنج يهمك؟"
          description="الناس تمل من الإعلانات المباشرة بسرعة، لكن توصية من شخص يتابعونه تلمس فيهم شيء مختلف. المؤثر الصح ما يبيع منتجك بس، هو يغذيه من جمهوره بثقة ما تقدر تشتريها بإعلانات عادي."
          buttonText="ابدأ مع كاف الآن"
          buttonHref="#contact"
        />

        {/* Reusable Strategy Accordion Section */}
        <ServiceStrategyAccordionSection
          id="influencer-strategy"
          title="وش نسوي في الإنفلونسر ماركتنج؟"
          items={influencerStrategyStepsData}
          allowMultiple={true}
        />

        {/* Reusable 4-Card Feature Grid Section */}
        <ServiceFeatureCardsSection
          id="influencer-cards"
          title="كيف يساعدك الإنفلونسر ماركتنج؟"
          cards={influencerFeatureCardsData}
        />

        {/* Consultation Glass CTA Section */}
        <ServiceGlassCTASection
          id="influencer-consultation"
          title="جاهز يتكلموا عنك بثقة؟"
          description="الثقة اللي ما يبنيها إعلانك وحدك يعطيها لك صوت يثق فيه جمهورك.. وهذا بالضبط اللي يسويه الإنفلونسر ماركتنج مع كاف."
          buttonText="اطلب استشارة مجانية الحين"
          buttonHref="#contact"
        />

        {/* Reusable FAQ Accordion Section */}
        <ServiceFAQSection
          id="influencer-faq"
          title="الأسئلة الشائعة"
          items={influencerFaqItemsData}
          allowMultiple={true}
        />
      </main>
    </div>
  );
}
