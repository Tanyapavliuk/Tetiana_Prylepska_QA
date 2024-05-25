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
    description: "Hello! It is the portfolio website for Tetiana Prylepska. I am a QA Engineer. Find out more about me.",
    openGraph: {
      url: `/`,
      title: 'QA Tetiana Prylepska',
      description: "Hello! It is the portfolio website for Tetiana Prylepska. I am a QA Engineer. Find out more about me.",
      images: [
        {
          url: '../Smal_og.jpg',
          width: 600,
          height: 600,
        },
        {
          url: '../Og.jpg', 
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}
