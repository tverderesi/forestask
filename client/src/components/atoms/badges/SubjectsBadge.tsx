import { FaTimes } from 'react-icons/fa';

export function SubjectsBadge({
  filters: { subjects, subjectsColor },
  dispatch,
}: {
  filters: any;
  dispatch: any;
}) {
  return (
    <div
      className={`badge badge-sm border-none font-bold mr-1`}
      style={{ backgroundColor: subjectsColor }}
    >
      <span className=' text-white my-auto h-full'> {subjects}</span>
      {subjects && (
        <FaTimes
          className='ml-1 inline fill-white my-auto relative top-[1.5px]'
          onClick={() => {
            const payload = {
              filters: {
                subjects: '',
                subjectsColor: '',
              },
            };
            dispatch({ type: 'ADD_TO_FILTER', payload: payload });
          }}
        />
      )}
    </div>
  );
}
