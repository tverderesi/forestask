import { FaTimes } from 'react-icons/fa';

export function CheckedBadge({
  filters: { checked },
  dispatch,
}: {
  filters: any;
  dispatch: any;
}) {
  return (
    <div
      className={`badge badge-sm font-bold border-none ${
        checked ? ' px-1.5 py-0.5' : ''
      } mr-1 ${checked === 'completed' ? 'bg-green-600' : 'bg-red-700'}`}
    >
      {checked === 'completed'
        ? 'Completed'
        : checked === 'notCompleted'
        ? 'Not Completed'
        : ''}
      {(checked === 'completed' || checked === 'notCompleted') && (
        <FaTimes
          className='ml-1 inline fill-white my-auto relative top-[0.3px] left-0.5'
          onClick={() => {
            const payload = { filters: { checked: '' } };

            dispatch({ type: 'ADD_TO_FILTER', payload: payload });
          }}
        />
      )}
    </div>
  );
}
