import { Card, Row } from 'react-bootstrap';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

function CardListTop({ page, pageLimit, handleClick }) {
  // Styling
  function PageButtonStyle(page, direction) {
    return {
      backgroundColor:
        direction === 'right'
          ? page === 1
            ? 'hsla(0, 0%, 92%, 0.322)'
            : 'hsla(0, 0%, 65%, 0.322)'
          : page === pageLimit
          ? 'hsla(0, 0%, 92%, 0.322)'
          : 'hsla(0, 0%, 65%, 0.322)',
      color:
        direction === 'right'
          ? page === 1
            ? 'hsla(0, 0%, 75%, 0.322)'
            : ' hsla(0, 0%, 55%, 0.80)'
          : page === pageLimit
          ? 'hsla(0, 0%, 75%, 0.322)'
          : ' hsla(0, 0%, 55%, 0.80)',
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
    backgroundColor: '#f9fafbb9',
    borderRadius: '16px',
    border: 'none',
    boxShadow: '5px 5px 20px #3a3a3a38',
  };

  return (
    <Card
      style={CardListStyle}
      className='container-md mt-0'
    >
      <Row className='p-3'>
        <span className='h3'>
          Tasks {page}/{pageLimit}
        </span>
        <BsArrowLeftShort
          onClick={e => {
            e.preventDefault();
            handleClick(-1);
          }}
          className='btn p-0 '
          style={PageButtonStyle(page, 'right')}
        />
        <BsArrowRightShort
          onClick={e => {
            e.preventDefault();
            handleClick(+1);
          }}
          className='btn p-0'
          style={PageButtonStyle(page, 'left')}
        />
      </Row>
    </Card>
  );
}

export default CardListTop;