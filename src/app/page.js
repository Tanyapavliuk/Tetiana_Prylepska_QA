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

export async function generateMetadata() {
  return {
    title: 'QA Tetiana Prylepska',
    description: "Hello! It is the portfolio website for Tetiana Prilepska. I am a QA Engineer. Find out more about me.",
    openGraph: {
      url: `/`,
      title: 'QA Tetiana Prylepska',
      description: "Hello! It is the portfolio website for Tetiana Prilepska. I am a QA Engineer. Find out more about me.",

      images: [
        {
          url: '../Og.jpg',
        },
      ],
    },
  }
}
