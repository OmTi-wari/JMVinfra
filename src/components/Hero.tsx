import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden bg-[#2C1D11]">
      <img
        src={heroImage}
        alt="Bridge and infrastructure construction site with structural engineering framework"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(230,81,0,0.42),transparent_30%),linear-gradient(90deg,rgba(27,18,13,0.9)_0%,rgba(27,18,13,0.74)_42%,rgba(27,18,13,0.4)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="absolute inset-y-0 right-0 hidden w-1/3 border-l border-white/10 bg-white/[0.02] lg:block" />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 sm:justify-center lg:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
            <span className="h-1.5 w-1.5 bg-[#E65100]" />
            <span>JMV ENGINEERING INFRA</span>
          </div>

          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl lg:text-[5.2rem]">
            BUILDING TODAY.
            <span className="mt-2 block text-white/85">STRONGER TOMORROW.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Engineering, construction and turnkey infrastructure solutions built around quality,
            safety and dependable execution.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#projects"
              className="border border-[#E65100] bg-[#E65100] px-7 py-4 text-center text-sm font-semibold tracking-[0.12em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#2C1D11]"
            >
              EXPLORE OUR WORK
            </a>
            <a
              href="#contact"
              className="border border-white/25 bg-transparent px-7 py-4 text-center text-sm font-semibold tracking-[0.12em] text-white transition-colors duration-200 hover:bg-white/10"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
