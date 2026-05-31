import { Layers, Rocket, Search, Star } from "lucide-react";
import { FeatureGrid, PageCta, PageFrame, type Feature } from "@/components/site/PageFrame";

const why: Feature[] = [
  {
    title: "Complete Business Solutions",
    desc: "Technology, branding, marketing, ecommerce, consulting, and support under one roof.",
    Icon: Layers,
  },
  {
    title: "Customized Strategies",
    desc: "Every plan is shaped around your goals, market, audience, and business stage.",
    Icon: Search,
  },
  {
    title: "Innovation-Driven Approach",
    desc: "We keep your systems, brand, and campaigns aligned with new opportunities.",
    Icon: Rocket,
  },
  {
    title: "Focus on Results",
    desc: "Our work is built around leads, sales, efficiency, visibility, and sustainable growth.",
    Icon: Star,
  },
];

export function WhyUsPage() {
  return (
    <PageFrame
      eyebrow="Why Businesses Choose Fruition Innovix"
      title="Think bigger. Build better. Grow faster."
      intro="We combine strategic thinking, creative execution, and technical delivery so your business can scale with fewer scattered vendors and clearer momentum."
    >
      <FeatureGrid items={why} />
      <PageCta />
    </PageFrame>
  );
}
