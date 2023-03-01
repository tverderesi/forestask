/** @format */

import { Link } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import { BsTree } from 'react-icons/bs';
import TreeIconStatic from '../icons/TreeIconStatic';
import { motion } from 'framer-motion';

export default function OnboardUI() {
  return (
    <>
      <motion.div
        className='grid grid-cols-2 gap-10 mx-auto my-auto relative top-[-2.25rem]'
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
      >
        <motion.h2
          className='text-center font-semibold text-3xl col-span-2 mb-0'
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
        >
          Welcome!
        </motion.h2>
        <Link
          to='/login'
          className='btn btn-transparent shadow-lg font-semibold capitalize text-xl h-32 w-32 flex-col '
        >
          <span className='p-3 pb-5'>Log In</span>
        </Link>
        <Link
          to='/register'
          className='btn btn-transparent shadow-lg font-semibold capitalize text-xl h-32 w-32 col-auto flex-col'
        >
          <span className='p-3 pb-5'>Register</span>
        </Link>
      </motion.div>
    </>
  );
}
