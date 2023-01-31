import { useState, useRef, useEffect } from 'react';

export function RegisterBirthday({}): JSX.Element {
  const birRef = useRef(null);

  return (
    <>
      <label className='text-center text-xl font-semibold mb-2'>Birthday</label>

      <input
        ref={birRef}
        name='birthday'
        type='date'
        className='form-control mb-4'
      />
    </>
  );
}
