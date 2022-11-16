import { Figure } from 'react-bootstrap';
import { setLastLevel } from '../../context/AppFunctions';
import ProgressBar from './ProgressBar';

export default function ProfileHeader({ userData, gameLevels }) {
  const lastLevel = setLastLevel(gameLevels);

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
          <span className='fs-5'>Hello, {userData.name}</span>

          <div className='d-flex flex-row justify-content-between align-items-center'>
            <div
              className='progress w-100'
              style={{
                height: '25px',
                borderRadius: '13px',
                position: 'relative',
                backgroundColor: 'var(--soft-accent-bg-color)',
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
                {userData.level.toString() === lastLevel
                  ? 'Max level'
                  : `Level ${userData.level}`}
              </div>
              <ProgressBar
                userData={userData}
                gameLevels={gameLevels}
              />
            </div>
          </div>
        </div>
      </figcaption>
    </Figure>
  );
}
