import CardList from './cardList/CardList';
import ProfileCard from './profile/ProfileCard';
import { useEffect, useState } from 'react';
import MobileNavbar from './layout/MobileNavbar';
import Loading from './layout/Login';

export function ViewPort() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

  return windowWidth > 825 ? (
    <>
      <Loading />
      <div
        className='d-flex justify-content-between align-items-start align-self-center justify-self-center'
        style={{ width: '92.5vw' }}
      >
        <ProfileCard
          lvl='3'
          xp='300'
          name='Thomas'
        />
        <CardList />
      </div>
    </>
  ) : (
    <>
      <Loading />
      <div className=''>
        <CardList />
        <MobileNavbar />
      </div>
    </>
  );
}
