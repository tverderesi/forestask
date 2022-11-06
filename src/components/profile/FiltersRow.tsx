import { Row, Col } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

export default function FiltersRow({ filters, dispatch, timeZone }) {
  return (
    <Row className='d-flex justify-content-around align-items-center mt-1 me-3 ms-3 '>
      <Col
        fluid
        className='pe-0'
      >
        <div
          className='badge me-1'
          style={{ backgroundColor: filters.subjectsColor }}
        >
          {filters.subjects}
          {filters.subjects && (
            <FaTimes
              className='ms-1'
              style={{ position: 'relative', top: '-.05rem' }}
              onClick={() => {
                const lollygag = {
                  ...filters,
                  subjects: '',
                  subjectsColor: '',
                };
                dispatch({ type: 'ADD_TO_FILTER', payload: lollygag });
              }}
            />
          )}
        </div>
        <div
          className='badge me-1'
          style={{ backgroundColor: filters.activitiesColor }}
        >
          {filters.activities}
          {filters.activities && (
            <FaTimes
              className='ms-1'
              style={{ position: 'relative', top: '-.05rem' }}
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
        <div
          className='badge me-1'
          style={{ backgroundColor: '#8e5800' }}
        >
          {filters.deadline
            ? filters.deadline.toLocaleString({
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                timeZone: timeZone,
              })
            : ''}
          {filters.deadline && (
            <FaTimes
              className='ms-1'
              style={{ position: 'relative', top: '-.05rem' }}
              onClick={() => {
                const lollygag = { ...filters, deadline: '' };
                dispatch({ type: 'ADD_TO_FILTER', payload: lollygag });
              }}
            />
          )}
        </div>
        <div
          className='badge me-1'
          style={{ backgroundColor: '#c97c00' }}
        >
          {filters.checked ? 'Completed' : ''}
          {filters.checked === false ? 'Not Completed' : ''}
          {(filters.checked === false || filters.checked) && (
            <FaTimes
              className='ms-1'
              style={{ position: 'relative', top: '-.05rem' }}
              onClick={() => {
                const payload = { ...filters, checked: '' };

                dispatch({ type: 'ADD_TO_FILTER', payload: payload });
              }}
            />
          )}
        </div>
      </Col>
    </Row>
  );
}
