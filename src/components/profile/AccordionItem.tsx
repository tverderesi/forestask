import { Accordion, Col, Container, Row } from 'react-bootstrap';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import { SyntheticEvent, useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function AccordionItem({
  name,
  categories,
  itemPalette,
  icon,
}: {
  name: string;
  categories: any;
  itemPalette: any;
  icon: any;
}) {
  const { dispatch, filters } = useContext(AppContext);
  return (
    <Accordion.Item
      eventKey={name}
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <AccordionHeader style={{ backgroundColor: 'transparent' }}>
        <Row className='mb-1 mt-1'>
          <Col className='d-flex align-items-center'>
            <span style={{ position: 'relative', top: '-.35rem' }}>{icon}</span>
            <span
              className=' h6'
              style={{ fontWeight: '600' }}
            >
              {name}
            </span>
          </Col>
        </Row>
      </AccordionHeader>
      <AccordionBody className='ms-3'>
        {name === 'Deadline' ? (
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
              }}
              className=' text-center'
            />
          </Container>
        ) : (
          <Container className='gx-0'>
            <Row>
              {categories.map(category => {
                return (
                  <Col className='gx-3 col-auto mt-0 mb-3'>
                    <button
                      className='p-2 btn rounded-borders'
                      style={{
                        backgroundColor: `${itemPalette[category]}`,
                        fontWeight: '600',
                        color: ' white',
                        fontSize: '.80rem',
                      }}
                      onClick={(e: SyntheticEvent<HTMLButtonElement>) => {
                        const { innerHTML, style } = e.currentTarget;

                        filters[`${name.toLowerCase()}`] = innerHTML;
                        filters[`${name.toLowerCase()}Color`] =
                          style.backgroundColor;
                        dispatch({
                          type: 'ADD_TO_FILTER',
                          payload: filters,
                        });
                      }}
                    >
                      {category}
                    </button>
                  </Col>
                );
              })}
            </Row>
          </Container>
        )}
      </AccordionBody>
    </Accordion.Item>
  );
}
