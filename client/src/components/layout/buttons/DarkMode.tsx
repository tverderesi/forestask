import { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import AppContext from '../../../context/AppContext';

function DarkMode() {
  const { dataTheme, dispatch } = useContext(AppContext);
  return (
    <Col xs={4}>
      <button
        className='btn btn-transparent d-flex flex-column justify-content-between w-100'
        key='darkMode'
        onClick={() => {
          dispatch({
            type: 'CHANGE_COLOR',
            payload: dataTheme === 'dark' ? 'light' : 'dark',
          });
        }}
        style={{ height: '10vh' }}
      >
        <div className='mb-2'>
          <BsFillMoonStarsFill
            size={20}
            style={{ verticalAlign: 'top' }}
          />
        </div>
        {dataTheme === 'dark' ? 'Day' : 'Night'}
      </button>
    </Col>
  );
}

export default DarkMode;
