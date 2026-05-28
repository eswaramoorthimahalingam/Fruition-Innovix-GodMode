import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/landing-bg.png";
import logoImg from "@/assets/logo.jpeg";
import techStackImg from "@/assets/tech-stack.png";
import { Navbar } from "@/components/site/Navbar";
import {
  Particles,
  Reveal,
  Counter,
  BrandDivider,
  CursorGlow,
  LuxuryLoader,
  WhatsAppFAB,
  Lightbox,
} from "@/components/site/atoms";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import {
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Phone,
  PenTool,
  Monitor,
  Database,
  Palette,
  TrendingUp,
  Star,
  ShoppingCart,
  Search,
  Megaphone,
  Video,
  Calendar,
  Briefcase,
  Code2,
  Smartphone,
  Globe,
  Layers,
  Rocket,
  BarChart3,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fruition Innovix — Creative & Digital Solutions Partner" },
      {
        name: "description",
        content:
          "Fruition Innovix is your one-stop creative and digital solutions partner — web & mobile apps, ERP/CRM, graphic design, digital marketing, branding, and more.",
      },
      { property: "og:title", content: "Fruition Innovix" },
      {
        property: "og:description",
        content:
          "Where Innovation Meets Strategy. Your one-stop creative & digital solutions partner.",
      },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Cinzel:wght@500;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

const specialties = [
  {
    title: "Web & Mobile Apps",
    desc: "Full-stack web and mobile applications built for performance, scale, and growth.",
    Icon: Monitor,
    color: "oklch(0.55 0.18 250)",
    glow: "oklch(0.55 0.18 250 / 0.35)",
  },
  {
    title: "ERP & CRM Solutions",
    desc: "Streamline your operations with custom enterprise resource and customer management systems.",
    Icon: Database,
    color: "oklch(0.55 0.15 170)",
    glow: "oklch(0.55 0.15 170 / 0.35)",
  },
  {
    title: "Graphic Design",
    desc: "Compelling visuals and creative assets that make your brand impossible to ignore.",
    Icon: Palette,
    color: "oklch(0.60 0.18 320)",
    glow: "oklch(0.60 0.18 320 / 0.35)",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven campaigns across SEO, PPC, and content that grow your audience.",
    Icon: TrendingUp,
    color: "oklch(0.65 0.16 140)",
    glow: "oklch(0.65 0.16 140 / 0.35)",
  },
  {
    title: "Business Branding",
    desc: "Build a powerful brand identity — logo, voice, and strategy — that commands attention.",
    Icon: Star,
    color: "oklch(0.78 0.16 82)",
    glow: "oklch(0.78 0.16 82 / 0.35)",
  },
  {
    title: "E-commerce Solutions",
    desc: "Turn your store into a high-converting, seamless shopping experience.",
    Icon: ShoppingCart,
    color: "oklch(0.60 0.17 200)",
    glow: "oklch(0.60 0.17 200 / 0.35)",
  },
];

const why = [
  {
    k: "01",
    t: "End-to-End Solutions",
    d: "From concept to deployment and beyond — we handle every step of your digital journey.",
  },
  {
    k: "02",
    t: "Innovation-First Approach",
    d: "We leverage cutting-edge technology and creative thinking to keep your brand ahead.",
  },
  {
    k: "03",
    t: "Custom-Built Software",
    d: "Every solution tailored precisely to your business needs — no off-the-shelf compromises.",
  },
  {
    k: "04",
    t: "Data-Driven Marketing",
    d: "Campaigns backed by analytics and real insights, not guesswork or generic strategies.",
  },
  {
    k: "05",
    t: "Proven Track Record",
    d: "Trusted by brands across industries to deliver results that move the needle.",
  },
];

const portfolioItems = [
  {
    title: "SaaS Dashboard Platform",
    stack: ["React", "Node.js", "PostgreSQL"],
    type: "Web Application",
    color: "oklch(0.55 0.18 250)",
    Icon: Monitor,
  },
  {
    title: "E-commerce Mobile App",
    stack: ["React Native", "Firebase"],
    type: "Mobile App",
    color: "oklch(0.60 0.17 200)",
    Icon: Smartphone,
  },
  {
    title: "Manufacturing ERP System",
    stack: ["Next.js", "PostgreSQL", "Docker"],
    type: "ERP Solution",
    color: "oklch(0.55 0.15 170)",
    Icon: Database,
  },
  {
    title: "Brand Identity — Tech Startup",
    stack: ["Figma", "Illustrator"],
    type: "Branding",
    color: "oklch(0.78 0.16 82)",
    Icon: Star,
  },
  {
    title: "Digital Growth Campaign",
    stack: ["Google Ads", "Meta", "Analytics"],
    type: "Digital Marketing",
    color: "oklch(0.65 0.16 140)",
    Icon: TrendingUp,
  },
  {
    title: "Healthcare CRM System",
    stack: ["Vue.js", "Python", "MySQL"],
    type: "CRM Solution",
    color: "oklch(0.60 0.18 320)",
    Icon: Layers,
  },
  {
    title: "Social Media Strategy",
    stack: ["Instagram", "LinkedIn", "Meta"],
    type: "Social Marketing",
    color: "oklch(0.65 0.18 300)",
    Icon: Megaphone,
  },
];

const processSteps = [
  { t: "Discovery", d: "Understanding your goals, market, audience, and vision.", Icon: Search },
  { t: "Strategy", d: "Crafting a clear roadmap aligned with your business needs.", Icon: Rocket },
  {
    t: "Design",
    d: "Creating wireframes, visuals, and brand elements that inspire.",
    Icon: Palette,
  },
  {
    t: "Development",
    d: "Building robust, scalable, and high-performance solutions.",
    Icon: Code2,
  },
  { t: "Launch", d: "Deploying your product with precision, testing, and care.", Icon: Globe },
  { t: "Growth", d: "Ongoing support, analytics, optimization, and scaling.", Icon: BarChart3 },
];

const techLogos = [
  { name: "HTML5", bg: "#E44D26", text: "HTML5" },
  { name: "CSS3", bg: "#264DE4", text: "CSS3" },
  { name: "JavaScript", bg: "#F7DF1E", text: "JS", dark: true },
  { name: "TypeScript", bg: "#3178C6", text: "TS" },
  { name: "React", bg: "#61DAFB", text: "React", dark: true },
  { name: "Next.js", bg: "#000000", text: "Next" },
  { name: "Node.js", bg: "#339933", text: "Node" },
  { name: "Python", bg: "#3776AB", text: "Py" },
  { name: "Flutter", bg: "#02569B", text: "Flutter" },
  { name: "Firebase", bg: "#FFCA28", text: "Firebase", dark: true },
  { name: "Docker", bg: "#2496ED", text: "Docker" },
  { name: "PostgreSQL", bg: "#4169E1", text: "PgSQL" },
  { name: "MongoDB", bg: "#47A248", text: "Mongo" },
  { name: "Figma", bg: "#F24E1E", text: "Figma" },
  { name: "AWS", bg: "#FF9900", text: "AWS", dark: true },
  { name: "GraphQL", bg: "#E535AB", text: "GQL" },
];

function Index() {
  const [lightboxOpen, setLightboxOpen] = useState<string | null>(null);
  return (
    <div id="top" className="relative min-h-screen text-foreground overflow-x-hidden">
      <LuxuryLoader />
      <Navbar />
      <CursorGlow />
      <WhatsAppFAB />
      <Lightbox
        src={lightboxOpen}
        caption={lightboxOpen ? "Tech Stack" : undefined}
        onClose={() => setLightboxOpen(null)}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden vignette">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Fruition Innovix — Creative & Digital Solutions"
            className="w-full h-full object-cover slow-zoom"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, transparent 35%, oklch(0.06 0.02 265 / 0.70) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, oklch(0.06 0.02 265 / 0.55) 0%, transparent 40%, transparent 60%, oklch(0.06 0.02 265 / 0.40) 100%)",
            }}
          />
        </div>
        <Particles count={60} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <Reveal delay={150}>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-5">
              <span className="block underline-gold text-gold-gradient">Fruition</span>
              <span className="block text-foreground/95 italic font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
                Innovix
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="font-display italic text-xl sm:text-2xl md:text-3xl leading-tight text-[var(--brand-cream)]/90 mb-3 max-w-2xl mx-auto">
              Where Innovation Meets Strategy
            </p>
            <p className="mt-5 text-[10px] sm:text-xs uppercase tracking-[0.5em] leading-relaxed text-[var(--gold-soft)]">
              Your One-Stop Digital Partner · Technology & Creativity
            </p>
          </Reveal>
        </div>

        <div className="absolute bottom-10 sm:bottom-14 left-1/2 z-10 w-full -translate-x-1/2 px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#gallery"
              className="btn-gold cta-pulse rounded-full px-8 py-3.5 text-sm font-medium tracking-wide uppercase"
            >
              Explore Our Work
            </a>
            <a
              href="#contact-quick"
              className="btn-outline-gold rounded-full px-8 py-3.5 text-sm font-medium tracking-wide uppercase"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-4 bg-[var(--gold)]/8 blur-3xl rounded-full" />
              <div
                className="relative overflow-hidden rounded-sm border border-[var(--gold)]/20"
                style={{ boxShadow: "var(--shadow-cinematic)" }}
              >
                <img
                  src={logoImg}
                  alt="Fruition Innovix logo"
                  className="img-zoom w-full h-[520px] object-contain bg-white p-6"
                  loading="lazy"
                  width={1024}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-sm px-6 py-4 hidden sm:block">
                <div className="font-display text-4xl text-gold-gradient">
                  <Counter to={500} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Who We Are
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-6 leading-tight">
                Building digital futures with{" "}
                <span className="italic text-gold-gradient">innovation & strategy</span>.
              </h2>
              <BrandDivider />
              <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
                Fruition Innovix is your one-stop creative and digital solutions partner. We
                specialize in delivering end-to-end technology and marketing services that help
                brands grow with{" "}
                <span className="text-[var(--brand-cream)]">
                  innovation, technology, and smart strategy
                </span>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                From web & mobile app development and custom ERP/CRM solutions to graphic design,
                digital marketing, business branding, event planning, and video editing — we bring
                every dimension of your brand to life.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--gold)]/15">
                {[
                  { n: 5, s: "+", l: "Years" },
                  { n: 500, s: "+", l: "Projects" },
                  { n: 200, s: "+", l: "Clients" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-4xl text-gold-gradient">
                      <Counter to={s.n} suffix={s.s} />
                    </div>
                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SPECIALTIES — icon-based, no photos */}
      <section id="specialties" className="relative py-32 px-6">
        <div className="absolute inset-0 -z-10">
          <div className="circuit-grid opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.30_0.10_270_/_0.15),_transparent_60%)]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Our Services
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">What we excel at</h2>
              <BrandDivider />
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                Six core disciplines, one mission: building solutions that make your brand thrive.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="group relative overflow-hidden rounded-sm border border-[var(--gold)]/15 hover-lift glass h-[340px] flex flex-col justify-between p-8">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(ellipse at 30% 30%, ${s.glow}, transparent 65%)`,
                    }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/0 group-hover:ring-[var(--gold)]/40 transition-all duration-500 rounded-sm" />

                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${s.color}22, ${s.color}44)`,
                        border: `1px solid ${s.color}55`,
                        boxShadow: `0 0 24px -6px ${s.glow}`,
                      }}
                    >
                      <s.Icon className="w-8 h-8" style={{ color: s.color }} strokeWidth={1.5} />
                    </div>
                    <div className="w-10 h-px bg-[var(--gold)] mb-4 transition-all duration-500 group-hover:w-20" />
                    <h3 className="font-display text-2xl md:text-3xl mb-3 text-foreground group-hover:text-gold-gradient transition-all">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>

                  <div className="relative mt-4 text-xs uppercase tracking-[0.3em] text-[var(--gold)]/60 group-hover:text-[var(--gold)] transition-colors inline-flex items-center gap-2">
                    Learn More <span aria-hidden>→</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SHOWCASE */}
      <section id="tech" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.25_0.10_280_/_0.25),_transparent_65%)]" />
          <div className="stars opacity-60" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-14">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Technology Stack
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-4">
                Digital solutions built for{" "}
                <span className="text-gold-gradient">real business momentum</span>
              </h2>
              <BrandDivider />
              <p className="max-w-2xl mx-auto text-muted-foreground text-base italic font-display">
                From product development to marketing, we help brands launch, operate, and grow with
                confidence.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="relative rounded-sm overflow-hidden border border-[var(--gold)]/20 cursor-pointer group"
              style={{ boxShadow: "0 0 60px -20px oklch(0.60 0.16 280 / 0.4)" }}
              onClick={() => setLightboxOpen(techStackImg)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                  Click to expand
                </span>
              </div>
              <img
                src={techStackImg}
                alt="Fruition Innovix tech stack — React, Node, TypeScript, Docker and more"
                className="w-full object-cover img-zoom"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Tech logo badges */}
          <Reveal delay={200}>
            <div className="mt-12 overflow-hidden marquee-wrap">
              <div className="marquee gap-4">
                {[...techLogos, ...techLogos].map((tech, i) => (
                  <div
                    key={i}
                    className="tech-icon-glow flex-shrink-0 mx-2 px-4 py-2 rounded-full glass border border-[var(--gold)]/15 text-xs font-medium tracking-wider uppercase flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: tech.bg }} />
                    <span className="text-foreground/80">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO / GALLERY — tech project cards */}
      <section id="gallery" className="relative py-32 px-6">
        <div className="absolute inset-0 -z-10">
          <div className="circuit-grid opacity-25" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Portfolio
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">A showcase of our work</h2>
              <BrandDivider />
            </div>
          </Reveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {portfolioItems.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <article className="group relative mb-6 break-inside-avoid overflow-hidden rounded-sm border border-[var(--gold)]/10 hover-lift glass">
                  {/* Colored top bar */}
                  <div
                    className="h-1 w-full"
                    style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                  />
                  <div className="p-8">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                        border: `1px solid ${item.color}50`,
                        boxShadow: `0 0 20px -6px ${item.color}50`,
                      }}
                    >
                      <item.Icon
                        className="w-7 h-7"
                        style={{ color: item.color }}
                        strokeWidth={1.5}
                      />
                    </div>

                    <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/70 mb-2">
                      {item.type}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl mb-4 text-foreground group-hover:text-gold-gradient transition-all">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--gold)]/20 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/0 group-hover:ring-[var(--gold)]/40 transition-all duration-500 rounded-sm" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="relative py-32 px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_oklch(0.28_0.10_280_/_0.20),_transparent_60%)]" />
        </div>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Why Choose Us
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">Five promises we keep</h2>
              <BrandDivider />
            </div>
          </Reveal>

          <div className="space-y-px">
            {why.map((w, i) => (
              <Reveal key={w.k} delay={i * 80}>
                <div className="group grid grid-cols-12 gap-6 items-center py-8 border-t border-[var(--gold)]/15 last:border-b transition-all hover:bg-[var(--gold)]/5 px-2">
                  <div className="col-span-2 font-display text-3xl text-[var(--gold)]/60 group-hover:text-gold-gradient transition-colors">
                    {w.k}
                  </div>
                  <h3 className="col-span-10 md:col-span-4 font-display text-2xl md:text-3xl">
                    {w.t}
                  </h3>
                  <p className="col-span-12 md:col-span-6 text-muted-foreground leading-relaxed">
                    {w.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / ORDER */}
      <section id="order" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.30_0.10_270_/_0.15),_transparent_60%)]" />
          <div className="circuit-grid opacity-30" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Get Started
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4 text-gold-gradient">
                Our Offerings
              </h2>
              <BrandDivider />
              <p className="max-w-2xl mx-auto text-[var(--brand-cream)]/90 text-lg md:text-xl italic font-display mt-4">
                Choose your service and reach out for a tailored solution.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Web Development", Icon: Globe },
              { label: "Mobile App Development", Icon: Smartphone },
              { label: "Billing Software", Icon: Briefcase },
              { label: "ERP & CRM Solutions", Icon: Database },
              { label: "Graphic Design", Icon: Palette },
              { label: "Social Media Marketing", Icon: Megaphone },
              { label: "Business Branding", Icon: Star },
              { label: "Video Editing", Icon: Video },
            ].map(({ label, Icon }, i) => (
              <Reveal key={label} delay={i * 60}>
                <a
                  href="#contact-quick"
                  className="group relative block h-full glass shimmer-border rounded-sm p-7 border border-[var(--gold)]/25 hover-lift overflow-hidden transition-all duration-500 hover:border-[var(--gold)]/70"
                >
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--gold)]/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative flex flex-col h-full">
                    <div className="font-display text-3xl text-[var(--gold)]/50 group-hover:text-gold-gradient transition-colors mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <Icon
                      className="w-6 h-6 text-[var(--gold)]/60 group-hover:text-[var(--gold)] transition-colors mb-3"
                      strokeWidth={1.5}
                    />
                    <div className="gold-divider mb-4" />
                    <h3 className="font-display text-xl md:text-2xl leading-snug text-foreground/95 group-hover:text-gold-gradient transition-colors">
                      {label}
                    </h3>
                    <div className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--gold)]/70 group-hover:text-[var(--gold)] transition-colors inline-flex items-center gap-2">
                      Enquire <span aria-hidden>→</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM SOLUTIONS BANNER */}
      <section id="custom-order" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.35_0.12_275_/_0.18),_transparent_60%)]" />
        </div>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="relative glass rounded-sm p-10 md:p-16 text-center overflow-hidden group">
              <div
                className="pointer-events-none absolute inset-0 rounded-sm"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px color-mix(in oklab, var(--gold) 35%, transparent), 0 0 80px -10px oklch(0.55 0.18 275 / 0.35)",
                }}
              />
              <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[oklch(0.55_0.18_275_/_0.12)] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[var(--gold)]/8 blur-3xl" />

              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-5">
                — Custom Solutions
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
                <span className="text-gold-gradient">Whatever your digital vision,</span>
                <br />
                we build it with precision.
              </h2>
              <div className="mx-auto my-6">
                <BrandDivider />
              </div>
              <p className="max-w-2xl mx-auto text-foreground/75 text-lg leading-relaxed mb-10">
                At Fruition Innovix, we craft fully customized digital solutions tailored to your
                business goals, industry, and growth strategy.
              </p>

              <a
                href="tel:+919629126119"
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-[var(--gold)]/30 text-[var(--gold)] hover:text-[var(--gold-soft)] hover:border-[var(--gold)]/60 transition-all mb-8"
              >
                <Phone className="w-4 h-4" />
                <span className="font-display tracking-wider text-lg">+91 96291 26119</span>
              </a>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+919629126119"
                  className="btn-gold rounded-full px-8 py-3 text-sm font-medium inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href="#contact-quick"
                  className="rounded-full px-8 py-3 text-sm font-medium inline-flex items-center gap-2 border border-[var(--gold)]/40 text-foreground hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/70 transition-all"
                >
                  <PenTool className="w-4 h-4" /> Get Custom Solution
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PULSE OF INNOVATION */}
      <section id="echoes" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_oklch(0.30_0.10_260_/_0.20),_transparent_50%)]" />
          <div className="circuit-grid opacity-20" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — What We Deliver
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4 text-gold-gradient">
                Pulse of Innovation
              </h2>
              <BrandDivider />
              <p className="max-w-2xl mx-auto text-[var(--brand-cream)]/90 text-lg md:text-xl italic font-display mt-4">
                Every project carries a purpose.
                <br />
                Every solution drives real business impact.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Custom web & mobile app development", Icon: Code2 },
              { label: "Enterprise ERP & CRM solutions", Icon: Database },
              { label: "Creative graphic design & branding", Icon: Palette },
              { label: "Performance digital marketing", Icon: TrendingUp },
              { label: "Social media management & growth", Icon: Megaphone },
              { label: "E-commerce platform development", Icon: ShoppingCart },
              { label: "Marketing & sales strategy consulting", Icon: BarChart3 },
              { label: "Professional video editing & production", Icon: Video },
            ].map(({ label, Icon }, i) => (
              <Reveal key={label} delay={i * 70}>
                <article className="group relative h-full glass rounded-sm p-7 border border-[var(--gold)]/25 hover-lift overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--gold)]/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative flex flex-col h-full">
                    <div className="font-display text-3xl text-[var(--gold)]/50 group-hover:text-gold-gradient transition-colors mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <Icon
                      className="w-6 h-6 text-[var(--gold)]/50 group-hover:text-[var(--gold)] transition-colors mb-3"
                      strokeWidth={1.5}
                    />
                    <div className="gold-divider mb-4" />
                    <h3 className="font-display text-xl md:text-2xl leading-snug text-foreground/95 group-hover:text-gold-gradient transition-colors">
                      {label}
                    </h3>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/0 group-hover:ring-[var(--gold)]/50 transition-all duration-500 rounded-sm pointer-events-none" />
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-14">
              <a
                href="#contact-quick"
                className="btn-gold rounded-full px-8 py-3.5 text-sm font-medium tracking-wide uppercase inline-flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" /> Start Your Project
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.28_0.08_270_/_0.12),_transparent_60%)]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Our Process
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">From idea to impact</h2>
              <BrandDivider />
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg mt-4">
                Six focused steps — every project follows our proven path to success.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
              {processSteps.map((p, i) => (
                <Reveal key={p.t} delay={i * 90}>
                  <div className="relative text-center group">
                    <div className="relative mx-auto w-28 h-28 md:w-32 md:h-32 mb-6">
                      <div className="absolute -inset-2 rounded-full bg-[var(--gold)]/15 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-br from-[var(--gold)] via-[var(--gold-soft)]/60 to-[var(--gold)]/30 shadow-[0_0_30px_-6px_rgba(212,175,55,0.45)] group-hover:shadow-[0_0_45px_-4px_rgba(212,175,55,0.75)] transition-all duration-500 group-hover:scale-105">
                        <div
                          className="w-full h-full rounded-full flex items-center justify-center"
                          style={{
                            background:
                              "radial-gradient(circle at 40% 30%, oklch(0.22 0.06 270), oklch(0.10 0.03 265))",
                          }}
                        >
                          <p.Icon
                            className="w-10 h-10 text-[var(--gold)] transition-transform duration-500 group-hover:scale-110"
                            strokeWidth={1.3}
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full glass border border-[var(--gold)]/60 flex items-center justify-center font-display text-sm text-gold-gradient shadow-lg">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl mb-2 group-hover:text-gold-gradient transition-colors">
                      {p.t}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed px-2">{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.22_0.08_280_/_0.20),_transparent_65%)]" />
          <div className="stars opacity-40" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Client Voices
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">Words from our clients</h2>
              <BrandDivider />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                q: "Fruition Innovix transformed our entire digital presence. Their web development team delivered a platform that exceeded every expectation we had.",
                n: "Rajesh Kumar",
                c: "CEO, TechVentures · Chennai",
              },
              {
                q: "The ERP system they built for our manufacturing unit saved countless hours of manual work. True professionals with deep expertise.",
                n: "Priya Sharma",
                c: "Operations Head · Bangalore",
              },
              {
                q: "Our brand identity has never been stronger. Fruition Innovix understood our vision perfectly and delivered branding that commands attention.",
                n: "Anand Krishnan",
                c: "Founder, RetailHub · Mumbai",
              },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 100}>
                <article className="relative h-full glass rounded-sm p-8 border border-[var(--gold)]/20 hover-lift overflow-hidden group">
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[oklch(0.55_0.18_275_/_0.10)] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="font-display text-6xl text-[var(--gold)]/40 leading-none mb-2">
                    "
                  </div>
                  <p className="text-foreground/85 leading-relaxed italic font-display text-lg mb-6">
                    {t.q}
                  </p>
                  <div className="gold-divider mb-4" />
                  <div className="font-display text-lg text-gold-gradient">{t.n}</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">
                    {t.c}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact-quick" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.28_0.10_275_/_0.15),_transparent_60%)]" />
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[80%] h-80 rounded-full bg-[oklch(0.55_0.15_270_/_0.08)] blur-3xl" />
        </div>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-5">
                — Contact Us —
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
                <span className="text-gold-gradient">Let's build your digital future</span>
                <br />
                together with innovation.
              </h2>
              <div className="mx-auto my-6">
                <BrandDivider />
              </div>
              <p className="max-w-2xl mx-auto text-foreground/75 text-lg leading-relaxed">
                At Fruition Innovix, we bring your ideas to life with cutting-edge technology,
                creative design, and smart marketing strategy.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <EnquiryForm />
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="tel:+919629126119"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-[var(--gold)]/30 text-[var(--gold)] hover:border-[var(--gold)]/60 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span className="font-display tracking-wider text-base sm:text-lg">
                  +91 96291 26119
                </span>
              </a>
              <div className="inline-flex items-start gap-3 px-6 py-3 rounded-2xl glass border border-[var(--gold)]/20 text-foreground/85 max-w-md">
                <MapPin className="w-4 h-4 text-[var(--gold)] mt-1 shrink-0" />
                <span className="font-display tracking-wider text-sm sm:text-base leading-relaxed text-center sm:text-left">
                  Fruition Innovix,
                  <br />
                  Creative & Digital Solutions,
                  <br />
                  India
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              <a
                href="mailto:hello@fruitioninnovix.com"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-[var(--gold)]/30 text-foreground/90 hover:text-[var(--gold)] hover:border-[var(--gold)]/60 transition-all"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="text-[var(--gold)]"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                <span className="font-display tracking-wider text-sm sm:text-base">
                  hello@fruitioninnovix.com
                </span>
              </a>
              <a
                href="https://instagram.com/fruitioninnovix"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-[var(--gold)]/30 text-foreground/90 hover:text-[var(--gold)] hover:border-[var(--gold)]/60 transition-all"
              >
                <Instagram className="w-4 h-4 text-[var(--gold)]" />
                <span className="font-display tracking-wider text-sm sm:text-base">
                  @fruitioninnovix
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 mb-14 mx-auto max-w-xl">
              <div className="relative glass rounded-sm p-6 sm:p-8 text-center border border-[var(--gold)]/30 overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-0 rounded-sm"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px color-mix(in oklab, var(--gold) 30%, transparent), 0 0 60px -15px oklch(0.55 0.16 275 / 0.30)",
                  }}
                />
                <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-3">
                  — Direct Line —
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-gold-gradient mb-4">
                  Talk to Our Team
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:+919629126119"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-[var(--gold)]/40 text-[var(--gold)] hover:border-[var(--gold)]/70 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-display tracking-wider">Call +91 96291 26119</span>
                  </a>
                  <a
                    href="https://wa.me/919629126119"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-[var(--gold)]/40 text-foreground hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/70 transition-all"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-[var(--gold)]"
                    >
                      <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12L4 20l4.2-1.1A7.93 7.93 0 0 0 12 19.9a7.94 7.94 0 0 0 5.6-13.6zM12 18.5a6.55 6.55 0 0 1-3.4-.9l-.2-.1-2.5.7.7-2.4-.2-.3A6.6 6.6 0 1 1 12 18.5z" />
                    </svg>
                    <span className="font-display tracking-wider">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <a
                href="tel:+919629126119"
                className="btn-gold rounded-full px-8 py-3 text-sm font-medium inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/919629126119"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-8 py-3 text-sm font-medium inline-flex items-center gap-2 border border-[var(--gold)]/40 text-foreground hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/70 transition-all w-full sm:w-auto justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[var(--gold)]"
                >
                  <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12L4 20l4.2-1.1A7.93 7.93 0 0 0 12 19.9a7.94 7.94 0 0 0 5.6-13.6zM12 18.5a6.55 6.55 0 0 1-3.4-.9l-.2-.1-2.5.7.7-2.4-.2-.3A6.6 6.6 0 1 1 12 18.5zm3.6-4.9c-.2-.1-1.2-.6-1.4-.6s-.3-.1-.4.1-.5.6-.6.7-.2.2-.4.1a5.5 5.5 0 0 1-1.6-1 6 6 0 0 1-1.1-1.4c-.1-.2 0-.3.1-.4l.3-.4.2-.3a.4.4 0 0 0 0-.4c0-.1-.4-1-.6-1.4s-.3-.3-.4-.3h-.4a.7.7 0 0 0-.5.2 2 2 0 0 0-.6 1.5 3.5 3.5 0 0 0 .7 1.9 8 8 0 0 0 3.1 2.7c1.9.8 1.9.5 2.3.5a1.8 1.8 0 0 0 1.2-.8 1.5 1.5 0 0 0 .1-.8c0-.1-.2-.2-.4-.3z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div
              className="relative group rounded-sm overflow-hidden shimmer-border transition-all duration-500 hover:scale-[1.01]"
              style={{
                boxShadow:
                  "0 0 0 1px color-mix(in oklab, var(--gold) 40%, transparent), 0 30px 80px -20px oklch(0.55 0.15 270 / 0.25)",
              }}
            >
              <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_transparent_55%,_oklch(0_0_0_/_0.55))] mix-blend-multiply" />
              <iframe
                title="Fruition Innovix — Creative & Digital Solutions, India"
                src="https://www.google.com/maps?q=India&output=embed"
                className="w-full h-[380px] md:h-[460px] border-0 grayscale-[0.4] contrast-110 brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-14 px-6 border-t border-[var(--gold)]/15">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="font-display text-3xl text-gold-gradient">Fruition</div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Innovix — Digital Solutions
            </div>
          </div>
          <div className="flex items-center gap-3">
            {[
              {
                Icon: Instagram,
                href: "https://instagram.com/fruitioninnovix",
                label: "Instagram",
              },
              { Icon: Facebook, href: "https://facebook.com/fruitioninnovix", label: "Facebook" },
              { Icon: Youtube, href: "https://youtube.com/@fruitioninnovix", label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full glass border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)] hover:glow-gold hover:-translate-y-0.5 transition-all"
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <div className="text-xs text-muted-foreground tracking-wider text-center md:text-right">
            © {new Date().getFullYear()} Fruition Innovix.
            <br />
            Built with innovation & smart strategy.
          </div>
        </div>
      </footer>
    </div>
  );
}
