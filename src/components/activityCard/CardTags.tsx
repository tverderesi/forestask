import {
  MdInfoOutline,
  MdOutlineLightbulb,
  MdCalendarToday,
  MdSentimentVerySatisfied,
} from 'react-icons/md';
import { Col } from 'react-bootstrap';
import * as Types from './ActivityCardTypes';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';

function CardTags({ subject, type, deadline, xp }: Types.CardTags) {
  const { subjectPalette } = useContext(AppContext);
  // Styling
  const classes = 'd-flex align-items-center col-auto me-2 g-0';
  return (
    <div
      className='d-flex flex-wrap g-0'
      style={{ fontWeight: '600' }}
    >
      <Col className={classes}>
        <MdInfoOutline className='me-1' /> {type}
      </Col>
      <Col
        className={classes}
        style={{ color: subjectPalette[`${subject}`] }}
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
