import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "../pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | JMV Engineering Infra" }] }),
  component: ContactPage,
});
