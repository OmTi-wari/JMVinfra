import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { ImageLightbox } from "@/components/ImageLightbox";
import { PageLayout } from "@/components/PageLayout";

const categories = ["All", "Project Sites", "Machinery", "Corporate Events"] as const;
const images = [
  { src: project1, title: "Project site progress", category: "Project Sites" },
  { src: project2, title: "Road infrastructure works", category: "Project Sites" },
  { src: project3, title: "Built environment delivery", category: "Corporate Events" },
  { src: project4, title: "Infrastructure machinery", category: "Machinery" },
];
export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery | JMV Engineering Infra" }] }),
  component: GalleryPage,
});
function GalleryPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const visible = images.filter((item) => category === "All" || item.category === category);
  return (
    <PageLayout
      eyebrow="Media gallery"
      title="A visual view of infrastructure in motion."
      description="Browse project sites, machinery, and corporate moments from the JMV delivery environment."
    >
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={
              category === item
                ? "rounded-full bg-jmv-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white"
                : "rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-jmv-brown/70"
            }
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <ImageLightbox images={visible.map((item) => item.src)} title="JMV media gallery" />
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((item) => (
          <p key={item.src} className="text-sm font-semibold text-jmv-brown">
            {item.title}
            <span className="mt-1 block text-xs font-normal text-jmv-charcoal/60">
              {item.category}
            </span>
          </p>
        ))}
      </div>
    </PageLayout>
  );
}
