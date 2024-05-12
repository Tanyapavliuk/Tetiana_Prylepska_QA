import Image from "next/image";

import Location from "/public/assets/icons/contact/Location.svg";
import Email from "/public/assets/icons/contact/Email.svg";
import Phone from "/public/assets/icons/contact/Phone.svg";
import download from "/public/assets/icons/Download.png";

import { red_rose } from "@/app/fonts";
import { NetworkLinks } from "../NetworkLinks";

export const ContactsInfo = () => {
  return (
    <ul className='flex flex-col gap-5 lg:gap-16'>
      
      <li className='flex gap-6 items-center'>
        <Email width={64} height={64} />
        <div>
          <p className='text-base font-semibold'>Email</p>
          <p className='text-sm select-all'>tanyapavliuk1999@gmail.com</p>
        </div>
      </li>
      <li className='flex gap-6 items-center'>
        <Phone width={64} height={64} />
        <div>
          <p className='text-base font-semibold'>Phone</p>
          <p className='text-sm select-all'>+380634761210</p>
        </div>
      </li>
      <li className='inline-flex flex-col gap-6'>
        <a
          href='CV_QA_Tetiana_Prylepska.pdf'
          download
          className='w-full text-center py-4 text-dark-dark text-base font-semibold bg-green rounded hover:bg-green-dark hover:text-white transition-colors uppercase'
        >
          download CV
        </a>
      </li>
      <li>
        <NetworkLinks/>
      </li>
      
    </ul>
  );
};
