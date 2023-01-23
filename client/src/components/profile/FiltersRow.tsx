import { FaTimes } from 'react-icons/fa';

export default function FiltersRow({ filters, dispatch, timeZone, locale }) {
  return (
    <div className='flex justify-start items-center mt-4 mr-3 ml-5 '>
      <div
        className={`rounded-full text-sm mr-1 font-semibold px-1.5 py-0.5 `}
        style={{ backgroundColor: filters.subjectsColor }}
      >
        {filters.subjects}
        {filters.subjects && (
          <FaTimes
            className='ml-1 inline relative top-[-.05rem]'
            onClick={() => {
              const payload = {
                ...filters,
                subjects: '',
                subjectsColor: '',
              };
              dispatch({ type: 'ADD_TO_FILTER', payload: payload });
            }}
          />
        )}
      </div>
      <div
        className='rounded-full text-sm mr-1 font-semibold px-1.5 py-0.5'
        style={{ backgroundColor: filters.activitiesColor }}
      >
        {filters.activities}
        {filters.activities && (
          <FaTimes
            className='ml-1 inline relative top-[-.05rem]'
            onClick={() => {
              const payload = {
                ...filters,
                activities: '',
                activitiesColor: '',
              };
              dispatch({ type: 'ADD_TO_FILTER', payload: payload });
            }}
          />
        )}
      </div>
      <div className='rounded-full text-sm font-semibold px-1.5 py-0.5 mr-1 bg-[#8e5800]'>
        {filters.deadline
          ? new Date(filters.deadline).toLocaleDateString(locale, {
              timeZone: 'Etc/UTC',
            })
          : ''}
        {filters.deadline && (
          <FaTimes
            className='ml-1 inline relative top-[-.05rem]'
            onClick={() => {
              const payload = { ...filters, deadline: '' };
              dispatch({ type: 'ADD_TO_FILTER', payload: payload });
            }}
          />
        )}
      </div>
      <div className='rounded-full text-sm font-semibold px-1.5 py-0.5 mr-1 bg-[#c97c00]'>
        {filters.checked
          ? 'Completed'
          : '' || filters.checked === false
          ? 'Not Completed'
          : ''}
        {(filters.checked === false || filters.checked === true) && (
          <FaTimes
            className='ml-1 inline relative top-[-.05rem]'
            onClick={() => {
              const payload = { ...filters, checked: '' };

              dispatch({ type: 'ADD_TO_FILTER', payload: payload });
            }}
          />
        )}
      </div>
    </div>
  );
}
