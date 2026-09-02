import { createFileRoute } from "@tanstack/react-router";
import IndexPage from "../pages/Index";

const title =
  "Jai Maa Vindhyavasini Engineering Infra | Engineering & Construction";
const description =
  "Engineering, construction and infrastructure solutions built around quality, reliability and long-term performance.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexPage,
});

