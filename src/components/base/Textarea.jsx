"use client";

export const Textarea = ({ name, error, label = "message", id, ...res }) => {
  return (
    <div>
      <p className='uppercase'>
        {label}
        {"  "}
        <span className={`text-green inline ${error && "text-red"}`}>*</span>
      </p>
      <div className='relative'>
        <textarea
          id={id}
          name={name}
          className={`w-full text-lg my-2 md:my-4 py-3 px-6 outline-none block border border-green rounded-[32px] bg-[#212323] h-32 resize-none transition-all hover:shadow-green focus:caret-green ${
            error && "border-red"
          }`}
          {...res}
        />
        <span className='absolute normal-case right-5 top-3 text-xs text-red'>
          {error}
        </span>
      </div>
    </div>
  );
};
