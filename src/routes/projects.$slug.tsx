import { ArrowLeft, ArrowRight } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { ImageLightbox } from "@/components/ImageLightbox";
import { PageLayout } from "@/components/PageLayout";
import { projectsData } from "@/data/projectsData";

const imageMap: Record<string, string> = { "/src/assets/project-1.jpg": project1, "/src/assets/project-2.jpg": project2, "/src/assets/project-3.jpg": project3, "/src/assets/project-4.jpg": project4 };

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => ({ meta: [{ title: `${params.slug.replace(/-/g, " ")} | JMV Projects` }] }),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const project = projectsData.find((item) => item.slug === slug);
  if (!project) return <PageLayout eyebrow="Project unavailable" title="This project profile isn’t published yet." description="Browse other active and completed infrastructure work or get in touch for project updates."><Link to="/projects" className="inline-flex rounded-full bg-jmv-orange px-5 py-3 text-sm font-semibold text-white">Back to projects</Link></PageLayout>;
  const related = projectsData.filter((item) => item.slug !== project.slug).slice(0, 3);
  const meta = [["Client", project.client], ["Location", project.location], ["Role", project.role], ["Category", project.category], ["Status", project.status], ["Year", project.year]];
  return <PageLayout eyebrow={`${project.category} · ${project.status}`} title={project.title} description={project.summary}><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]"><aside className="h-fit rounded-2xl bg-jmv-brown p-7 text-white lg:sticky lg:top-28"><p className="eyebrow text-jmv-orange">Project profile</p><dl className="mt-6 space-y-5">{meta.map(([label, value]) => <div key={label} className="border-b border-white/10 pb-4"><dt className="text-xs uppercase tracking-[0.12em] text-white/50">{label}</dt><dd className="mt-1 text-sm font-semibold text-white">{value}</dd></div>)}</dl></aside><div><section><p className="eyebrow text-jmv-orange">Executive summary</p><h2 className="mt-3 text-3xl font-bold text-jmv-brown">Built for the demands of a live infrastructure environment.</h2><p className="mt-5 text-base leading-8 text-jmv-charcoal/70">{project.summary}</p></section><section className="mt-14"><p className="eyebrow text-jmv-orange">Scope of execution</p><ul className="mt-5 grid gap-3 sm:grid-cols-2">{project.scopeOfExecution.map((item) => <li key={item} className="rounded-xl border border-border bg-white p-4 text-sm leading-7 text-jmv-charcoal/75">{item}</li>)}</ul></section><section className="mt-14"><p className="eyebrow text-jmv-orange">Engineering challenges overcome</p><ul className="mt-5 space-y-3">{project.engineeringChallenges.map((item) => <li key={item} className="border-l-2 border-jmv-orange pl-4 text-sm leading-7 text-jmv-charcoal/75">{item}</li>)}</ul></section><section className="mt-14"><p className="eyebrow text-jmv-orange">Project gallery</p><div className="mt-5"><ImageLightbox images={project.gallery.map((image) => imageMap[image])} title={project.title} /></div></section></div></div><section className="mt-16 border-t border-border pt-10"><div className="flex items-center justify-between"><div><p className="eyebrow text-jmv-orange">Related projects</p><h2 className="mt-3 text-3xl font-bold text-jmv-brown">More work in this portfolio.</h2></div><Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-jmv-orange">All projects <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-7 flex snap-x gap-5 overflow-x-auto pb-4">{related.length ? related.map((item) => <Link key={item.slug} to="/projects/$slug" params={{ slug: item.slug }} className="w-[min(80vw,20rem)] shrink-0 snap-start rounded-2xl border border-border bg-white p-5 shadow-soft hover:border-jmv-orange/50"><p className="eyebrow text-jmv-orange">{item.status}</p><h3 className="mt-3 font-bold text-jmv-brown">{item.title}</h3><p className="mt-2 text-sm text-jmv-charcoal/65">{item.location}</p></Link>) : <p className="text-sm text-jmv-charcoal/65">[Related Project Profile Pending Verification]</p>}</div></section><Link to="/projects" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-jmv-brown"><ArrowLeft className="h-4 w-4" /> Back to projects</Link></PageLayout>;
}
