import Card from 'react-bootstrap/Card';
import { Col, Collapse, Container, Row } from 'react-bootstrap';
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
import { handleDone } from '../../context/AppFunctions';

function ActivityCard({ item }: Types.ChildProps) {
  /**STATES
   * @param completed - holds the current card's completed state.
   * @param text - holds the current card's content.
   */
  const [completed, setCompleted] = useState(item.checked);
  const [open, setOpen] = useState(false);
  const { cardHeight, setCardHeight, userData, dispatch, gameLevels } =
    useContext(AppContext);

  //Functions
  /** Shows/Hides card content when clicked
   *
   *
   */
  const handleCardClick: Types.handleCardClick = () => {
    setOpen(!open);
  };

  const cardListRef = useRef(null) as MutableRefObject<any>;
  let cardRefHeight =
    cardListRef.current != null ? cardListRef.current.scrollHeight : 0;

  useEffect(() => {
    setCardHeight(cardRefHeight);

    //eslint-disable-next-line
  }, [cardRefHeight]);

  return (
    <Card
      className='container-md mt-3'
      style={Style.activityCard}
      ref={cardListRef}
      onClick={e => {
        e.preventDefault();
        handleCardClick();
      }}
      onMouseEnter={e => console.log(e.currentTarget.offsetHeight)}
    >
      <Container>
        <Card.Title
          className='text-center mt-3 mb-3'
          style={Style.cardTitle}
        >
          {item.title}
        </Card.Title>
        <Row fluid>
          <Col className='w-100 p-0 mb-0'>
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
