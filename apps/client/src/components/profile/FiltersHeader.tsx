import { MdFilterAlt } from 'react-icons/md';
import { filterCards } from '../../context/AppFunctions';

export default function FiltersHeader({
  filters,
  windowHeight,
  dispatch,
  page,
  cardsPerPage,
}) {
  return (
    <div className='flex flex-row items-center justify-between px-2'>
      <div className='ml-1 inline'>
        <span style={{ position: 'relative', top: '-.25rem' }}>
          <MdFilterAlt
            size={25}
            className='inline align-text-middle relative top-0.5'
          />
        </span>
        <span className='ml-1 font-semibold text-base'>Filter</span>
      </div>
      <div>
        <button
          value='Filter'
          className='btn btn-sm btn-bold-1 capitalize text-xs font-bold mr-1'
          onClick={() => {
            filterCards(filters, windowHeight, dispatch, page, cardsPerPage);
            dispatch({ type: 'SET_PAGE', payload: 0 });
          }}
        >
          Submit
        </button>
        <button
          value='Filter'
          className='btn btn-sm btn-bold-2 font-bold capitalize text-xs '
          onClick={() => {
            filters.activities = '';
            filters.subjects = '';
            filters.deadline = '';
            filters.checked = '';
            filterCards(filters, windowHeight, dispatch, page, cardsPerPage);
            dispatch({ type: 'SET_PAGE', payload: 0 });
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
