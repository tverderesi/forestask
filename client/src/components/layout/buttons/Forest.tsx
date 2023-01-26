import { FaTree } from 'react-icons/fa';

export default function Forest({ dispatch }) {
  return (
    <button
      className='btn font-bold btn-invisible h-auto px-3 py-2 text-base capitalize flex flex-col justify-between items-center basis-1/4 rounded-br-2xl mx-2 my-1'
      key='Tasks'
      onClick={e => {
        e.preventDefault();
        dispatch({ type: 'TOGGLE_FOREST', payload: true });
      }}
    >
      <FaTree
        size={28}
        style={{ verticalAlign: 'top' }}
      />
      Forest
    </button>
  );
}
