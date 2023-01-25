import { useContext } from 'react';
import AppContext from '../../../context/AppContext';
import AccordionButtons from './AccordionButtons';
import AccordionDeadline from './AccordionDeadline';
import AccordionCompleted from './AccordionCompleted';
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
} from 'react-accessible-accordion';

export default function CustomAccordionItem({
  name,
  categories,
  itemPalette,
  icon,
}) {
  const { dispatch, filters, dataTheme } = useContext(AppContext);
  return (
    <AccordionItem className='my-1'>
      <AccordionItemHeading>
        <AccordionItemButton className='flex items-center p-3 '>
          <span className='mr-1 inline-block'>{icon}</span>
          <span className='font-semibold text-lg'>{name}</span>
        </AccordionItemButton>
      </AccordionItemHeading>
      {/* <div
        className={`px-2 py-2 rounded-md ${name === 'Deadline' ? '' : 'ms-3'} `}
      > */}
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
      {/* </div> */}
    </AccordionItem>
  );
}
