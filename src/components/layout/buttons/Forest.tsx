import { Col } from 'react-bootstrap';
import { FaTree } from 'react-icons/fa';

export default function Forest({ dispatch }) {
  return (
    <Col>
      <button
        className='btn btn-transparent d-flex flex-column justify-content-between w-100'
        key='Tasks'
        onClick={e => {
          e.preventDefault();
          dispatch({ type: 'TOGGLE_FOREST', payload: true });
        }}
        style={{ height: '10vh' }}
      >
        <div>
          <FaTree
            size={28}
            style={{ verticalAlign: 'top' }}
          />
        </div>
        Forest
      </button>
    </Col>
  );
}
