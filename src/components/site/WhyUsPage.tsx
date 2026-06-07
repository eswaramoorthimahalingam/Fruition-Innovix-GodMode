import { Layers, Rocket, Search, Star } from "lucide-react";
import { FeatureGrid, PageCta, PageFrame, type Feature } from "@/components/site/PageFrame";

const why: Feature[] = [
  {
    title: "Complete Business Solutions",
    desc: "Technology, branding, marketing, ecommerce, consulting, support.",
    Icon: Layers,
  },
  {
    title: "Customized Strategies",
    desc: "Goals, market, audience, stage. Then the roadmap.",
    Icon: Search,
  },
  {
    title: "Innovation-Driven Approach",
    desc: "Modern systems. Fresh campaigns. Practical opportunities.",
    Icon: Rocket,
  },
  {
    title: "Focus on Results",
    desc: "Leads, sales, efficiency, visibility, sustainable growth.",
    Icon: Star,
  },
];

export function WhyUsPage() {
  return (
    <PageFrame
      eyebrow="Why Businesses Choose Fruition Innovix"
      title="Think bigger. Build better. Grow faster."
      intro="Strategy. Creative execution. Technical delivery. One clear team."
    >
      <FeatureGrid items={why} />
      <PageCta />
    </PageFrame>
  );
}
