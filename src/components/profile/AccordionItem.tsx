import { Accordion, Col, Row } from 'react-bootstrap';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import AccordionButton from './AccordionButton';
import AccordionDeadline from './AccordionDeadline';
import { AccordionType } from '../../types/Types';

export default function AccordionItem({
  name,
  categories,
  itemPalette,
  icon,
}: AccordionType) {
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
            <span className=' h6'>{name}</span>
          </Col>
        </Row>
      </AccordionHeader>
      <AccordionBody className='ms-3'>
        {name === 'Deadline' ? (
          <AccordionDeadline />
        ) : (
          <AccordionButton
            name={name}
            categories={categories}
            dispatch={dispatch}
            itemPalette={itemPalette}
            filters={filters}
          />
        )}
      </AccordionBody>
    </Accordion.Item>
  );
}
