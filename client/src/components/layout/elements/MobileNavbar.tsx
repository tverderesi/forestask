import { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import ManageCards from '../buttons/ManageCards';
import Forest from '../buttons/Forest';
import Profile from '../buttons/Profile';
import DarkMode from '../buttons/DarkMode';

function MobileNavbar() {
  const { dispatch } = useContext(AppContext);
  return (
    <nav
      className='d-flex flex-row justify-content-around'
      style={{
        position: 'absolute',
        bottom: '0',
        width: '100vw',
        backdropFilter: 'blur(20px)',
        backgroundColor: '#f9fafb80',
        left: '0',
        boxShadow: '5px 5px 20px #3a3a3a38',
      }}
    >
      <Profile />
      <DarkMode />
      <Forest dispatch={dispatch} />
      <ManageCards dispatch={dispatch} />
    </nav>
  );
}

export default MobileNavbar;
