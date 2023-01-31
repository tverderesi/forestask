import CardList from './cardList/CardList';
import ProfileCard from './profile/ProfileCard';
import { useContext, useEffect, useState } from 'react';
import Modal from './login/Modal';
import AppContext from '../context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import MainView from './layout/buttons/MainView';
import ForestBackground from './forest/ForestBackground';
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

  return (
    <main
      data-theme={dataTheme}
      className='flex justify-center items-center'
    ></main>
  );
}
