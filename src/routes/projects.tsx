import { createFileRoute } from "@tanstack/react-router";
import ProjectsPage from "../pages/Projects";

export const Route = createFileRoute("/projects")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : "All",
    status: typeof search.status === "string" ? search.status : "All",
  }),
  head: () => ({ meta: [{ title: "Projects | JMV Engineering Infra" }] }),
  component: ProjectsPage,
});
