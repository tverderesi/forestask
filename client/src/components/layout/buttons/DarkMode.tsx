import { useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import AppContext from '../../../context/AppContext';

function DarkMode() {
  const { dataTheme, dispatch } = useContext(AppContext);
  return (
    <button
      className='btn-transparent primary flex flex-col justify-between items-center p-3 w-auto h-auto basis-1/3'
      key='darkMode'
      onClick={() => {
        dispatch({
          type: 'CHANGE_COLOR',
          payload: dataTheme === 'dark' ? 'light' : 'dark',
        });
      }}
    >
      <BsFillMoonStarsFill
        size={20}
        className='align-top'
      />

      {dataTheme === 'dark' ? 'Day' : 'Night'}
    </button>
  );
}

export default DarkMode;
