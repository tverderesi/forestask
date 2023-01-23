import { Figure } from 'react-bootstrap';
import { setLastLevel } from '../../context/AppFunctions';
import ProgressBar from './ProgressBar';

export default function ProfileHeader({ userData, gameLevels }) {
  const lastLevel = setLastLevel(gameLevels);

  return (
    <Figure
      className='flex mt-2 mx-auto justify-between'
      style={{ height: '100px', width: '90%' }}
    >
      <img
        className='rounded-full w-[20%]  me-2'
        src='./media/profile_pic.jpg'
        alt='Sua Foto de Perfil'
      />
      <figcaption className='w-100'>
        <div
          className='flex flex-col ml-4 justify-between'
          style={{ height: '100px' }}
        >
          <span className='fs-5'>Hello, {userData.name}</span>

          <div className='flex flex-row justify-between items-center'>
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
