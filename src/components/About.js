import Image from "next/image";
import { SectionTitle } from "./base/SectionTitle";
import tetiana from '/public/assets/images/photo.png'
import aboutBG from '/public/assets/images/aboutBG.png'

export const About = () => {
  return (
    <section id="about" className='pt-24 lg:pt-[166px] pb-10 lg:pb-[84px] relative'>
        <Image src={aboutBG} alt="bg" className="absolute bottom-0 md:top-0 -z-10 object-cover"/>
      <div className='container flex flex-col md:flex-row gap-10 lg:gap-[129px] items-center'>
        <div className="flex flex-col gap-8 md:gap-12 items-end">
          <SectionTitle main={true}>About me</SectionTitle>
          <p className="text-white-light text-base md:text-lg text-right md:w-[588px]">
            I continuously improve my skills and develop my knowledge. While
            working as a frontend developer, I discovered my ability to pay
            attention to incomplete requirements and detect defects in source
            code, which sparked my interest in the area of product quality
            control. I am planning to develop my expertise in automated testing.
          </p>
        </div>
        <Image src={tetiana} alt="Tetiana Prylepska" className="w-48 md:w-72 lg:w-96"/>
      </div>
    </section>
  );
};
