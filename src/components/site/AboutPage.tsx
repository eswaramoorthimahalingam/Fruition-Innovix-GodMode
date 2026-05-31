import { Code2, Palette, TrendingUp } from "lucide-react";
import { BrandDivider, Reveal } from "@/components/site/atoms";
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

const storyParagraphs = [
  "Every successful business starts with a simple idea, and Fruition Innovix is no exception.",
  "Our journey began with a passion for technology, creativity, and helping businesses establish their presence in the digital world. What started as a single opportunity evolved into a mission to provide complete digital and branding solutions.",
  "The first project was a business website for a client who wanted to strengthen their online presence. That success created the confidence to take on bigger challenges, including ecommerce websites that helped clients showcase and sell their products online.",
  "As we collaborated closely with businesses, we realized many needed more than a website. They needed professional branding, packaging design, marketing support, and strategies to attract customers, so the services expanded into brand identities, marketing materials, and social media campaigns.",
  "With every project, Fruition Innovix gained deeper insight into industries, customer needs, and business growth strategies. Today, the company reflects that journey: passion, innovation, creativity, and a genuine desire to help businesses succeed.",
  "Our team brings together creative designers, technology experts, marketing strategists, and business consultants who work to transform ideas into modern, scalable, and future-ready solutions.",
  "We are proud of how far we have come, and we remain focused on the future: continuing to innovate, create, and deliver solutions that help businesses grow and achieve their goals.",
];

const missionVision = [
  {
    eyebrow: "Our Mission",
    title: "Where Innovation Meets Opportunity",
    desc: "Our mission is to empower businesses with innovative technology, creative branding, and strategic marketing solutions that build stronger customer relationships, improve operational efficiency, enhance brand visibility, increase leads, lift conversions, and achieve sustainable growth.",
  },
  {
    eyebrow: "Our Vision",
    title: "Transforming Ideas Into Success",
    desc: "To become a trusted global partner for businesses seeking digital transformation, innovation, and sustainable growth by delivering world-class technology, branding, and marketing solutions that create lasting impact.",
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
      <section id="story" className="relative mt-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_left,_oklch(0.24_0.08_270_/_0.18),_transparent_58%)]" />
        <Reveal>
          <div className="mb-14 max-w-4xl">
            <div className="mb-4 text-xs uppercase tracking-[0.4em] text-[var(--gold)]">
              The Story Behind Fruition Innovix
            </div>
            <h2 className="font-display text-5xl leading-tight md:text-6xl">
              Built from passion, client trust, and{" "}
              <span className="text-gold-gradient">continuous learning</span>.
            </h2>
            <BrandDivider />
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <Reveal delay={120}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={220}>
            <aside className="relative overflow-hidden rounded-sm border border-[var(--gold)]/25 glass p-8">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />
              <div className="logo-mark mb-8 h-20 w-20 overflow-hidden rounded-full border border-[var(--gold)]/35 bg-black/60">
                <img src={logoMarkImg} alt="" className="h-full w-full object-contain p-1.5" />
              </div>
              <p className="font-display text-2xl italic leading-snug text-foreground/90">
                Thank you to every client who has trusted us to be part of their journey. The best
                is yet to come.
              </p>
              <div className="gold-divider my-6" />
              <div className="text-gold-gradient font-display text-2xl">
                Jeyashree Ramesh, B.E.
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.32em] text-muted-foreground">
                Founder, Fruition Innovix
              </div>
            </aside>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {missionVision.map((item, i) => (
            <Reveal key={item.eyebrow} delay={260 + i * 100}>
              <article className="relative h-full overflow-hidden rounded-sm border border-[var(--gold)]/20 glass p-8 hover-lift">
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--gold)]/8 blur-3xl" />
                <div className="relative text-xs uppercase tracking-[0.35em] text-[var(--gold)]">
                  {item.eyebrow}
                </div>
                <h3 className="relative mt-4 font-display text-3xl text-gold-gradient md:text-4xl">
                  {item.title}
                </h3>
                <p className="relative mt-5 leading-relaxed text-muted-foreground">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <FeatureGrid items={aboutPillars} />
      <PageCta />
    </PageFrame>
  );
}
