import { createFileRoute } from "@tanstack/react-router";
import CapabilitiesPage from "../pages/Capabilities";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities | JMV Engineering Infra" },
      {
        name: "description",
        content:
          "Capabilities and execution systems for infrastructure delivery, quality assurance, HSE, fleet mobilization, and project management.",
      },
    ],
  }),
  component: CapabilitiesPage,
});
