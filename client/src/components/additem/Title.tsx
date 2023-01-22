import { BsPlusCircle } from 'react-icons/bs';

export function Title(): JSX.Element {
  return (
    <div className='d-flex justify-content-center align-items-center mb-3 mt-3'>
      <BsPlusCircle
        size={19}
        style={{
          position: 'relative',
          bottom: '3.5px',
        }}
        className='me-2 h-100'
      />
      <h4
        className='text-center'
        style={{ fontWeight: '600' }}
      >
        Add New Card
      </h4>
    </div>
  );
}
