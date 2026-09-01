import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { PageLayout } from "@/components/PageLayout";
import { leadershipMembers, partnerProfiles } from "@/data/teamData";

const metrics = [
  { label: "SECTORS SERVED", value: "Roadways, Airport EPC, Rail, Urban Infra" },
  { label: "CREDENTIALS", value: "B.E. Civil & PGDM Led Leadership" },
  { label: "FOOTPRINT", value: "Mumbai & Ahmedabad Operations" },
  { label: "GOVERNANCE", value: "PWD, BMC, AMC & MMRDA Alignment" },
] as const;

const pillars = [
  {
    id: "01",
    title: "VISION",
    text: "Engineering progress built on unyielding structural integrity and sustainable infrastructure.",
  },
  {
    id: "02",
    title: "MISSION",
    text: "Executing complex civil, EPC, and turnkey projects with absolute timeline and safety compliance.",
  },
  {
    id: "03",
    title: "SAFETY POLICY",
    text: "Strict Zero-Harm site culture with mandatory daily toolbox talks and hazard controls.",
  },
  {
    id: "04",
    title: "QUALITY ASSURANCE",
    text: "In-situ material testing, bitumen and concrete diagnostics, and continuous site audits.",
  },
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function AboutPage() {
  return (
    <PageLayout
      eyebrow="CORPORATE IDENTITY // OVERVIEW"
      title="Built on Engineering Discipline & Trusted Execution."
      description="JMV Engineering Infra delivers dependable civil and EPC infrastructure solutions across roads, rail, airport, and urban development programmes."
    >
      <motion.section {...fadeUp} className="border border-neutral-200 bg-[#FAFAFA]">
        <div className="grid divide-y divide-neutral-200 md:grid-cols-4 md:divide-x md:divide-y-0">
          {metrics.map((metric) => (
            <div key={metric.label} className="px-5 py-6 md:px-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60">{metric.label}</p>
              <p className="mt-3 text-sm leading-6 text-[#18181B]">{metric.value}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="mt-20">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow text-[#E65100]">Principles</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl">
            Principles Driving Infrastructure Realities
          </h2>
        </div>

        <div className="grid gap-6 border-t border-neutral-200 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`border-neutral-200 pt-6 ${index === 0 ? "xl:border-l-0" : "xl:border-l"} xl:pl-6`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]">{pillar.id} / {pillar.title}</p>
              <p className="mt-5 text-base leading-7 text-[#18181B]">{pillar.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="mt-24">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow text-[#E65100]">Leadership & partners</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl">
            Company Leadership & Partners
          </h2>
          <p className="mt-4 text-base leading-7 text-[#18181B]/70">
            Guided by Civil Engineering Expertise & Strategic Governance.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {partnerProfiles.map((partner) => (
            <motion.article key={partner.name} {...fadeUp} className="border border-neutral-200 bg-white">
              <div className="border-b border-neutral-200 px-5 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]">Partner profile</p>
              </div>

              <div className="grid md:grid-cols-[0.92fr_1.08fr]">
                <div className="p-4">
                  <div className="overflow-hidden border-2 border-[#E65100] bg-[#F3F4F6] p-1">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center border-t border-neutral-200 p-6 md:border-l md:border-t-0">
                  <h3 className="text-2xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-[2.1rem]">
                    {partner.name}
                  </h3>

                  <div className="mt-4 border-y border-neutral-200 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60">
                      {partner.designation}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="border border-neutral-200 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2C1D11]">
                        {partner.credentials}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60">
                      Key responsibilities
                    </p>
                    <div className="mt-3 space-y-2 text-sm leading-6 text-[#18181B]/80">
                      {partner.focus.split(",").map((item) => (
                        <div key={item} className="border-b border-neutral-200 pb-2 last:border-b-0 last:pb-0">
                          {item.trim()}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="mt-24 bg-[#2C1D11] px-6 py-12 text-[#FAFAFA] md:px-10 md:py-16">
        <p className="eyebrow text-[#E65100]">Founders' statement</p>
        <blockquote className="mt-6 max-w-5xl text-2xl font-medium leading-relaxed tracking-[-0.04em] text-[#FAFAFA] md:text-4xl">
          "Engineering progress is built on unyielding quality, absolute safety, and execution integrity."
        </blockquote>
        <p className="mt-6 max-w-4xl text-base leading-8 text-[#FAFAFA]/75 md:text-lg">
          By combining technical civil engineering expertise with strategic management, JMV ensures each project across roads, railways, airports, and municipal infrastructure is delivered to specification, on schedule, and with accountable governance from site mobilisation to completion.
        </p>
      </motion.section>

      <motion.section {...fadeUp} className="mt-24">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-[#E65100]">Operations</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl">
              Engineering & Site Execution Division
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {leadershipMembers.map((member) => (
            <motion.article key={member.name} {...fadeUp} className="border border-neutral-200 bg-white hover:-translate-y-1 transition-transform">
              <div className="overflow-hidden border-b border-neutral-200 bg-[#F3F4F6]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]">{member.designation}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-[#2C1D11]">{member.name}</h3>
                <div className="mt-3 border-t border-neutral-200 pt-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2C1D11]/60">{member.credentials}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#18181B]/75">{member.focus}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border border-neutral-200 bg-[#F3F4F6] px-5 py-4 text-sm text-[#2C1D11]">
          <span className="font-medium">Expanding our engineering teams on site</span>
          <Link to="/careers" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E65100]">
            Explore Opportunities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
}
