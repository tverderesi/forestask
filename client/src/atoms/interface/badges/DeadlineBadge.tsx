import { FaTimes } from 'react-icons/fa';

export function DeadlineBadge({
  filters: { deadline },
  locale,
  dispatch,
}: {
  filters: any;
  locale: any;
  dispatch: any;
}) {
  return (
    <div
      className={`badge badge-sm  bg-orange-600 py-0.5 border-none font-bold mr-1`}
    >
      {deadline
        ? new Date(deadline).toLocaleDateString(locale, {
            timeZone: 'Etc/UTC',
          })
        : ''}
      {deadline && (
        <FaTimes
          className='ml-1 inline fill-white my-auto relative top-[0.3px] left-0.5'
          onClick={() => {
            const payload = { filters: { deadline: '' } };
            dispatch({ type: 'ADD_TO_FILTER', payload: payload });
          }}
        />
      )}
    </div>
  );
}
