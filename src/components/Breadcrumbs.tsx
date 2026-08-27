import { Link, useLocation } from "@tanstack/react-router";

import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";

const labelMap: Record<string, string> = {
  about: "About",
  services: "Services",
  projects: "Projects",
  capabilities: "Capabilities",
  people: "People",
  locations: "Locations",
  news: "News",
  gallery: "Gallery",
  careers: "Careers",
  contact: "Contact",
};

function toTitleCase(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function Breadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname === "/") {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = [{ label: "Home", to: "/" }];

  let currentPath = "";

  segments.forEach((segment) => {
    currentPath += `/${segment}`;

    let label = labelMap[segment] ?? toTitleCase(segment);

    if (segment === "services" && segments[1]) {
      const slug = segments[1];
      const service = servicesData.find((item) => item.slug === slug);
      if (service) {
        label = service.title;
      }
    }

    if (segment === "projects" && segments[1]) {
      const project = projectsData.find((item) => item.slug === segments[1]);
      if (project) {
        label = project.title;
      }
    }

    crumbs.push({ label, to: currentPath });
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-2 text-sm text-jmv-charcoal/60">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={`${crumb.to}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span className="text-jmv-charcoal/35">/</span>}
              {isLast ? (
                <span className="font-medium text-jmv-brown">{crumb.label}</span>
              ) : (
                <Link to={crumb.to} className="transition-colors hover:text-jmv-orange">
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
