import { FaTree } from 'react-icons/fa';

export default function Tasks() {
  return (
    <button
      id='show-things'
      type='button'
      className='btn btn-transparent'
    >
      <div className='mb-2'>
        <FaTree size='1.5em' />
      </div>
      Forest
    </button>
  );
}
