import { Navbar } from "@/components/layout/Navbar";
import { PageHeroSection } from "@/components/ui/PageHeroSection";
import { ServiceDetailFeatureSection } from "@/components/sections/ServiceDetailFeatureSection";
import { ServiceStrategyAccordionSection } from "@/components/sections/ServiceStrategyAccordionSection";
import { ServiceFeatureCardsSection, FeatureCardData } from "@/components/sections/ServiceFeatureCardsSection";
import { ServiceGlassCTASection } from "@/components/sections/ServiceGlassCTASection";
import { ServiceFAQSection } from "@/components/sections/ServiceFAQSection";

export const metadata = {
  title: "ستوديو كـافـ | كاف - KAAF",
  description: "أول انطباع بصري... يحدد عميلك راح يسمعك أو يمشى! نضمن لك في ستوديو كاف التصميم الجرافيكي والإنتاج الفني لتكون كل لمسة بصرياً تحمل نفس القوة والهوية.",
};

const studioStrategyStepsData = [
  {
    id: "visual-identity",
    number: "01",
    title: "هوية بصرية متكاملة",
    content: "نصنع لوجو، وألوان، وخيارات تعكس شخصية براندك بشكل واضح ومميز.",
    defaultOpen: true,
  },
  {
    id: "social-media-design",
    number: "02",
    title: "تصميم محتوى السوشيال ميديا",
    content: "ننتج تصاميم بوستات وستوريات مختلفة تعزز الصورة البصرية.",
    defaultOpen: true,
  },
  {
    id: "photography",
    number: "03",
    title: "تصوير فوتوغرافي",
    content: "نلتقط منتجاتك أو خدماتك بجودة احترافية تليق بمستوى براندك.",
    defaultOpen: true,
  },
  {
    id: "video-production",
    number: "04",
    title: "إنتاج فيديو",
    content: "ننتج فيديوهات إعلانية أو توضيحية تعطي قصة واضحة وبصرياً.",
    defaultOpen: true,
  },
  {
    id: "editing-post-production",
    number: "05",
    title: "مونتاج وصوتيات الإنتاج",
    content: "تجهيز المشاهد والمواضع والمؤثرات بشكل احترافي ومتناسق.",
    defaultOpen: true,
  },
  {
    id: "marketing-materials-design",
    number: "06",
    title: "تصميم مواد تسويقية",
    content: "نجهز كل ما يحتاجه براندك من مطبوعات وملفات تسويقية مميزة.",
    defaultOpen: true,
  },
];

const studioFeatureCardsData: FeatureCardData[] = [
  {
    id: "studio-card-1",
    image: "/studio-card-1.png",
    alt: "هوية موحدة في كل مكان",
    title: "هوية موحدة في كل مكان",
    description: "التصاميم والفيديوهات والبوستات تمشي بنفس الروح، مهمة صنعت البصمة.",
  },
  {
    id: "studio-card-2",
    image: "/studio-card-2.png",
    alt: "ثقة أسرع من عميلك",
    title: "ثقة أسرع من عميلك",
    description: "مظهر احترافي يبني ثقة العملاء من أول نظرة، قبل ما يقرأ كلمة.",
  },
  {
    id: "studio-card-3",
    image: "/studio-card-3.png",
    alt: "توفير وقت و جهد",
    title: "توفير وقت و جهد",
    description: "تجد كل احتياجاتك البصرية من مكان واحد بدل التنقل بين الموردين.",
  },
  {
    id: "studio-card-4",
    image: "/studio-card-4.png",
    alt: "محتوى جاهز للنشر فوراً",
    title: "محتوى جاهز للنشر فوراً",
    description: "تستلم مواد مصممة وجاهزة ومجهزة لاستخدامها مباشرة بدون تعديلات إضافية.",
  },
];

const studioFaqItemsData = [
  {
    id: "faq-what-includes-studio",
    title: "وش يشمل ستوديو كاف بالضبط؟",
    content: "يشمل الهوية البصرية، تصاميم السوشيال ميديا، التصوير الفوتوغرافي، إنتاج الفيديوهات والمونتاج، وتجهيز المطبوعات والمواد التسويقية.",
  },
  {
    id: "faq-single-service",
    title: "هل أقدر أطلب تصميم بس بدون تصوير أو العكس؟",
    content: "نعم، يمكنك اختيار الخدمة المطلوبة بشكل منفرد حسب احتياج براندك الحالي.",
  },
  {
    id: "faq-e-commerce-fit",
    title: "هل الخدمة تناسب المتاجر الإلكترونية؟",
    content: "بالتأكيد، نساعد المتاجر الإلكترونية على إبراز منتجاتها بصرياً لزيادة المبيعات والتحويلات.",
  },
  {
    id: "faq-production-duration",
    title: "كم المدة التي تحتاجها مشاريع التصميم والإنتاج؟",
    content: "تعتمد المدة على حجم المشروع ونوع الخدمة، وتتراوح عادةً من 3 إلى 10 أيام عمل.",
  },
];

export default function StudioServicePage() {
  return (
    <div className="relative min-h-screen w-full bg-[#03111F]">
      <Navbar />
      <main id="main-content" className="w-full">
        {/* Hero Section */}
        <PageHeroSection
          id="studio-hero"
          title="ستوديو كاف"
          bgImage="/studio-banner.png"
          bgImageAlt="خدمة ستوديو كاف - خلفية"
          breadcrumbLabel="ستوديو كاف"
          parentBreadcrumb={{
            label: "خدماتنا",
            href: "/services",
          }}
          buttonText="ابدأ معنا الان"
          buttonHref="#contact"
          size="compact"
        />

        {/* Feature Section: First visual impression */}
        <ServiceDetailFeatureSection
          id="studio-feature"
          title="أول انطباع بصري... يحدد عميلك راح يسمعك أو يمشى!"
          description="عميلك يعين، ويقف، عندك ثواني بسيطة قبل تحكم ورأيه هذا يعتمد على شكل براندك قبل أي كلمة تقولها.. نضمن لك في ستوديو كاف التصميم الجرافيكي والإنتاج الفني، تحت سقف واحد عشان كل ظهور لبراندك يحمل نفس القوة، ونفس الهوية، من البوست البسيط إلى الفيديو الإعلاني."
          imageSrc="/studio-section-image.png"
          imageAlt="أول انطباع بصري وهوية براندك"
          imagePosition="left"
        />

        {/* Reusable Strategy Accordion Section */}
        <ServiceStrategyAccordionSection
          id="studio-strategy"
          title="وش يشمل ستوديو كاف؟"
          items={studioStrategyStepsData}
          allowMultiple={true}
        />

        {/* Reusable 4-Card Feature Grid Section */}
        <ServiceFeatureCardsSection
          id="studio-cards"
          title="كيف يساعدك ستوديو كاف؟"
          cards={studioFeatureCardsData}
        />

        {/* Consultation Glass CTA Section */}
        <ServiceGlassCTASection
          id="studio-consultation"
          title="جاهز تشوف براندك بأفضل صورة؟"
          description="براندك ما يحتاج يتكلم كثير عشان يوصل، يحتاج تأثير صح، ستوديو كاف يخلي كل صورة وتصميم يقول عنك أكثر من أي كلمة."
          buttonText="اطلب استشارة مجانية الحين"
          buttonHref="#contact"
        />

        {/* Reusable FAQ Accordion Section */}
        <ServiceFAQSection
          id="studio-faq"
          title="الأسئلة الشائعة"
          items={studioFaqItemsData}
          allowMultiple={true}
        />
      </main>
    </div>
  );
}
