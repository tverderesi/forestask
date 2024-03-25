import { ActivitiesBadge } from "../../atoms/interface/badges/ActivitiesBadge";
import { CheckedBadge } from "../../atoms/interface/badges/CheckedBadge";
import { DeadlineBadge } from "../../atoms/interface/badges/DeadlineBadge";
import { SubjectsBadge } from "../../atoms/interface/badges/SubjectsBadge";

export default function FiltersRow({ filters, dispatch, timeZone, locale }) {
  const { subjects, activities, deadline, checked } = filters;

  return (
    <div className="flex mx-auto flex-wrap items-center justify-center mt-2">
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
