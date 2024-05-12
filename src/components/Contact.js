import Image from "next/image";
import { SectionTitle } from "./base/SectionTitle";
import { ContactForm } from "./Contact/ContactForm";
import { ContactsInfo } from "./Contact/ContactsInfo";
import Bg from "/public/assets/images/contactBG.png";

export const Contact = () => {
  return (
    <section className='relative pb-16 pt-12 lg:pt-32'>
      <Image
        src={Bg}
        className='absolute -z-10 w-full h-full top-0 right-0 object-cover object-center'
      />
      <div id='contact' className='container flex flex-col gap-12 lg:gap-24 '>
        <SectionTitle className='place-self-end'>Contact me</SectionTitle>
        <div className='flex flex-col md:flex-row w-full gap-12 lg:gap-28'>
          <ContactsInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
