import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#specialties", label: "Services" },
  { href: "#gallery", label: "Portfolio" },
  { href: "#order", label: "Get Started" },
  { href: "#echoes", label: "Solutions" },
  { href: "#contact-quick", label: "Contact" },
];

const sectionGroups = [
  { id: "top", activeId: "top" },
  { id: "about", activeId: "about" },
  { id: "specialties", activeId: "specialties" },
  { id: "tech", activeId: "specialties" },
  { id: "gallery", activeId: "gallery" },
  { id: "why", activeId: "gallery" },
  { id: "order", activeId: "order" },
  { id: "custom-order", activeId: "order" },
  { id: "echoes", activeId: "echoes" },
  { id: "process", activeId: "echoes" },
  { id: "testimonials", activeId: "echoes" },
  { id: "contact-quick", activeId: "contact-quick" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("top");
  const [open, setOpen] = useState(false);
  const pendingHashActiveRef = useRef<string | null>(null);
  const pendingHashUntilRef = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let frame = 0;
    let hashTimer = 0;
    let lateHashTimer = 0;

    const updateActiveSection = () => {
      const pendingHashActive = pendingHashActiveRef.current;
      if (pendingHashActive && Date.now() < pendingHashUntilRef.current) {
        setActiveId(pendingHashActive);
        return;
      }
      pendingHashActiveRef.current = null;

      const bottomGap =
        document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      if (bottomGap < 12) {
        setActiveId("contact-quick");
        return;
      }

      const scrollPosition = window.scrollY + Math.min(window.innerHeight * 0.32, 220);
      let current = sectionGroups[0].activeId;

      for (const section of sectionGroups) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= scrollPosition) {
          current = section.activeId;
        }
      }

      setActiveId(current);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    const syncHashTarget = () => {
      const hashId = window.location.hash.slice(1);
      const match = sectionGroups.find((section) => section.id === hashId);

      if (match) {
        pendingHashActiveRef.current = match.activeId;
        pendingHashUntilRef.current = Date.now() + 4000;
        setActiveId(match.activeId);
      }

      window.clearTimeout(hashTimer);
      window.clearTimeout(lateHashTimer);
      hashTimer = window.setTimeout(requestUpdate, 350);
      lateHashTimer = window.setTimeout(requestUpdate, 4100);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", syncHashTarget);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(hashTimer);
      window.clearTimeout(lateHashTimer);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", syncHashTarget);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-500`}>
        <div
          className={`relative flex items-center justify-center rounded-full px-5 py-3 ${scrolled ? "glass" : ""}`}
        >
          <nav className="hidden md:flex items-center justify-center gap-9 text-base lg:text-lg">
            {links.map((l) => {
              const id = l.href.slice(1);
              const isActive = activeId === id;

              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative group transition-colors ${
                    isActive ? "text-[var(--gold)]" : "text-foreground/80 hover:text-[var(--gold)]"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[var(--gold)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
            <a
              href="#contact-quick"
              className="inline-flex btn-gold rounded-full px-6 py-2.5 text-base lg:text-lg font-medium"
            >
              Enquire
            </a>
          </nav>
          <button
            className="md:hidden ml-auto text-[var(--gold)] p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => {
              const id = l.href.slice(1);
              const isActive = activeId === id;

              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`py-1 transition-colors ${
                    isActive ? "text-[var(--gold)]" : "text-foreground/85 hover:text-[var(--gold)]"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="#contact-quick"
              onClick={() => setOpen(false)}
              className="btn-gold rounded-full px-5 py-2 text-sm font-medium text-center mt-2"
            >
              Enquire
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
