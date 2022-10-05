import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../App.css';

function Card2() {
  return (
    <Card className='card container-fluid rounded mt-3'>
      <div className='card-body row'>
        <div className='col'>
          <h5 className='card-title display-5'>Title</h5>
          <div className='mt-1'>
            <Button
              type='button'
              className='btn btn-homework btn-sm
                  font-weight-bold'
            >
              Type
            </Button>
            <button
              type='button'
              className='btn btn-subj-math btn-sm
                  font-weight-bold'
            >
              Subject
            </button>
            <button
              type='button'
              className='btn btn-sm btn-deadline
                  font-weight-bold'
            >
              deadline
            </button>
            <button
              type='button'
              className='btn btn-exp btn-sm
                            font-weight-bold'
            >
              XP: 0
            </button>
            <div className='col-1 task-checkbox align-self-center justify-self-center'>
              <input
                name='done'
                className='xp_done done'
                type='checkbox'
                value='0'
              />
            </div>
          </div>

          <p className='card-text mt-3 text-justify'>Content</p>
        </div>
      </div>
    </Card>
  );
}

export default Card2;
