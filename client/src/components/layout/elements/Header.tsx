import { BsTreeFill } from 'react-icons/bs';

function Header() {
  return (
    <header style={{ background: 'none' }}>
      <div className='flex py-2'>
        <div
          style={{ width: 'auto' }}
          className='mx-auto font-bold text-4xl w-auto self-center'
        >
          <BsTreeFill className='forest-green text-3xl  align-middle relative bottom-1.5 mr-1 inline' />
          flores<span className='forest-green'>tarefa </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
