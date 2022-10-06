import React from 'react';
import { Button } from 'react-bootstrap';
import { SubjectColor } from './TagStyles';

function CardTags(subject) {
  return (
    <div className='d-flex flex-row mt-4'>
      <Button
        type='button'
        className='btn btn-homework btn-sm
                  font-weight-bold'
      >
        Type
      </Button>
      <Button
        type='button'
        style={{ backgroundColor: SubjectColor['Science'] }}
      >
        Subject
      </Button>
      <Button
        type='button'
        className='btn btn-sm btn-deadline
                  font-weight-bold ms-2'
      >
        deadline
      </Button>
      <Button
        type='button'
        className='btn btn-exp btn-sm
                            font-weight-bold ms-2'
      >
        0 XP
      </Button>
    </div>
  );
}

export default CardTags;
