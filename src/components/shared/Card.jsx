import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../App.css';
import { BsCheckLg } from 'react-icons/bs';
import CardTags from './CardTags';

function Card2({ title, content }) {
  return (
    <Card
      style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: '#f9fafbe0',
        borderRadius: '16px',
        border: 'none',
      }}
    >
      <Card.Header
        className='mt-5 ms-4'
        style={{ background: 'none', border: 'none' }}
      >
        <Card.Title style={{ fontSize: '1.75em', fontWeight: '600' }}>{title}</Card.Title>
        <CardTags subject='Music' />
      </Card.Header>

      <Card.Body className='col-10 ms-4'>
        <p className='text-justify'>{content}</p>
      </Card.Body>
      <button
        className='col-1 p-0'
        style={{
          height: '60px',
          width: '60px',
          padding: '0',
          border: 'none',
          borderRadius: '50%',
          position: 'absolute',
          left: '92.5%',
          top: 'calc(50% - 30px)',
        }}
      >
        <BsCheckLg
          className='p-0'
          size={'30px'}
          style={{ opacity: '10%' }}
        />
      </button>
    </Card>
  );
}

export default Card2;
