import { BsFillMoonStarsFill } from 'react-icons/bs';

function DarkMode() {
  return (
    <button className='btn btn-transparent'>
      <div className='mb-2'>
        <BsFillMoonStarsFill size='1.3em' />
      </div>
      Noite
    </button>
  );
}

export default DarkMode;
