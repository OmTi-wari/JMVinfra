import { createFileRoute } from "@tanstack/react-router";
import CareersPage from "../pages/Careers";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers | JMV Engineering Infra" }] }),
  component: CareersPage,
});
