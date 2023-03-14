import { BsPencil, BsPlusCircle } from 'react-icons/bs';

export function ManageCardsPopOver(dispatch: any) {
  return (
    <div className='absolute top-0 z-1  activity-card rounded-2xl p-2 backdrop-blur-xl shadow-lg '>
      <div
        className='text-center'
        style={{
          backgroundColor: 'transparent',
          width: '16rem',
          borderBottom: 'solid 1px #80808020',
          height: '2.5rem',
          fontWeight: '600',
          color: 'var(--font-color)',
        }}
        onClick={(e: React.SyntheticEvent) => {
          e.preventDefault();
          dispatch({ type: 'ADD_CARD' });
        }}
      >
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
