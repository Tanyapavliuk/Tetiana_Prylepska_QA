"use client";
import React from "react";

export const Input = ({
  type = "text",
  value,
  isError = false,
  name,
  required = false,
  onInput,
  label = "name",
}) => {
  const handleChangeInput = (e) => {
    onInput(name, e.target.value);
  };

  return (
    <label className='uppercase text-base'>
      {label}{'  '}<span className={`text-green inline ${isError && 'text-red'}`}>*</span>
      <input
        name={name}
        type={type}
        value={value}
        required={required}
        className={`w-full text-lg py-3 px-6 outline-none block border border-green rounded-[80px] bg-[#212323] transition-all hover:shadow-green my-2 md:my-4 lg:mt-6 focus:caret-green ${isError&& 'border-red'}`}
        onChange={handleChangeInput}
      />
    </label>
  );
};
