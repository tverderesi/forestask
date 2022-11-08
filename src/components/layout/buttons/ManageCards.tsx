// 1. node "builtin" modules

// 2. "external" modules
import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { BsPencil, BsPlusCircle } from 'react-icons/bs';

// 3. "internal" modules

// 4. modules from a "parent" directory
import ManageCardsIcon from '../icons/ManageCardsIcon';

// 5. "sibling" modules from the same or a sibling's directory

// 6. "index" of the current directory

// 7. "object"-imports (only available in TypeScript)

// 8. "type" imports (only available in Flow and TypeScript)

export default function ManageCards() {
  return (
    <Dropdown drop={'up'}>
      <DropdownToggle
        className='btn btn-transparent'
        key='manageCards'
        style={{ fontWeight: 600, fontSize: '.9rem' }}
      >
        <div>
          <ManageCardsIcon scaleFactor={1.1} />
        </div>
        Manage Cards
      </DropdownToggle>
      <DropdownMenu
        style={{
          backdropFilter: 'blur(20px)',
          backgroundColor: '#f9fafb80',
          borderRadius: '16px',
          border: 'none',
          boxShadow: '5px 5px 20px #3a3a3a38',
          padding: '.5rem',
        }}
      >
        <Dropdown.Item
          eventKey='1'
          className='text-center'
          style={{
            backgroundColor: 'transparent',
            color: 'black',
            width: '16rem',
            borderBottom: 'solid 1px #80808020',
            height: '2.5rem',
            fontWeight: '600',
          }}
        >
          <BsPlusCircle
            style={{ position: 'absolute', top: '12.5%', left: '5%' }}
            size={20}
          />
          Add Card
        </Dropdown.Item>
        <Dropdown.Item
          eventKey='2'
          className='text-center'
          style={{
            backgroundColor: 'transparent',
            color: 'black',
            height: '2.5rem',
            paddingBottom: '.5rem',
            paddingTop: '.5rem',
            fontWeight: '600',
          }}
        >
          <BsPencil
            style={{ position: 'absolute', bottom: '17.5%', left: '5%' }}
            size={20}
          />
          Edit Cards
        </Dropdown.Item>
      </DropdownMenu>
    </Dropdown>
  );
}
