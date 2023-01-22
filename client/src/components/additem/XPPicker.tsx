import { useState } from 'react';
import { Form } from 'react-bootstrap';

export function XPPicker({ width, target }): JSX.Element {
  const [focused, setFocused] = useState(false);
  return (
    <Form.Group style={{ width: width }}>
      <Form.Label className='text-center w-100'>XP</Form.Label>
      <div
        className='form-control'
        style={{
          position: 'relative',
          outline: focused ? '3px solid var(--bold-accent-color-1)' : '',
          backgroundColor: focused ? 'white' : '',
        }}
      >
        <Form.Control
          type='number'
          min='0'
          max='100'
          required={true}
          style={{
            backgroundColor: 'transparent',
            width: '80%',
            position: 'absolute',
            top: 0,
            outline: 'none',
            left: '10%',
          }}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          onChange={e => (target.xp = e.currentTarget.value)}
        ></Form.Control>
      </div>
    </Form.Group>
  );
}
