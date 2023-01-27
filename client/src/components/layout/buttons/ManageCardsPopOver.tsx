import { BsPencil, BsPlusCircle } from 'react-icons/bs';

export default function ManageCardsPopOver(dispatch: any) {
  return (
    <div className='absolute top-0 z-1   '>
      <div className=''>
        <BsPlusCircle
          className='absolute top-[12.5%] left-[5%]'
          size={20}
        />
        Add Card
      </div>
      <div
        className='text-center'
        style={{
          backgroundColor: 'transparent',

          height: '2.5rem',
          paddingBottom: '.5rem',
          paddingTop: '.5rem',
          fontWeight: '600',
          color: 'var(--font-color)',
        }}
      >
        <BsPencil
          style={{ position: 'absolute', bottom: '17.5%', left: '5%' }}
          size={20}
        />
        Edit Cards
      </div>
    </div>
  );
}
