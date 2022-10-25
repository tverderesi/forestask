import {
  MdInfoOutline,
  MdOutlineLightbulb,
  MdCalendarToday,
  MdSentimentVerySatisfied,
} from 'react-icons/md';
import { Col } from 'react-bootstrap';
import * as Types from './ActivityCardTypes';
import palleteCreator from '../style/PalleteCreator';
function CardTags({ subject, type, deadline, xp }: Types.CardTags) {
  // Styling
  const Subjects = ['Math', 'Music', 'Science', 'Portuguese', 'English'];
  const BaseColor = '#8f3fc4';
  const classes = 'd-flex align-items-center col-auto me-2 g-0';
  let Pallete = palleteCreator(Subjects, BaseColor);

  return (
    <div className='d-flex fw-bold flex-wrap g-0'>
      <Col className={classes}>
        <MdInfoOutline className='me-1' /> {type}
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
