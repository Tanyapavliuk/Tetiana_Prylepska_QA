"use client";
import React from "react";

export const Input = ({
  type = "text",
  error,
  name,
  required = false,
  label = "name",
  id,
  ...res
}) => {
  return (
    <label className='uppercase text-base'>
      {label}
      {"  "}
      <span className={`text-green inline ${error && "text-red"}`}>*</span>
      <div className="relative">
      <input
      id={id}
        name={name}
        type={type}
        className={`w-full text-lg py-3 px-6 outline-none block border border-green rounded-[80px] bg-[#212323] transition-all hover:shadow-green my-2 md:my-4 lg:mt-6 focus:caret-green ${
          error && "border-red"
        }`}
        {...res}
      />
      <span className="absolute normal-case right-5 top-1/2 -translate-y-1/2 text-xs text-red">{error}</span>
      </div>
    </label>
  );
};
