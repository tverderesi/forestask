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
    <div className='ms-0 me-0'>
      <div className='flex flex-row items-center justify-between  g-0 ms-3 mt-3 mr-3'>
        <div className='ml-1 inline'>
          <span style={{ position: 'relative', top: '-.25rem' }}>
            <MdFilterAlt
              size={25}
              className='inline align-text-middle relative top-0.5'
            />
          </span>
          <span className='ml-1 font-semibold text-[1.05rem]'>Filter</span>
        </div>
        <div>
          <button
            value='Filter'
            className='px-3 py-2 rounded-lg'
            style={{
              backgroundColor: '#c491ff',
              border: 'none',
              color: 'black',
              fontWeight: '600',
              fontSize: '.80rem',
            }}
            onClick={() => {
              filterCards(filters, windowHeight, dispatch, page, cardsPerPage);
              dispatch({ type: 'SET_PAGE', payload: 0 });
            }}
          >
            Submit
          </button>
          <button
            value='Filter'
            className='px-3 py-2 ml-2 rounded-lg'
            style={{
              backgroundColor: '#f57bfb',
              border: 'none',
              color: 'black',
              fontWeight: '600',
              fontSize: '.80rem',
            }}
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
    </div>
  );
}
