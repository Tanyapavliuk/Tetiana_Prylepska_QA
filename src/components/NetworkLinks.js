import Link from "next/link";
import { Icon } from "./base/Icon";

export const NetworkLinks = ({className}) => {
    return ( <div className={`flex gap-6 ${className}`}>
    <Link href='https://www.linkedin.com/in/tanya-pavliuk' target="_blank" className="hover:drop-shadow-[5px_2px_2px_rgba(32,117,110,1)]" >
      <Icon name='Linkedin' className='hover:scale-125 transition-transform' />
    </Link>
    <Link href='https://t.me/Tanyapavliuk' target="_blank" className="hover:drop-shadow-[5px_2px_2px_rgba(32,117,110,1)]">
      <Icon name='Telegram' className='hover:scale-125 transition-transform' />
    </Link>
    <Link href='https://github.com/Tanyapavliuk' target="_blank" className="hover:drop-shadow-[5px_2px_2px_rgba(32,117,110,1)]">
      <Icon name='Github' className='hover:scale-125 transition-transform' />
    </Link>
  </div> );
}