import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { brandMark, brandName } from "@/lib/brand-assets";

const links = [
  { to: "/", label: "Home", title: "Fruition Innovix - Home" },
  { to: "/about", label: "About", title: "About Fruition Innovix" },
  { to: "/services", label: "Services", title: "Fruition Innovix Services" },
  { to: "/why-us", label: "Why Us", title: "Why Choose Fruition Innovix" },
  { to: "/industries", label: "Industries", title: "Industries Fruition Innovix Serves" },
  { to: "/process", label: "Process", title: "Fruition Innovix Process" },
];

const pageTitles = new Map([
  ...links.map((link) => [link.to, link.title] as const),
  ["/contact", "Contact Fruition Innovix"] as const,
]);

export function Navbar() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    document.title = pageTitles.get(pathname) ?? "Fruition Innovix";
  }, [pathname]);

  const lockedNav = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        lockedNav ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500">
        <div
          className={`navbar-shell relative flex items-center gap-4 rounded-2xl px-3 py-2.5 sm:rounded-full sm:px-4 ${
            lockedNav ? "navbar-shell--locked" : ""
          }`}
        >
          <Link to="/" className="group flex shrink-0 items-center gap-3 pr-1" aria-label="Home">
            <span className="nav-logo-animated relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-[var(--gold)]/35 bg-white p-1 shadow-[0_0_32px_-14px_oklch(0.78_0.16_82_/_0.85)]">
              <img
                src={brandMark}
                alt={brandName}
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </span>
            <span className="hidden min-w-[7.4rem] sm:block lg:hidden xl:block">
              <span className="block font-display text-[1.18rem] leading-none text-gold-gradient">
                Fruition
              </span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.34em] text-white/85">
                Innovix
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center justify-center gap-3 text-sm lg:flex xl:gap-4">
            {links.map((link) => {
              const isActive = pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative group transition-colors ${
                    isActive ? "text-[var(--gold)]" : "text-foreground/90 hover:text-[var(--gold)]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[var(--gold)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="inline-flex btn-gold rounded-full px-4 py-2.5 text-sm font-medium xl:px-5"
            >
              Start Project
            </Link>
          </nav>

          <button
            className="ml-auto rounded-full border border-[var(--gold)]/20 p-2 text-[var(--gold)] lg:hidden"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-label="Toggle menu"
            aria-expanded={open}
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
          <div className="navbar-mobile-panel lg:hidden mt-2 rounded-2xl p-4 flex flex-col gap-3">
            {links.map((link) => {
              const isActive = pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`py-1 transition-colors ${
                    isActive ? "text-[var(--gold)]" : "text-foreground/90 hover:text-[var(--gold)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold rounded-full px-5 py-2 text-sm font-medium text-center mt-2"
            >
              Start Project
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
