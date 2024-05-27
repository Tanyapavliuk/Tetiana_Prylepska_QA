import Image from "next/image";
import data from "@/data/projects.json";
import { red_rose } from "@/app/fonts";
import Link from "next/link";

export const Projects = () => {
  return (
    <ul className='flex flex-col gap-12'>
      {data.map(
        (
          { image, title, technologies, descripnion, link, linkGithub },
          ind
        ) => (
          <li
            key={title}
            className={`relative max-sm:min-h-80 flex gap-5 ${
              ind % 2 === 0 && "flex-row-reverse"
            }`}
          >
            <Image
              alt={title}
              src={image}
              width={500}
              height={500}
              className='flex-1 rounded-3xl w-96 lg:w-[500px] aspect-video object-cover max-sm:absolute max-sm:w-full max-sm:h-full max-sm:-z-10 max-sm:opacity-10'
            />
            <div className='border-2 border-green-accent rounded-3xl flex flex-col justify-center gap-3 py-3 px-5 xs:px-12'>
              <Link href={link} target='_blank'>
                <p
                  className={`text-green tracking-widest inline-flex uppercase text-xl lg:text-2xl font-light ${red_rose.className}`}
                >
                  {title}
                </p>
              </Link>
              <p className='text-xs md:text-sm lg:text-base'>
                Technologies: {technologies}
              </p>
              <p className='text-xs md:text-sm lg:text-base'>{descripnion}</p>
              <div className='flex gap-3'>
              <Link
                href={link}
                target='_blank'
                className='flex items-end border rounded-3xl border-green py-2 px-3 xs:px-5 hover:border-green-dark hover:text-white hover:bg-green-dark transition-colors'
              >
                <p className={`text-xs xs:text-base tracking-widest uppercase ${red_rose.className}`}>
                  see website
                </p>
              </Link>
              {linkGithub && (
                <Link
                  href={linkGithub}
                  target='_blank'
                  className='flex items-end border rounded-3xl border-green py-2 px-3 xs:px-5 hover:border-green-dark hover:text-white hover:bg-green-dark transition-colors'
                >
                  <p className={`text-xs xs:text-base tracking-widest uppercase ${red_rose.className}`}>see code</p>
                </Link>
              )}
            </div>
            </div>
            
          </li>
        )
      )}
    </ul>
  );
};
