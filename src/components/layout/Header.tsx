import { BsTreeFill } from 'react-icons/bs';

function Header() {
  return (
    <header style={{ background: 'none' }}>
      <div className='d-flex mt-1'>
        <div
          style={{ width: 'auto' }}
          className='mx-auto fw-bold h3 w-auto align-self-center'
        >
          flores<span className='forest-green'>tarefa </span>
        </div>
        <div style={{ position: 'absolute' }}>
          <BsTreeFill className='forest-green h3 justify-self-end' />
        </div>
      </div>
    </header>
  );
}

export default Header;
