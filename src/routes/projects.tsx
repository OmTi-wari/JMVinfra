import { createFileRoute, Link } from "@tanstack/react-router";

import { PageLayout } from "@/components/PageLayout";
import { projectsData, type ProjectStatus } from "@/data/projectsData";

const categories = ["All", "Road", "Airport", "Railway", "Urban Infra", "PWD", "BMC", "AMC", "Schools", "Turnkey"] as const;
const statuses: ("All" | ProjectStatus)[] = ["All", "Ongoing", "Completed", "Upcoming"];

export const Route = createFileRoute("/projects")({
  validateSearch: (search: Record<string, unknown>) => ({ category: typeof search.category === "string" ? search.category : "All", status: typeof search.status === "string" ? search.status : "All" }),
  head: () => ({ meta: [{ title: "Projects | JMV Engineering Infra" }] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const search = Route.useSearch();
  const category = search.category ?? "All";
  const status = search.status ?? "All";
  const visibleProjects = projectsData.filter((project) => (category === "All" || project.category === category) && (status === "All" || project.status === status));
  const chip = (active: boolean) => active ? "rounded-full bg-jmv-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white" : "rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-jmv-brown/70 hover:border-jmv-orange";
  return <PageLayout eyebrow="Project portfolio" title="Delivering infrastructure with measurable impact." description="Explore JMV project profiles by sector and delivery status. Project records remain structured for verified scope, client, and performance updates."><div className="space-y-5 rounded-[1.75rem] border border-border bg-jmv-grey p-5"><div><p className="eyebrow text-jmv-orange">Filter by category</p><div className="mt-3 flex flex-wrap gap-2">{categories.map((item) => <Link key={item} to="/projects" search={{ category: item, status }} className={chip(category === item)}>{item}</Link>)}</div></div><div><p className="eyebrow text-jmv-orange">Filter by status</p><div className="mt-3 flex flex-wrap gap-2">{statuses.map((item) => <Link key={item} to="/projects" search={{ category, status: item }} className={chip(status === item)}>{item}</Link>)}</div></div></div><div className="mt-10 grid gap-6 md:grid-cols-2">{visibleProjects.length ? visibleProjects.map((project) => <article key={project.slug} className="rounded-[1.75rem] border border-border bg-white p-7 shadow-soft"><div className="flex items-center justify-between gap-3"><span className="eyebrow text-jmv-orange">{project.category}</span><span className="text-xs font-semibold text-jmv-charcoal/60">{project.status}</span></div><h2 className="mt-4 text-2xl font-bold text-jmv-brown">{project.title}</h2><p className="mt-2 text-sm text-jmv-charcoal/65">{project.location} · {project.year}</p><p className="mt-5 text-sm leading-7 text-jmv-charcoal/70">{project.summary}</p><Link to="/projects/$slug" params={{ slug: project.slug }} className="mt-7 inline-flex rounded-full bg-jmv-brown px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-jmv-orange">View project</Link></article>) : <p className="text-sm text-jmv-charcoal/65">No project profiles match these filters yet.</p>}</div></PageLayout>;
}
