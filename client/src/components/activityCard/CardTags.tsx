/** @format */

import {
  MdInfoOutline,
  MdOutlineLightbulb,
  MdCalendarToday,
  MdSentimentVerySatisfied,
} from 'react-icons/md';
import { useContext } from 'react';
import { IconContext } from 'react-icons/lib';

import AppContext from '../../context/AppContext';
import paletteCreator from '../style/PaletteCreator';

function CardTags({
  subject,
  type,
  deadline,
  xp,
}: {
  subject: string;
  type: string;
  deadline: Date;
  xp: number;
}) {
  const locale = Intl.NumberFormat().resolvedOptions().locale;
  const classes = 'flex items-center self-center';
  const dataTheme = 'light';
  const activities = ['Test', 'Homework'];
  const subjects = ['Music', 'Math', 'Portuguese', 'English', 'Science'];
  const activityPalette = paletteCreator(activities, '#ff6f08', '#ff6f08');
  const subjectPalette = paletteCreator(subjects, '#c491ff', '#b56576');

  const date = new Date(deadline).toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <IconContext.Provider value={{ size: '20px' }}>
      <div className='grid grid-cols-2 lg:grid-cols-4  g-0 mt-2 ml-1 font-semibold'>
        <div className={classes}>
          <MdCalendarToday className='mr-1' />
          {date}
        </div>
        <div className={classes}>
          <MdSentimentVerySatisfied className='mr-1' />
          {Number(xp)} XP
        </div>
        <div
          className={classes}
          style={{
            color: activityPalette[dataTheme][`${type}`],
          }}
        >
          <MdInfoOutline className='mr-1' /> {type}
        </div>
        <div
          className={classes}
          style={{
            color: subjectPalette[dataTheme][`${subject}`],
          }}
        >
          <MdOutlineLightbulb className='mr-1' />
          {subject}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default CardTags;
