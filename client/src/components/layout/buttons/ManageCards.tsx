import ManageCardsIcon from '../icons/ManageCardsIcon';

import { BsPencil, BsPlusCircle } from 'react-icons/bs';

export default function ManageCards({ dispatch }: { dispatch: any }) {
  return (
    <div className='dropdown dropdown-top dropdown-end justify-between mx-2 my-1 basis-1/2 '>
      <label
        tabIndex={0}
        className='btn btn-invisible h-full w-full py-1.5 px-3  capitalize font-bold flex flex-col items-center text-sm  justify-between'
      >
        <ManageCardsIcon
          scaleFactor={1.2}
          className='mt-0.5 self-center justify-self-center'
        />
        <span className='block mb-0.5'> Manage Cards</span>
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content bg-[var(--card-bg-color)] rounded-2xl py-2 backdrop-blur-xl shadow-lg mb-3 text-center w-full'
      >
        <li
          className='font-semibold align-middle border-b border-gray-400/20 py-2 mx-1 cursor-pointer'
          onClick={(e: React.SyntheticEvent) => {
            e.preventDefault();
            dispatch({ type: 'ADD_CARD', payload: true });
          }}
        >
          <label htmlFor='add-item cursor-pointer'>
            <BsPlusCircle className='absolute left-[5%] top-[calc(19.4px-2px)] text-xl cursor-pointer' />
            <span className='cursor-pointer'>Add Cards</span>
          </label>
        </li>
        <li className='font-semibold align-middle py-2'>
          <span>
            <BsPencil className='absolute left-[5%] bottom-[calc(19.4px-2px)] text-xl' />
            Edit Cards
          </span>
        </li>
      </ul>
    </div>
  );
}
