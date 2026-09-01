import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import jmvLogo from "@/assets/jmv-logo.jpg";
import { company, contact, navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

const businessServices = [
  { label: "Road Construction", to: "/services/road-construction" },
  { label: "Airport EPC", to: "/services/airport-epc" },
  { label: "Railway Projects", to: "/services/railway-projects" },
  { label: "MMRD", to: "/services/mmrd" },
  { label: "PWD", to: "/services/pwd-projects" },
  { label: "BMC", to: "/services/bmc-projects" },
  { label: "AMC", to: "/services/amc-projects" },
  { label: "School Projects", to: "/services/school-projects" },
  { label: "Turnkey Solutions", to: "/services/turnkey-solutions" },
];

const projectLinks = [
  { label: "Ongoing", to: "/projects", search: { filter: "ongoing" } },
  { label: "Completed", to: "/projects", search: { filter: "completed" } },
  { label: "Upcoming", to: "/projects", search: { filter: "upcoming" } },
  { label: "Road", to: "/projects", search: { category: "road" } },
  { label: "Airport", to: "/projects", search: { category: "airport" } },
  { label: "Railway", to: "/projects", search: { category: "railway" } },
  { label: "Urban", to: "/projects", search: { category: "urban" } },
];

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isPathMatch = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const renderNavLink = (link: { label: string; href: string }) => {
    const active = isPathMatch(link.href);
    return (
      <Link
        key={link.href}
        to={link.href}
        className={cn(
          "relative text-sm font-medium transition-colors",
          active ? "text-jmv-orange" : "text-jmv-brown/80 hover:text-jmv-orange",
        )}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/10 bg-[#2C1D11] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-6 py-2 text-[11px] font-medium tracking-[0.08em] uppercase lg:px-10">
          <div className="hidden items-center gap-4 text-white/75 sm:flex">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
              Mumbai
            </span>
            <span className="text-white/40">|</span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
              Ahmedabad
            </span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-[#E5E7EB] transition-all duration-300",
          scrolled ? "bg-[#FAFAFA]/90 backdrop-blur-md" : "bg-[#FAFAFA]",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link to="/" className="group flex items-center gap-3" aria-label={company.legalName}>
            <img
              src={jmvLogo}
              alt={`${company.legalName} logo`}
              className="h-12 w-12 rounded-none border border-[#E5E7EB] object-cover"
            />
            <span className="hidden text-[0.8rem] font-semibold leading-tight tracking-tight text-[#2C1D11] sm:block">
              Jai Maa Vindhyavasini
              <span className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[#18181B]/60">
                Engineering Infra
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                const active = isPathMatch(link.href);
                return (
                  <div key={link.href} className="group relative">
                    <button
                      type="button"
                      suppressHydrationWarning={true}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors",
                        active ? "text-[#E65100]" : "text-[#2C1D11]/80 hover:text-[#E65100]",
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" strokeWidth={2} />
                    </button>
                    <div className="invisible absolute left-0 top-full z-40 mt-3 w-[520px] border border-[#E5E7EB] bg-white p-4 opacity-0 shadow-lift transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="grid grid-cols-2 gap-2">
                        {businessServices.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className={cn(
                              "border border-transparent px-3 py-2.5 text-sm text-[#18181B] transition-colors hover:border-[#E65100]/30 hover:bg-[#FAFAFA] hover:text-[#E65100]",
                              isPathMatch(item.to) && "border-[#E65100]/30 bg-[#FAFAFA] text-[#E65100]",
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (link.label === "Projects") {
                const active = isPathMatch(link.href);
                return (
                  <div key={link.href} className="group relative">
                    <button
                      type="button"
                      suppressHydrationWarning={true}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors",
                        active ? "text-[#E65100]" : "text-[#2C1D11]/80 hover:text-[#E65100]",
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" strokeWidth={2} />
                    </button>
                    <div className="invisible absolute left-0 top-full z-40 mt-3 w-[300px] border border-[#E5E7EB] bg-white p-4 opacity-0 shadow-lift transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="space-y-2">
                        {projectLinks.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            search={item.search}
                            className={cn(
                              "block border border-transparent px-3 py-2 text-sm text-[#18181B] transition-colors hover:border-[#E65100]/30 hover:bg-[#FAFAFA] hover:text-[#E65100]",
                              ((location.pathname === "/projects" &&
                                (item.search as { filter?: string; category?: string }).filter ===
                                  (location.search?.filter ?? "")) ||
                                (item.search as { filter?: string; category?: string }).category ===
                                  (location.search?.category ?? "")) &&
                                "border-[#E65100]/30 bg-[#FAFAFA] text-[#E65100]",
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return renderNavLink(link);
            })}

            <Link
              to="/contact"
              className={cn(
                "border px-5 py-2.5 text-sm font-semibold transition-colors",
                isPathMatch("/contact")
                  ? "border-[#E65100] bg-[#E65100] text-white"
                  : "border-[#E65100] bg-[#E65100] text-white hover:bg-[#2C1D11]",
              )}
            >
              ENQUIRE NOW
            </Link>
          </nav>

          <button
            type="button"
            suppressHydrationWarning={true}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center border border-[#E5E7EB] bg-white text-[#2C1D11] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-40 bg-jmv-ivory transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <img
                src={jmvLogo}
                alt={`${company.legalName} logo`}
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="text-left text-sm font-semibold text-jmv-brown">
                Jai Maa Vindhyavasini
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-jmv-brown"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav
            className="flex-1 space-y-2 overflow-y-auto px-6 py-6"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const active = isPathMatch(link.href);

              if (link.label === "Services") {
                return (
                  <div key={link.href} className="border-b border-border pb-3">
                    <button
                      type="button"
                      suppressHydrationWarning={true}
                      onClick={() =>
                        setMobileSection(mobileSection === "services" ? null : "services")
                      }
                      className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-jmv-brown"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileSection === "services" && "rotate-180",
                        )}
                      />
                    </button>
                    {mobileSection === "services" && (
                      <div className="space-y-2 pb-2">
                        {businessServices.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "block rounded-xl px-3 py-2 text-sm text-jmv-charcoal",
                              isPathMatch(item.to) && "bg-jmv-grey text-jmv-orange",
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.label === "Projects") {
                return (
                  <div key={link.href} className="border-b border-border pb-3">
                    <button
                      type="button"
                      suppressHydrationWarning={true}
                      onClick={() =>
                        setMobileSection(mobileSection === "projects" ? null : "projects")
                      }
                      className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-jmv-brown"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileSection === "projects" && "rotate-180",
                        )}
                      />
                    </button>
                    {mobileSection === "projects" && (
                      <div className="space-y-2 pb-2">
                        {projectLinks.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            search={item.search}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "block rounded-xl px-3 py-2 text-sm text-jmv-charcoal",
                              ((location.pathname === "/projects" &&
                                (item.search as { filter?: string; category?: string }).filter ===
                                  (location.search?.filter ?? "")) ||
                                (item.search as { filter?: string; category?: string }).category ===
                                  (location.search?.category ?? "")) &&
                                "bg-jmv-grey text-jmv-orange",
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block border-b border-border py-3 text-base font-semibold",
                    active ? "text-jmv-orange" : "text-jmv-brown",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-jmv-orange px-5 py-3 text-center text-sm font-semibold text-white"
            >
              ENQUIRE NOW
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
