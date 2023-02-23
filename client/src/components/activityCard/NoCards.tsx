/** @format */

import { GiPartyPopper } from 'react-icons/gi';

export default function NoCards() {
  return (
    <div className='flex content-center items-center  mt-3  h-28 card-style w-full text-center px-3'>
      <p className='font-semibold w-full text-center text-xl'>
        No Activities found for these filters. Hooray!
      </p>
      <GiPartyPopper className='ms-3 opacity-20 absolute right-4' size={70} />
    </div>
  );
}
