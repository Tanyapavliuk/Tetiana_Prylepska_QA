"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = ({ onSelectItem }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className='flex max-xs:flex-col gap-4 lg:gap-8'>
        <li>
          <Link
            onClick={onSelectItem}
            href='/'
            className={`text-lg py-2 hover:text-green-dark ${
              pathname === "/" ? "text-green font-bold" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={onSelectItem}
            href='/#about'
            className='text-lg py-2 hover:text-green-dark'
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            onClick={onSelectItem}
            href='/portfolio'
            className={`text-lg py-2 hover:text-green-dark ${
              pathname === "/portfolio" ? "text-green font-bold" : ""
            }`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            onClick={onSelectItem}
            href='/#contact'
            className='text-lg py-2 hover:text-green-dark'
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};
