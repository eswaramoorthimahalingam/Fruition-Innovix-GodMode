import {
  BarChart3,
  Code2,
  Database,
  Monitor,
  Palette,
  Smartphone,
  TrendingUp,
  Video,
} from "lucide-react";
import { FeatureGrid, PageCta, PageFrame, type Feature } from "@/components/site/PageFrame";

const services: Feature[] = [
  {
    title: "Website Development",
    desc: "Responsive sites. SEO-ready. Conversion focused.",
    Icon: Monitor,
  },
  {
    title: "Mobile App Development",
    desc: "Android and iOS apps. Clean flows. Reliable performance.",
    Icon: Smartphone,
  },
  {
    title: "Custom Software Development",
    desc: "Tailored systems. Less manual work. Better control.",
    Icon: Code2,
  },
  {
    title: "ERP & CRM Solutions",
    desc: "Customers. Teams. Inventory. Reports. All connected.",
    Icon: Database,
  },
  {
    title: "Graphic Design & Branding",
    desc: "Identity, packaging, creatives, and visual recall.",
    Icon: Palette,
  },
  {
    title: "Digital Marketing",
    desc: "SEO, ads, social, ecommerce, and lead generation.",
    Icon: TrendingUp,
  },
  {
    title: "Product Photography & Video Editing",
    desc: "Product shots, reels, promos, and storefront content.",
    Icon: Video,
  },
  {
    title: "Business Consulting",
    desc: "Growth plans, revenue strategy, process fixes, execution.",
    Icon: BarChart3,
  },
];

export function ServicesPage() {
  return (
    <PageFrame
      eyebrow="Our Services"
      title="Digital growth. Built end to end."
      intro="Technology builds. Brand presence. Marketing execution. Real outcomes."
    >
      <FeatureGrid items={services} />
      <PageCta />
    </PageFrame>
  );
}
