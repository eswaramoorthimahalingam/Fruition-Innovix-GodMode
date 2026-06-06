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
    desc: "Responsive, SEO-friendly websites designed to convert visitors into customers.",
    Icon: Monitor,
  },
  {
    title: "Mobile App Development",
    desc: "Custom Android and iOS applications with polished, practical user experiences.",
    Icon: Smartphone,
  },
  {
    title: "Custom Software Development",
    desc: "Tailored systems that automate operations, reduce manual work, and improve control.",
    Icon: Code2,
  },
  {
    title: "ERP & CRM Solutions",
    desc: "Tools for managing customers, workflows, teams, inventory, and business performance.",
    Icon: Database,
  },
  {
    title: "Graphic Design & Branding",
    desc: "Brand identities, marketing creatives, packaging, and visual systems with recall.",
    Icon: Palette,
  },
  {
    title: "Digital Marketing",
    desc: "SEO, ads, social campaigns, ecommerce growth, and measurable lead generation.",
    Icon: TrendingUp,
  },
  {
    title: "Product Photography & Video Editing",
    desc: "Sharp visual content for products, campaigns, reels, and digital storefronts.",
    Icon: Video,
  },
  {
    title: "Business Consulting",
    desc: "Growth planning, revenue strategy, process improvement, and execution support.",
    Icon: BarChart3,
  },
];

export function ServicesPage() {
  return (
    <PageFrame
      eyebrow="Our Services"
      title="Complete digital solutions for business growth."
      intro="From technology builds to brand presence and marketing execution, each service is designed to support real business outcomes."
    >
      <FeatureGrid items={services} />
      <PageCta />
    </PageFrame>
  );
}
