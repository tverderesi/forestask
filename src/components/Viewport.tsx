import CardList from './cardList/CardList';
import ProfileCard from './profile/ProfileCard';
import { useContext, useEffect, useState } from 'react';
import Modal from './login/Modal';
import AppContext from '../context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import MainView from './layout/buttons/MainView';
import MobileNavbar from './layout/elements/MobileNavbar';

import ForestBackground from './forest/ForestBackground';

export default function Viewport() {
  const { initSuccess, showForest, dispatch, userData, dataTheme } =
    useContext(AppContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

  const levelArray: number[] = [];

  for (let index = 0; index < userData.level; index++) {
    levelArray.push(index);
  }

  if (windowWidth > 825) {
    return (
      <main
        data-theme={dataTheme}
        className='d-flex justify-content-center align-items-center'
        style={{
          backgroundImage: `url(./media/background/${
            dataTheme === 'light' ? '4' : '7'
          }.png`,
        }}
      >
        <AnimatePresence mode='popLayout'>
          <ForestBackground
            levelArray={levelArray}
            windowWidth={windowWidth}
            showForest={showForest}
          />

          {initSuccess === true && showForest === false && (
            <motion.div
              className='d-flex justify-content-between align-items-start'
              key='mainViewport'
              style={{
                width: windowWidth < 900 ? '95%' : '90%',
              }}
            >
              <motion.div
                initial={{ x: -1000 }}
                animate={{
                  x: 0,
                  transition: { duration: 0.7, ease: 'easeOut', delay: 0.5 },
                }}
                exit={{ x: -1000, transition: { duration: 1 } }}
                key='profileCard'
              >
                <ProfileCard />
              </motion.div>
              <motion.div
                exit={{ x: 1000, y: 0, transition: { duration: 1 } }}
                key='cardList'
              >
                <CardList />
              </motion.div>
            </motion.div>
          )}
          {initSuccess === false && <Modal />}
          {initSuccess === true && showForest === true && (
            <>
              <MainView dispatch={dispatch} />
            </>
          )}
        </AnimatePresence>
      </main>
    );
  } else {
    return (
      <>
        {initSuccess === false && <Modal />}
        {initSuccess === true && showForest === false && (
          <>
            <div style={{ position: 'relative', zIndex: '10' }}>
              <CardList />
              <MobileNavbar />
            </div>
          </>
        )}
        {initSuccess === true && showForest === true && (
          <>
            <MainView dispatch={dispatch} />
          </>
        )}
        {initSuccess === true && (
          <ForestBackground
            levelArray={levelArray}
            windowWidth={windowWidth}
            showForest={showForest}
          />
        )}
      </>
    );
  }
}
