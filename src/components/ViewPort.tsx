import CardList from './cardList/CardList';
import ProfileCard from './profile/ProfileCard';
import { useState, useEffect } from 'react';

export function ViewPort() {
  const style = {
    backgroundImage: `url("./media/4.png")`,
    height: '100vh',
    margin: '0',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 100%',
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowWidth > 700 ? (
    <div
      className='App d-flex'
      style={style}
    >
      <div
        className='d-flex justify-content-between m-auto align-items-start align-self-center'
        style={{ width: ' 95%' }}
      >
        <ProfileCard
          lvl='3'
          xp='300'
          name='Thomas'
        />

        <CardList />
      </div>
    </div>
  ) : (
    <div
      className='App d-flex'
      style={style}
    >
      <div
        className='d-flex justify-content-between m-auto align-items-start align-self-center'
        style={{ width: ' 95%' }}
      >
        <CardList />
      </div>
    </div>
  );
}
