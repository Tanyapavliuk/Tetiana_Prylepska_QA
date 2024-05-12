import { red_rose } from "@/app/fonts";
import { Select } from "../base/Select";

export const SqlContent = ({queries, currentQuery, onSelectOption}) => {

    const handleSelectOption = (value)=>{
        onSelectOption(value)
    }

  return (
    <div className='py-6 sm:py-12 flex px-3 flex-col'>
      <div className='flex flex-col gap-4 pl-2 xs:pl-6 sm:pl-14'>
        <div className='flex gap-3 xs:gap-8 items-center'>
          <span
            className={`w-8 xs:w-16 flex items-center justify-between text-lg sm:text-3xl text-white ${red_rose.className}`}
          >
            1<span className='block w-2 h-2 rounded-full bg-green'></span>
          </span>
          <p className='flex items-baseline'>
            <span
              className={`text-green text-lg sm:text-3xl mr-3 uppercase ${red_rose.className}`}
            >
              use
            </span>
            <span className='text-base'>tetiana_prilepska;</span>
          </p>
        </div>
        <div>
          <span className={`text-lg sm:text-3xl text-white ${red_rose.className}`}>2</span>
        </div>
        <div className='flex gap-3 xs:gap-8 items-center'>
          <span
            className={`w-8 xs:w-16 flex items-center justify-between text-lg sm:text-3xl text-white ${red_rose.className}`}
          >
            3<span className='block w-2 h-2 rounded-full bg-green'></span>
          </span>
          <span
            className={`text-green text-lg sm:text-3xl mr-3 uppercase ${red_rose.className}`}
          >
            select *
          </span>
        </div>
        <div className='flex gap-3 xs:gap-8 items-center'>
          <span
            className={`min-w-8 xs:w-16 flex items-center justify-between text-lg sm:text-3xl text-white ${red_rose.className}`}
          >
            4
          </span>
          <span
            className={`text-green text-lg sm:text-3xl mr-3 uppercase ${red_rose.className}`}
          >
            from
          </span>
          <Select values={queries} value={currentQuery} onSelect={handleSelectOption}/>
        </div>
      </div>
      {/* <button className='place-self-end w-32 py-4 text-dark-dark text-base font-semibold bg-green rounded mt-3 hover:bg-green-dark transition-colors'>
        Execute
      </button> */}
    </div>
  );
};
