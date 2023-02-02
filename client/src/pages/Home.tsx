/** @format */

import { AnimatePresence, motion } from 'framer-motion';
import { MouseEvent, useRef, useState, useLayoutEffect } from 'react';
import Header from '../atoms/Header';
import { Outlet } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REGISTER_USER_MUTATION } from '../util/GraphQL';
export default function Home() {
  const [addUser, { loading }] = useMutation(REGISTER_USER_MUTATION, {
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.errors);
    },
  });
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
        className='transition-all duration-200 backdrop-blur-xl bg-blend-overlay 
        bg-card md:rounded-2xl w-screen h-screen md:w-auto md:h-auto md:min-w-[70vh] md:min-h-[70vh] p-5 md:p-10 m-auto shadow top-8 
        flex flex-col justify-between overflow-y-scroll'
      >
        <Header className='h-[10%]' />
        <Outlet key='outlet' />
      </motion.div>
    </AnimatePresence>
  );
}
