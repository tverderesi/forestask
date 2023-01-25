import DarkMode from '../buttons/DarkMode';
import Forest from '../buttons/Forest';
import ManageCards from '../buttons/ManageCards';

function Navbar({ dispatch }) {
  return (
    <div className='flex w-full h-auto soft-accent'>
      <DarkMode />
      <ManageCards dispatch={dispatch} />
      <Forest dispatch={dispatch} />
    </div>
  );
}

export default Navbar;
