"use client";
import Image from "next/image";

import aboutBG from "/public/assets/images/aboutBG.png";
import { Card } from "./base/Card";
import { SectionTitle } from "./base/SectionTitle";

export const Work = () => {
  return (
    <section
      id="work"
      className="pt-12 lg:pt-28 pb-10 lg:pb-[84px] relative"
    >
      <Image
        src={aboutBG}
        alt="bg"
        className="absolute w-full h-full object-cover bottom-0 md:top-0 -z-10"
      />
      <div className="container">
        <SectionTitle main={true}>Work experience</SectionTitle>
        <ul className="mt-5 sm:mt-8 lg:mt-11 flex flex-col gap-3 lg:gap-5">
          <li>
            <Card type="test">
              <p class="text-green-400">Tietoevry</p>
              <p class="text-white">Position: Junior QA Engineer</p>
              <p class="text-white">April 2025 - Present</p>
            </Card>
          </li>
          <li>
            <Card type="test">
              <p class="text-green-400">MysteryTag</p>
              <p class="text-white">Position: QA Engineer</p>
              <p class="text-white">June 2024 - Mar 2025</p>
            </Card>
          </li>
          <li>
            <Card type="dev">
              <p class="text-green-400">Kharkiv IT Cluster</p>
              <p class="text-white">Position: Frontend Developer</p>
              <p class="text-white">April 2024 - May 2024</p>
            </Card>
          </li>
          <li>
            <Card type="dev">
              <p class="text-green-400">Shelter "Kovcheg"</p>
              <p class="text-white">Position: Frontend Developer</p>
              <p class="text-white">January 2024 - July 2024</p>
            </Card>
          </li>
        </ul>
      </div>
    </section>
  );
};
