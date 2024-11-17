import Image from "next/image";

import aboutBG from "/public/assets/images/aboutBG.png";
import { SectionTitle } from "./base/SectionTitle";
import { ContactFormFormic } from "./Contact/ContactFormFormik";
import { ContactsInfo } from "./Contact/ContactsInfo";

export const Contact = () => {
  return (
    <section className="relative pb-16 pt-12 lg:pt-32">
      <Image
        src={aboutBG}
        alt="bg"
        className="absolute w-full h-full object-cover bottom-0 md:top-0 -z-10"
      />
      <div id="contact" className="container flex flex-col gap-12 lg:gap-24 ">
        <SectionTitle className="place-self-end">Contact me</SectionTitle>
        <div className="flex flex-col md:flex-row w-full gap-12 lg:gap-28">
          <ContactsInfo />
          <ContactFormFormic />
        </div>
      </div>
    </section>
  );
};
