import { Briefcase, MapPin, Monitor, Phone, Rocket, ShoppingCart } from "lucide-react";
import { FeatureGrid, PageCta, PageFrame, type Feature } from "@/components/site/PageFrame";

const industries: Feature[] = [
  {
    title: "Retail & Ecommerce",
    desc: "Stores, marketplaces, promotions, conversion lifts.",
    Icon: ShoppingCart,
  },
  {
    title: "Manufacturing",
    desc: "ERP, billing, inventory, automation, reporting.",
    Icon: Briefcase,
  },
  {
    title: "Healthcare",
    desc: "Secure systems for clinics, hospitals, wellness brands.",
    Icon: Phone,
  },
  {
    title: "Education",
    desc: "Websites, learning platforms, admissions, communication.",
    Icon: Monitor,
  },
  {
    title: "Real Estate",
    desc: "Lead funnels, property showcases, campaigns.",
    Icon: MapPin,
  },
  {
    title: "Startups & Entrepreneurs",
    desc: "Identity, website, strategy, software, launch marketing.",
    Icon: Rocket,
  },
];

export function IndustriesPage() {
  return (
    <PageFrame
      eyebrow="Industries We Serve"
      title="Sector-ready digital solutions."
      intro="Technology. Branding. Marketing. Consulting. Tuned by industry."
    >
      <FeatureGrid items={industries} />
      <PageCta />
    </PageFrame>
  );
}
