import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { projectsData } from "@/data/projectsData";

const tabs = ["All", "Road", "Airport", "Railway", "Urban"] as const;

export function Projects() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");

  const visibleProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="bg-jmv-grey py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-jmv-orange">Featured projects</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-jmv-brown md:text-[3rem]">
                Work shaped by scale, complexity, and accountability.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  suppressHydrationWarning={true}
                  onClick={() => setActiveTab(tab)}
                  className={
                    activeTab === tab
                      ? "rounded-full bg-jmv-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
                      : "rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-jmv-brown/75"
                  }
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70}>
              <article className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-soft">
                <div className="border-b border-border bg-jmv-grey p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-jmv-orange">
                      {project.category}
                    </span>
                    <span className="text-sm font-medium text-jmv-charcoal/70">{project.status}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-jmv-brown">{project.title}</h3>
                  <p className="mt-2 text-sm text-jmv-charcoal/65">{project.location}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-7 text-jmv-charcoal/70">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="rounded-full border border-border bg-jmv-grey px-3 py-1 text-xs font-medium text-jmv-charcoal/75">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
