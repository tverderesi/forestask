import DarkMode from '../buttons/DarkMode';
import Forest from '../buttons/Forest';
import ManageCards from '../buttons/ManageCards';

function Navbar({ dispatch, showForest }) {
  return (
    <div className='d-flex justify-content-around align-items-start fw-bold'>
      <DarkMode />
      <Forest
        dispatch={dispatch}
        showForest={showForest}
      />
      <ManageCards />
    </div>
  );
}

export default Navbar;
