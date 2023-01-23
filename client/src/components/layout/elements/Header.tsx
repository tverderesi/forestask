import { BsTreeFill } from 'react-icons/bs';

function Header() {
  return (
    <header style={{ background: 'none' }}>
      <div className='flex py-2'>
        <div
          style={{ width: 'auto' }}
          className='mx-auto font-semibold text-2xl w-auto self-center'
        >
          <BsTreeFill className='forest-green text-2xl  align-middle relative bottom-1 mr-1 inline' />
          flores<span className='forest-green'>tarefa </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
