import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
      <Reveal>
        <div className="rounded-[2rem] border border-jmv-orange/25 bg-gradient-to-r from-jmv-orange to-jmv-orange-burnt px-8 py-12 text-white shadow-lift sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-14">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/75">Let’s build</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Need a dependable infrastructure partner?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Share your project scope, timing and location to explore the right delivery model for
              your requirements.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-6 py-3 text-sm font-semibold text-jmv-orange transition-colors hover:bg-jmv-grey lg:mt-0"
          >
            GET IN TOUCH
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
