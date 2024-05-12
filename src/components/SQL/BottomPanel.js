import Yes from "/public/assets/icons/sql/yes.svg";
import No from "/public/assets/icons/sql/no.svg";
import Round from "/public/assets/icons/sql/round.svg";

export const BottomPanel = () => {
  return (
    <div className='w-full bg-green-accent p-3 xs:p-4 flex gap-3 md:gap-12 items-center'>
      <span className='block h-8 w-0.5 bg-white'></span>
      <p className="text-xs xs:text-base">Result Grid</p>
      <span className='block h-8 w-0.5 bg-white'></span>
      <Round width={34} height={34} className='hover:stroke-green' />
      <Yes width={34} height={34} className='hover:stroke-green' />
      <No width={34} height={34} className='hover:stroke-green' />
    </div>
  );
};
