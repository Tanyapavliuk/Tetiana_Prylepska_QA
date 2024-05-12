"use client";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "./Navigation";
import Burger from "/public/assets/icons/Burger.svg";
import Close from "/public/assets/icons/Close.svg";

export const BurgerMenu = () => {
  const [isBurgerShow, setIsBurgerShow] = useState(false);
  const BurgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!BurgerRef.current?.contains(event.target)) {
        setIsBurgerShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isBurgerShow]);

  const handleBurgerVisible = () => {
    setIsBurgerShow(!isBurgerShow);
  };

  return (
    <div className='flex justify-end xs:hidden'>
      <button className="relative w-10 h-10" onClick={handleBurgerVisible}>
        <Burger width={40} height={40} className={`${isBurgerShow&& 'hidden' }`}/>
        {isBurgerShow && <Close width={40} height={40} className='absolute w-full h-full top-0'/>}
      </button>
      {isBurgerShow && (
        <div
          ref={BurgerRef}
          className='absolute py-12 px-7 bg-dark-dark/90 right-0 top-full'
        >
          <Navigation onSelectItem={handleBurgerVisible}/>
        </div>
      )}
    </div>
  );
};
