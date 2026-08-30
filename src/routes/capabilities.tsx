import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ClipboardCheck,
  Gauge,
  HardHat,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

interface CapabilityPillar {
  id: string;
  label: string;
  title: string;
  summary: string;
  highlights: string[];
  details: { label: string; value: string }[];
  image: string;
}

interface EquipmentCategory {
  title: string;
  image: string;
  metric: string;
  applications: string[];
}

const capabilityPillars: CapabilityPillar[] = [
  {
    id: "epc",
    label: "Turnkey EPC execution",
    title: "Integrated design-build delivery from concept to commissioning.",
    summary:
      "We coordinate design intent, procurement strategy, site mobilization, and commissioning in one accountable delivery chain so performance risk stays controlled from day one.",
    highlights: [
      "Design-build interfaces synchronized across civil, structural, and utility scopes.",
      "Procurement planning aligned with site sequencing and long-lead approvals.",
      "Commissioning handover supported with documentation, testing, and readiness checks.",
      "Single-point accountability for schedule, quality, and execution continuity.",
    ],
    details: [
      { label: "Tolerance", value: "ISO Compliant" },
      { label: "Capacity", value: "Heavy Duty" },
      { label: "Sequence", value: "Phase Locked" },
      { label: "Execution", value: "Turnkey" },
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "civil",
    label: "Civil & structural engineering",
    title: "Alignment-led infrastructure engineering for resilient corridors.",
    summary:
      "Our civil and structural teams model geometry, drainage, load paths, and roadway performance to keep bridges, flyovers, and highway systems durable, safe, and efficient.",
    highlights: [
      "Highway alignment and geometric design support safe traffic flow and drainage.",
      "Bridge and flyover detailing driven by structural performance and constructability.",
      "Survey control, setting-out, and intermediate verification reduce rework in the field.",
      "Design coordination built around staging, maintenance access, and budget discipline.",
    ],
    details: [
      { label: "Tolerance", value: "Survey Verified" },
      { label: "Capacity", value: "High Load" },
      { label: "Alignment", value: "Precision Set" },
      { label: "Geometry", value: "Modelled" },
    ],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "fleet",
    label: "Fleet & equipment mobilization",
    title: "Mobilized plant and machinery configured for heavy-duty production.",
    summary:
      "From earthmoving spreads to paving and compaction sets, we build equipment readiness around productivity, maintenance discipline, and rapid site deployment.",
    highlights: [
      "Heavy plant selection matched to scope, output targets, and site constraints.",
      "Batching and concrete systems kept ready for continuous placement schedules.",
      "Routine servicing and standby planning reduce downtime on critical path activities.",
      "Field logistics support rapid repositioning and resource balancing across work fronts.",
    ],
    details: [
      { label: "Tolerance", value: "Shift Ready" },
      { label: "Capacity", value: "Fleet Linked" },
      { label: "Deploy", value: "Rapid" },
      { label: "Maintain", value: "Scheduled" },
    ],
    image:
      "https://images.unsplash.com/photo-1581092919537-0f06d2658ee4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pms",
    label: "Project management systems",
    title: "Controls that keep cost, schedule, and workforce synchronized.",
    summary:
      "Resource scheduling, cost visibility, issue tracking, and reporting cadence enable disciplined execution against critical milestones and client expectations.",
    highlights: [
      "Progress and productivity dashboards aligned with execution milestones and labor planning.",
      "Cost control built around committed budgets, approvals, and forecast variance tracking.",
      "Timeline discipline reinforced by internal reviews, delay analysis, and recovery planning.",
      "Stakeholder communication driven by consistent reporting, risk visibility, and action logs.",
    ],
    details: [
      { label: "Schedule", value: "Milestone-Driven" },
      { label: "Cost", value: "Tracked" },
      { label: "Alerts", value: "Live" },
      { label: "Reports", value: "Daily" },
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "qa",
    label: "Quality assurance & testing",
    title: "Material and workmanship verification anchored in engineering standards.",
    summary:
      "Our field and lab diagnostics validate concrete quality, bitumen performance, subgrade strength, and compaction so every layer meets specification before it proceeds.",
    highlights: [
      "Concrete laboratory diagnostics and in-situ testing verify strength and consistency.",
      "Bitumen grading and mix characterisation support robust pavement performance.",
      "Soil mechanics and compaction checks protect structural stability and long-term durability.",
      "Inspection workflows capture deviations early and drive close-out with documented compliance.",
    ],
    details: [
      { label: "Testing", value: "Field & Lab" },
      { label: "Concrete", value: "Verified" },
      { label: "Soils", value: "Checked" },
      { label: "Standards", value: "Spec-Led" },
    ],
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hse",
    label: "Health, safety & environment",
    title: "Operational discipline built around zero-harm site culture.",
    summary:
      "HSE is not a sub-function—it is embedded in pre-task planning, daily toolbox talks, hazard controls, and independent site audits that reinforce safe execution.",
    highlights: [
      "Zero-harm planning supported by method statements, permit-to-work controls, and hazard reviews.",
      "Daily toolbox talks reinforce behavioral safety and jobsite risk recognition.",
      "Environmental safeguards include dust suppression, waste handling, and erosion prevention.",
      "Surveillance, audits, and corrective actions close gaps before they become incidents.",
    ],
    details: [
      { label: "Compliance", value: "ISO / PWD / MMRD" },
      { label: "Risk", value: "Mitigated" },
      { label: "Audit", value: "Daily" },
      { label: "Objective", value: "Zero Accident" },
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
];

const equipmentCategories: EquipmentCategory[] = [
  {
    title: "Earthmoving & Excavation",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    metric: "[Verified Fleet Count]",
    applications: ["Bulk excavation", "Cut-fill balancing", "Material movement"],
  },
  {
    title: "Paving & Compaction",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    metric: "[Verified Fleet Count]",
    applications: ["Road layers", "Surface finishing", "Compaction control"],
  },
  {
    title: "Lifting & Material Handling",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    metric: "[Verified Fleet Count]",
    applications: ["Structural lifts", "Crane support", "Material transfer"],
  },
  {
    title: "Concrete & Batching Systems",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    metric: "[Verified Fleet Count]",
    applications: ["RMC supply", "Paving pours", "Concrete placement"],
  },
];

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities | JMV Engineering Infra" },
      {
        name: "description",
        content:
          "Capabilities and execution systems for infrastructure delivery, quality assurance, HSE, fleet mobilization, and project management.",
      },
    ],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  const [activePillar, setActivePillar] = useState(0);
  const activeCapability = capabilityPillars[activePillar];

  return (
    <main className="bg-[#FAFAFA] text-[#1A1A1A]">
      <section className="relative isolate overflow-hidden bg-[#2C1D11] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Infrastructure construction site"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(230,81,0,0.38),_transparent_42%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1D11]/90 via-[#2C1D11]/80 to-[#2C1D11]/50" />
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-20"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            <g stroke="rgba(255,255,255,0.35)" strokeWidth="1">
              <path d="M0 120H1200M0 240H1200M0 360H1200M0 480H1200M0 600H1200M0 720H1200" />
              <path d="M160 0V800M320 0V800M480 0V800M640 0V800M800 0V800M960 0V800M1120 0V800" />
            </g>
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:pb-28 lg:pt-28">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#E65100]">Capabilities & execution</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
              Technical delivery framework · site-first systems
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
              Engineering Precision at Massive Scale.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              From complex highway grids to high-capacity rail corridors, our integrated
              capabilities bridge engineering vision and physical execution.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E65100] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#BF360C]"
              >
                Initiate capability consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
              >
                Explore project delivery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow text-[#E65100]">Capability matrix</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl">
            An execution model built for infrastructure complexity.
          </h2>
        </div>

        <div className="overflow-hidden border border-neutral-200 bg-white shadow-soft">
          <div className="flex flex-wrap gap-2 border-b border-neutral-200 bg-[#F3F4F6] p-3 lg:p-4">
            {capabilityPillars.map((pillar, index) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillar(index)}
                aria-pressed={activePillar === index}
                className={[
                  "rounded-full border px-4 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-200",
                  activePillar === index
                    ? "border-[#E65100] bg-[#E65100] text-white"
                    : "border-neutral-200 bg-white text-[#2C1D11]/75 hover:border-[#E65100]/40 hover:text-[#E65100]",
                ].join(" ")}
              >
                {pillar.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 p-5 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F4F6] text-[#E65100] shadow-soft">
                  {activePillar === 0 && <Building2 className="h-5 w-5" />}
                  {activePillar === 1 && <Gauge className="h-5 w-5" />}
                  {activePillar === 2 && <Truck className="h-5 w-5" />}
                  {activePillar === 3 && <ClipboardCheck className="h-5 w-5" />}
                  {activePillar === 4 && <BadgeCheck className="h-5 w-5" />}
                  {activePillar === 5 && <ShieldCheck className="h-5 w-5" />}
                </span>
                <p className="eyebrow text-[#E65100]">{activeCapability.label}</p>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl">
                  {activeCapability.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-[#1A1A1A]/70">
                  {activeCapability.summary}
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {activeCapability.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-[#F3F4F6] p-4 text-sm leading-6 text-[#1A1A1A]/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E65100]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-[#F3F4F6]">
              <img
                src={activeCapability.image}
                alt={activeCapability.title}
                className="h-full min-h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1D11]/90 via-[#2C1D11]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="grid grid-cols-2 gap-3">
                  {activeCapability.details.map((detail) => (
                    <div
                      key={detail.label}
                      className="rounded-xl border border-white/15 bg-[#2C1D11]/75 p-3 backdrop-blur-sm"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/65">
                        {detail.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-2 lg:px-10 lg:py-8">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow text-[#E65100]">Fleet readiness</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl">
            Heavy Machinery & Fleet Readiness
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {equipmentCategories.map((equipment) => (
            <article
              key={equipment.title}
              className="group overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-[#E65100]/40 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <img
                  src={equipment.image}
                  alt={equipment.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1D11]/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="rounded-full border border-white/20 bg-white/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    {equipment.metric}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#2C1D11]">
                  {equipment.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-[#1A1A1A]/75">
                  {equipment.applications.map((application) => (
                    <li key={application} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E65100]" aria-hidden="true" />
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 bg-[#2C1D11] py-18 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="eyebrow text-[#E65100]">HSE commitment</p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.05em] text-white md:text-5xl">
              Quality and safety are engineered into every shift.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
              We lead with prevention, verification, and continuous supervision so high-risk
              work remains controlled, traceable, and aligned with statutory and project
              standards.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E65100]/40 bg-[#E65100]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#F7C6A2]">
              <HardHat className="h-4 w-4" />
              Zero-accident objective
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Strict Compliance (ISO/PWD/MMRD Safety Standards)",
              "Advanced Diagnostics (In-situ Soil & Material Testing)",
              "Environmental Safeguards (Dust Suppression & Waste Protocols)",
              "Zero-Accident Objective (Mandatory Daily Site Toolbox Talks)",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 backdrop-blur-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E65100]">
                  0{index + 1}
                </p>
                <p className="mt-4 text-lg font-semibold leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-[2rem] border border-[#E65100]/40 bg-[linear-gradient(135deg,_rgba(230,81,0,0.04),_rgba(230,81,0,0.12))] p-8 md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-[#E65100]">Capability consultation</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl">
              Require specialized turnkey execution for your upcoming infrastructure project?
            </h2>
          </div>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E65100] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#BF360C] lg:mt-0"
          >
            Initiate capability consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
