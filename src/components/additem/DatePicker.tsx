import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

export function DatePicker({ width, target }): JSX.Element {
  const [focused, setFocused] = useState(false);
  return (
    <Form.Group
      className='mb-3'
      style={{ width: width }}
    >
      <Form.Label className='text-center w-100'>Deadline</Form.Label>
      <Container
        fluid
        className={`d-flex align-items-center justify-content-around g-0 justify-self-center`}
      >
        <div
          className='d-flex flex-column jusitfy-content-center align-items-center'
          style={{
            borderRadius: '1.12rem',
            fontWeight: '600',
            height: '2.25rem',
            paddingRight: '0px',
            width: '100%',
            outline: focused ? '3px solid var(--bold-accent-color-1)' : '',
            backgroundColor: focused ? 'white' : 'var(--soft-accent-bg-color)',
            fontSize: '.85rem',
            alignSelf: 'center',
          }}
        >
          <input
            type='date'
            className=' text-center'
            style={{
              width: '70%',
              marginTop: 'auto',
              marginBottom: 'auto',
              backgroundColor: 'transparent',
              border: 'none',
              fontWeight: '600',
            }}
            onChange={e =>
              (target.deadline = e.currentTarget.valueAsDate?.toISOString())
            }
            onFocus={() => {
              setFocused(true);
            }}
            onBlur={() => {
              setFocused(false);
            }}
          />
        </div>
      </Container>
    </Form.Group>
  );
}
