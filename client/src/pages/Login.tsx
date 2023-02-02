/** @format */

import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { init } from '../context/AppFunctions';
import Header from '../atoms/Header';
import { useForm } from 'react-hook-form';

export default function Login() {
  const handleSubmit = async (e: React.SyntheticEvent) => {};
  return (
    <motion.form
      key='loginform'
      className='flex flex-col items-center content-center justify-self-center mx-auto my-auto'
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      onSubmit={handleSubmit}
    ></motion.form>
  );
}
