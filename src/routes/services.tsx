import { ArrowUpRight, Check } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { PageLayout } from "@/components/PageLayout";
import { servicesData } from "@/data/servicesData";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services | JMV Engineering Infra" }] }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageLayout eyebrow="Business areas" title="Engineering capability across critical infrastructure sectors." description="We support public works, transit, civil infrastructure, municipal delivery, and bespoke turnkey execution with precision and accountability.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((service, index) => (
          <article key={service.slug} className="group rounded-[1.75rem] border border-border bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-jmv-orange/50 hover:shadow-lift">
            <div className="flex items-start justify-between gap-4"><span className="text-5xl font-extrabold tracking-[-0.08em] text-jmv-orange/20">{String(index + 1).padStart(2, "0")}</span><ArrowUpRight className="h-5 w-5 text-jmv-orange transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
            <p className="eyebrow mt-8 text-jmv-orange">{service.category}</p><h2 className="mt-3 text-2xl font-bold text-jmv-brown">{service.title}</h2><p className="mt-4 text-sm leading-7 text-jmv-charcoal/70">{service.shortDescription}</p>
            <ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm text-jmv-charcoal/75">{service.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-jmv-orange" />{highlight}</li>)}</ul>
            <Link to="/services/$slug" params={{ slug: service.slug }} className="mt-7 inline-flex rounded-full bg-jmv-brown px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-jmv-orange">Explore service</Link>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
