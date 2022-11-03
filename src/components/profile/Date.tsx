import { Accordion, Col, Container, Row } from 'react-bootstrap';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

export default function Date({ name, icon }: { name: string; icon: any }) {
  return (
    <Accordion.Item
      eventKey={name}
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <AccordionHeader style={{ backgroundColor: 'transparent' }}>
        <Row>
          <Col className='d-flex align-items-center'>
            <span style={{ position: 'relative', top: '-.25rem' }}>{icon}</span>
            <span
              className='p-2 h6'
              style={{ fontWeight: '600' }}
            >
              {name}
            </span>
          </Col>
        </Row>
      </AccordionHeader>
      <AccordionBody>
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
              backgroundColor: '#ffffffb0',
            }}
            className=' text-center'
          />
        </Container>
      </AccordionBody>
    </Accordion.Item>
  );
}
