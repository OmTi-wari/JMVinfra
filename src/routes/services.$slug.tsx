import { createFileRoute } from "@tanstack/react-router";
import ServiceDetailPage from "../pages/ServiceDetail";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => ({
    meta: [{ title: `${params.slug.replace(/-/g, " ")} | JMV Engineering Infra` }],
  }),
  component: ServiceDetailPage,
});
