import { Container, Row, Col } from 'react-bootstrap';

export default function AccordionButton({
  name,
  categories,
  itemPalette,
  filters,
  dispatch,
  dataTheme,
}) {
  const handleAccordionFilter = (e: React.MouseEvent<HTMLElement>) => {
    const { innerHTML, style } = e.currentTarget;

    filters[`${name.toLowerCase()}`] = innerHTML;
    filters[`${name.toLowerCase()}Color`] = style.backgroundColor;
    dispatch({
      type: 'ADD_TO_FILTER',
      payload: filters,
    });
  };

  return (
    <Container className='gx-0'>
      <Row>
        {categories.map(category => {
          return (
            <Col className='gx-3 col-auto mt-0 mb-3'>
              <button
                className='p-2 btn rounded-borders'
                style={{
                  backgroundColor: `${itemPalette[dataTheme][category]}`,
                  fontWeight: '600',
                  color: ' white',
                  fontSize: '.85rem',
                }}
                onClick={handleAccordionFilter}
              >
                {category}
              </button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
