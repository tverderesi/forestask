import { BsTreeFill } from 'react-icons/bs';
import React from 'react';

function Header() {
  return (
    <header
      className='mt-3'
      style={{ background: 'none' }}
    >
      <h1 className='d-flex align-items-center justify-content-center fw-bold'>
        flores<span className='forest-green me-3'>tarefa </span>
        <BsTreeFill className='forest-green' />
      </h1>
    </header>
  );
}

export default Header;
