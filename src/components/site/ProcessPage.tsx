import { Code2, Rocket, Search, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/site/atoms";
import { PageCta, PageFrame, type Feature } from "@/components/site/PageFrame";

const process: Feature[] = [
  {
    title: "Understand",
    desc: "Business. Goals. Market. Customers. Blockers.",
    Icon: Search,
  },
  {
    title: "Strategize",
    desc: "Roadmap. Priorities. Budget. Timeline.",
    Icon: Rocket,
  },
  {
    title: "Build",
    desc: "Design. Develop. Test. Launch.",
    Icon: Code2,
  },
  {
    title: "Grow",
    desc: "Campaigns. Systems. Operations. Conversion.",
    Icon: TrendingUp,
  },
];

export function ProcessPage() {
  return (
    <PageFrame
      eyebrow="Our Process"
      title="Idea to launch. Then growth."
      intro="Simple workflow. Clear milestones. Organized delivery."
    >
      <div className="mt-16 grid gap-6 md:grid-cols-4">
        {process.map(({ title, desc, Icon }, index) => (
          <Reveal key={title} delay={index * 80}>
            <article className="relative h-full rounded-sm border border-[var(--gold)]/25 glass p-7 text-center hover-lift">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)]/45 bg-black/30 text-gold-gradient font-display text-xl">
                {String(index + 1).padStart(2, "0")}
              </div>
              <Icon className="mx-auto mb-5 h-7 w-7 text-[var(--gold)]" strokeWidth={1.5} />
              <h2 className="font-display text-2xl text-foreground">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">{desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <PageCta />
    </PageFrame>
  );
}
