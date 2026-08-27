import { useState } from "react";
import { CheckCircle2, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { company, contact } from "@/data/site";

const tabs = [
  "General Enquiry",
  "Project Tender / Bidding",
  "Vendor Partnership",
  "Careers",
] as const;
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | JMV Engineering Infra" }] }),
  component: ContactPage,
});
function ContactPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("General Enquiry");
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);
  const secondaryPhone = contact.phones[1] ?? contact.phone;
  return (
    <PageLayout
      eyebrow="Contact"
      title="Tell us about your infrastructure requirement."
      description="Reach out for project discussions, tenders, vendor partnerships, or careers. We will route your enquiry to the right team."
    >
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="space-y-5">
          <div className="rounded-2xl bg-jmv-brown p-7 text-white">
            <p className="eyebrow text-jmv-orange">Verified contact</p>
            <div className="mt-6 space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-jmv-orange" />
                <div className="space-y-1 text-2xl font-bold leading-tight text-white">
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="block hover:text-white/80"
                  >
                    {contact.phone}
                  </a>
                  <a
                    href={`tel:${secondaryPhone.replace(/\s/g, "")}`}
                    className="block hover:text-white/80"
                  >
                    {secondaryPhone}
                  </a>
                </div>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail className="h-5 w-5 text-jmv-orange" />
                {contact.email}
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <MessageCircle className="h-5 w-5 text-jmv-orange" />
                WhatsApp: {contact.whatsapp}
              </a>
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <Instagram className="h-5 w-5 text-jmv-orange" />
                @jmv_engineering_infra
              </a>
              <p className="flex items-center gap-3 text-white/75">
                <MapPin className="h-5 w-5 text-jmv-orange" />
                Mumbai & Ahmedabad
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-white p-7 shadow-soft">
            <p className="eyebrow text-jmv-orange">Office presence</p>
            <p className="mt-4 text-sm leading-7 text-jmv-charcoal/70">
              Mumbai Head Office
              <br />
              {contact.mumbaiAddress}
              <br />
              <br />
              Ahmedabad Office
              <br />
              {contact.ahmedabadAddress}
            </p>
          </div>
        </aside>
        <section className="rounded-2xl border border-border bg-white p-7 shadow-soft md:p-9">
          <div className="flex flex-wrap gap-2 border-b border-border pb-5">
            {tabs.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setTab(item);
                  setFeedback(null);
                }}
                className={
                  tab === item
                    ? "rounded-full bg-jmv-orange px-4 py-2 text-xs font-semibold text-white"
                    : "rounded-full border border-border px-4 py-2 text-xs font-semibold text-jmv-brown/70"
                }
              >
                {item}
              </button>
            ))}
          </div>
          <form
            className="mt-8 space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              const form = new FormData(event.currentTarget);
              setFeedback(form.get("name") && form.get("email") ? "success" : "error");
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-jmv-brown">
                Name
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-border px-4 py-3 font-normal outline-none focus:border-jmv-orange"
                />
              </label>
              <label className="text-sm font-semibold text-jmv-brown">
                Email
                <input
                  name="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-border px-4 py-3 font-normal outline-none focus:border-jmv-orange"
                />
              </label>
            </div>
            <label className="block text-sm font-semibold text-jmv-brown">
              Phone
              <input
                name="phone"
                type="tel"
                className="mt-2 w-full rounded-xl border border-border px-4 py-3 font-normal outline-none focus:border-jmv-orange"
              />
            </label>
            <label className="block text-sm font-semibold text-jmv-brown">
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder={`Tell us about your ${tab.toLowerCase()}...`}
                className="mt-2 w-full rounded-xl border border-border px-4 py-3 font-normal outline-none focus:border-jmv-orange"
              />
            </label>
            {feedback === "success" ? (
              <p className="flex items-center gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-800">
                <CheckCircle2 className="h-5 w-5" />
                Your enquiry has been received successfully.
              </p>
            ) : null}
            {feedback === "error" ? (
              <p className="rounded-xl bg-red-50 p-4 text-sm text-red-800">
                Please complete the required fields before submitting.
              </p>
            ) : null}
            <button
              type="submit"
              className="rounded-full bg-jmv-orange px-6 py-3 text-sm font-semibold text-white hover:bg-jmv-orange-burnt"
            >
              Submit {tab}
            </button>
          </form>
        </section>
      </div>
    </PageLayout>
  );
}
