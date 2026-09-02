import { useState } from "react";
import { CheckCircle2, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { PageLayout } from "@/components/PageLayout";
import { company, contact } from "@/data/site";

const tabs = [
  "General Enquiry",
  "Project Tender / Bidding",
  "Vendor Partnership",
  "Careers",
] as const;

export default function ContactPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("General Enquiry");
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);
  const secondaryPhone = contact.phones[1] ?? contact.phone;

  return (
    <PageLayout
      eyebrow="Contact // procurement & enquiries"
      title="Tell us about your infrastructure requirement."
      description="Reach out for project discussions, tenders, vendor partnerships, or careers. We will route your enquiry to the right team."
    >
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <aside className="space-y-5">
          <div className="border border-neutral-200 bg-[#2C1D11] p-7 text-white">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Verified contact</span>
            </div>

            <div className="mt-6 space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#E65100]" />
                <div className="space-y-1 text-xl font-bold leading-tight text-white md:text-2xl">
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="block hover:text-white/80">
                    {contact.phone}
                  </a>
                  <a href={`tel:${secondaryPhone.replace(/\s/g, "")}`} className="block hover:text-white/80">
                    {secondaryPhone}
                  </a>
                </div>
              </div>

              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="h-5 w-5 text-[#E65100]" />
                {contact.email}
              </a>

              <a
                href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <MessageCircle className="h-5 w-5 text-[#E65100]" />
                WhatsApp: {contact.whatsapp}
              </a>

              <a href={company.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white">
                <Instagram className="h-5 w-5 text-[#E65100]" />
                @jmv_engineering_infra
              </a>

              <p className="flex items-center gap-3 text-white/75">
                <MapPin className="h-5 w-5 text-[#E65100]" />
                Mumbai & Ahmedabad
              </p>
            </div>
          </div>

          <div className="border border-neutral-200 bg-white p-7">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>Office presence</span>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#18181B]/70">
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

        <section className="border border-neutral-200 bg-white p-7 md:p-9">
          <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-5">
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
                    ? "border border-[#E65100] bg-[#E65100] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
                    : "border border-neutral-200 bg-[#FAFAFA] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#2C1D11]/70"
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
              <label className="text-sm font-semibold text-[#2C1D11]">
                Name
                <input
                  name="name"
                  required
                  className="mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
                />
              </label>
              <label className="text-sm font-semibold text-[#2C1D11]">
                Email
                <input
                  name="email"
                  type="email"
                  className="mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
                />
              </label>
            </div>

            <label className="block text-sm font-semibold text-[#2C1D11]">
              Phone
              <input
                name="phone"
                type="tel"
                className="mt-2 w-full border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
              />
            </label>

            <label className="block text-sm font-semibold text-[#2C1D11]">
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder={`Tell us about your ${tab.toLowerCase()}...`}
                className="mt-2 w-full resize-none border border-neutral-200 bg-[#FAFAFA] px-4 py-3 text-sm font-normal outline-none focus:border-[#E65100]"
              />
            </label>

            {feedback === "success" ? (
              <p className="flex items-center gap-2 border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                <CheckCircle2 className="h-5 w-5" />
                Your enquiry has been received successfully.
              </p>
            ) : null}

            {feedback === "error" ? (
              <p className="border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                Please complete the required fields before submitting.
              </p>
            ) : null}

            <button type="submit" className="bg-[#E65100] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Submit {tab}
            </button>
          </form>
        </section>
      </div>
    </PageLayout>
  );
}
