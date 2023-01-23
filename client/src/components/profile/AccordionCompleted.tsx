import { Container } from 'react-bootstrap';

export default function AccordionCompleted({ filters, dispatch }) {
  return (
    <Container
      fluid
      className='d-flex items-center justify-around g-0 justify-self-center'
    >
      <label>
        <input
          type='radio'
          name='Completed'
          id='completed'
          value='checked'
          className='me-1'
          onClick={() => {
            const payload = { ...filters, checked: true };

            dispatch({ type: 'ADD_TO_FILTER', payload: payload });
          }}
        />
        Completed
      </label>

      <label>
        <input
          type='radio'
          name='Completed'
          id='completed'
          value='not-checked'
          className='me-1'
          onClick={() => {
            const payload = { ...filters, checked: false };

            dispatch({ type: 'ADD_TO_FILTER', payload: payload });
          }}
        />
        Not Completed
      </label>
    </Container>
  );
}
