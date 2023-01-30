import CardList from './cardList/CardList';
import ProfileCard from './profile/ProfileCard';
import { useContext, useEffect, useState } from 'react';
import Modal from './login/Modal';
import AppContext from '../context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import MainView from './layout/buttons/MainView';
import MobileNavbar from './layout/elements/MobileNavbar';
import ForestBackground from './forest/ForestBackground';

import ManageCards from './layout/buttons/ManageCards';
import AddItem from './AddItem/addItem';

export default function Viewport() {
  const { initSuccess, showForest, dispatch, userData, dataTheme, addCard } =
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
        className='flex justify-center items-center'
      >
        <AnimatePresence mode='popLayout'>
          <ForestBackground
            key='forest-background'
            levelArray={levelArray}
            windowWidth={windowWidth}
            showForest={showForest}
          />

          {initSuccess === true && showForest === false && (
            <motion.div
              className='flex justify-between items-start w-full'
              key='mainViewport'
            >
              {addCard && <AddItem />}
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
          {!initSuccess && <Modal />}
          {initSuccess && showForest && !addCard && (
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
        {!initSuccess && <Modal />}
        {initSuccess && !showForest && (
          <>
            <div style={{ position: 'relative', zIndex: '10' }}>
              <CardList />
              <MobileNavbar />
            </div>
          </>
        )}
        {initSuccess && showForest && (
          <>
            <MainView dispatch={dispatch} />
          </>
        )}
        {initSuccess && (
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
