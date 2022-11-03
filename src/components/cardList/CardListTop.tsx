import { Card, Row } from 'react-bootstrap';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { handlePageChange } from '../../context/AppFunctions';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
function CardListTop() {
  // Styling
  const { filters, page, maxPages, cardsPerPage, dispatch } =
    useContext(AppContext);
  function PageButtonStyle(page: any, direction: any) {
    return {
      backgroundColor:
        direction === 'right'
          ? page === 0
            ? 'hsla(0, 0%, 92%, 0.322)'
            : 'hsla(0, 0%, 65%, 0.322)'
          : page === maxPages
          ? 'hsla(0, 0%, 92%, 0.322)'
          : 'hsla(0, 0%, 65%, 0.322)',
      color:
        direction === 'right'
          ? page === 0
            ? 'hsla(0, 0%, 75%, 1)'
            : ' hsla(0, 0%, 0%, 1)'
          : page === maxPages
          ? 'hsla(0, 0%, 75%, 1)'
          : 'hsla(0, 0%, 0%, 1)',
      border: 'none',
      width: '2rem',
      height: '2rem',
      position: 'absolute',
      right: direction === 'right' ? 'calc(3% + 2rem)' : '2%',
      top: 'calc(50% - 1rem)',
    };
  }

  const CardListStyle = {
    backdropFilter: 'blur(20px)',
    backgroundColor: '#f9fafb80',
    borderRadius: '16px',
    border: 'none',
    boxShadow: '5px 5px 20px #3a3a3a38',
  };

  return (
    <Card
      style={CardListStyle}
      className={`container-md mt-0 ${page === maxPages ? `mb-3` : ''}`}
    >
      <Row className='p-3'>
        <span className='h3'>
          Tasks {page + 1}/{maxPages + 1}
        </span>
        <BsArrowLeftShort
          onClick={e => {
            e.preventDefault();
            handlePageChange(
              -1,
              filters,
              page,
              maxPages,
              cardsPerPage,
              dispatch
            );
          }}
          className='btn p-0 '
          style={PageButtonStyle(page, 'right') as any}
        />
        <BsArrowRightShort
          onClick={e => {
            e.preventDefault();
            handlePageChange(
              +1,
              filters,
              page,
              maxPages,
              cardsPerPage,
              dispatch
            );
          }}
          className='btn p-0'
          style={PageButtonStyle(page, 'left') as any}
        />
      </Row>
    </Card>
  );
}

export default CardListTop;
