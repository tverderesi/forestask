export default function AccordionCompleted({ filters, dispatch }) {
  return (
    <div className='grid grid-cols-4 gap-3 px-6 items-center justify-around g-0 justify-self-center'>
      <button
        value='checked'
        className='p-2 col-span-2 rounded-full font-bold bg-green-600 text-white  text-sm'
        onClick={() => {
          const payload = { ...filters, checked: 'completed' };
          dispatch({ type: 'ADD_TO_FILTER', payload: payload });
        }}
      >
        Completed
      </button>
      <button
        name='Completed'
        id='completed'
        className='p-2 col-span-2 rounded-full font-bold bg-red-700 text-white  text-sm'
        onClick={() => {
          const payload = { ...filters, checked: 'notCompleted' };

          dispatch({ type: 'ADD_TO_FILTER', payload: payload });
        }}
      >
        Not Completed
      </button>
    </div>
  );
}
