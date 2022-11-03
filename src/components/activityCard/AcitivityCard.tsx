import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs';

import CardTags from './CardTags';
import * as Style from './ActivityCardStyle';
import * as Types from './ActivityCardTypes';
import {
  useRef,
  MutableRefObject,
  useEffect,
  useState,
  useContext,
} from 'react';
import AppContext from '../../context/AppContext';

function ActivityCard({ item }: Types.ChildProps) {
  /**STATES
   * @param completed - holds the current card's completed state.
   * @param text - holds the current card's content.
   */
  const [completed, setCompleted] = useState(item.checked);
  const [text, setText] = useState('');
  const { cardHeight, setCardHeight } = useContext(AppContext);

  //Functions
  /** Shows/Hides card content when clicked
   *
   *  @param content - the card content stored within the text state.
   */
  const handleCardClick: Types.handleCardClick = content => {
    text ? setText('') : setText(content);
  };

  /** Puts the current state of the task in the database.
   *
   * @param id - Card id.
   * @eventProperty
   */
  const addDone: Types.addDone = async id => {
    item['checked'] = !item['checked'];
    await fetch(`http://localhost:5000/cards/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
  };

  /** handles what happens when the user clicks on the checkbox item, by calling the 'addDone'
   * function and flipping the 'completed' state.
   *
   * @params id - Card id.
   * @eventProperty
   */
  const handleDone: Types.handleDone = id => {
    addDone(id);
    setCompleted(!completed);
  };

  const cardListRef = useRef(null) as MutableRefObject<any>;
  let cardRefHeight =
    cardListRef.current != null ? cardListRef.current.scrollHeight : 0;
  useEffect(() => {
    console.log(`cardHeight: ${cardHeight}`);
    setCardHeight(cardRefHeight);

    //eslint-disable-next-line
  }, [cardRefHeight]);

  return (
    <Card
      className='container-md mt-1  '
      style={Style.activityCard}
      ref={cardListRef}
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
