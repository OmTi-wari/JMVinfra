import { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
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
      eyebrow="Careers // project teams"
      title="Build with a team focused on reliable infrastructure delivery."
      description="We are looking for motivated professionals who value field execution, safety, technical rigor, and disciplined project delivery."
    >
      <section className="mt-10 grid gap-5 border-t border-neutral-200 pt-10 md:grid-cols-3">
        {[
          ["Learn in the field.", "Work close to real infrastructure, experienced teams, and practical delivery decisions."],
          ["Own the outcome.", "Bring care and accountability to work that affects communities and project partners."],
          ["Grow with purpose.", "Build capability across engineering, safety, coordination, and project leadership."],
        ].map(([title, copy], index) => (
          <div key={title} className={`border-t border-neutral-200 pt-5 ${index > 0 ? "md:border-l md:border-t-0 md:pl-6 md:pt-0" : ""}`}>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]">0{index + 1}</p>
            <h2 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-[#2C1D11]">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#18181B]/70">{copy}</p>
          </div>
        ))}
      </section>

      <section className="mt-20">
        <div className="mb-8 flex flex-wrap gap-2">
          {departments.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setDepartment(item)}
              className={
                department === item
                  ? "border border-[#E65100] bg-[#E65100] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
                  : "border border-neutral-200 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2C1D11]/70"
              }
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visible.map((job) => (
            <article key={job.title} className="border border-neutral-200 bg-white p-6 md:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-4">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]">
                  {job.department}
                </p>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60">
                  {job.location}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-bold tracking-[-0.04em] text-[#2C1D11]">{job.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#18181B]/70">{job.detail}</p>

              <button
                type="button"
                onClick={() => {
                  setSelected(job);
                  setSent(false);
                }}
                className="mt-6 inline-flex items-center gap-2 border border-[#2C1D11] bg-[#FAFAFA] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]"
              >
                View role
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </article>
          ))}
        </div>
      </section>

      {selected ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C1D11]/80 p-6" role="dialog" aria-modal="true">
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto border border-neutral-200 bg-white p-8">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-5 top-5 border border-neutral-200 bg-[#F3F4F6] p-2 text-[#2C1D11]"
              aria-label="Close application"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]">Application</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#2C1D11]">{selected.title}</h2>
            <p className="mt-2 text-sm text-[#18181B]/60">
              {selected.department} · {selected.location}
            </p>

            {sent ? (
              <div className="mt-8 border border-emerald-200 bg-emerald-50 p-5 text-sm leading-7 text-emerald-800">
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
                <label className="block text-sm font-semibold text-[#2C1D11]">
                  Name
                  <input
                    required
                    name="name"
                    className="mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
                  />
                </label>
                <label className="block text-sm font-semibold text-[#2C1D11]">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
                  />
                </label>
                <label className="block text-sm font-semibold text-[#2C1D11]">
                  Experience
                  <input
                    required
                    name="experience"
                    placeholder="Years / relevant background"
                    className="mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
                  />
                </label>
                <label className="block text-sm font-semibold text-[#2C1D11]">
                  Resume upload simulation
                  <input
                    required
                    type="file"
                    name="resume"
                    className="mt-2 w-full border border-neutral-200 bg-[#F3F4F6] px-4 py-3 text-sm font-normal"
                  />
                </label>
                <button className="w-full bg-[#E65100] px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white">
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
