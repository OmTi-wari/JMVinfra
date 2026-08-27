import { cn } from "@/lib/utils";

export interface Project {
  id: string;
  name: string;
  location: string;
  type: string;
  image: string;
  alt: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

export function ProjectCard({
  project,
  className,
  imageClassName,
  priority = false,
}: ProjectCardProps) {
  return (
    <article className={cn("group relative isolate overflow-hidden bg-primary", className)}>
      <img
        src={project.image}
        alt={project.alt}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]",
          imageClassName,
        )}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.235_0.035_260/0.85)_0%,oklch(0.235_0.035_260/0.25)_45%,transparent_75%)]"
      />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="eyebrow text-accent">{project.type}</p>
        <h3 className="mt-3 text-xl font-bold text-ivory sm:text-2xl">{project.name}</h3>
        <p className="mt-1.5 text-sm text-ivory/70">{project.location}</p>
      </div>
    </article>
  );
}
