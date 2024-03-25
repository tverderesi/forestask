import { useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import AppContext from '../../../context/AppContext';

function DarkMode() {
  const { dataTheme, dispatch } = useContext(AppContext);
  return (
    <button
      className='btn font-bold btn-invisible flex flex-col justify-between items-center my-1 mx-2 px-3 py-2 w-auto h-auto basis-1/4 rounded-bl-2xl text-base capitalize '
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

      <span className='text-sm'>{dataTheme === 'dark' ? 'Day' : 'Night'}</span>
    </button>
  );
}

export default DarkMode;
