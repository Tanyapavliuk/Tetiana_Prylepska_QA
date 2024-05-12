import Folder from "/public/assets/icons/sql/folder.svg";
import Save from "/public/assets/icons/sql/save.svg";
import Lightning from "/public/assets/icons/sql/lightning.svg";
import LightningSearh from "/public/assets/icons/sql/lightningSearh.svg";
import Search from "/public/assets/icons/sql/search.svg";
import Hand from "/public/assets/icons/sql/hand.svg";
import Yes from "/public/assets/icons/sql/yes.svg";
import No from "/public/assets/icons/sql/no.svg";
import Vector from "/public/assets/icons/sql/vector.svg";

export const TopPanel = () => {
  return (
    <div className='w-full bg-green-accent p-3 xs:p-4 flex justify-between items-center'>
      <div className='flex gap-3 md:gap-12'>
        <div className='flex gap-2 xs:gap-4 items-center'>
          <Folder width={34} height={34} className='hover:stroke-green'/>
          <Save width={28} height={28} className='hover:fill-green'/>
        </div>
        <span className='block h-8 w-0.5 bg-white'></span>
        <div className='flex gap-2 xs:gap-4 items-center'>
          <Lightning width={34} height={34} className='hover:stroke-green'/>
          <LightningSearh width={34} height={34} className='hover:stroke-green'/>
          <Search width={34} height={34} className='hover:stroke-green'/>
          <Hand width={34} height={34} className='hover:stroke-green'/>
        </div>
        <span className='block h-8 w-0.5 bg-white max-xs:hidden'></span>
        <div className="flex gap-2 xs:gap-4 items-center max-xs:hidden">
        <Yes width={34} height={34} className='hover:stroke-green'/>
          <No width={34} height={34} className='hover:stroke-green'/>
        </div>
      </div>
          <Vector width={26} height={26} className='hover:stroke-green-dark max-xs:hidden'/>
    </div>
  );
};
