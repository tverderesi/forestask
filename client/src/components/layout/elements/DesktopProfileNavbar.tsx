import { Row } from 'react-bootstrap';
import DarkMode from '../buttons/DarkMode';
import Forest from '../buttons/Forest';
import ManageCards from '../buttons/ManageCards';

function Navbar({ dispatch }) {
  return (
    <Row className=''>
      <DarkMode />
      <ManageCards dispatch={dispatch} />
      <Forest dispatch={dispatch} />
    </Row>
  );
}

export default Navbar;
