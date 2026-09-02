import { createFileRoute } from "@tanstack/react-router";
import NewsPage from "../pages/News";

export const Route = createFileRoute("/news")({
  head: () => ({ meta: [{ title: "News & Media | JMV Engineering Infra" }] }),
  component: NewsPage,
});
