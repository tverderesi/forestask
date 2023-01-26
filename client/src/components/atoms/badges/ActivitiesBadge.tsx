import { FaTimes } from 'react-icons/fa';

export function ActivitiesBadge({
  filters,
  dispatch,
}: {
  filters: any;
  dispatch: any;
}) {
  const { activities, activitiesColor } = filters;
  return (
    <div
      className={`badge badge-sm font-bold border-none mr-1`}
      style={{ backgroundColor: activitiesColor }}
    >
      {activities}
      {activities && (
        <FaTimes
          className='ml-1 inline fill-white my-auto relative top-[0.3px] left-0.5'
          onClick={() => {
            const payload = {
              filters: {
                ...filters,
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
