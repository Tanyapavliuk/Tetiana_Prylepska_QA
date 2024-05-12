import { Projects } from "@/components/Projects";
import { SectionTitle } from "@/components/base/SectionTitle";

export default function Portfolio() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between pt-24 xs:pt-32 pb-24'>
      <section className='container flex flex-col'>
        <SectionTitle isLine={false} className='max-md:text-2xl'>
          Project Experience
        </SectionTitle>
        <Projects />
      </section>
    </main>
  );
}
