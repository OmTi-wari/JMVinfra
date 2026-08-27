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
    <footer className="bg-jmv-brown text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={jmvLogo} alt={`${company.legalName} logo`} className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="text-lg font-extrabold leading-snug tracking-tight">
                  {company.legalName}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">{company.tagline}</p>
          </div>

          <nav aria-label="Footer quick links">
            <p className="eyebrow text-white/60">Fast links</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/80 transition-colors hover:text-jmv-orange">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-white/60">Business areas</p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {businessAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/60">Locations</p>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-jmv-orange" />
                Mumbai
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-jmv-orange" />
                Ahmedabad
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/60">Contact</p>
            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-jmv-orange" />
                <span>{contact.phones.join(" / ")}</span>
              </li>
              <li className="text-white/80">{contact.email}</li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-jmv-orange"
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
