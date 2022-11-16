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

// 3. "internal" modules

// 4. modules from a "parent" directory
import AppContext from '../../context/AppContext';
// 5. "sibling" modules from the same or a sibling's directory

// 6. "index" of the current directory

// 7. "object"-imports (only available in TypeScript)

// 8. "type" imports (only available in Flow and TypeScript)
import * as Types from './ActivityCardTypes';

function CardTags({ subject, type, deadline, xp }: Types.CardTags) {
  const { subjectPalette, activityPalette } = useContext(AppContext);
  // Styling
  const locale = Intl.NumberFormat().resolvedOptions().locale;
  const classes =
    'd-flex align-items-center me-1 col-auto g-0 justify-self-center';

  const date = new Date(deadline).toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <IconContext.Provider value={{ size: '20px' }}>
      <div
        className='d-flex flex-wrap g-0 w-100'
        style={{ fontWeight: 600, fontSize: '.9rem' }}
      >
        <div
          className={classes}
          style={{ width: '6.75rem' }}
        >
          <MdCalendarToday className='me-1' />
          {date}
        </div>
        <div
          className={classes}
          style={{ width: '4.5rem' }}
        >
          <MdSentimentVerySatisfied className='me-1' />
          {Number(xp)} XP
        </div>
        <div
          className='d-flex g-0 mt-1'
          style={{ width: '13.5rem' }}
        >
          <div
            className={classes}
            style={{ color: activityPalette[`${type}`], width: '50%' }}
          >
            <MdInfoOutline className='me-1' /> {type}
          </div>
          <div
            className={classes}
            style={{ color: subjectPalette[`${subject}`], width: '50%' }}
          >
            <MdOutlineLightbulb className='me-1' />
            {subject}
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default CardTags;
