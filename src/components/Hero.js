import Image from "next/image";
import bgImage from "/public/assets/images/heroBg.webp";
import Arrow from "/public/assets/icons/arrow.svg";
import { red_rose } from "@/app/fonts";
import Link from "next/link";
import { NetworkLinks } from "./NetworkLinks";

export const Hero = () => {
  return (
    <div className='relative pt-44 md:pt-[242px] pb-44 overflow-hidden'>
      <Image
        alt='Blur'
        src={bgImage}
        className='absolute top-0 w-full h-full max-md:object-center object-cover -z-10'
      />
      <div className='container'>
        <div className='mb-12'>
          <h1
            className={`text-3xl md:text-5xl text-white font-light uppercase ${red_rose.className}`}
          >
            Tetiana <br />{" "}
            <span className='text-4xl md:text-6xl font-bold'>Prylepska</span>
          </h1>
          <h2
            className={`text-white font-light text-lx xs:text-3xl uppercase ${red_rose.className}`}
          >
            i am <span className='text-4xl xs:text-5xl'>QA</span>
          </h2>
        </div>
        <div className='flex gap-4 mb-40'>
          <Link
            target='_blank'
            href='/portfolio'
            className='py-2 px-6 text-lg text-green border border-green rounded-3xl hover:border-green-dark hover:text-white hover:bg-green-dark transition-colors'
          >
            Portfolio
          </Link>
          <Link
            href='/#contact'
            className='py-2 px-6 text-lg border border-white rounded-3xl hover:border-green-dark hover:text-white hover:bg-green-dark transition-colors'
          >
            Contact me
          </Link>
        </div>
        <NetworkLinks />
      </div>
      <div className='absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'>
        <div className='w-6 h-10 border border-white rounded-full flex flex-col gap-0.5 justify-start items-center pt-1'>
          <Arrow width={14} height={27} className='animate-bounce' />
        </div>
        <p
          className={`text-sm text-green font-light uppercase ${red_rose.className}`}
        >
          Scroll
        </p>
      </div>
    </div>
  );
};
