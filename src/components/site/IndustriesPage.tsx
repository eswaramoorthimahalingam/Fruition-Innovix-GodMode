import { Briefcase, MapPin, Monitor, Phone, Rocket, ShoppingCart } from "lucide-react";
import { FeatureGrid, PageCta, PageFrame, type Feature } from "@/components/site/PageFrame";

const industries: Feature[] = [
  {
    title: "Retail & Ecommerce",
    desc: "Online stores, marketplace support, promotion, and conversion improvements.",
    Icon: ShoppingCart,
  },
  {
    title: "Manufacturing",
    desc: "ERP, billing, inventory, process automation, and digital transformation support.",
    Icon: Briefcase,
  },
  {
    title: "Healthcare",
    desc: "Secure digital systems and marketing support for clinics, hospitals, and wellness brands.",
    Icon: Phone,
  },
  {
    title: "Education",
    desc: "Websites, learning platforms, admissions funnels, and communication systems.",
    Icon: Monitor,
  },
  {
    title: "Real Estate",
    desc: "Lead generation, property showcases, brand presence, and campaign execution.",
    Icon: MapPin,
  },
  {
    title: "Startups & Entrepreneurs",
    desc: "Launch support from identity and website to strategy, software, and marketing.",
    Icon: Rocket,
  },
];

export function IndustriesPage() {
  return (
    <PageFrame
      eyebrow="Industries We Serve"
      title="Tailored solutions across business sectors."
      intro="We adapt technology, branding, marketing, and consulting support to the practical needs of each industry."
    >
      <FeatureGrid items={industries} />
      <PageCta />
    </PageFrame>
  );
}
