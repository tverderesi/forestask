import { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import AccordionButtons from './AccordionButtons';
import AccordionDeadline from './AccordionDeadline';
import AccordionCompleted from './AccordionCompleted';

export default function CustomAccordionItem({
  name,
  categories,
  itemPalette,
  icon,
}) {
  const { dispatch, filters, dataTheme } = useContext(AppContext);
  return (
    <div
      tabIndex={0}
      className='collapse collapse-arrow'
    >
      <input type='checkbox' />
      <div className='collapse-title'>
        <span className='mr-1 inline-block'>{icon}</span>
        <span className='font-semibold text-base'>{name}</span>
      </div>
      <div className='collapse-content'>
        {name === 'Subjects' && (
          <AccordionButtons
            name={name}
            categories={categories}
            dispatch={dispatch}
            itemPalette={itemPalette}
            filters={filters}
            dataTheme={dataTheme}
          />
        )}
        {name === 'Activities' && (
          <AccordionButtons
            name={name}
            categories={categories}
            dispatch={dispatch}
            itemPalette={itemPalette}
            filters={filters}
            dataTheme={dataTheme}
          />
        )}
        {name === 'Deadline' ? <AccordionDeadline key={name} /> : ''}
        {name === 'Completed' && (
          <AccordionCompleted
            key={name}
            filters={filters}
            dispatch={dispatch}
          />
        )}
      </div>
    </div>
  );
}
