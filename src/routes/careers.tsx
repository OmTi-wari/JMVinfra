import { useState } from "react";
import { Check, X } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";

const departments = [
  "All",
  "Engineering",
  "Site Operations",
  "Project Management",
  "Quality/Safety",
] as const;
const jobs = [
  {
    title: "Site Engineer",
    department: "Engineering",
    location: "Mumbai / Ahmedabad",
    detail:
      "Support planning, coordination, site records, and execution quality across active infrastructure packages.",
  },
  {
    title: "Project Coordinator",
    department: "Project Management",
    location: "Mumbai / Ahmedabad",
    detail:
      "Help connect schedules, stakeholders, reporting, and delivery decisions across project teams.",
  },
  {
    title: "Site Operations Lead",
    department: "Site Operations",
    location: "Project-based",
    detail:
      "Coordinate site readiness, field resources, safe work planning, and daily progress controls.",
  },
  {
    title: "QA / HSE Officer",
    department: "Quality/Safety",
    location: "Project-based",
    detail:
      "Support inspection, quality records, safety briefings, and compliance processes on site.",
  },
];
export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers | JMV Engineering Infra" }] }),
  component: CareersPage,
});
function CareersPage() {
  const [department, setDepartment] = useState<(typeof departments)[number]>("All");
  const [selected, setSelected] = useState<(typeof jobs)[number] | null>(null);
  const [sent, setSent] = useState(false);
  const visible = jobs.filter((job) => department === "All" || job.department === department);
  return (
    <PageLayout
      eyebrow="Careers"
      title="Build with a team focused on reliable infrastructure delivery."
      description="We are looking for motivated professionals who value field execution, safety, technical rigor, and disciplined project delivery."
    >
      <section className="rounded-[2rem] bg-jmv-brown p-8 text-white md:p-10">
        <p className="eyebrow text-jmv-orange">Why join JMV</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-white">Learn in the field.</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Work close to real infrastructure, experienced teams, and practical delivery
              decisions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Own the outcome.</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Bring care and accountability to work that affects communities and project partners.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Grow with purpose.</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Build capability across engineering, safety, coordination, and project leadership.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div className="flex flex-wrap gap-2">
          {departments.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setDepartment(item)}
              className={
                department === item
                  ? "rounded-full bg-jmv-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white"
                  : "rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-jmv-brown/70"
              }
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {visible.map((job) => (
            <article
              key={job.title}
              className="rounded-2xl border border-border bg-white p-7 shadow-soft"
            >
              <p className="eyebrow text-jmv-orange">{job.department}</p>
              <h2 className="mt-3 text-2xl font-bold text-jmv-brown">{job.title}</h2>
              <p className="mt-2 text-sm text-jmv-charcoal/60">{job.location}</p>
              <p className="mt-5 text-sm leading-7 text-jmv-charcoal/70">{job.detail}</p>
              <button
                type="button"
                onClick={() => {
                  setSelected(job);
                  setSent(false);
                }}
                className="mt-6 rounded-full bg-jmv-brown px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-jmv-orange"
              >
                View role
              </button>
            </article>
          ))}
        </div>
      </section>
      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-jmv-brown/80 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-5 top-5 rounded-full bg-jmv-grey p-2"
              aria-label="Close application"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="eyebrow text-jmv-orange">Application</p>
            <h2 className="mt-4 text-3xl font-bold text-jmv-brown">{selected.title}</h2>
            <p className="mt-2 text-sm text-jmv-charcoal/60">
              {selected.department} · {selected.location}
            </p>
            {sent ? (
              <div className="mt-8 rounded-xl bg-green-50 p-5 text-sm leading-7 text-green-800">
                <Check className="mb-2 h-5 w-5" />
                Application received. Our team will review your details.
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <label className="block text-sm font-semibold text-jmv-brown">
                  Name
                  <input
                    required
                    name="name"
                    className="mt-2 w-full rounded-xl border border-border px-4 py-3 font-normal outline-none focus:border-jmv-orange"
                  />
                </label>
                <label className="block text-sm font-semibold text-jmv-brown">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-xl border border-border px-4 py-3 font-normal outline-none focus:border-jmv-orange"
                  />
                </label>
                <label className="block text-sm font-semibold text-jmv-brown">
                  Experience
                  <input
                    required
                    name="experience"
                    placeholder="Years / relevant background"
                    className="mt-2 w-full rounded-xl border border-border px-4 py-3 font-normal outline-none focus:border-jmv-orange"
                  />
                </label>
                <label className="block text-sm font-semibold text-jmv-brown">
                  Resume upload simulation
                  <input
                    required
                    type="file"
                    name="resume"
                    className="mt-2 w-full rounded-xl border border-border bg-jmv-grey px-4 py-3 text-sm font-normal"
                  />
                </label>
                <button className="w-full rounded-full bg-jmv-orange px-5 py-3 text-sm font-semibold text-white hover:bg-jmv-orange-burnt">
                  Submit application
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </PageLayout>
  );
}
