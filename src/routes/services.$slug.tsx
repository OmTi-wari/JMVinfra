import { ArrowRight } from "lucide-react";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";

import { PageLayout } from "@/components/PageLayout";
import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${params.slug.replace(/-/g, " ")} | JMV Engineering Infra` }] }),
  component: ServiceDetailPage,
});

export function ServiceDetailPage() {
  const { slug } = useParams({ from: "/services/$slug" });
  const service = servicesData.find((item) => item.slug === slug || item.id === slug);

  if (!service) {
    return (
      <PageLayout
        eyebrow="Service unavailable"
        title="Service Not Found"
        description={`The requested service slug "${slug}" does not match any current service in our portfolio.`}
      >
        <div className="border border-[#E5E7EB] bg-white p-8">
          <p className="text-sm text-[#18181B]/75">
            Attempted slug: <span className="font-semibold text-[#2C1D11]">{slug}</span>
          </p>
          <div className="mt-6">
            <Link
              to="/services"
              className="inline-flex items-center border border-[#2C1D11] bg-[#FAFAFA] px-5 py-3 text-sm font-semibold text-[#2C1D11] transition hover:border-[#E65100] hover:text-[#E65100]"
            >
              ← Back to All Services
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const otherServices = servicesData.filter((item) => item.id !== service.id).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#2C1D11] py-24 text-white lg:py-32">
        <img src={service.heroImage} alt={service.title} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2C1D11] via-[#2C1D11]/95 to-[#2C1D11]/80" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <nav className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
            <Link to="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/services" className="transition hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
                <span className="h-1.5 w-1.5 bg-[#E65100]" />
                <span>{service.eyebrow}</span>
              </div>
              <h1 className="mt-5 text-5xl font-extrabold leading-none tracking-[-0.05em] text-white md:text-6xl xl:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{service.overview}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center border border-[#E65100] bg-[#E65100] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#2C1D11]">
                  Enquire now
                </Link>
                <Link to="/services" className="inline-flex items-center border border-white/20 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10">
                  View all services
                </Link>
              </div>
            </div>

            <div className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
                <span className="h-1.5 w-1.5 bg-[#E65100]" />
                <span>Service overview</span>
              </div>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <dt className="text-white/60">Category</dt>
                  <dd className="font-medium text-white">{service.category ?? "Infrastructure"}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <dt className="text-white/60">Delivery</dt>
                  <dd className="font-medium text-white">Turnkey execution</dd>
                </div>
                <div className="flex items-center justify-between pb-1">
                  <dt className="text-white/60">Focus</dt>
                  <dd className="font-medium text-white">Project certainty</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm font-semibold text-[#2C1D11] transition hover:border-[#E65100] hover:text-[#E65100]"
          >
            ← Back to All Services
          </Link>
        </div>

        <section className="mb-20 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-[#E5E7EB] bg-white p-6 md:p-8">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Scope & technical specification</span>
            </div>

            <ul className="mt-6">
              {service.scopeOfWork.map((item, index) => (
                <li key={item} className="grid grid-cols-[auto_1fr] gap-4 border-t border-[#E5E7EB] py-4 first:border-t-0 first:pt-0">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="border-l border-[#E5E7EB] pl-4">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60">
                      Technical scope
                    </p>
                    <p className="mt-2 text-base leading-7 text-[#18181B]/80">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#2C1D11] bg-[#2C1D11] p-6 text-white md:p-8">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Key capabilities</span>
            </div>
            <ul className="mt-6 space-y-5">
              {service.keyCapabilities.map((item, index) => (
                <li key={item} className="flex items-start gap-3 border-l border-white/15 pl-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E65100]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-20 grid gap-6 lg:grid-cols-2">
          <div className="border border-[#E5E7EB] bg-[#FAFAFA] p-6 md:p-8">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Quality standards</span>
            </div>
            <div className="mt-6 grid gap-4">
              {service.qualityStandards.map((standard, index) => (
                <div key={standard} className="border-l border-[#E5E7EB] pl-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2C1D11]/60">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#18181B]/80">{standard}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#E5E7EB] bg-white p-6 md:p-8">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Equipment deployed</span>
            </div>
            <div className="mt-6 grid gap-4">
              {service.equipmentDeployed.map((item, index) => (
                <div key={item} className="flex items-start gap-3 border-l border-[#E5E7EB] pl-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E65100]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-7 text-[#18181B]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {service.processSteps && service.processSteps.length > 0 ? (
          <section className="mb-20">
            <div className="mb-6 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Delivery sequence</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {service.processSteps.map((step) => (
                <div key={step.step} className="border border-[#E5E7EB] bg-white p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E65100]">
                    Step {String(step.step).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#2C1D11]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#18181B]/75">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {projectsData.length > 0 ? (
          <section className="mb-20">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
                <span className="h-1.5 w-1.5 bg-[#E65100]" />
                <span>Executed projects</span>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C1D11] hover:text-[#E65100]">
                View all projects
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {projectsData.slice(0, 3).map((project) => (
                <Link
                  key={project.slug}
                  to="/projects"
                  className="group border border-[#E5E7EB] bg-white p-6 transition hover:-translate-y-1 hover:border-[#E65100]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]">
                      <span className="h-1.5 w-1.5 bg-[#E65100]" />
                      <span>{project.category}</span>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-[#FAFAFA] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E65100]">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-[#2C1D11]">{project.title}</h3>
                  <p className="mt-2 text-xs text-[#18181B]/60">{project.location} • {project.year}</p>
                  <p className="mt-4 text-sm leading-7 text-[#18181B]/75">{project.summary}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#E5E7EB] pt-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]">Learn more</span>
                    <ArrowRight className="h-4 w-4 text-[#E65100] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mb-20">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Related services</span>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2C1D11] hover:text-[#E65100]">
              View all services
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.id}
                to="/services/$slug"
                params={{ slug: item.slug ?? item.id }}
                className="group border border-[#E5E7EB] bg-white p-6 transition hover:-translate-y-1 hover:border-[#E65100]"
              >
                <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]">
                  <span className="h-1.5 w-1.5 bg-[#E65100]" />
                  <span>{item.eyebrow}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-[#2C1D11]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#18181B]/75">{item.shortDescription}</p>
                <div className="mt-6 flex items-center justify-between border-t border-[#E5E7EB] pt-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]">Explore</span>
                  <ArrowRight className="h-4 w-4 text-[#E65100] transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}