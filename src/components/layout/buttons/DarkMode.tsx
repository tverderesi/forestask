import { useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import AppContext from '../../../context/AppContext';

function DarkMode() {
  const { dataTheme, dispatch } = useContext(AppContext);
  return (
    <button
      className='btn btn-transparent'
      key='darkMode'
      onClick={() => {
        dispatch({
          type: 'CHANGE_COLOR',
          payload: dataTheme === 'dark' ? 'light' : 'dark',
        });
      }}
    >
      <div className='mb-2'>
        <BsFillMoonStarsFill size='1.3em' />
      </div>
      {dataTheme === 'dark' ? 'Day' : 'Night'}
    </button>
  );
}

export default DarkMode;
