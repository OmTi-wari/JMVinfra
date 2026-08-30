import { ArrowRight, Building2, Users } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { leadershipMembers, partnerProfiles } from "@/data/teamData";

export const Route = createFileRoute("/people")({
  head: () => ({ meta: [{ title: "Leadership | JMV Engineering Infra" }] }),
  component: PeoplePage,
});

function PeoplePage() {
  return (
    <PageLayout
      eyebrow="Leadership & governance"
      title="Guided by Engineering Expertise & Visionary Leadership."
      description="Founded on the principles of structural integrity, financial discipline, and engineering excellence."
    >
      <section className="relative overflow-hidden rounded-[2rem] bg-[#2C1D11] p-8 text-white shadow-lift md:p-12">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#E65100]/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-8 bottom-0 h-52 w-52 rounded-full bg-[#F5CDA1]/10 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-3xl">
          <p className="eyebrow text-[#E65100]">Leadership & governance</p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.06em] text-white md:text-5xl">
            Guided by Engineering Expertise & Visionary Leadership.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
            Founded on the principles of structural integrity, financial discipline, and
            engineering excellence.
          </p>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        {partnerProfiles.map((partner, index) => (
          <article
            key={partner.name}
            className="founder-card group relative overflow-hidden rounded-[2rem] border border-[#2C1D11]/10 bg-white shadow-soft"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#E65100] via-[#F59E0B] to-[#2C1D11]" aria-hidden="true" />
            <div className="border-b border-[#2C1D11]/10 bg-[#2C1D11] px-6 py-5">
              <p className="eyebrow text-[#E65100]">Founding partner</p>
            </div>

            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative p-4">
                <div className="founder-photo-shell relative overflow-hidden rounded-[1.5rem] border-2 border-[#E65100]/60 bg-[#F3F4F6] p-2">
                  <div className="absolute inset-3 border border-[#E65100]/40" aria-hidden="true" />
                  <div className="absolute -right-8 top-4 h-20 w-20 rounded-full bg-[#E65100]/15 blur-2xl transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="founder-photo h-[420px] w-full rounded-[1rem] object-cover object-center"
                    loading="lazy"
                    onError={(event) => {
                      const target = event.currentTarget;
                      target.style.display = "none";
                      const frame = target.parentElement?.querySelector("div[data-fallback]");
                      if (frame) {
                        frame.classList.remove("hidden");
                      }
                    }}
                  />
                  <div data-fallback className="hidden flex h-[420px] w-full items-center justify-center rounded-[1rem] bg-[#F3F4F6] text-[#2C1D11]">
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-[#E65100]/50 bg-white text-2xl font-bold text-[#E65100]">
                        {partner.name
                          .split(" ")
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-[0.12em]">Profile</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="eyebrow text-[#E65100]">Leadership profile</p>
                <h3 className="mt-4 text-3xl font-extrabold tracking-[-0.06em] text-[#2C1D11] md:text-[2.2rem]">
                  {partner.name}
                </h3>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#2C1D11] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    {partner.designation}
                  </span>
                  <span className="rounded-full border border-[#E65100]/30 bg-[#F3F4F6] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2C1D11]">
                    {partner.credentials}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-[#1A1A1A]/80">
                  {partner.focus.split(" & ").map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#E65100]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-neutral-200 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60">
                    Strategic oversight
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-[#2C1D11]">
                    <span className="rounded-full border border-neutral-200 bg-[#F3F4F6] px-2.5 py-1.5">
                      Engineering Oversight
                    </span>
                    <span className="rounded-full border border-neutral-200 bg-[#F3F4F6] px-2.5 py-1.5">
                      Procurement
                    </span>
                    <span className="rounded-full border border-neutral-200 bg-[#F3F4F6] px-2.5 py-1.5">
                      Financial Strategy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-20 overflow-hidden rounded-[2rem] bg-[#2C1D11] py-16 text-[#FAFAFA] shadow-lift">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="relative">
            <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-[#E65100]/20 blur-3xl" aria-hidden="true" />
            <p className="eyebrow relative text-[#E65100]">Joint founders' message</p>
          </div>
          <blockquote className="mt-6 max-w-5xl text-2xl font-medium leading-relaxed tracking-[-0.04em] text-white md:text-4xl">
            “Engineering progress is built on unyielding quality, absolute safety, and
            execution integrity.”
          </blockquote>
          <p className="mt-8 max-w-4xl text-base leading-8 text-[#FAFAFA]/75 md:text-lg">
            JMV brings together civil engineering technicality and strategic management to
            deliver dependable execution across Roadways, Railways, Airports, and Urban
            Infrastructure. Our operating model aligns engineering rigor, governance, and field
            discipline to keep every project accountable from concept to completion.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-[#E65100]">Project engineering</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl">
              Engineering & Site Execution Division
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E65100]/30 bg-[#F3F4F6] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2C1D11]">
            <Users className="h-3.5 w-3.5 text-[#E65100]" />
            Expanding Team
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {leadershipMembers.map((member, index) => (
            <article
              key={member.name}
              className="member-card group overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-soft"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative bg-[#F3F4F6] p-4">
                <div className="absolute inset-x-5 top-4 h-10 rounded-full bg-[#E65100]/10 blur-2xl" aria-hidden="true" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative h-64 w-full rounded-[1.2rem] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  onError={(event) => {
                    const target = event.currentTarget;
                    target.style.display = "none";
                    const fallback = target.parentElement?.querySelector("div[data-team-fallback]");
                    if (fallback) fallback.classList.remove("hidden");
                  }}
                />
                <div data-team-fallback className="hidden relative flex h-64 w-full items-center justify-center rounded-[1.2rem] bg-[#F3F4F6] text-[#2C1D11]">
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#E65100]/50 bg-white text-xl font-bold text-[#E65100]">
                      {member.name
                        .split(" ")
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join("")}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em]">Team</p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#E65100]">
                  {member.designation}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-[#2C1D11]">
                  {member.name}
                </h3>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2C1D11]/65">
                  {member.credentials}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#1A1A1A]/75">{member.focus}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-[#E65100]/30 bg-[#F3F4F6] px-5 py-4 text-sm text-[#2C1D11] md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-[#E65100]" />
            <span className="font-semibold">Career growth lives in the field, the lab, and the site office.</span>
          </div>
          <Link
            to="/careers"
            className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#E65100] md:mt-0"
          >
            Explore opportunities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
