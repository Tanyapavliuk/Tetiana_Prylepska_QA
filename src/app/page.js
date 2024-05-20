import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Recommendation } from "@/components/Recommendation";
import { Sql } from "@/components/Sql";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Sql/>
      <Recommendation/>
      <Contact/>
    </main>
  );
}
