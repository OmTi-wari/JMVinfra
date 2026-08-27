import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Statement } from "@/components/Statement";
import { Stats } from "@/components/Stats";
import { WhyChooseUs } from "@/components/WhyChooseUs";

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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Statement />
      <CtaBanner />
      <Contact />
    </>
  );
}
