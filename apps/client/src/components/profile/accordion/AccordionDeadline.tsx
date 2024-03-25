import { useContext, useState } from 'react';

import AppContext from '../../../context/AppContext';

export default function AccordionDeadline() {
  const { dispatch, filters } = useContext(AppContext);
  const [focused, setFocused] = useState(false);
  return (
    <div className='flex items-center justify-around g-0 justify-self-center'>
      <div
        className='self-center text-sm flex flex-col w-[70%] pr-0 jusitfy-center items-center font-semibold rounded-[1.12rem] h-[2.25rem]'
        style={{
          outline: focused ? '3px solid var(--bold-accent-color-1)' : '',
          backgroundColor: 'var(--soft-accent-bg-color)',
        }}
      >
        <input
          type='date'
          className='text-center bg-transparent w-4/5 mt-auto mb-auto border-none items-center font-bold active:border-none active:outline-none'
          onChange={(e: any) => {
            const payload = {
              ...filters,
              deadline: new Date(e.target.value).toISOString(),
            };
            dispatch({ type: 'ADD_TO_FILTER', payload: payload });
          }}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </div>
    </div>
  );
}
