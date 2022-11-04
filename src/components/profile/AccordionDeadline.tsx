import { Container } from 'react-bootstrap';

export default function AccordionDeadline() {
  return (
    <Container
      fluid
      className='d-flex align-items-center justify-content-around g-0 justify-self-center'
    >
      <input
        type='date'
        style={{
          borderRadius: '10rem',
          border: 'none',
          fontWeight: '600',
          height: '2.25rem',
          paddingLeft: '7%',
          paddingRight: '0px',
          width: '70%',
          paddingBottom: '2%',
          backgroundColor: '#e9ecef',
          fontSize: '.85rem',
        }}
        className=' text-center'
      />
    </Container>
  );
}
