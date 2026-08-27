import { ExternalLink, Phone } from "lucide-react";
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
      eyebrow="Locations"
      title="Operating close to the projects and people we serve."
      description="JMV maintains strategic regional presence in Mumbai and Ahmedabad to stay close to sites, stakeholders, and the pace of infrastructure delivery."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {offices.map((office) => (
          <article
            key={office.city}
            className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-soft"
          >
            <LocationsMap
              city={office.city}
              address={office.address}
              coordinates={office.coordinates}
            />
            <div className="p-7">
              <p className="eyebrow text-jmv-orange">{office.city}</p>
              <h2 className="mt-3 text-2xl font-bold text-jmv-brown">{office.address}</h2>
              <p className="mt-4 text-sm leading-7 text-jmv-charcoal/70">{office.note}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-jmv-orange px-5 py-3 text-sm font-semibold text-white hover:bg-jmv-orange-burnt"
                >
                  <Phone className="h-4 w-4" /> Call office
                </a>
                <a
                  href={`${whatsappHref}?text=Hello%20JMV%20${encodeURIComponent(office.city)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-jmv-grey px-5 py-3 text-sm font-semibold text-jmv-brown hover:border-jmv-orange"
                >
                  <ExternalLink className="h-4 w-4" /> WhatsApp local team
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <section className="mt-12 rounded-[2rem] bg-jmv-orange p-8 text-white md:p-10">
        <p className="eyebrow text-white/70">Central contact</p>
        <h2 className="mt-3 text-3xl font-bold text-white">Planning a project across regions?</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-jmv-orange"
          >
            <Phone className="h-4 w-4" /> {contact.phone}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white"
          >
            {contact.email}
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
