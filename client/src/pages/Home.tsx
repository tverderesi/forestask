import { AnimatePresence, motion } from 'framer-motion';
import { MouseEvent, useRef, useState, useLayoutEffect } from 'react';
import Header from '../atoms/Header';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <AnimatePresence>
      {/* //TODO add motion design to this element */}
      <motion.div
        key='home'
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{ y: 100, opacity: 0 }}
        className='transition-all duration-200 backdrop-blur-xl bg-blend-overlay bg-[var(--card-bg-color)] rounded-2xl min-w-[70vh] min-h-[70vh] p-10 m-auto shadow-2xl top-8 flex flex-col justify-between'
      >
        <Header className='h-[10%]' />
        <Outlet key='a' />
      </motion.div>
    </AnimatePresence>
  );
}
