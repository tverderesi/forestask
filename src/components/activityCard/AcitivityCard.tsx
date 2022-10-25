import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';
import CardTags from './CardTags';
import * as Style from './ActivityCardStyle';
import * as Types from './ActivityCardTypes';

function ActivityCard({ item }: Types.ChildProps) {
  //States
  const [completed, setCompleted] = useState(item.checked);
  const [text, setText] = useState('');

  //Functions
  const handleCardClick: Types.handleCardClick = content => {
    text ? setText('') : setText(content);
  };

  const addDone: Types.addDone = async id => {
    item['checked'] = !item['checked'];
    await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
  };

  const handleDone: Types.handleDone = id => {
    addDone(id);
    setCompleted(!completed);
  };

  return (
    <Card
      className='container-md mt-2'
      style={Style.activityCard}
    >
      <Container>
        <Card.Title
          className='text-center mt-3'
          style={Style.cardTitle}
        >
          {item.title}
        </Card.Title>
        <Row>
          <Col
            className='col-9 p-0 mb-0'
            onClick={e => {
              e.preventDefault();
              handleCardClick(item.content);
            }}
          >
            <Card.Header
              className='ms-2 mt-0 me-0 ms-0 p-0'
              style={Style.cardHeader}
            >
              <CardTags
                subject={item.subject}
                type={item.type}
              />
            </Card.Header>

            <Card.Body className='p-0 ms-2 mt-1'>
              <p className='text-justify'>{text}</p>
            </Card.Body>
          </Col>

          <Col className='p-0'>
            <div
              onClick={e => {
                e.preventDefault();
                handleDone(item.id);
              }}
              style={Style.navButton}
            >
              <BsCheckLg
                className='p-0'
                size='30'
                style={Style.CheckButton(item) as any}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default ActivityCard;
