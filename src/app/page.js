import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Recommendation } from "@/components/Recommendation";
import { Sql } from "@/components/Sql";

const BASE_URL = "https://tetiana-prylepska-qa.vercel.app";

export const metadata = {
  title: "QA Tetiana Prylepska",
  description: "Hello! It is the portfolio website for Tetiana Prilepska. I am a QA Engineer. Find out more about me.",
  keywords: "QA, portfolio",
  locale: "en_EN",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "QA Tetiana Prylepska",
    description:
      "Hello! It is the portfolio website for Tetiana Prilepska. I am a QA Engineer. Find out more about me.",
    url: BASE_URL,
    type: "website",
    images: [
      {
        url: "/Og.jpg",
        width: 1200,
        height: 630,
        alt: "QA Tetiana Prylepska",
      },
    ],
  },
};

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
