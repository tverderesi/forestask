// 1. node "builtin" modules

// 2. "external" modules
import {
  MdInfoOutline,
  MdOutlineLightbulb,
  MdCalendarToday,
  MdSentimentVerySatisfied,
} from 'react-icons/md';
import { useContext } from 'react';
import { IconContext } from 'react-icons/lib';

import AppContext from '../../context/AppContext';

import * as Types from './ActivityCardTypes';

function CardTags({ subject, type, deadline, xp }: Types.CardTags) {
  const { subjectPalette, activityPalette, dataTheme } = useContext(AppContext);

  const locale = Intl.NumberFormat().resolvedOptions().locale;
  const classes = 'flex items-center self-center';

  const date = new Date(deadline).toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <IconContext.Provider value={{ size: '20px' }}>
      <div className='grid grid-cols-4 mx-auto mt-[4px] w-[70%] fw-semibold'>
        <div className={classes}>
          <MdCalendarToday className='me-2' />
          {date}
        </div>
        <span className={classes}>
          <MdSentimentVerySatisfied className='me-2' />
          {Number(xp)} XP
        </span>
        <div
          className={classes}
          style={{
            color: activityPalette[dataTheme][`${type}`],
          }}
        >
          <MdInfoOutline className='me-1' /> {type}
        </div>
        <div
          className={classes}
          style={{
            color: subjectPalette[dataTheme][`${subject}`],
          }}
        >
          <MdOutlineLightbulb className='me-1' />
          {subject}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default CardTags;
