import { BurgerMenu } from "./BurgerMenu";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <div className='absolute z-10 w-full mx-auto'>
      <div className='container py-4 flex max-xs:justify-end items-center mb-1 border-b border-green mt-2 xs:mt-6'>
        <BurgerMenu />
        <div className='max-xs:hidden w-full flex justify-between items-center'>
          <Navigation/>
          <div className='flex gap-3 items-center'>
            <p className='text-sm max-md:hidden'>+380634761210</p>
            <div className='w-24 h-9 border border-green rounded-3xl flex items-center gap-2 px-1 py-1'>
              <span className='block w-7 h-7 bg-green rounded-full'></span>
              <span className='text-lg font-light text-green'>ENG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};