import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import AppContext from '../../context/AppContext';

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
          borderRadius: '1.12rem',
          fontWeight: '600',
          height: '2.25rem',
          paddingRight: '0px',
          width: '70%',
          outline: focused ? '3px solid var(--bold-accent-color-1)' : '',
          backgroundColor: 'var(--soft-button-bg-color)',
          fontSize: '.85rem',
          alignSelf: 'center',
        }}
      >
        <input
          type='date'
          className=' text-center'
          onChange={(e: any) => {
            const payload = {
              ...filters,
              deadline: new Date(e.target.value).toISOString(),
            };
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
