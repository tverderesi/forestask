import { Row, Col } from 'react-bootstrap';
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
    <Row className='ms-0 me-0'>
      <Col className='d-flex flex-row align-items-center  g-0 ms-3 mt-2 me-3'>
        <Col className='ms-1'>
          <span style={{ position: 'relative', top: '-.25rem' }}>
            <MdFilterAlt size={22} />
          </span>
          <span
            className='h5 ms-1'
            style={{ fontWeight: '600' }}
          >
            Filter
          </span>
        </Col>
        <button
          value='Filter'
          className='btn btn-primary'
          style={{
            backgroundColor: '#c491ff',
            border: 'none',
            color: 'black',
            fontWeight: '600',
            fontSize: '.80rem',
          }}
          onClick={() => {
            filterCards(filters, windowHeight, dispatch, page, cardsPerPage);
          }}
        >
          Submit
        </button>
        <button
          value='Filter'
          className='btn btn-primary ms-1'
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
          }}
        >
          Clear
        </button>
      </Col>
    </Row>
  );
}
