import {
  MdInfoOutline,
  MdOutlineLightbulb,
  MdCalendarToday,
  MdSentimentVerySatisfied,
} from 'react-icons/md';
import { Col } from 'react-bootstrap';
import { useContext } from 'react';
import CardListContext from '../../context/CardListContext';

function CardTags({ subject, type, deadline, xp }) {
  const { PalleteCreator } = useContext(CardListContext);

  // Styling
  const Subjects = ['Math', 'Music', 'Science', 'Portuguese', 'English'];
  const BaseColor = '#8f3fc4';
  const classes = 'd-flex align-items-center col-auto me-2';
  let Pallete = PalleteCreator(Subjects, BaseColor);

  return (
    <div className='d-flex fw-bold flex-wrap p-0'>
      <Col className={classes}>
        <MdInfoOutline className='react-icons me-1' /> {type}
      </Col>
      <Col
        className={classes}
        style={{ color: Pallete['Subject'][`${subject}`] }}
      >
        <MdOutlineLightbulb className='me-1' />
        {subject}
      </Col>
      <Col className={classes}>
        <MdCalendarToday className='me-1' />
        deadline
      </Col>
      <Col className={classes}>
        <MdSentimentVerySatisfied className='me-1' />0 XP
      </Col>
    </div>
  );
}

export default CardTags;
