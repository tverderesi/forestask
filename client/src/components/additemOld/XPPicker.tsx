import { useState } from 'react';

export function XPPicker({ width, target }): JSX.Element {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ width: width }}>
      <label className='text-center w-100'>XP</label>
      <div
        className='form-control'
        style={{
          position: 'relative',
          outline: focused ? '3px solid var(--bold-accent-color-1)' : '',
          backgroundColor: focused ? 'white' : '',
        }}
      >
        <input
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
        ></input>
      </div>
    </div>
  );
}
