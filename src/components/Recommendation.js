"use client";
import { useState } from "react";
import { SectionTitle } from "./base/SectionTitle";
import info from "@/data/recommendation.json";
import { Icon } from "./base/Icon";
import Link from "next/link";
import Arrow_slider from "/public/assets/icons/Arrow-slider.svg";
import Bg from "/public/assets/images/spring.png";
import Image from "next/image";

export const Recommendation = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { name, profession, first_text, second_text, link } = info[currentPage];

  const handleIncreasePage = (e) => {
    e.preventDefault()
    if (currentPage === info.length - 1) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const handleDecreasePage = (e) => {
    e.preventDefault()
    if (currentPage === 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  return (
    <section className='container my-10'>
      <SectionTitle className='mb-12 md:mb-20'>Recommendation</SectionTitle>
      <div className="flex">
        <Image src={Bg} alt='Bg' className="max-lg:hidden w-[320px]" />
        <div className='flex justify-between max-md:gap-4 items-center max-sm:flex-col-reverse'>
          <div className='md:w-11/12 py-6 md:pt-8 md:pb-11 px-3 xs:px-5 md:px-8 border border-green rounded-3xl'>
            <div className='mb-10 flex items-start gap-3'>
              <div>
                <p className='text-lg'>{name}</p>
                <p className='text-grey-light text-lg'>{profession}</p>
              </div>
              <Link
                href={link}
                target='_blank'
                className='hover:drop-shadow-[5px_2px_2px_rgba(32,117,110,1)]'
              >
                <Icon
                  name='White_Link'
                  className='hover:scale-125 transition-transform '
                />
              </Link>
            </div>
            <div className='flex flex-col gap-7'>
              <p className="text-sm md:text-base">{first_text}</p>
              <p className="text-sm md:text-base">{second_text}</p>
            </div>
          </div>
          <div className='flex flex-col gap-3 sm:gap-4 max-sm:flex-row-reverse max-sm:place-self-end'>
            <button
              onClick={e=>handleIncreasePage(e)}
              className={`rounded-full transition-all bg-green w-10 h-10 flex justify-center items-center ${
                currentPage === info.length - 1 && "bg-green-disable scale-95 cursor-not-allowed"
              }`}
            >
              <Arrow_slider />
            </button>
            <button
              onClick={e=>handleDecreasePage(e)}
              className={`rounded-full transition-all bg-green w-10 h-10 flex justify-center items-center ${
                currentPage === 0 && "bg-green-disable scale-95 cursor-not-allowed"
              }`}
            >
              <Arrow_slider className='-scale-x-100' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
