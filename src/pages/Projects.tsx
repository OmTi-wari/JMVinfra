import { ArrowRight } from "lucide-react";
import { Link, useSearch } from "@tanstack/react-router";

import { PageLayout } from "@/components/PageLayout";
import { projectsData, type ProjectStatus } from "@/data/projectsData";

const categories = ["All", "Road", "Airport", "Railway", "Urban Infra", "PWD", "BMC", "AMC", "Schools", "Turnkey"] as const;
const statuses: ("All" | ProjectStatus)[] = ["All", "Ongoing", "Completed", "Upcoming"];

export default function ProjectsPage() {
  const search = useSearch({ from: "/projects" }) as { category?: string; status?: string };
  const category = search.category ?? "All";
  const status = search.status ?? "All";
  const visibleProjects = projectsData.filter(
    (project) =>
      (category === "All" || project.category === category) &&
      (status === "All" || project.status === status)
  );

  const filterButton = (active: boolean) =>
    active
      ? "border border-[#E65100] bg-[#E65100] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
      : "border border-[#E5E7EB] bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/70 hover:border-[#E65100]/40 hover:text-[#E65100]";

  return (
    <PageLayout
      eyebrow="Project portfolio"
      title="Delivering infrastructure with measurable impact."
      description="Explore JMV project profiles by sector and delivery status. Project records remain structured for verified scope, client, and performance updates."
    >
      <div className="mb-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border border-[#E5E7EB] bg-white p-6 md:p-8">
          <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
            <span className="h-1.5 w-1.5 bg-[#E65100]" />
            <span>Filter by category</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((item) => (
              <Link key={item} to="/projects" search={{ category: item, status }} className={filterButton(category === item)}>
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="border border-[#2C1D11] bg-[#2C1D11] p-6 text-white md:p-8">
          <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
            <span className="h-1.5 w-1.5 bg-[#E65100]" />
            <span>Filter by status</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {statuses.map((item) => (
              <Link key={item} to="/projects" search={{ category, status: item }} className={filterButton(status === item)}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.length ? (
          visibleProjects.map((project, index) => (
            <article
              key={project.slug}
              className={[
                "group border border-[#E5E7EB] bg-white transition hover:-translate-y-1 hover:border-[#E65100]/40",
                index % 3 === 1 ? "xl:col-span-2" : "",
              ].join(" ")}
            >
              <div className="relative overflow-hidden bg-[#2C1D11]">
                <img
                  src={project.gallery[0]}
                  alt={project.title}
                  className="h-52 w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1D11]/80 via-[#2C1D11]/20 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  <span className="h-1.5 w-1.5 bg-[#E65100]" />
                  <span>{project.category}</span>
                </div>
                <div className="absolute right-4 top-4 border border-white/20 bg-[#2C1D11]/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  {project.status}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between gap-3 border-b border-[#E5E7EB] pb-3">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
                    {project.category}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#18181B]/60">
                    {project.year}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-[#2C1D11]">{project.title}</h2>
                <p className="mt-2 text-sm text-[#18181B]/65">{project.location}</p>
                <p className="mt-5 text-sm leading-7 text-[#18181B]/75">{project.summary}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="border border-[#E5E7EB] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#2C1D11]/70">
                      {metric}
                    </span>
                  ))}
                </div>

                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="mt-7 inline-flex items-center gap-2 border border-[#2C1D11] bg-[#FAFAFA] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11] transition hover:border-[#E65100] hover:text-[#E65100]"
                >
                  View project
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))
        ) : (
          <div className="md:col-span-2 xl:col-span-3 border border-[#E5E7EB] bg-white p-8 text-sm text-[#18181B]/70">
            No project profiles match these filters yet.
          </div>
        )}
      </div>
    </PageLayout>
  );
}
