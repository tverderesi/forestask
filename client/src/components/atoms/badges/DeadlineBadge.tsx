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
      className={`rounded-full  text-sm font-semibold mr-1.5 mt-1 text-center px-1 bg-orange-600 py-0.5 text-white`}
    >
      {deadline
        ? new Date(deadline).toLocaleDateString(locale, {
            timeZone: 'Etc/UTC',
          })
        : ''}
      {deadline && (
        <FaTimes
          className='ml-1 inline relative top-[-.05rem]'
          onClick={() => {
            const payload = { filters: { deadline: '' } };
            dispatch({ type: 'ADD_TO_FILTER', payload: payload });
          }}
        />
      )}
    </div>
  );
}
