import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import AccordionButton from './AccordionButton';
import AccordionDeadline from './AccordionDeadline';
import AccordionCompleted from './AccordionCompleted';

export default function AccordionItem({ name, categories, itemPalette, icon }) {
  const { dispatch, filters, dataTheme } = useContext(AppContext);

  return (
    <div className='my-1'>
      <section className='flex items-center p-3 rounded-md'>
        <span className='mr-1'>{icon}</span>
        <span className='font-semibold text-lg'>{name}</span>
      </section>
      <div
        className={`px-2 py-2 transition-all rounded-md ${
          name === 'Deadline' ? '' : 'ms-3'
        } `}
      >
        {name === 'Subjects' ? (
          <AccordionButton
            name={name}
            categories={categories}
            dispatch={dispatch}
            itemPalette={itemPalette}
            filters={filters}
            dataTheme={dataTheme}
          />
        ) : (
          ''
        )}
        {name === 'Activities' ? (
          <AccordionButton
            name={name}
            categories={categories}
            dispatch={dispatch}
            itemPalette={itemPalette}
            filters={filters}
            dataTheme={dataTheme}
          />
        ) : (
          ''
        )}
        {name === 'Deadline' ? <AccordionDeadline /> : ''}
        {name === 'Completed' ? (
          <AccordionCompleted
            filters={filters}
            dispatch={dispatch}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
