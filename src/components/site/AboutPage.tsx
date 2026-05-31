import { Code2, Palette, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/site/atoms";
import { FeatureGrid, PageCta, PageFrame, type Feature } from "@/components/site/PageFrame";
import logoMarkImg from "@/assets/logo-removebg1.png";

const aboutPillars: Feature[] = [
  {
    title: "Technology",
    desc: "Websites, mobile apps, software, billing systems, ERP, CRM, and automation.",
    Icon: Code2,
  },
  {
    title: "Creativity",
    desc: "Brand identity, graphics, product visuals, campaigns, and content that feels considered.",
    Icon: Palette,
  },
  {
    title: "Growth",
    desc: "Digital marketing, ecommerce strategy, consulting, and measurable business support.",
    Icon: TrendingUp,
  },
];

export function AboutPage() {
  return (
    <PageFrame
      eyebrow="Who We Are"
      title="Empowering businesses for the digital future."
      intro="Fruition Innovix brings technology, creative branding, digital marketing, ecommerce support, and business consulting together so businesses can move with clarity and confidence."
    >
      <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
        <Reveal delay={120}>
          <div className="logo-mark mx-auto h-52 w-52 overflow-hidden rounded-full border border-[var(--gold)]/35 bg-black/50 p-4 sm:h-64 sm:w-64">
            <img
              src={logoMarkImg}
              alt="Fruition Innovix"
              className="h-full w-full object-contain"
            />
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
            <p>
              We started with the belief that good digital work should feel practical, elegant, and
              useful. Today that shows up in websites, apps, brand identities, marketing campaigns,
              ecommerce growth plans, and custom business systems.
            </p>
            <p>
              Our team works as a partner, not just a vendor: we listen, plan, build, measure, and
              keep improving the result.
            </p>
          </div>
        </Reveal>
      </div>
      <FeatureGrid items={aboutPillars} />
      <PageCta />
    </PageFrame>
  );
}
