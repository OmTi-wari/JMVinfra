export function Statement() {
  return (
    <section aria-label="Locations and presence" className="bg-jmv-brown py-24 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-jmv-orange">Locations & presence</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white md:text-[3rem]">
              Project-ready operations across India’s infrastructure corridors.
            </h2>
          </div>
          <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
            Mumbai | Ahmedabad
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-soft">
            <p className="eyebrow text-jmv-orange">Mumbai</p>
            <h3 className="mt-4 text-3xl font-bold">Urban infrastructure leadership</h3>
            <p className="mt-4 text-base leading-8 text-white/75">
              Strategic project coordination for large-scale civil works, urban networks, and public
              delivery programs spanning high-velocity infrastructure environments.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-soft">
            <p className="eyebrow text-jmv-orange">Ahmedabad</p>
            <h3 className="mt-4 text-3xl font-bold">Regional execution capability</h3>
            <p className="mt-4 text-base leading-8 text-white/75">
              Operational reach across civic, institutional, and infrastructure work requiring reliable
              planning, responsive execution, and strong site coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
