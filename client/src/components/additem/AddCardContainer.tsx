import { Container } from 'react-bootstrap';

function AddCardContainer({ children }) {
  return (
    <Container
      className='d-flex flex-column justify-content-around'
      style={{ width: '95%' }}
    >
      {children}
    </Container>
  );
}
