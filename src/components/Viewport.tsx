import CardList from './cardList/CardList';
import ProfileCard from './profile/ProfileCard';
import { useContext, useEffect, useState } from 'react';
import Modal from './login/Modal';
import AppContext from '../context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import MainView from './layout/buttons/MainView';
import MobileNavbar from './layout/elements/MobileNavbar';

export default function Viewport() {
  const { initSuccess, showForest, dispatch } = useContext(AppContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

  if (windowWidth > 825) {
    return (
      <AnimatePresence>
        {initSuccess === true && showForest === false && (
          <motion.div
            className='d-flex justify-content-between align-items-start align-self-center justify-self-center'
            style={{ width: '92.5vw' }}
            key='mainViewport'
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
              exit={{ x: 1000, transition: { duration: 1 } }}
              key='cardList'
            >
              <CardList />
            </motion.div>
          </motion.div>
        )}
        {initSuccess === false && <Modal />}
        {initSuccess === true && showForest === true && (
          <MainView dispatch={dispatch} />
        )}
      </AnimatePresence>
    );
  } else {
    return <></>;
  }
}
