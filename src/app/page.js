import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Sql } from "@/components/Sql";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Sql/>
      <Contact/>
    </main>
  );
}
