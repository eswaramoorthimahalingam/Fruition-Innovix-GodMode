import { Link } from "@tanstack/react-router";
import { Rocket } from "lucide-react";
import { BrandDivider, CursorGlow, Reveal, WhatsAppFAB } from "@/components/site/atoms";
import { Navbar } from "@/components/site/Navbar";

export type Feature = {
  title: string;
  desc: string;
  Icon: typeof Rocket;
};

export function PageFrame({
  eyebrow,
  title,
  children,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      <Navbar />
      <CursorGlow />
      <WhatsAppFAB />
      <main className="px-6 pb-24 pt-36 sm:pt-40">
        <section className="mx-auto max-w-7xl">
          <Reveal className="in">
            <div className="max-w-4xl">
              <div className="mb-5 text-xs uppercase tracking-[0.4em] text-[var(--gold)]">
                {eyebrow}
              </div>
              <h1 className="font-display text-5xl leading-tight sm:text-6xl md:text-7xl">
                {title}
              </h1>
              <BrandDivider />
              <p className="max-w-3xl text-lg leading-relaxed text-foreground/90 sm:text-xl">
                {intro}
              </p>
            </div>
          </Reveal>
          {children}
        </section>
      </main>
    </div>
  );
}

export function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ title, desc, Icon }, index) => (
        <Reveal key={title} delay={index * 60}>
          <article className="group relative h-full overflow-hidden rounded-sm border border-[var(--gold)]/25 glass p-7 hover-lift">
            <Icon
              className="mb-5 h-7 w-7 text-[var(--gold)] transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.5}
            />
            <h2 className="font-display text-2xl leading-snug text-foreground group-hover:text-gold-gradient">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/85">{desc}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function PageCta() {
  return (
    <div className="mt-16 text-center">
      <Link
        to="/contact"
        className="btn-gold inline-flex rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wide"
      >
        Start Your Project
      </Link>
    </div>
  );
}
