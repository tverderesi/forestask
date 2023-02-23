import { setLastLevel } from '../../context/AppFunctions';
import ProgressBar from './ProgressBar';

export default function ProfileHeader({ userData, gameLevels }) {
  const lastLevel = setLastLevel(gameLevels)

  return (
    <figure className='flex py-5 mx-auto justify-between w-[90%]'>
      <img
        className='rounded-full w-[100px] me-2'
        src='./media/profile_pic.jpg'
        alt='Sua Foto de Perfil'
      />
      <figcaption className='w-full'>
        <div
          className='flex flex-col ml-4 justify-around'
          style={{ height: '100px' }}
        >
          <span className='text-2xl font'>Hello, {userData.name}</span>

          <div className='flex flex-row justify-between items-center'>
            <div
              className='w-full text-center'
              style={{
                height: '25px',
                borderRadius: '13px',
                position: 'relative',
                backgroundColor: 'var(--soft-accent-bg-color)',
              }}
            >
              <div
                className='text-center font-semibold w-[50%]'
                style={{
                  height: '25px',
                  borderRadius: '13px',
                  lineHeight: '20px',
                  position: 'absolute',
                  top: '0',
                  left: 'auto',
                  right: 'auto',
                  zIndex: '1',
                  backgroundColor: 'var(--bold-accent-color-1)',
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
    </figure>
  );
}
