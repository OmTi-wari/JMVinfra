import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "./about";

export const Route = createFileRoute("/people")({
  head: () => ({ meta: [{ title: "Leadership | JMV Engineering Infra" }] }),
  component: AboutPage,
});
