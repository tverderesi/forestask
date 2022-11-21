// 1. node "builtin" modules

// 2. "external" modules
import { Col, Dropdown } from 'react-bootstrap';
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

export default function ManageCards({ dispatch }: { dispatch: any }) {
  return (
    <Col xs={4}>
      <Dropdown drop={'up'}>
        <DropdownToggle
          className='btn btn-transparent  d-flex flex-column justify-content-between w-100'
          key='manageCards'
          style={{ height: '10vh', lineHeight: '' }}
          id='button'
        >
          <div>
            <ManageCardsIcon scaleFactor={1.1} />
          </div>
          Manage Cards
        </DropdownToggle>
        <DropdownMenu
          style={{
            backdropFilter: 'blur(20px)',
            backgroundColor: 'var(--card-bg-color)',
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'var(--card-shadow)',
            padding: '.5rem',
            color: 'var(--font-color)',
          }}
        >
          <Dropdown.Item
            eventKey='1'
            className='text-center'
            style={{
              backgroundColor: 'transparent',
              width: '16rem',
              borderBottom: 'solid 1px #80808020',
              height: '2.5rem',
              fontWeight: '600',
              color: 'var(--font-color)',
            }}
            onClick={() => {
              dispatch({ type: 'ADD_CARD' });
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

              height: '2.5rem',
              paddingBottom: '.5rem',
              paddingTop: '.5rem',
              fontWeight: '600',
              color: 'var(--font-color)',
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
    </Col>
  );
}
