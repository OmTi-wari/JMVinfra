import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import type { ServiceDetail } from "@/data/servicesData";

type ServiceCardProps = {
  service: ServiceDetail;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#E5E7EB] bg-white transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden border-b border-[#E5E7EB] bg-[#2C1D11]">
        <img
          src={service.heroImage}
          alt={service.title}
          className="h-52 w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1D11]/80 via-[#2C1D11]/20 to-transparent" />
        <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/15 bg-[#2C1D11]/60 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
          <span className="h-1.5 w-1.5 bg-[#E65100]" />
          <span>{service.category ?? "Service"}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
            {service.eyebrow}
          </span>
          <ArrowUpRight className="h-4 w-4 text-[#E65100] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <h3 className="mt-5 text-2xl font-bold text-[#2C1D11]">{service.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[#18181B]/75">{service.shortDescription}</p>

        <div className="mt-6 border-t border-[#E5E7EB] pt-5">
          <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
            <span className="h-1.5 w-1.5 bg-[#E65100]" />
            <span>Core delivery</span>
          </div>

          <ul className="mt-4 space-y-3">
            {(service.highlights ?? []).map((highlight, index) => (
              <li key={highlight} className="flex items-start gap-3 border-l border-[#E5E7EB] pl-3 text-sm leading-6 text-[#18181B]/75">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#E65100]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <Link
            to="/services/$slug"
            params={{ slug: service.slug ?? service.id }}
            className="inline-flex items-center gap-2 border border-[#2C1D11] bg-[#FAFAFA] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11] transition hover:border-[#E65100] hover:text-[#E65100]"
          >
            Explore Service
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
