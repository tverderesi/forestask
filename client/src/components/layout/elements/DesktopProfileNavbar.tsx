import DarkMode from '../buttons/DarkMode';
import Forest from '../buttons/Forest';
import ManageCards from '../buttons/ManageCards';

function Navbar({ dispatch }) {
  return (
    <div className='flex w-full h-20 soft-accent rounded-b-2xl absolute bottom-0'>
      <DarkMode />
      <ManageCards dispatch={dispatch} />
      <Forest dispatch={dispatch} />
    </div>
  );
}

export default Navbar;
