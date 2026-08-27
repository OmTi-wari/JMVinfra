import {
  ArrowUpRight,
  Building2,
  HardHat,
  Landmark,
  Plane,
  Route,
  School,
  TrainFront,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { servicesData } from "@/data/servicesData";

const icons: Record<string, LucideIcon> = {
  "road-construction": Route,
  "airport-epc": Plane,
  "railway-projects": TrainFront,
  mmrd: Landmark,
  "pwd-projects": Building2,
  "bmc-projects": HardHat,
  "amc-projects": Wrench,
  "school-projects": School,
  "turnkey-solutions": ArrowUpRight,
};

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <div className="max-w-3xl">
          <p className="eyebrow text-jmv-orange">What we build</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-jmv-brown md:text-[3rem]">
            Infrastructure solutions designed for reliability, safety and performance.
          </h2>
        </div>
      </Reveal>

      <ul className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((service, i) => {
          const Icon = icons[service.slug] ?? Building2;
          return (
            <Reveal as="li" key={service.slug} delay={i * 80}>
              <article className="group h-full rounded-[1.75rem] border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-jmv-orange/40 hover:shadow-lift">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-jmv-grey text-jmv-orange">
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-border bg-jmv-grey px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-jmv-charcoal/65">
                    {service.category}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-jmv-brown">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-jmv-charcoal/70">{service.shortDescription}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-jmv-orange">
                    View scope
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-jmv-orange transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
