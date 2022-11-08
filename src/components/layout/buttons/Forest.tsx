import { FaTree } from 'react-icons/fa';

export default function Forest({ dispatch, showForest }) {
  return (
    <button
      className='btn btn-transparent'
      key='Tasks'
      onClick={e => {
        e.preventDefault();
        dispatch({ type: 'TOGGLE_FOREST', payload: true });
      }}
      style={{ fontWeight: 600, fontSize: '.9rem' }}
    >
      <div>
        <FaTree size={28} />
      </div>
      Forest
    </button>
  );
}
