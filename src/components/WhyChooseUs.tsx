export function WhyChooseUs() {
  const values = [
    { id: "01", label: "INTEGRITY", detail: "Transparent delivery and accountable project leadership." },
    { id: "02", label: "QUALITY", detail: "Standards-driven execution across every site and phase." },
    { id: "03", label: "SAFETY", detail: "Operational discipline that protects people, sites and outcomes." },
    { id: "04", label: "RESULTS", detail: "Practical infrastructure solutions focused on tangible progress." },
  ];

  return (
    <section className="bg-jmv-brown py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div key={value.id} className="border-l border-white/15 pl-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-jmv-orange">{value.id}</p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em]">{value.label}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{value.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
