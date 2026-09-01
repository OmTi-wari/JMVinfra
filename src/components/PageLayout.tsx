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
    <div className="bg-[#FAFAFA] text-[#1A1A1A]">
      <section className="relative isolate overflow-hidden bg-[#2C1D11] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Infrastructure construction and engineering"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(230,81,0,0.42),_transparent_30%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1D11]/90 via-[#2C1D11]/80 to-[#2C1D11]/50" />
          <div className="absolute inset-y-0 right-0 hidden w-1/3 border-l border-white/10 bg-white/[0.02] lg:block" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:pb-28 lg:pt-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E65100]">
              <span className="h-1.5 w-1.5 bg-[#E65100]" />
              <span>{eyebrow}</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              {description}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <Breadcrumbs />
        {children}
      </div>
    </div>
  );
}
