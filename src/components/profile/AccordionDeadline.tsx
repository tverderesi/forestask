import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import AppContext from '../../context/AppContext';

require('react-datepicker/dist/react-datepicker-cssmodules.css');

export default function AccordionDeadline() {
  const { dispatch, filters } = useContext(AppContext);
  const [focused, setFocused] = useState(false);
  return (
    <Container
      fluid
      className='d-flex align-items-center justify-content-around g-0 justify-self-center'
    >
      <div
        className='d-flex flex-column jusitfy-content-center align-items-center'
        style={{
          borderRadius: '10rem',

          fontWeight: '600',
          height: '2.25rem',

          paddingRight: '0px',
          width: '70%',
          outline: focused ? '3px solid #c491ff' : '',
          backgroundColor: '#e9ecef',
          fontSize: '.85rem',
          alignSelf: 'center',
        }}
      >
        <input
          type='date'
          className=' text-center'
          onChange={(e: any) => {
            const payload = { ...filters, deadline: e.target.value };
            dispatch({ type: 'ADD_TO_FILTER', payload: payload });
          }}
          style={{
            width: '80%',
            marginTop: 'auto',
            marginBottom: 'auto',
            backgroundColor: 'transparent',
            border: 'none',
            fontWeight: '600',
          }}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </div>
    </Container>
  );
}
