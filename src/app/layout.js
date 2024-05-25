import { Footer } from "@/components/Footer";
import { poppins } from "./fonts";
import "./globals.css";
import { Header } from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "https://tetiana-prylepska-qa.vercel.app";

export const metadata = {
  title: "QA Tetiana Prylepska",
  description: "Hello! It is the portfolio website for Tetiana Prilepska. I am a QA Engineer. Find out more about me. ",
  keywords: "QA, portfolio",
  locale: "en_EN",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    siteName: "QA Tetiana Prylepska",
  },
  images: [
    {
      url: "/Og.jpg",
      width: 1200,
      height: 630,
      alt: "QA Tetiana Prylepska",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth'>
      <body
        className={`${poppins.className} font-normal text-white relative flex flex-col min-h-screen bg-dark`}
      >
        <Header />
        <main className='flex-1'>{children}</main>
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
