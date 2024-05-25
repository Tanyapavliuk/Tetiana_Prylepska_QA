import { Footer } from "@/components/Footer";
import { poppins } from "./fonts";
import "./globals.css";
import { Header } from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
