import aboutImage from "@/assets/about.jpg";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <Reveal>
          <div className="max-w-xl">
            <p className="eyebrow text-jmv-orange">Who we are</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-jmv-brown md:text-[3.2rem]">
              Engineering ideas
              <span className="block">into built reality.</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-jmv-charcoal/70">
              <p>
                JMV Engineering Infra delivers dependable construction and infrastructure outcomes
                through disciplined planning, rigorous site execution, and a practical understanding
                of what modern projects demand.
              </p>
              <p>
                From public roads and civic works to turnkey infrastructure packages, we work with a
                strong focus on safety, integrity, quality control, and long-term performance.
              </p>
            </div>
            <div className="mt-10 h-px w-28 bg-jmv-orange" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden border border-jmv-orange/25 bg-white p-3 shadow-soft">
            <img
              src={aboutImage}
              alt="Infrastructure construction site with structural steel and concrete support"
              width={1200}
              height={1408}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-4 border border-jmv-orange/50" />
            <div aria-hidden="true" className="absolute -bottom-5 -left-5 hidden h-20 w-20 border-b-2 border-l-2 border-jmv-orange sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
