import CardList from './cardList/CardList';
import ProfileCard from './profile/ProfileCard';
import { useContext, useEffect, useState } from 'react';
import MobileNavbar from './layout/MobileNavbar';

import Modal from './logina/Modal';
import AppContext from '../context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';

export function ViewPort() {
  const { loadSuccess } = useContext(AppContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

  return windowWidth > 825 ? (
    <AnimatePresence>
      {loadSuccess ? (
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
    <motion.div>
      <CardList />
      <MobileNavbar />
    </motion.div>
  );
}
