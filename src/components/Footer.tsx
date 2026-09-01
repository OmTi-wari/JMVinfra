import { Instagram, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

import jmvLogo from "@/assets/jmv-logo.jpg";
import { company, contact, navLinks } from "@/data/site";

const businessAreas = [
  "Road Construction",
  "Airport EPC",
  "Railway Projects",
  "MMRD, PWD, BMC",
  "AMC & Maintenance",
  "Turnkey Solutions",
];

export function Footer() {
  return (
    <footer className="bg-[#2C1D11] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
          <div className="border-r border-white/10 pr-6">
            <div className="flex items-center gap-3">
              <img src={jmvLogo} alt={`${company.legalName} logo`} className="h-14 w-14 rounded-none border border-white/10 object-cover" />
              <div>
                <p className="text-lg font-extrabold leading-snug tracking-tight text-white">
                  {company.legalName}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">{company.tagline}</p>
          </div>

          <nav aria-label="Footer quick links" className="lg:pl-4">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Fast links</span>
            </div>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/80 transition-colors hover:text-[#E65100]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:pl-4">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Business areas</span>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {businessAreas.map((area) => (
                <li key={area} className="border-l border-white/10 pl-3">{area}</li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-4">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Locations</span>
            </div>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-2 border-l border-white/10 pl-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#E65100]" />
                Mumbai
              </li>
              <li className="flex items-start gap-2 border-l border-white/10 pl-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#E65100]" />
                Ahmedabad
              </li>
            </ul>
          </div>

          <div className="lg:pl-4">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Contact</span>
            </div>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-2 border-l border-white/10 pl-3">
                <Phone className="h-4 w-4 text-[#E65100]" />
                <span>{contact.phones.join(" / ")}</span>
              </li>
              <li className="border-l border-white/10 pl-3 text-white/80">{contact.email}</li>
              <li className="border-l border-white/10 pl-3">
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[#E65100]"
                >
                  <Instagram className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  {contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-xs text-white/60">
            © 2026 {company.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
