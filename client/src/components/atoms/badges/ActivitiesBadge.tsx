import { FaTimes } from 'react-icons/fa';

export function ActivitiesBadge({
  filters: { activities, activitiesColor },
  dispatch,
}: {
  filters: any;
  dispatch: any;
}) {
  return (
    <div
      className={`rounded-full text-sm font-semibold mr-1.5 text-center px-2 py-[3px] mt-1 flex  justify-center items-center text-white`}
      style={{ backgroundColor: activitiesColor }}
    >
      {activities}
      {activities && (
        <FaTimes
          className='ml-1 inline fill-white my-auto relative top-[1.5px]'
          onClick={() => {
            const payload = {
              filters: {
                activities: '',
                activitiesColor: '',
              },
            };
            dispatch({ type: 'ADD_TO_FILTER', payload: payload });
          }}
        />
      )}
    </div>
  );
}
