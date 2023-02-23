import { GiPartyPopper } from 'react-icons/gi';

export function NoCards() {
  return (
    <div className='flex content-center activity-card  mt-3 w-full'>
      <div className='flex content-center items-center mb-0 h-[120px] w-full text-center px-3'>
        <p className='font-semibold w-full text-center text-xl'>
          No Activities found for these filters. Hooray!
        </p>
        <GiPartyPopper
          className='ms-3 opacity-20 absolute right-4'
          size={70}
        />
      </div>
    </div>
  );
}
