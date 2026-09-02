import { ArrowRight, CalendarDays } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const news = [
  {
    type: "Press release",
    date: "[Publication date]",
    title: "JMV Engineering Infra expands its project delivery capability",
    detail:
      "[Verified press release summary] A structured space for company announcements, capability updates, and stakeholder news.",
  },
  {
    type: "Project update",
    date: "[Publication date]",
    title: "Infrastructure delivery update from active project environments",
    detail:
      "[Verified project update] Progress, safety, and execution information will be published here as it is confirmed.",
  },
  {
    type: "Industry note",
    date: "[Publication date]",
    title: "Building stronger systems for long-term infrastructure performance",
    detail:
      "[Verified editorial content] Perspectives on planning, quality, coordination, and responsible project delivery.",
  },
];

export default function NewsPage() {
  return (
    <PageLayout
      eyebrow="News & media"
      title="Updates from our work, people, and infrastructure focus."
      description="Corporate news, project updates, and press-ready stories from JMV Engineering Infra."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {news.map((item, index) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-border bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-jmv-orange/40"
          >
            <div className="flex items-center justify-between">
              <span className="eyebrow text-jmv-orange">{item.type}</span>
              <span className="text-4xl font-extrabold tracking-[-0.08em] text-jmv-orange/20">
                0{index + 1}
              </span>
            </div>
            <h2 className="mt-8 text-2xl font-bold text-jmv-brown">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-jmv-charcoal/70">{item.detail}</p>
            <div className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-xs text-jmv-charcoal/60">
              <CalendarDays className="h-4 w-4 text-jmv-orange" />
              {item.date}
            </div>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-jmv-orange"
            >
              Read update <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
