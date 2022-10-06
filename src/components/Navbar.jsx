import { Nav } from 'react-bootstrap';

function Navbar({ navItems }) {
  return (
    <Nav
      justify
      className='fixed-bottom bg-light align-items-center p-2 space-around'
      style={{ height: '12vh', backdropFilter: 'blur(20px)' }}
    >
      {navItems}
    </Nav>
  );
}

export default Navbar;
