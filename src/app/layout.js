import { ToastContainer } from "react-toastify";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { poppins } from "./fonts";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth'>
      <body
        className={`${poppins.className} font-normal text-white relative flex flex-col min-h-screen bg-dark bg-gradient-to-r from-dark to-slate-950`}
      >
        <Header />
        <main className='flex-1'>{children}</main>
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}

export async function generateMetadata() {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    openGraph: {
      type: 'website',
      siteName: 'QA Tetiana Prylepska',
    },
  }
}
