import { useCallback } from 'react';

export default function AccordionButtons({
  name,
  categories,
  itemPalette,
  filters,
  dispatch,
  dataTheme,
}) {
  const handleAccordionFilter = useCallback(
    e => {
      const { innerHTML, style } = e.currentTarget;

      filters[`${name.toLowerCase()}`] = innerHTML;
      filters[`${name.toLowerCase()}Color`] = style.backgroundColor;
      dispatch({
        type: 'ADD_TO_FILTER',
        payload: filters,
      });
    },
    [dispatch, filters, name]
  );

  return (
    <div className='grid grid-cols-3 gap-3 px-6'>
      {categories.map(category => {
        return (
          <button
            className='p-2 rounded-full font-semibold  text-white  text-sm'
            style={{
              backgroundColor: `${itemPalette[dataTheme][category]}`,
            }}
            onClick={handleAccordionFilter}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
