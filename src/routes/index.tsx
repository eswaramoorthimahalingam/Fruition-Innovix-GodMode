import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoFullImg from "@/assets/logo-removebg.png";
import logoMarkImg from "@/assets/logo-removebg1.png";
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
      { title: "Fruition Innovix — Technology, Branding & Business Growth" },
      {
        name: "description",
        content:
          "Fruition Innovix helps startups, entrepreneurs, and businesses grow with technology solutions, creative branding, digital marketing, ecommerce success, and business consulting.",
      },
      { property: "og:title", content: "Fruition Innovix" },
      {
        property: "og:description",
        content:
          "Innovate. Create. Grow. Your one-stop partner for technology, branding, and business growth.",
      },
      { property: "og:image", content: logoFullImg },
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
    desc: "Professional, responsive, and SEO-friendly websites designed to convert visitors into customers.",
    Icon: Monitor,
    color: "oklch(0.55 0.18 250)",
    glow: "oklch(0.55 0.18 250 / 0.35)",
  },
  {
    title: "Mobile App Development",
    desc: "Custom Android and iOS applications that deliver seamless user experiences.",
    Icon: Smartphone,
    color: "oklch(0.60 0.17 200)",
    glow: "oklch(0.60 0.17 200 / 0.35)",
  },
  {
    title: "Custom Software Development",
    desc: "Tailored software solutions that automate operations and improve efficiency.",
    Icon: Code2,
    color: "oklch(0.55 0.15 170)",
    glow: "oklch(0.55 0.15 170 / 0.35)",
  },
  {
    title: "Billing Software Solutions",
    desc: "Smart billing and inventory management systems for modern businesses.",
    Icon: Briefcase,
    color: "oklch(0.68 0.16 95)",
    glow: "oklch(0.68 0.16 95 / 0.35)",
  },
  {
    title: "ERP & CRM Solutions",
    desc: "Streamline operations, manage customers effectively, and improve productivity.",
    Icon: Database,
    color: "oklch(0.58 0.16 250)",
    glow: "oklch(0.58 0.16 250 / 0.35)",
  },
  {
    title: "Graphic Design & Branding",
    desc: "Creative designs that build trust, recognition, and lasting brand value.",
    Icon: Palette,
    color: "oklch(0.60 0.18 320)",
    glow: "oklch(0.60 0.18 320 / 0.35)",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that generate quality leads and measurable results.",
    Icon: TrendingUp,
    color: "oklch(0.65 0.16 140)",
    glow: "oklch(0.65 0.16 140 / 0.35)",
  },
  {
    title: "Social Media Marketing",
    desc: "Engaging content and campaigns that grow your audience and strengthen your brand.",
    Icon: Megaphone,
    color: "oklch(0.62 0.14 290)",
    glow: "oklch(0.62 0.14 290 / 0.35)",
  },
  {
    title: "Ecommerce Marketing",
    desc: "Drive traffic, increase conversions, and maximize online sales.",
    Icon: ShoppingCart,
    color: "oklch(0.78 0.16 82)",
    glow: "oklch(0.78 0.16 82 / 0.35)",
  },
  {
    title: "Product Photography & Video Editing",
    desc: "Professional visual content that showcases products and enhances brand appeal.",
    Icon: Video,
    color: "oklch(0.62 0.15 30)",
    glow: "oklch(0.62 0.15 30 / 0.35)",
  },
  {
    title: "Business Consulting",
    desc: "Strategic guidance to help businesses scale, optimize operations, and achieve growth.",
    Icon: BarChart3,
    color: "oklch(0.65 0.18 300)",
    glow: "oklch(0.65 0.18 300 / 0.35)",
  },
];

const why = [
  {
    k: "01",
    t: "Complete Business Solutions",
    d: "From technology development to marketing execution, we handle every aspect of your digital growth journey.",
  },
  {
    k: "02",
    t: "Customized Strategies",
    d: "Every business is unique. Our solutions are tailored to your goals, industry, and target audience.",
  },
  {
    k: "03",
    t: "Innovation-Driven Approach",
    d: "We leverage the latest technologies, creative trends, and marketing strategies to keep your business ahead of the competition.",
  },
  {
    k: "04",
    t: "Focus on Results",
    d: "Our goal is not just delivering services, but generating measurable growth, leads, sales, and business success.",
  },
];

const portfolioItems = [
  {
    title: "Technology Solutions",
    stack: ["Websites", "Mobile Apps", "ERP / CRM"],
    desc: "Custom websites, mobile apps, ERP, CRM, billing software, and business automation systems.",
    type: "What We Deliver",
    color: "oklch(0.55 0.18 250)",
    Icon: Monitor,
  },
  {
    title: "Creative Branding",
    stack: ["Logo Design", "Identity", "Packaging"],
    desc: "Professional logo design, brand identity creation, packaging design, and marketing creatives.",
    type: "What We Deliver",
    color: "oklch(0.60 0.17 200)",
    Icon: Palette,
  },
  {
    title: "Digital Marketing Excellence",
    stack: ["SEO", "Google Ads", "Meta Ads"],
    desc: "SEO, Google Ads, Meta Ads, social media marketing, and lead generation campaigns.",
    type: "What We Deliver",
    color: "oklch(0.55 0.15 170)",
    Icon: TrendingUp,
  },
  {
    title: "Business Growth Strategies",
    stack: ["Sales Funnels", "Consulting", "Revenue Plans"],
    desc: "Data-driven marketing plans, sales funnel development, and revenue-focused consulting.",
    type: "What We Deliver",
    color: "oklch(0.78 0.16 82)",
    Icon: BarChart3,
  },
  {
    title: "Ecommerce Success",
    stack: ["Online Stores", "Marketplaces", "Conversions"],
    desc: "Online store development, marketplace optimization, product promotion, and conversion enhancement.",
    type: "What We Deliver",
    color: "oklch(0.65 0.16 140)",
    Icon: ShoppingCart,
  },
  {
    title: "Visual Content Creation",
    stack: ["Photography", "Videos", "Reels"],
    desc: "Product photography, promotional videos, reels, and professional video editing services.",
    type: "What We Deliver",
    color: "oklch(0.60 0.18 320)",
    Icon: Video,
  },
  {
    title: "End-to-End Support",
    stack: ["Planning", "Development", "Growth"],
    desc: "From planning and development to marketing and business growth, all services under one roof.",
    type: "What We Deliver",
    color: "oklch(0.65 0.18 300)",
    Icon: Rocket,
  },
];

const processSteps = [
  {
    t: "Understand",
    d: "We analyze your business, goals, market, and opportunities.",
    Icon: Search,
  },
  {
    t: "Strategize",
    d: "We create a customized roadmap designed to achieve your objectives.",
    Icon: Rocket,
  },
  {
    t: "Build",
    d: "Our team develops, designs, and implements the required solutions.",
    Icon: Palette,
  },
  {
    t: "Grow",
    d: "We continuously optimize and support your business for long-term success.",
    Icon: Code2,
  },
  {
    t: "Modernize",
    d: "We keep your systems, brand, and campaigns aligned with new opportunities.",
    Icon: Globe,
  },
  {
    t: "Perform",
    d: "Every solution is measured against leads, sales, efficiency, and sustainable growth.",
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

const storyParagraphs = [
  "Every successful business starts with a simple idea, and Fruition Innovix is no exception.",
  "Our journey began with a passion for technology, creativity, and helping businesses establish their presence in the digital world. What started as a single opportunity evolved into a mission to provide complete digital and branding solutions.",
  "The first project was a business website for a client who wanted to strengthen their online presence. That success created the confidence to take on bigger challenges, including ecommerce websites that helped clients showcase and sell their products online.",
  "As we collaborated closely with businesses, we realized many needed more than a website. They needed professional branding, packaging design, marketing support, and strategies to attract customers, so the services expanded into brand identities, marketing materials, and social media campaigns.",
  "With every project, Fruition Innovix gained deeper insight into industries, customer needs, and business growth strategies. Today, the company reflects that journey: passion, innovation, creativity, and a genuine desire to help businesses succeed.",
  "Our team brings together creative designers, technology experts, marketing strategists, and business consultants who work to transform ideas into modern, scalable, and future-ready solutions.",
  "We are proud of how far we have come, and we remain focused on the future: continuing to innovate, create, and deliver solutions that help businesses grow and achieve their goals.",
];

const valuePillars = [
  {
    title: "Modernization",
    desc: "We continuously explore new technologies, trends, and strategies to provide cutting-edge solutions that keep clients ahead of the competition.",
    Icon: Globe,
  },
  {
    title: "Ingenuity",
    desc: "Creativity is the foundation of every successful brand, helping businesses build memorable identities and engaging customer experiences.",
    Icon: PenTool,
  },
  {
    title: "Excellence",
    desc: "We deliver high-quality solutions with attention to detail, professionalism, and a focus on exceptional results.",
    Icon: Star,
  },
  {
    title: "Integrity",
    desc: "We build long-term relationships through transparency, trust, accountability, and ethical business practices.",
    Icon: Layers,
  },
  {
    title: "Performance",
    desc: "Every solution is designed to help clients grow stronger, faster, and more successfully.",
    Icon: BarChart3,
  },
];

const industries = [
  {
    label: "Retail & Ecommerce",
    desc: "Enhancing online and offline retail businesses through ecommerce development, digital marketing, and customer engagement strategies.",
    Icon: ShoppingCart,
  },
  {
    label: "Manufacturing",
    desc: "Supporting manufacturers with ERP solutions, process automation, inventory management, and digital transformation initiatives.",
    Icon: Briefcase,
  },
  {
    label: "Healthcare",
    desc: "Developing secure and efficient digital solutions for clinics, hospitals, healthcare professionals, and wellness brands.",
    Icon: Phone,
  },
  {
    label: "Education",
    desc: "Empowering educational institutions, training centers, and e-learning platforms with modern digital tools and marketing solutions.",
    Icon: Monitor,
  },
  {
    label: "Real Estate",
    desc: "Helping real estate businesses generate quality leads, showcase properties effectively, and strengthen their online presence.",
    Icon: MapPin,
  },
  {
    label: "Restaurants & Hospitality",
    desc: "Driving customer engagement through branding, online promotions, website development, and social media marketing.",
    Icon: Star,
  },
  {
    label: "Fashion & Apparel",
    desc: "Building strong fashion brands through ecommerce solutions, creative design, product photography, and performance marketing.",
    Icon: Palette,
  },
  {
    label: "Startups & Entrepreneurs",
    desc: "Providing end-to-end support from business branding and website development to growth strategies and digital marketing.",
    Icon: Rocket,
  },
  {
    label: "Service-Based Businesses",
    desc: "Helping service providers attract more customers, generate leads, and establish a professional digital presence.",
    Icon: Megaphone,
  },
  {
    label: "Corporate Organizations",
    desc: "Delivering scalable software solutions, branding strategies, digital transformation services, and enterprise-level business support.",
    Icon: Database,
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden vignette">
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

        <div className="relative z-10 mx-auto w-full max-w-5xl -translate-y-20 px-6 pt-20 text-center sm:translate-y-0">
          <Reveal delay={150} className="in">
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-5">
              <span className="block underline-gold text-gold-gradient">Fruition</span>
              <span className="block text-foreground/95 italic font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
                Innovix
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300} className="in">
            <p className="font-display italic text-xl sm:text-2xl md:text-3xl leading-tight text-[var(--brand-cream)]/90 mb-3 max-w-2xl mx-auto">
              Innovate. Create. Grow.
            </p>
            <p className="mx-auto mt-5 max-w-[21rem] text-[9px] uppercase tracking-[0.26em] leading-relaxed text-[var(--gold-soft)] sm:max-w-none sm:text-xs sm:tracking-[0.5em]">
              Your One-Stop Partner for Technology, Branding & Business Growth
            </p>
            <p className="mx-auto mt-6 max-w-[16rem] text-sm leading-relaxed text-foreground/75 sm:max-w-3xl sm:text-lg">
              Transform your business with powerful technology, creative branding, and result-driven
              digital marketing solutions. We help startups, entrepreneurs, and established
              businesses accelerate growth through digital solutions tailored to their unique goals.
            </p>
          </Reveal>
        </div>

        <div className="absolute bottom-10 sm:bottom-14 left-1/2 z-10 w-full -translate-x-1/2 px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#gallery"
              className="btn-gold cta-pulse rounded-full px-8 py-3.5 text-sm font-medium tracking-wide uppercase"
            >
              Get Started Today
            </a>
            <a
              href="#contact-quick"
              className="btn-outline-gold rounded-full px-8 py-3.5 text-sm font-medium tracking-wide uppercase"
            >
              Book a Free Consultation
            </a>
          </div>
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

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-12">
            <div className="lg:flex lg:justify-end">
              <Reveal delay={80}>
                <div className="w-full max-w-[35rem]">
                  <div className="relative group logo-card">
                    <div className="absolute -inset-4 bg-[var(--gold)]/8 blur-3xl rounded-full" />
                    <div
                      className="relative overflow-hidden rounded-sm border border-[var(--gold)]/20"
                      style={{ boxShadow: "var(--shadow-cinematic)" }}
                    >
                      <img
                        src={logoFullImg}
                        alt="Fruition Innovix logo"
                        className="img-zoom h-[420px] w-full object-contain bg-transparent p-4 sm:h-[500px]"
                        loading="lazy"
                        width={1024}
                        height={600}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </div>
                  </div>

                  <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--gold)]/18 pt-8">
                    {[
                      { n: 5, s: "+", l: "Years" },
                      { n: 500, s: "+", l: "Projects" },
                      { n: 200, s: "+", l: "Clients" },
                    ].map((s) => (
                      <div key={s.l}>
                        <div className="font-display text-3xl leading-none text-gold-gradient sm:text-4xl">
                          <Counter to={s.n} suffix={s.s} />
                        </div>
                        <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <div className="w-full max-w-[43rem]">
                <p className="text-xl leading-relaxed text-foreground/88">
                  At Fruition Innovix, we turn business ideas into polished digital systems,
                  memorable brands, and growth-focused customer experiences.
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  We combine technology, branding, digital marketing, ecommerce strategy, and
                  consulting under one roof, so every decision feels connected to your real business
                  goals.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
                      className="relative overflow-hidden rounded-sm border border-[var(--gold)]/18 glass p-5"
                    >
                      <div className="font-display text-sm text-gold-gradient">{item.k}</div>
                      <h3 className="mt-2 font-display text-2xl leading-snug text-foreground">
                        {item.t}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_oklch(0.24_0.08_270_/_0.18),_transparent_58%)]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14 max-w-4xl">
              <div className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4">
                — The Story Behind Fruition Innovix
              </div>
              <h2 className="font-display text-5xl md:text-6xl mb-6 leading-tight">
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
            {[
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
            ].map((item, i) => (
              <Reveal key={item.eyebrow} delay={260 + i * 100}>
                <article className="relative h-full overflow-hidden rounded-sm border border-[var(--gold)]/20 glass p-8 hover-lift">
                  <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--gold)]/8 blur-3xl" />
                  <div className="relative text-xs uppercase tracking-[0.35em] text-[var(--gold)]">
                    {item.eyebrow}
                  </div>
                  <h3 className="relative mt-4 font-display text-3xl md:text-4xl text-gold-gradient">
                    {item.title}
                  </h3>
                  <p className="relative mt-5 text-muted-foreground leading-relaxed">{item.desc}</p>
                </article>
              </Reveal>
            ))}
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
                End-to-end technology, branding, marketing, ecommerce, content, and consulting
                support under one roof.
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
                — Powering Your Business Success
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-4">
                Modernization, ingenuity, excellence, integrity, and{" "}
                <span className="text-gold-gradient">performance</span>
              </h2>
              <BrandDivider />
              <p className="max-w-2xl mx-auto text-muted-foreground text-base italic font-display">
                We explore new technologies, creative strategies, and measurable execution to keep
                your business stronger, faster, and future-ready.
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
              { label: "Website Development", Icon: Globe },
              { label: "Mobile App Development", Icon: Smartphone },
              { label: "Custom Software Development", Icon: Code2 },
              { label: "Billing Software Solutions", Icon: Briefcase },
              { label: "ERP & CRM Solutions", Icon: Database },
              { label: "Graphic Design & Branding", Icon: Palette },
              { label: "Digital Marketing", Icon: TrendingUp },
              { label: "Social Media Marketing", Icon: Megaphone },
              { label: "Ecommerce Marketing", Icon: ShoppingCart },
              { label: "Product Photography & Video Editing", Icon: Video },
              { label: "Business Consulting", Icon: BarChart3 },
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

              <div className="logo-mark mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full border border-[var(--gold)]/35 bg-black/60">
                <img src={logoMarkImg} alt="" className="h-full w-full object-contain p-1.5" />
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
            {industries.map(({ label, desc, Icon }, i) => (
              <Reveal key={label} delay={i * 45}>
                <article className="group relative h-full overflow-hidden rounded-sm border border-[var(--gold)]/15 glass p-5 hover-lift">
                  <Icon
                    className="mb-4 h-6 w-6 text-[var(--gold)] transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-xl leading-snug text-foreground/95 group-hover:text-gold-gradient">
                    {label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
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
              <div className="logo-mark mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full border border-[var(--gold)]/35 bg-black/60">
                <img src={logoMarkImg} alt="" className="h-full w-full object-contain p-1.5" />
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
              <img src={logoMarkImg} alt="" className="h-full w-full object-contain p-1" />
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
