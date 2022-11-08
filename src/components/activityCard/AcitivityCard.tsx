// 1. node "builtin" modules

// 2. "external" modules
import Card from 'react-bootstrap/Card';
import { Col, Collapse, Container, Row } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs';
import { useState, useContext } from 'react';

// 3. "internal" modules

// 4. modules from a "parent" directory
import AppContext from '../../context/AppContext';
import { handleDone } from '../../context/AppFunctions';

// 5. "sibling" modules from the same or a sibling's directory
import CardTags from './CardTags';
import * as Style from './ActivityCardStyle';

// 6. "index" of the current directory

// 7. "object"-imports (only available in TypeScript)

// 8. "type" imports (only available in Flow and TypeScript)
import * as Types from './ActivityCardTypes';

function ActivityCard({ item }: Types.ChildProps) {
  //State Creation
  const [completed, setCompleted] = useState(item.checked);
  const [open, setOpen] = useState(false);
  const { userData, dispatch, gameLevels } = useContext(AppContext);

  //Handling Collpasible Cards
  const handleCardClick: Types.handleCardClick = () => {
    setOpen(!open);
  };

  return (
    <Card
      className='container-md mt-3'
      style={Style.activityCard}
    >
      <Container>
        <Card.Title
          className='text-center mt-3 mb-3'
          style={Style.cardTitle}
          onClick={e => {
            e.preventDefault();
            handleCardClick();
          }}
        >
          {item.title}
        </Card.Title>
        <Row fluid>
          <Col
            className='w-100 p-0 mb-0'
            onClick={e => {
              e.preventDefault();
              handleCardClick();
            }}
          >
            <Card.Header
              className='ms-2 mt-0 me-0 ms-0 p-0'
              style={Style.cardHeader}
            >
              <CardTags
                subject={item.subject}
                type={item.type}
                xp={item.xp}
                deadline={item.deadline}
              />
            </Card.Header>

            <Card.Body className='p-0 ms-2 mt-1 mb-3'>
              <Collapse in={open}>
                <p>{item.content}</p>
              </Collapse>
            </Card.Body>
          </Col>

          <Col className='col-2 p-0'>
            <div
              onClick={e => {
                e.preventDefault();
                handleDone(
                  item.id,
                  item,
                  userData,
                  completed,
                  setCompleted,
                  dispatch,
                  gameLevels
                );
              }}
              style={Style.navButton}
            >
              <BsCheckLg
                className='p-0'
                size='30'
                style={Style.CheckButton(item) as React.CSSProperties}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default ActivityCard;
