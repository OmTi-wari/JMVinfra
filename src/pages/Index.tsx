import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Statement } from "@/components/Statement";
import { Stats } from "@/components/Stats";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function IndexPage() {
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
