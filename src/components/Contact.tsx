import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/data/site";

const fields = [
  { id: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { id: "company", label: "Company", type: "text", required: false, autoComplete: "organization" },
  { id: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { id: "phone", label: "Phone", type: "tel", required: false, autoComplete: "tel" },
  { id: "requirement", label: "Project / Requirement", type: "text", required: false },
] as const;

const details = [
  { label: "Phone", value: contact.phone },
  { label: "Email", value: contact.email },
  { label: "Office Address", value: contact.address },
  { label: "WhatsApp", value: contact.whatsapp },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-t border-border bg-concrete/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's Build Something Strong Together."
              subtitle="Share your project details and our team will get back to you to discuss scope, requirements and the right approach."
            />

            <dl className="mt-12 space-y-6">
              {details.map((item) => (
                <div key={item.label} className="border-t border-border pt-4">
                  <dt className="eyebrow text-muted-foreground">{item.label}</dt>
                  <dd className="mt-2 text-sm font-medium text-primary">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={100}>
            <form
              className="border border-border bg-card p-8 sm:p-10"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {fields.map((field) => (
                  <div
                    key={field.id}
                    className={field.id === "requirement" ? "sm:col-span-2" : undefined}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required={field.required}
                      autoComplete={"autoComplete" in field ? field.autoComplete : undefined}
                      className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
                    />
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-2 w-full resize-none border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent sm:w-auto"
              >
                Send Enquiry
              </button>

              <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
                {sent
                  ? "Thank you — your enquiry has been recorded. Connect a backend to receive submissions by email."
                  : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
