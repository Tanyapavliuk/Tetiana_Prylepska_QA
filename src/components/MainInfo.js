'use client'
import { motion } from "framer-motion";
import { red_rose } from "@/app/fonts";

export const MainInfo = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 2 }} 
    className='mb-12'>
      <h1
        className={`text-3xl md:text-5xl text-white font-light uppercase ${red_rose.className}`}
      >
        Tetiana <br />{" "}
        <span className='text-4xl md:text-6xl font-bold'>Prylepska</span>
      </h1>
      <h2
        className={`text-white font-light text-lx xs:text-3xl uppercase ${red_rose.className}`}
      >
        i am <span className='text-4xl xs:text-5xl'>QA <span className="inline-block w-0.5 h-8 bg-green animate-ping shadow-green"></span></span>
      </h2>
    </motion.div>
  );
};
