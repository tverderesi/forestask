import CardList from './cardList/CardList';
import ProfileCard from './profile/ProfileCard';
import { useContext, useEffect, useState } from 'react';
import MobileNavbar from './layout/MobileNavbar';

import Modal from './login/Modal';
import AppContext from '../context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';

export default function Viewport() {
  const { initSuccess } = useContext(AppContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

  return windowWidth > 825 ? (
    <AnimatePresence>
      {initSuccess ? (
        <motion.div
          className='d-flex justify-content-between align-items-start align-self-center justify-self-center'
          style={{ width: '92.5vw' }}
          key='mainViewport'
        >
          <ProfileCard />
          <CardList />
        </motion.div>
      ) : (
        <Modal />
      )}
    </AnimatePresence>
  ) : (
    <AnimatePresence>
      {initSuccess ? (
        <motion.div key='mainViewport'>
          <CardList />
          <MobileNavbar />
        </motion.div>
      ) : (
        <Modal />
      )}
    </AnimatePresence>
  );
}
