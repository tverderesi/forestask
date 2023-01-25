import { ActivitiesBadge } from '../atoms/badges/ActivitiesBadge';
import { CheckedBadge } from '../atoms/badges/CheckedBadge';
import { DeadlineBadge } from '../atoms/badges/DeadlineBadge';
import { SubjectsBadge } from '../atoms/badges/SubjectsBadge';

export default function FiltersRow({ filters, dispatch, timeZone, locale }) {
  const { subjects, activities, deadline, checked } = filters;

  return (
    <div className='flex my-2 mx-auto flex-wrap items-center justify-center'>
      {
        /* prettier-ignore */
        subjects && (<SubjectsBadge filters={filters} dispatch={dispatch} />)
      }
      {
        /* prettier-ignore */
        activities && <ActivitiesBadge filters={filters} dispatch={dispatch} />
      }
      {
        /* prettier-ignore */
        deadline && <DeadlineBadge filters={filters} dispatch={dispatch} locale={locale} />
      }
      {
        /* prettier-ignore */
        checked && <CheckedBadge filters={filters} dispatch={dispatch} />
      }
    </div>
  );
}
