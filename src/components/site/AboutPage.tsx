import { Code2, Palette, TrendingUp } from "lucide-react";
import { BrandDivider, Reveal } from "@/components/site/atoms";
import { FeatureGrid, PageCta, PageFrame, type Feature } from "@/components/site/PageFrame";
import founderImg from "@/assets/file_00000000f94471fa82e82b2b03bf4725.png";
import { brandLogo, brandName } from "@/lib/brand-assets";

const aboutPillars: Feature[] = [
  {
    title: "Technology",
    desc: "Websites. Apps. Software. ERP. CRM. Automation.",
    Icon: Code2,
  },
  {
    title: "Creativity",
    desc: "Identity. Graphics. Product visuals. Campaign assets.",
    Icon: Palette,
  },
  {
    title: "Growth",
    desc: "Marketing. Ecommerce. Consulting. Measurable support.",
    Icon: TrendingUp,
  },
];

const storyBeats = [
  {
    k: "01",
    t: "Simple Start",
    d: "A business website. A real client need. A clear first win.",
  },
  {
    k: "02",
    t: "Bigger Builds",
    d: "Ecommerce stores. Product showcases. Online selling systems.",
  },
  {
    k: "03",
    t: "Brand Depth",
    d: "Identity, packaging, marketing materials, social campaigns.",
  },
  {
    k: "04",
    t: "Growth Lens",
    d: "Industry insight, customer needs, business strategy.",
  },
  {
    k: "05",
    t: "Today",
    d: "Designers, technologists, marketers, consultants. One team.",
  },
  {
    k: "06",
    t: "Next",
    d: "Innovate. Create. Deliver. Business growth.",
  },
];

const missionVision = [
  {
    eyebrow: "Our Mission",
    title: "Where Innovation Meets Opportunity",
    desc: "Technology. Branding. Marketing. Stronger relationships. Better efficiency. More leads. Sustainable growth.",
  },
  {
    eyebrow: "Our Vision",
    title: "Transforming Ideas Into Success",
    desc: "Trusted global partner for digital transformation, innovation, and lasting business impact.",
  },
];

export function AboutPage() {
  return (
    <PageFrame
      eyebrow="Who We Are"
      title="Built for the digital future."
      intro="Technology. Branding. Marketing. Ecommerce. Consulting. One focused partner."
    >
      <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
        <Reveal delay={120}>
          <div className="logo-mark mx-auto h-52 w-52 overflow-hidden rounded-full border border-[var(--gold)]/35 bg-black/50 p-4 sm:h-64 sm:w-64">
            <img
              src={brandLogo}
              alt={brandName}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="grid gap-4 text-lg leading-relaxed text-foreground/85 sm:grid-cols-2">
            {[
              "Practical digital work.",
              "Elegant brand systems.",
              "Useful business tools.",
              "Partner mindset.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-sm border border-[var(--gold)]/20 glass px-5 py-4 font-display text-2xl text-foreground/90"
              >
                {item}
              </div>
            ))}
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
              Passion. Client trust. <span className="text-gold-gradient">Continuous learning</span>
              .
            </h2>
            <BrandDivider />
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {storyBeats.map((beat) => (
                <article
                  key={beat.k}
                  className="relative overflow-hidden rounded-sm border border-[var(--gold)]/20 glass p-5 hover-lift"
                >
                  <div className="font-display text-sm text-gold-gradient">{beat.k}</div>
                  <h3 className="mt-3 font-display text-2xl text-foreground">{beat.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{beat.d}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={220}>
            <aside className="relative overflow-hidden rounded-sm border border-[var(--gold)]/25 glass p-6 sm:p-8">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />
              <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="relative h-44 w-36 shrink-0 overflow-hidden rounded-sm border border-[var(--gold)]/35 bg-black/60 shadow-[0_24px_64px_-28px_oklch(0.78_0.16_82_/_0.9)] sm:h-48 sm:w-40">
                  <img
                    src={founderImg}
                    alt="Jeyashree Ramesh, B.E."
                    width={941}
                    height={1672}
                    sizes="(min-width: 640px) 160px, 144px"
                    className="h-full w-full object-cover object-[50%_18%]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <div>
                  <div className="text-gold-gradient font-display text-2xl">
                    Jeyashree Ramesh, B.E.
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.32em] text-muted-foreground">
                    Founder, Fruition Innovix
                  </div>
                </div>
              </div>
              <p className="font-display text-2xl italic leading-snug text-foreground/90">
                Client trust. Shared progress. The best is yet to come.
              </p>
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
