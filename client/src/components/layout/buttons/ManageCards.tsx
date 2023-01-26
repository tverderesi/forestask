import ManageCardsIcon from '../icons/ManageCardsIcon';

import { BsPencil, BsPlusCircle } from 'react-icons/bs';

export default function ManageCards({ dispatch }: { dispatch: any }) {
  return (
    <div className='dropdown dropdown-top dropdown-end justify-between mx-2 my-1 basis-1/2 '>
      <label
        tabIndex={0}
        className='btn btn-invisible h-full w-full pt-0.5 px-3 pb-0.5  flex flex-col capitalize font-bold text-base'
      >
        <ManageCardsIcon scaleFactor={1.2} />
        Manage Cards
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content bg-[var(--card-bg-color)] rounded-2xl py-2 backdrop-blur-xl shadow-lg mb-3 text-center w-full'
      >
        <li
          className='font-semibold align-middle border-b border-gray-400/20 py-2 mx-1'
          onClick={(e: React.SyntheticEvent) => {
            e.preventDefault();
            dispatch({ type: 'TOGGLE_FOREST', payload: true });
            dispatch({ type: 'ADD_CARD' });
          }}
        >
          <label htmlFor='add-item'>
            <BsPlusCircle className='absolute left-[5%] top-[calc(19.4px-2px)] text-xl' />
            Add Cards
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
