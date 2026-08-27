import { Reveal } from "@/components/Reveal";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <section aria-label="Company highlights" className="border-y border-border bg-concrete/60">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="border-l-2 border-accent/70 pl-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
