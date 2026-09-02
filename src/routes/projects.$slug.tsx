import { createFileRoute } from "@tanstack/react-router";
import ProjectDetailPage from "../pages/ProjectDetail";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => ({
    meta: [{ title: `${params.slug.replace(/-/g, " ")} | JMV Projects` }],
  }),
  component: ProjectDetailPage,
});
