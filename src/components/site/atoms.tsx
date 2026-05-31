import { useEffect, useRef, useState } from "react";
import logoMarkImg from "@/assets/logo-removebg1.png";

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0 };
    const stars: Array<{
      x: number;
      y: number;
      z: number;
      radius: number;
      speed: number;
      alpha: number;
      phase: number;
      hue: string;
      streak: number;
    }> = [];

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let lastTime = 0;

    const seedStar = (initial = false) => ({
      x: initial ? Math.random() * width : -24 - Math.random() * width * 0.08,
      y: Math.random() * height,
      z: 0.35 + Math.random() * 1.75,
      radius: Math.random() > 0.88 ? 0.65 + Math.random() * 1.15 : 0.18 + Math.random() * 0.72,
      speed: 0.045 + Math.random() * 0.155,
      alpha: 0.2 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
      hue:
        Math.random() > 0.9
          ? "255, 222, 150"
          : Math.random() > 0.78
            ? "172, 190, 255"
            : "238, 246, 255",
      streak: Math.random() > 0.86 ? 8 + Math.random() * 24 : 0,
    });

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = Math.min(1850, Math.max(620, Math.floor((width * height) / 760)));
      stars.length = 0;
      for (let i = 0; i < targetCount; i += 1) {
        stars.push(seedStar(true));
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / width - 0.5) * 2;
      pointer.y = (event.clientY / height - 0.5) * 2;
    };

    const draw = (time = 0) => {
      const delta = Math.min(34, time - lastTime || 16);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i];
        if (!prefersReducedMotion) {
          star.x += star.speed * delta * star.z;
          star.y += Math.sin(time * 0.001 + star.phase) * 0.012 * star.z;
        }

        if (star.x > width + 48 || star.y < -30 || star.y > height + 30) {
          stars[i] = seedStar();
          continue;
        }

        const driftX = Math.sin(time * 0.00035 + star.phase) * 3 * star.z + pointer.x * 6 * star.z;
        const driftY = pointer.y * 3 * star.z;
        const twinkle = 0.72 + Math.sin(time * 0.0022 + star.phase) * 0.28;
        const alpha = Math.max(0.1, star.alpha * twinkle);
        const radius = star.radius * star.z;
        const x = star.x + driftX;
        const y = star.y + driftY;

        if (star.streak && !prefersReducedMotion) {
          const gradient = ctx.createLinearGradient(x - star.streak * star.z, y, x, y);
          gradient.addColorStop(0, `rgba(${star.hue}, 0)`);
          gradient.addColorStop(1, `rgba(${star.hue}, ${alpha * 0.34})`);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = Math.max(0.35, radius * 0.42);
          ctx.beginPath();
          ctx.moveTo(x - star.streak * star.z, y);
          ctx.lineTo(x, y);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(${star.hue}, ${alpha})`;
        ctx.shadowBlur = radius > 1.75 ? 6 : 0;
        ctx.shadowColor = `rgba(${star.hue}, ${alpha})`;

        if (radius < 0.85) {
          const size = Math.max(0.45, radius);
          ctx.fillRect(x, y, size, size);
        } else {
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.shadowBlur = 0;

      if (!prefersReducedMotion) {
        frame = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    if (!prefersReducedMotion) {
      frame = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div className="space-background" aria-hidden="true">
      <canvas ref={canvasRef} className="space-background__canvas" />
      <div className="space-background__dust" />
    </div>
  );
}

export function Particles({ count = 35 }: { count?: number }) {
  const particles = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const duration = Math.random() * 18 + 14;
        const delay = Math.random() * -20;
        return (
          <span
            key={i}
            className="particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = document.createElement("div");
    el.className = "cursor-glow";
    document.body.appendChild(el);
    let raf = 0;
    let tx = 0,
      ty = 0,
      x = 0,
      y = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      el.remove();
    };
  }, []);
  return null;
}

export function LuxuryLoader() {
  const [gone, setGone] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setGone(true), 1600);
    const t2 = setTimeout(() => setHide(true), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  if (hide) return null;
  return (
    <div
      className={`loader-scene fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background transition-opacity duration-700 ${gone ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="loader-scene__stars" aria-hidden="true" />
      <div className="loader-scene__grain" aria-hidden="true" />
      <div className="loader-lockup relative z-10 flex items-center justify-center gap-5 px-5 sm:gap-7">
        <div className="loader-logo logo-mark grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-full border border-[var(--gold)]/35 bg-black/55 p-2 shadow-[0_0_48px_-16px_oklch(0.78_0.16_82_/_0.8)] sm:h-32 sm:w-32">
          <img
            src={logoMarkImg}
            alt="Fruition Innovix"
            className="loader-logo__image h-full w-full object-contain"
          />
        </div>
        <div className="loader-title text-left">
          <div className="loader-title__gold font-display">Fruition</div>
          <div className="loader-title__line">
            <div
              className="loader-title__progress"
              style={{ animation: "loader-bar 1.6s ease-in-out forwards" }}
            />
          </div>
          <div className="loader-title__white font-display italic">Innovix</div>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppFAB({ phone = "919629126119" }: { phone?: string }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-background shadow-[0_10px_30px_-5px_oklch(0.78_0.15_80_/_0.6)] hover:scale-110 transition-transform"
      style={{ background: "var(--gradient-gold)" }}
    >
      <span className="absolute inset-0 rounded-full animate-ping bg-[var(--gold)]/30" />
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="relative">
        <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12L4 20l4.2-1.1A7.93 7.93 0 0 0 12 19.9a7.94 7.94 0 0 0 5.6-13.6zM12 18.5a6.55 6.55 0 0 1-3.4-.9l-.2-.1-2.5.7.7-2.4-.2-.3A6.6 6.6 0 1 1 12 18.5zm3.6-4.9c-.2-.1-1.2-.6-1.4-.6s-.3-.1-.4.1-.5.6-.6.7-.2.2-.4.1a5.5 5.5 0 0 1-1.6-1 6 6 0 0 1-1.1-1.4c-.1-.2 0-.3.1-.4l.3-.4.2-.3a.4.4 0 0 0 0-.4c0-.1-.4-1-.6-1.4s-.3-.3-.4-.3h-.4a.7.7 0 0 0-.5.2 2 2 0 0 0-.6 1.5 3.5 3.5 0 0 0 .7 1.9 8 8 0 0 0 3.1 2.7c1.9.8 1.9.5 2.3.5a1.8 1.8 0 0 0 1.2-.8 1.5 1.5 0 0 0 .1-.8c0-.1-.2-.2-.4-.3z" />
      </svg>
    </a>
  );
}

export function Lightbox({
  src,
  caption,
  onClose,
}: {
  src: string | null;
  caption?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose]);
  if (!src) return null;
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8 bg-background/90 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        className="absolute top-5 right-5 w-11 h-11 rounded-full glass border border-[var(--gold)]/40 text-[var(--gold)] flex items-center justify-center hover:glow-gold"
      >
        ✕
      </button>
      <figure className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <div
          className="relative overflow-hidden rounded-sm border border-[var(--gold)]/30"
          style={{ boxShadow: "var(--shadow-cinematic)" }}
        >
          <img
            src={src}
            alt={caption || ""}
            className="w-full max-h-[80vh] object-contain bg-black"
          />
        </div>
        {caption && (
          <figcaption className="text-center mt-4 font-display text-xl text-gold-gradient">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export function BrandDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8" aria-hidden>
      <div className="h-px w-24 sm:w-40 bg-gradient-to-r from-transparent to-[var(--gold)]" />
      <svg
        width="46"
        height="22"
        viewBox="0 0 46 22"
        className="text-[var(--gold)] drop-shadow-[0_0_8px_oklch(0.85_0.14_82_/_0.6)]"
      >
        <path d="M23 0 L28 8 L46 11 L28 14 L23 22 L18 14 L0 11 L18 8 Z" fill="currentColor" />
      </svg>
      <div className="h-px w-24 sm:w-40 bg-gradient-to-l from-transparent to-[var(--gold)]" />
    </div>
  );
}
