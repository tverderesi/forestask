import { GiPartyPopper } from 'react-icons/gi';

export function NoCards() {
  return (
    <div className='flex content-center activity-card  mt-3 w-full'>
      <div className='flex content-center items-center mb-0 h-[120px] w-full text-center px-3'>
        <h5 className='fw-semibold w-full text-center'>
          No Activities found for these filters. Hooray!
        </h5>
        <GiPartyPopper
          className='ms-3 opacity-20 absolute right-4'
          size={70}
        />
      </div>
    </div>
  );
}
