import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";

export function PageLayout({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
      <Breadcrumbs />
      <header className="max-w-3xl pb-10 pt-6">
        <p className="eyebrow text-jmv-orange">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-jmv-brown md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg text-jmv-charcoal/70">{description}</p>
      </header>
      {children}
    </div>
  );
}
