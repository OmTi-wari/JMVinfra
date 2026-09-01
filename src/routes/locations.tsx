import { ExternalLink, MapPin, Phone } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { LocationsMap } from "@/components/LocationsMap";
import { PageLayout } from "@/components/PageLayout";
import { contact } from "@/data/site";

const offices = [
  {
    city: "Mumbai Head Office",
    address: contact.mumbaiAddress,
    note: "Regional operations and project coordination for urban, transit, and strategic infrastructure delivery.",
    coordinates: [19.2041, 72.8726] as [number, number],
  },
  {
    city: "Ahmedabad Office",
    address: contact.ahmedabadAddress,
    note: "Operational presence for civic works, institutional delivery, and regional infrastructure support.",
    coordinates: [23.0195, 72.6581] as [number, number],
  },
];

export const Route = createFileRoute("/locations")({
  head: () => ({ meta: [{ title: "Locations | JMV Engineering Infra" }] }),
  component: LocationsPage,
});

function LocationsPage() {
  const phoneHref = `tel:${contact.phone.replace(/\s/g, "")}`;
  const whatsappHref = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;

  return (
    <PageLayout
      eyebrow="Regional presence // operations"
      title="Operating close to the projects and people we serve."
      description="JMV maintains strategic regional presence in Mumbai and Ahmedabad to stay close to sites, stakeholders, and the pace of infrastructure delivery."
    >
      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {offices.map((office) => (
          <article key={office.city} className="overflow-hidden border border-neutral-200 bg-white">
            <LocationsMap
              city={office.city}
              address={office.address}
              coordinates={office.coordinates}
            />
            <div className="p-7 md:p-8">
              <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
                <span className="h-1.5 w-1.5 bg-[#E65100]" />
                <span>{office.city}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-[#2C1D11]">
                {office.address}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#18181B]/70">{office.note}</p>

              <div className="mt-7 border-t border-neutral-200 pt-5">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 border border-[#E65100] bg-[#E65100] px-5 py-3 text-sm font-semibold text-white"
                  >
                    <Phone className="h-4 w-4" /> Call office
                  </a>
                  <a
                    href={`${whatsappHref}?text=Hello%20JMV%20${encodeURIComponent(office.city)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-neutral-200 bg-[#F3F4F6] px-5 py-3 text-sm font-semibold text-[#2C1D11]"
                  >
                    <ExternalLink className="h-4 w-4" /> WhatsApp team
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-20 border border-neutral-200 bg-[#F3F4F6] p-8 md:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Project proximity</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#2C1D11] md:text-4xl">
              Planning a project across regions?
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 bg-[#E65100] px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-[#2C1D11]"
            >
              <MapPin className="h-4 w-4" /> {contact.email}
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
