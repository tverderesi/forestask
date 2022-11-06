import { Figure } from 'react-bootstrap';

export default function ProfileHeader({ name, xp, lvl }) {
  return (
    <Figure
      className='d-flex mt-2 mx-auto justify-content-between'
      style={{ height: '100px', width: '90%' }}
    >
      <img
        className='rounded-circle me-2'
        src='./media/profile_pic.jpg'
        alt='Sua Foto de Perfil'
      />
      <figcaption className='w-100'>
        <div
          className='d-flex flex-column ms-4 justify-content-between'
          style={{ height: '100px' }}
        >
          <span className='fs-5'>Hello, {name}</span>

          <span className='fs-6'>{xp} xp to level up!</span>

          <div className='d-flex flex-row justify-content-between align-items-center'>
            <div
              className='progress w-100'
              style={{
                height: '25px',
                borderRadius: '13px',
                position: 'relative',
              }}
            >
              <div
                className='text-center fw-bolder w-100'
                style={{
                  lineHeight: '20px',
                  position: 'absolute',
                  top: '0',
                  left: 'auto',
                  right: 'auto',
                  zIndex: '1',
                }}
              >
                Level {lvl}
              </div>
              <div
                className='w-25 progress-bar'
                style={{ backgroundColor: '#c491ff' }}
              ></div>
            </div>
          </div>
        </div>
      </figcaption>
    </Figure>
  );
}
