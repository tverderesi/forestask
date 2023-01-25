import { FaTree } from 'react-icons/fa';

export default function Forest({ dispatch }) {
  return (
    <button
      className='btn-transparent primary flex flex-col justify-between items-center p-3 w-auto h-auto basis-1/3'
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
