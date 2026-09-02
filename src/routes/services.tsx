import { createFileRoute } from "@tanstack/react-router";
import ServicesPage from "../pages/Services";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services | JMV Engineering Infra" }] }),
  component: ServicesPage,
});
