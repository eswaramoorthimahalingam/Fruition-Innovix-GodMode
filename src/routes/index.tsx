import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import founderImg from "@/assets/file_00000000f94471fa82e82b2b03bf4725.png";
import { Navbar } from "@/components/site/Navbar";
import { brandLogo, brandMark } from "@/lib/brand-assets";
import {
  Particles,
  Reveal,
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
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fruition Innovix — Technology, Branding & Business Growth" },
      {
        name: "description",
        content:
          "Fruition Innovix builds websites, apps, brands, campaigns, and business systems for growing companies.",
      },
      { property: "og:title", content: "Fruition Innovix" },
      {
        property: "og:description",
        content:
          "Technology, branding, and growth support shaped around real business outcomes.",
      },
      { property: "og:image", content: brandLogo },
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
    title: "Website Development",
    desc: "Fast, responsive websites built to explain, convert, and scale.",
    Icon: Monitor,
    color: "oklch(0.55 0.18 250)",
    glow: "oklch(0.55 0.18 250 / 0.35)",
    img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Mobile App Development",
    desc: "Android and iOS apps with clear flows and reliable performance.",
    Icon: Smartphone,
    color: "oklch(0.60 0.17 200)",
    glow: "oklch(0.60 0.17 200 / 0.35)",
    img: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Custom Software Development",
    desc: "Workflow tools that reduce manual effort and improve control.",
    Icon: Code2,
    color: "oklch(0.55 0.15 170)",
    glow: "oklch(0.55 0.15 170 / 0.35)",
    img: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Billing Software Solutions",
    desc: "Billing and inventory systems designed for everyday accuracy.",
    Icon: Briefcase,
    color: "oklch(0.68 0.16 95)",
    glow: "oklch(0.68 0.16 95 / 0.35)",
    img: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "ERP & CRM Solutions",
    desc: "Connected systems for teams, customers, stock, and reporting.",
    Icon: Database,
    color: "oklch(0.58 0.16 250)",
    glow: "oklch(0.58 0.16 250 / 0.35)",
    img: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Graphic Design & Branding",
    desc: "Identity, packaging, and creatives that make the brand easier to trust.",
    Icon: Palette,
    color: "oklch(0.60 0.18 320)",
    glow: "oklch(0.60 0.18 320 / 0.35)",
    img: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, ads, and campaigns focused on qualified enquiries.",
    Icon: TrendingUp,
    color: "oklch(0.65 0.16 140)",
    glow: "oklch(0.65 0.16 140 / 0.35)",
    img: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Social Media Marketing",
    desc: "Consistent content and campaigns for better audience recall.",
    Icon: Megaphone,
    color: "oklch(0.62 0.14 290)",
    glow: "oklch(0.62 0.14 290 / 0.35)",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Ecommerce Marketing",
    desc: "Store, marketplace, and conversion support for online sales.",
    Icon: ShoppingCart,
    color: "oklch(0.78 0.16 82)",
    glow: "oklch(0.78 0.16 82 / 0.35)",
    img: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Product Photography & Video Editing",
    desc: "Product photos, reels, and videos made for digital selling.",
    Icon: Video,
    color: "oklch(0.62 0.15 30)",
    glow: "oklch(0.62 0.15 30 / 0.35)",
    img: "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Business Consulting",
    desc: "Practical guidance for offers, systems, operations, and growth.",
    Icon: BarChart3,
    color: "oklch(0.65 0.18 300)",
    glow: "oklch(0.65 0.18 300 / 0.35)",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const why = [
  {
    k: "01",
    t: "One Accountable Team",
    d: "Strategy, build, content, and growth work stay connected from day one.",
  },
  {
    k: "02",
    t: "Clear Custom Plans",
    d: "We shape the roadmap around your market, budget, timeline, and goals.",
  },
  {
    k: "03",
    t: "Modern Execution",
    d: "Useful tools, sharp visuals, and measurable campaigns without clutter.",
  },
  {
    k: "04",
    t: "Result Focus",
    d: "Every decision is tied to visibility, leads, sales, efficiency, or trust.",
  },
];

const portfolioItems = [
  {
    title: "Technology Solutions",
    stack: ["Websites", "Mobile Apps", "ERP / CRM"],
    desc: "Websites, apps, dashboards, billing tools, ERP, CRM, and automation.",
    type: "What We Deliver",
    color: "oklch(0.55 0.18 250)",
    Icon: Monitor,
    img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "Creative Branding",
    stack: ["Logo Design", "Identity", "Packaging"],
    desc: "Logo systems, visual identity, packaging, and campaign creatives.",
    type: "What We Deliver",
    color: "oklch(0.60 0.17 200)",
    Icon: Palette,
    img: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "Digital Marketing Excellence",
    stack: ["SEO", "Google Ads", "Meta Ads"],
    desc: "Search, ads, social campaigns, and lead-generation funnels.",
    type: "What We Deliver",
    color: "oklch(0.55 0.15 170)",
    Icon: TrendingUp,
    img: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "Business Growth Strategies",
    stack: ["Sales Funnels", "Consulting", "Revenue Plans"],
    desc: "Revenue plans, sales funnels, and operational consulting.",
    type: "What We Deliver",
    color: "oklch(0.78 0.16 82)",
    Icon: BarChart3,
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "Ecommerce Success",
    stack: ["Online Stores", "Marketplaces", "Conversions"],
    desc: "Store builds, marketplace tuning, product promotion, and conversion fixes.",
    type: "What We Deliver",
    color: "oklch(0.65 0.16 140)",
    Icon: ShoppingCart,
    img: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "Visual Content Creation",
    stack: ["Photography", "Videos", "Reels"],
    desc: "Photography, promos, reels, and edited assets for campaigns.",
    type: "What We Deliver",
    color: "oklch(0.60 0.18 320)",
    Icon: Video,
    img: "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
  {
    title: "End-to-End Support",
    stack: ["Planning", "Development", "Growth"],
    desc: "Planning, launch, measurement, and ongoing improvement.",
    type: "What We Deliver",
    color: "oklch(0.65 0.18 300)",
    Icon: Rocket,
    img: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=700",
  },
];

const processSteps = [
  {
    t: "Understand",
    d: "Clarify goals, market, blockers, and priorities.",
    Icon: Search,
  },
  {
    t: "Strategize",
    d: "Create a focused roadmap with the right work first.",
    Icon: Rocket,
  },
  {
    t: "Build",
    d: "Design, develop, write, launch, and connect.",
    Icon: Palette,
  },
  {
    t: "Grow",
    d: "Improve campaigns, systems, and conversion paths.",
    Icon: Code2,
  },
  {
    t: "Modernize",
    d: "Keep tools, content, and brand assets current.",
    Icon: Globe,
  },
  {
    t: "Perform",
    d: "Track visibility, leads, sales, and efficiency.",
    Icon: BarChart3,
  },
];

const techLogos = [
  { name: "Website Development", bg: "#3178C6", text: "Web" },
  { name: "Mobile Apps", bg: "#61DAFB", text: "Apps", dark: true },
  { name: "Custom Software", bg: "#339933", text: "Software" },
  { name: "Billing Software", bg: "#F7DF1E", text: "Billing", dark: true },
  { name: "ERP", bg: "#4169E1", text: "ERP" },
  { name: "CRM", bg: "#47A248", text: "CRM" },
  { name: "Branding", bg: "#F24E1E", text: "Branding" },
  { name: "SEO", bg: "#34A853", text: "SEO" },
  { name: "Google Ads", bg: "#4285F4", text: "Ads" },
  { name: "Meta Ads", bg: "#0866FF", text: "Meta" },
  { name: "Social Media", bg: "#E535AB", text: "Social" },
  { name: "Ecommerce", bg: "#FF9900", text: "Commerce", dark: true },
  { name: "Photography", bg: "#EC4899", text: "Photo" },
  { name: "Video Editing", bg: "#A855F7", text: "Video" },
  { name: "Consulting", bg: "#0F766E", text: "Consulting" },
  { name: "Automation", bg: "#6D28D9", text: "Automation" },
];

const valuePillars = [
  {
    title: "Modernization",
    desc: "Systems and campaigns stay current without unnecessary complexity.",
    Icon: Globe,
  },
  {
    title: "Ingenuity",
    desc: "Creative choices are practical, memorable, and easy to use.",
    Icon: PenTool,
  },
  {
    title: "Excellence",
    desc: "Details, delivery, and polish matter at every step.",
    Icon: Star,
  },
  {
    title: "Integrity",
    desc: "Transparent plans, clear updates, and accountable delivery.",
    Icon: Layers,
  },
  {
    title: "Performance",
    desc: "Work is measured by outcomes, not activity.",
    Icon: BarChart3,
  },
];

const industries = [
  {
    label: "Retail & Ecommerce",
    desc: "Stores, campaigns, product pages, and customer engagement.",
    Icon: ShoppingCart,
    img: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    label: "Manufacturing",
    desc: "ERP, inventory, billing, process automation, and reporting.",
    Icon: Briefcase,
    img: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    label: "Healthcare",
    desc: "Websites, systems, and campaigns for care and wellness brands.",
    Icon: Phone,
    img: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    label: "Education",
    desc: "Digital tools and campaigns for institutes and training brands.",
    Icon: Monitor,
    img: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    label: "Real Estate",
    desc: "Property presentation, lead funnels, and online visibility.",
    Icon: MapPin,
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    label: "Restaurants & Hospitality",
    desc: "Menus, local campaigns, booking flows, and social content.",
    Icon: Star,
    img: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    label: "Fashion & Apparel",
    desc: "Brand visuals, ecommerce, product content, and performance ads.",
    Icon: Palette,
    img: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    label: "Startups & Entrepreneurs",
    desc: "Identity, website, launch plan, and early growth support.",
    Icon: Rocket,
    img: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    label: "Service-Based Businesses",
    desc: "Credibility pages, enquiry flows, reviews, and lead campaigns.",
    Icon: Megaphone,
    img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    label: "Corporate Organizations",
    desc: "Scalable systems, brand assets, and transformation support.",
    Icon: Database,
    img: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
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
      <section className="relative min-h-screen overflow-hidden vignette">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/10 to-background/80" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, transparent 28%, oklch(0.06 0.02 265 / 0.45) 100%)",
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

        <div className="hero-stage relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-end px-6 pb-20 pt-40 text-center sm:pb-24 sm:pt-48 lg:pb-28 lg:pt-56">
          <Reveal delay={150} className="in">
            <div className="hero-brand-lockup mx-auto grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(15rem,0.48fr)] md:gap-12 lg:gap-16">
              <h1 className="hero-brand-title font-display text-6xl leading-[0.9] sm:text-7xl md:text-left md:text-8xl lg:text-9xl">
                <span className="block underline-gold text-gold-gradient">Fruition</span>
                <span className="mt-2 block text-5xl font-light italic text-foreground/95 sm:text-6xl md:text-7xl lg:text-8xl">
                  Innovix
                </span>
              </h1>
              <div
                className="hero-brand-logo logo-hero relative mx-auto grid aspect-square w-40 shrink-0 place-items-center overflow-hidden rounded-3xl border border-[var(--gold)]/45 bg-white p-3 sm:w-52 md:w-full lg:max-w-[18rem]"
                aria-hidden="true"
              >
                <img src={brandMark} alt="" className="h-full w-full object-contain" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} className="in">
            <div className="hero-message mx-auto mt-10 grid w-full max-w-5xl gap-7 py-7 text-center md:grid-cols-[0.82fr_1.18fr] md:items-center md:text-left">
              <div>
                <p className="font-display text-2xl italic leading-tight text-[var(--brand-cream)]/92 sm:text-3xl md:text-4xl">
                  Innovate. Create. Grow.
                </p>
                <p className="mt-5 text-[9px] uppercase leading-relaxed tracking-[0.26em] text-[var(--gold-soft)] sm:text-xs sm:tracking-[0.42em]">
                  Technology, Branding & Growth Systems
                </p>
              </div>
              <div className="hero-copy-panel md:border-l md:border-[var(--gold)]/20 md:pl-8 lg:pl-10">
                <p className="mx-auto max-w-[44rem] text-sm leading-relaxed text-foreground/78 sm:text-lg md:mx-0">
                  We build websites, apps, brand systems, campaigns, and business tools that help
                  teams look credible, work faster, and win better enquiries.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  <a
                    href="#gallery"
                    className="btn-gold cta-pulse rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wide"
                  >
                    View Services
                  </a>
                  <a
                    href="#contact-quick"
                    className="btn-outline-gold rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-wide"
                  >
                    Start a Project
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Who We Are
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-6 leading-tight">
                Empowering businesses for the{" "}
                <span className="italic text-gold-gradient">digital future</span>.
              </h2>
              <BrandDivider />
            </div>
          </Reveal>

          <div className="grid items-start gap-12 lg:grid-cols-[minmax(20rem,0.9fr)_minmax(0,1.05fr)] lg:gap-16">
            <div className="lg:flex lg:justify-end">
              <Reveal delay={80}>
                <div className="w-full max-w-[39rem]">
                  <div className="relative group logo-card">
                    <div className="absolute -inset-4 rounded-full bg-[var(--gold)]/8 blur-3xl" />
                    <div
                      className="relative aspect-square overflow-hidden rounded-sm border border-[var(--gold)]/24 bg-black/60"
                      style={{ boxShadow: "var(--shadow-cinematic)" }}
                    >
                      <img
                        src={founderImg}
                        alt="Jeyashree Ramesh, B.E., Founder of Fruition Innovix"
                        className="h-full w-full object-cover object-[50%_18%]"
                        loading="lazy"
                        decoding="async"
                        width={941}
                        height={1672}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/45 to-transparent" />
                </div>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <div className="w-full max-w-[43rem]">
                <p className="text-xl font-semibold leading-relaxed text-foreground/88 sm:text-2xl">
                  We turn ideas into useful digital products, memorable brand assets, and clear
                  growth actions.
                </p>
                <p className="mt-7 text-base font-medium leading-relaxed text-muted-foreground sm:text-xl">
                  One team plans the message, builds the system, launches the campaign, and keeps
                  improving the result.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      k: "01",
                      t: "Digital Products",
                      d: "Websites, mobile apps, ERP, CRM, billing systems, and custom software built for daily use.",
                    },
                    {
                      k: "02",
                      t: "Brand Identity",
                      d: "Logo systems, packaging, graphic design, product visuals, and campaigns that make the brand easier to trust.",
                    },
                    {
                      k: "03",
                      t: "Growth Marketing",
                      d: "SEO, ads, social media, ecommerce marketing, and performance plans focused on leads and sales.",
                    },
                    {
                      k: "04",
                      t: "Business Guidance",
                      d: "Planning, process improvement, automation ideas, and long-term support for sustainable growth.",
                    },
                  ].map((item) => (
                    <article
                      key={item.k}
                      className="group relative min-h-48 overflow-hidden rounded-sm border border-[var(--gold)]/22 glass p-6 hover-lift"
                    >
                      <div className="font-display text-sm text-gold-gradient">{item.k}</div>
                      <h3 className="mt-5 font-display text-2xl leading-snug text-foreground sm:text-3xl">
                        {item.t}
                      </h3>
                      <p className="mt-4 text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
                        {item.d}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
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
              <h2 className="font-display text-5xl md:text-6xl mb-4">Our Core Services</h2>
              <BrandDivider />
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                Focused service lines for launch, operations, visibility, and sales.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="group relative overflow-hidden rounded-sm border border-[var(--gold)]/15 hover-lift glass corner-accents-full card-3d flex flex-col">
                  {/* Corner glow dots */}
                  <span className="corner-dot corner-dot--tl" />
                  <span className="corner-dot corner-dot--tr" />
                  <span className="corner-dot corner-dot--bl" />
                  <span className="corner-dot corner-dot--br" />

                  {/* Image header */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(ellipse at 50% 100%, ${s.glow}, transparent 70%)`,
                      }}
                    />
                    {/* Scan line */}
                    <div className="img-scan-line" />
                    {/* Icon overlay on image */}
                    <div
                      className="absolute bottom-4 left-5 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${s.color}33, ${s.color}66)`,
                        border: `1px solid ${s.color}77`,
                        boxShadow: `0 0 20px -4px ${s.glow}`,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <s.Icon className="w-6 h-6" style={{ color: s.color }} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col flex-1 p-6">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(ellipse at 30% 0%, ${s.glow}, transparent 65%)`,
                      }}
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/0 group-hover:ring-[var(--gold)]/40 transition-all duration-500 rounded-sm" />
                    <div className="holo-border" />

                    <div className="relative">
                      <div className="w-8 h-px bg-[var(--gold)] mb-3 transition-all duration-500 group-hover:w-16" />
                      <h3 className="font-display text-xl md:text-2xl mb-2 text-foreground group-hover:text-gold-gradient transition-all">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>

                    <div className="relative mt-4 text-xs uppercase tracking-[0.3em] text-[var(--gold)]/60 group-hover:text-[var(--gold)] transition-colors inline-flex items-center gap-2">
                      Learn More <span aria-hidden>→</span>
                    </div>
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
                — Powering Your Business Success
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-4">
                Modernization, ingenuity, excellence, integrity, and{" "}
                <span className="text-gold-gradient">performance</span>
              </h2>
              <BrandDivider />
              <p className="max-w-2xl mx-auto text-muted-foreground text-base italic font-display">
                Modern tools, clear creative decisions, and measurable execution.
              </p>
            </div>
          </Reveal>

          <div className="mb-12 grid gap-5 md:grid-cols-5">
            {valuePillars.map(({ title, desc, Icon }, i) => (
              <Reveal key={title} delay={80 + i * 60}>
                <article className="group h-full rounded-sm border border-[var(--gold)]/15 glass p-5 hover-lift">
                  <Icon
                    className="mb-4 h-6 w-6 text-[var(--gold)] transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-xl text-foreground/95 group-hover:text-gold-gradient">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div
              className="relative overflow-hidden rounded-sm border border-[var(--gold)]/20 glass p-5 md:p-8"
              style={{ boxShadow: "0 0 60px -20px oklch(0.60 0.16 280 / 0.4)" }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.75_0.16_85_/_0.16),transparent_36%),radial-gradient(circle_at_bottom_right,oklch(0.52_0.18_280_/_0.18),transparent_32%)]" />
              <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {techLogos.map(({ name, bg, text, dark }) => (
                  <div
                    key={name}
                    className="flex min-h-20 items-center gap-3 rounded-sm border border-white/10 bg-background/45 p-3"
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-xs font-semibold"
                      style={{ background: bg, color: dark ? "#151515" : "#fff" }}
                    >
                      {text}
                    </span>
                    <span className="text-sm font-medium tracking-wide text-foreground/85">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
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

      {/* WHAT WE DELIVER */}
      <section id="gallery" className="relative py-32 px-6">
        <div className="absolute inset-0 -z-10">
          <div className="circuit-grid opacity-25" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — What We Deliver
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">
                Smart digital solutions for every growth stage
              </h2>
              <BrandDivider />
            </div>
          </Reveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {portfolioItems.map((item, i) => (
              <Reveal key={i} delay={(i % 3) * 100}>
                <article className="group relative mb-6 break-inside-avoid overflow-hidden rounded-sm border border-[var(--gold)]/10 hover-lift glass corner-accents-full card-3d">
                  {/* Corner glow dots */}
                  <span className="corner-dot corner-dot--tl" />
                  <span className="corner-dot corner-dot--tr" />
                  <span className="corner-dot corner-dot--bl" />
                  <span className="corner-dot corner-dot--br" />
                  <div className="holo-border" />

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/85" />
                    <div className="img-scan-line" />
                    {/* Colored accent overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 mix-blend-color"
                      style={{ background: item.color }}
                    />
                    {/* Top bar on image */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
                    />
                    {/* Icon on image */}
                    <div
                      className="absolute bottom-4 left-5 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}33, ${item.color}55)`,
                        border: `1px solid ${item.color}66`,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <item.Icon
                        className="w-6 h-6"
                        style={{ color: item.color }}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]/70 mb-2">
                      {item.type}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl mb-3 text-foreground group-hover:text-gold-gradient transition-all">
                      {item.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>

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
                  <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/0 group-hover:ring-[var(--gold)]/40 transition-all duration-500 rounded-sm pointer-events-none" />
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
                — Why Businesses Choose Fruition Innovix
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">
                Think bigger. Build better. Grow faster.
              </h2>
              <BrandDivider />
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Helping businesses achieve sustainable growth through smart digital solutions.
              </p>
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
                — Our Services
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4 text-gold-gradient">
                Services built for complete business growth
              </h2>
              <BrandDivider />
              <p className="max-w-2xl mx-auto text-[var(--brand-cream)]/90 text-lg md:text-xl italic font-display mt-4">
                From business websites to automation, branding, marketing, ecommerce, and
                consulting.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Website Development",
                Icon: Globe,
                img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                label: "Mobile App Development",
                Icon: Smartphone,
                img: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                label: "Custom Software Development",
                Icon: Code2,
                img: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                label: "Billing Software Solutions",
                Icon: Briefcase,
                img: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                label: "ERP & CRM Solutions",
                Icon: Database,
                img: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                label: "Graphic Design & Branding",
                Icon: Palette,
                img: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                label: "Digital Marketing",
                Icon: TrendingUp,
                img: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                label: "Social Media Marketing",
                Icon: Megaphone,
                img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                label: "Ecommerce Marketing",
                Icon: ShoppingCart,
                img: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                label: "Product Photography & Video Editing",
                Icon: Video,
                img: "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
              {
                label: "Business Consulting",
                Icon: BarChart3,
                img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
              },
            ].map(({ label, Icon, img }, i) => (
              <Reveal key={label} delay={i * 60}>
                <a
                  href="#contact-quick"
                  className="group relative block h-full glass shimmer-border rounded-sm border border-[var(--gold)]/25 hover-lift overflow-hidden transition-all duration-500 hover:border-[var(--gold)]/70 card-3d corner-accents-full flex flex-col"
                >
                  {/* Corner glow dots */}
                  <span className="corner-dot corner-dot--tl" />
                  <span className="corner-dot corner-dot--tr" />
                  <span className="corner-dot corner-dot--bl" />
                  <span className="corner-dot corner-dot--br" />
                  <div className="holo-border" />

                  {/* Image strip */}
                  <div className="relative h-28 overflow-hidden shrink-0">
                    <img
                      src={img}
                      alt=""
                      aria-hidden
                      className="w-full h-full object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-70"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                    <div className="img-scan-line" />
                    <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[var(--gold)]/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  <div className="relative flex flex-col flex-1 p-6">
                    <div className="font-display text-3xl text-[var(--gold)]/50 group-hover:text-gold-gradient transition-colors mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <Icon
                      className="w-5 h-5 text-[var(--gold)]/60 group-hover:text-[var(--gold)] transition-colors mb-2"
                      strokeWidth={1.5}
                    />
                    <div className="gold-divider mb-3" />
                    <h3 className="font-display text-lg md:text-xl leading-snug text-foreground/95 group-hover:text-gold-gradient transition-colors">
                      {label}
                    </h3>
                    <div className="mt-4 text-xs uppercase tracking-[0.3em] text-[var(--gold)]/70 group-hover:text-[var(--gold)] transition-colors inline-flex items-center gap-2">
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

              <div className="logo-mark mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full border border-[var(--gold)]/35 bg-black/60">
                <img src={brandLogo} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-5">
                — Business Consulting —
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
                <span className="text-gold-gradient">Innovate • Elevate • Accelerate</span>
                <br />
                with future-ready strategy.
              </h2>
              <div className="mx-auto my-6">
                <BrandDivider />
              </div>
              <p className="max-w-2xl mx-auto text-foreground/75 text-lg leading-relaxed mb-10">
                Whether you are launching a startup, expanding your business, modernizing
                operations, or building a stronger brand, Fruition Innovix becomes an extension of
                your business.
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
                — More Than a Service Provider
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4 text-gold-gradient">
                We work alongside your business
              </h2>
              <BrandDivider />
              <p className="max-w-2xl mx-auto text-[var(--brand-cream)]/90 text-lg md:text-xl italic font-display mt-4">
                Understand your goals.
                <br />
                Solve challenges, identify opportunities, and create strategies for sustainable
                success.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Comprehensive technology and digital solutions", Icon: Code2 },
              { label: "Creative branding and design expertise", Icon: Palette },
              { label: "Customized business growth strategies", Icon: BarChart3 },
              { label: "Results-driven marketing approach", Icon: TrendingUp },
              { label: "Affordable and scalable services", Icon: Layers },
              { label: "Dedicated client support", Icon: Phone },
              { label: "Industry-focused solutions", Icon: Briefcase },
              { label: "Long-term partnership mindset", Icon: Star },
              { label: "Commitment to innovation and excellence", Icon: Rocket },
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

      {/* INDUSTRIES */}
      <section id="industries" className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="circuit-grid opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.24_0.08_270_/_0.16),_transparent_64%)]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — Industries We Serve
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-4">
                Tailored solutions across business sectors
              </h2>
              <BrandDivider />
              <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
                We help businesses streamline operations, strengthen brand presence, and achieve
                sustainable growth across a wide range of industries.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {industries.map(({ label, desc, Icon, img }, i) => (
              <Reveal key={label} delay={i * 45}>
                <article className="group relative h-full overflow-hidden rounded-sm border border-[var(--gold)]/15 glass hover-lift card-3d corner-accents-full flex flex-col">
                  {/* Corner glow dots */}
                  <span className="corner-dot corner-dot--tl" />
                  <span className="corner-dot corner-dot--tr" />
                  <span className="corner-dot corner-dot--bl" />
                  <span className="corner-dot corner-dot--br" />
                  <div className="holo-border" />

                  {/* Image */}
                  <div className="relative h-36 overflow-hidden shrink-0">
                    <img
                      src={img}
                      alt={label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75" />
                    <div className="img-scan-line" />
                    <Icon
                      className="absolute bottom-3 left-3 h-5 w-5 text-[var(--gold)] drop-shadow-[0_0_6px_oklch(0.88_0.16_88_/_0.8)] transition-transform duration-500 group-hover:scale-125"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="font-display text-lg leading-snug text-foreground/95 group-hover:text-gold-gradient transition-colors">
                      {label}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={260}>
            <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-[var(--brand-cream)]/85">
              No matter your industry, Fruition Innovix delivers customized solutions designed to
              help your business innovate, grow, and succeed.
            </p>
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
              <h2 className="font-display text-5xl md:text-6xl mb-4">From idea to success</h2>
              <BrandDivider />
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg mt-4">
                We understand, strategize, build, and continuously optimize your business for
                long-term growth.
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
                img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120",
              },
              {
                q: "The ERP system they built for our manufacturing unit saved countless hours of manual work. True professionals with deep expertise.",
                n: "Priya Sharma",
                c: "Operations Head · Bangalore",
                img: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=120",
              },
              {
                q: "Our brand identity has never been stronger. Fruition Innovix understood our vision perfectly and delivered branding that commands attention.",
                n: "Anand Krishnan",
                c: "Founder, RetailHub · Mumbai",
                img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=120",
              },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 100}>
                <article className="relative h-full glass rounded-sm border border-[var(--gold)]/20 hover-lift overflow-hidden group card-3d corner-accents-full flex flex-col">
                  {/* Corner glow dots */}
                  <span className="corner-dot corner-dot--tl" />
                  <span className="corner-dot corner-dot--tr" />
                  <span className="corner-dot corner-dot--bl" />
                  <span className="corner-dot corner-dot--br" />
                  <div className="holo-border" />

                  {/* Decorative top strip */}
                  <div className="relative h-28 overflow-hidden shrink-0">
                    <img
                      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=700"
                      alt=""
                      aria-hidden
                      className="w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
                    <div className="img-scan-line" />
                    <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[oklch(0.55_0.18_275_/_0.15)] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  <div className="relative flex flex-col flex-1 p-8 pt-4">
                    <div className="font-display text-6xl text-[var(--gold)]/40 leading-none mb-2">
                      "
                    </div>
                    <p className="text-foreground/85 leading-relaxed italic font-display text-lg mb-6 flex-1">
                      {t.q}
                    </p>
                    <div className="gold-divider mb-4" />
                    <div className="flex items-center gap-4">
                      <img
                        src={t.img}
                        alt={t.n}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[var(--gold)]/40 shrink-0"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-display text-lg text-gold-gradient">{t.n}</div>
                        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-0.5">
                          {t.c}
                        </div>
                      </div>
                    </div>
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
              <div className="logo-mark mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full border border-[var(--gold)]/35 bg-black/60">
                <img src={brandLogo} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-5">
                — Contact Us —
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6">
                <span className="text-gold-gradient">Let's build your digital future</span>
                <br />
                together.
              </h2>
              <div className="mx-auto my-6">
                <BrandDivider />
              </div>
              <p className="max-w-2xl mx-auto text-foreground/75 text-lg leading-relaxed">
                Share your idea, business challenge, or growth goal. We will help you shape the
                right technology, branding, marketing, and consulting plan.
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
          <a href="#top" className="group flex items-center gap-4 text-center md:text-left">
            <span className="logo-orbit relative grid h-14 w-14 place-items-center overflow-hidden rounded-full border border-[var(--gold)]/35 bg-black/60">
              <img src={brandLogo} alt="" className="h-full w-full object-cover" />
            </span>
            <span>
              <span className="block font-display text-3xl text-gold-gradient">Fruition</span>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Innovix — Where Innovation Meets Strategy
              </span>
            </span>
          </a>
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
            Innovate • Elevate • Accelerate.
            <br />
            Empowering Businesses with Future-Ready Technology and Strategic Excellence.
          </div>
        </div>
      </footer>
    </div>
  );
}
