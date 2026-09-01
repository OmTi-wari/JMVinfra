import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "../pages/About";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About | JMV Engineering Infra" }] }),
  component: AboutPage,
});
