import { BsCardChecklist } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import React from 'react';
import { FaTree } from 'react-icons/fa';

function Tasks() {
  return (
    <Button
      id='show-things'
      type='button'
      variant='transparent'
      data-toggle='collapse'
      aria-pressed='false'
      autocomplete='off'
    >
      <div className='mb-2'>
        <FaTree size='1.5em' />
      </div>
      Forest
    </Button>
  );
}

export default Tasks;
