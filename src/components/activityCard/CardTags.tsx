import {
  MdInfoOutline,
  MdOutlineLightbulb,
  MdCalendarToday,
  MdSentimentVerySatisfied,
} from 'react-icons/md';
import * as Types from './ActivityCardTypes';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';
import { IconContext } from 'react-icons/lib';

function CardTags({ subject, type, deadline, xp }: Types.CardTags) {
  const { subjectPalette, activityPalette } = useContext(AppContext);
  // Styling
  const classes =
    'd-flex align-items-center col-auto me-3 g-0 justify-self-center';
  const date = new Date(deadline).toLocaleDateString();

  return (
    <IconContext.Provider value={{ size: '20px' }}>
      <div
        className='d-flex justify-content-between flex-wrap g-0 w-100'
        style={{ fontWeight: 600 }}
      >
        <div
          className={classes}
          style={{ width: '22%' }}
        >
          <MdCalendarToday className='me-1' />
          {date}
        </div>
        <div
          className={classes}
          style={{ width: '15%' }}
        >
          <MdSentimentVerySatisfied className='me-1' />
          {Number(xp)} XP
        </div>
        <div
          className={classes}
          style={{ color: activityPalette[`${type}`], width: '22%' }}
        >
          <MdInfoOutline className='me-1' /> {type}
        </div>
        <div
          className={classes}
          style={{ color: subjectPalette[`${subject}`], width: '22%' }}
        >
          <MdOutlineLightbulb className='me-1' />
          {subject}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default CardTags;
