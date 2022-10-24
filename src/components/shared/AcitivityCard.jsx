import Card from 'react-bootstrap/Card';
import CardTags from './CardTags';
import { Col, Container, Row } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs';
import CardListContext from '../../context/CardListContext';
import { useContext } from 'react';
import { useState } from 'react';

function ActivityCard({ item }) {
  const { handleCardClick, text } = useContext(CardListContext);

  const [completed, setCompleted] = useState(item.checked);

  let CheckButtonStyle = item => {
    return {
      verticalAlign: 'middle',
      alignSelf: 'center',
      position: 'absolute',
      top: '25%',
      left: '25%',
      opacity: item.checked ? '1' : '0',
    };
  };

  const addDone = async id => {
    item['checked'] = !item['checked'];
    await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
  };

  const handleDone = id => {
    addDone(id);
    setCompleted(!completed);
    return;
  };

  return (
    <Card
      style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: '#f9fafbb9',
        borderRadius: '16px',
        border: 'none',
        boxShadow: '5px 5px 20px #3a3a3a38',
      }}
      className='container-md mb-2'
    >
      <Container>
        <Card.Title
          className='text-center mt-3'
          style={{ fontSize: '1.25em', fontWeight: '600' }}
        >
          {item.title}
        </Card.Title>
        <Row>
          <Col
            className='col-9 p-0 mb-0'
            onClick={e => {
              e.preventDefault();
              handleCardClick(item);
            }}
          >
            <Card.Header
              className='ms-2 mt-0 me-0 ms-0 p-0'
              style={{ background: 'none', border: 'none' }}
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
                handleDone(item.id, item.checked);
              }}
              style={{
                height: '60px',
                width: '60px',
                padding: '0',
                border: 'none',
                borderRadius: '50%',
                position: 'absolute',
                right: '2.5%',
                top: 'calc(50% - 30px)',
                backgroundColor: 'hsla(0, 0%, 65%, 0.322)',
              }}
            >
              <BsCheckLg
                className='p-0'
                size='30'
                style={CheckButtonStyle(item)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default ActivityCard;
