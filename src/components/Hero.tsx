import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden bg-jmv-brown">
      <img
        src={heroImage}
        alt="Bridge and infrastructure construction site with structural engineering framework"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(230,81,0,0.28),transparent_35%),linear-gradient(90deg,rgba(27,18,13,0.88)_0%,rgba(27,18,13,0.68)_38%,rgba(27,18,13,0.35)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-36 sm:justify-center lg:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-jmv-orange">JMV ENGINEERING INFRA</p>
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
              className="rounded-full bg-jmv-orange px-7 py-4 text-center text-sm font-semibold tracking-[0.12em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-jmv-orange-burnt"
            >
              EXPLORE OUR WORK
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/35 bg-transparent px-7 py-4 text-center text-sm font-semibold tracking-[0.12em] text-white transition-colors duration-200 hover:bg-white/10"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
