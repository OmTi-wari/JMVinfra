import { Outlet, createFileRoute, useLocation } from "@tanstack/react-router";

import { PageLayout } from "@/components/PageLayout";
import { ServiceCard } from "@/components/ServiceCard";
import { servicesData } from "@/data/servicesData";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services | JMV Engineering Infra" }] }),
  component: ServicesPage,
});

function ServicesPage() {
  const location = useLocation();

  if (location.pathname !== "/services") {
    return <Outlet />;
  }

  return (
    <PageLayout
      eyebrow="Business areas"
      title="Engineering capability across critical infrastructure sectors."
      description="We support public works, transit, civil infrastructure, municipal delivery, and bespoke turnkey execution with precision and accountability."
    >
      <div className="mb-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border border-[#E5E7EB] bg-white p-6 md:p-8">
          <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
            <span className="h-1.5 w-1.5 bg-[#E65100]" />
            <span>Capability portfolio</span>
          </div>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#18181B]/75 md:text-lg">
            We engineer dependable delivery across civil works, transit, aviation, and municipal environments with a strong emphasis on technical coordination, operational clarity, and project continuity.
          </p>
        </div>

        <div className="border border-[#2C1D11] bg-[#2C1D11] p-6 text-white md:p-8">
          <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
            <span className="h-1.5 w-1.5 bg-[#E65100]" />
            <span>Execution model</span>
          </div>
          <p className="mt-5 text-2xl font-bold tracking-[-0.04em] text-white">Precision-led delivery for live infrastructure conditions.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((service, index) => (
          <div key={service.slug ?? service.id} className={index === 1 ? "xl:col-span-2" : ""}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
