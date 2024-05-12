"use client";
import React, { useEffect, useRef, useState } from "react";

export const Select = ({
  values,
  value,
  onSelect,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const optionBoxRef = useRef(null);
  const selectBoxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!selectBoxRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectOption = (el) => {
    onSelect(el);
    setIsOpen(false);
  };

  const handleToggleOptionVisible = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className='relative z-10'>
      <div
        ref={selectBoxRef}
        onClick={handleToggleOptionVisible}
        className={`w-36 xs:w-48 lg:w-64 pb-0.5 px-1 xs:px-4 flex justify-between items-center border-b border-green cursor-pointer bg-transparent ${className}`}
      >
        <p className={`text-base xs:text-lg lg:text-2xl text-white`}>{value.label}</p>
        <span
          className={`inline-block border-x-[10px] border-x-transparent w-0 h-0 border-b-[15px] border-b-white transition-transform ${
            isOpen ? "" : "rotate-180"
          }`}
        ></span>
      </div>
      {isOpen && (
        <div
          ref={optionBoxRef}
          className={`absolute w-full p-2 xs:px-4 top-full translate-y-2 bg-dark-dark/85`}
        >
          <ul className='flex flex-col gap-1 pl-4'>
            {values?.map((el) => (
              <li
                key={el.value}
                className='text-white cursor-pointer py-1'
                onClick={() => handleSelectOption(el)}
              >
                {el.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
