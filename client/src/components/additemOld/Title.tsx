import { BsPlusCircle } from 'react-icons/bs';

export function Title(): JSX.Element {
  return (
    <h4 className='text-center  text-3xl flex justify-center h-full items-center mt-3 mb-4 font-semibold'>
      <BsPlusCircle className='mr-4' />
      Add New Card
    </h4>
  );
}
