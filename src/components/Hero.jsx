import Image from "next/image";
import Link from "next/link";

import { red_rose } from "@/app/fonts";

import Arrow from "/public/assets/icons/arrow.svg";
import bgImage from "/public/assets/images/heroBg.webp";
import { MainInfo } from "./MainInfo";
import { NetworkLinks } from "./NetworkLinks";

export const Hero = () => {
  return (
    <div className="relative pt-44 md:pt-[242px] pb-44 overflow-hidden">
      <Image
        alt="Blur"
        src={bgImage}
        className="absolute top-0 w-full h-full max-md:object-center object-cover -z-10"
      />
      <div className="container">
        <MainInfo />
        <div className="flex max-sm:flex-col max-sm:items-start gap-4 mb-40">
          <Link
            target="_blank"
            href="/test-documentation"
            class="rounded-3xl px-10 py-3.5 overflow-hidden group bg-gradient-to-r to-black/90 from-green-dark/80 hover:to-black/90 hover:from-green-dark/80 md:from-black/90 md:to-green-dark/80 relative hover:bg-gradient-to-r md:hover:to-green-dark/80 md:hover:from-black/90 text-white transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
            <span class="relative text-base xs:text-lg font-light">
              View test documentation samples
            </span>
          </Link>
          <Link
            href="/#contact"
            class="rounded-3xl px-10 py-3.5 overflow-hidden group bg-gradient-to-r from-green-dark/80 to-black/90 relative hover:bg-gradient-to-r hover:from-green-dark/80 hover:to-black/90 text-white transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
            <span class="relative text-base xs:text-lg font-light">
              Contact me
            </span>
          </Link>
        </div>
        <NetworkLinks />
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border border-white rounded-full flex flex-col gap-0.5 justify-start items-center pt-1">
          <Arrow width={14} height={27} className="animate-bounce" />
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
