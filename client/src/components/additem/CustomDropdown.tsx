import { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

export function CustomDropdown({
  dropdownName,
  dropdownItems,
  card,
  target,
}): JSX.Element {
  const [value, setValue] = useState('');
  return (
    <div
      style={{
        width: '45%',
      }}
    >
      <Form.Label className='text-center w-100'>{dropdownName}</Form.Label>

      <Dropdown drop='down'>
        <DropdownToggle
          className='d-flex justify-content-between'
          key={`Select${dropdownName}`}
        >
          {value ? value : dropdownName}
        </DropdownToggle>
        <DropdownMenu
          style={{
            backdropFilter: 'blur(20px)',
            backgroundColor: 'var(--card-bg-color-solid)',
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'var(--card-shadow)',
            padding: '.5rem',
            color: 'var(--font-color)',
          }}
        >
          {dropdownItems.map((item, index) => {
            return (
              <Dropdown.Item
                eventKey={`${index}`}
                className='text-center'
                style={{
                  width: '16rem',
                  borderBottom:
                    index === dropdownItems.length - 1
                      ? ''
                      : 'solid 1px #80808020',
                  height: '2.5rem',
                  fontWeight: '600',
                  color: 'var(--font-color)',
                }}
                onClick={(e: React.SyntheticEvent) => {
                  setValue(e.currentTarget.innerHTML);
                  card[target] = e.currentTarget.innerHTML;
                }}
              >
                {item}
              </Dropdown.Item>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
