import { useState } from 'react';

export function RegisterBirthday(): JSX.Element {
  return (
    <>
      <label className='text-center text-xl font-semibold mb-2'>Birthday</label>

      <input
        type='date'
        className='form-control mb-4 mx-10 w-9/12'
      />
    </>
  );
}
