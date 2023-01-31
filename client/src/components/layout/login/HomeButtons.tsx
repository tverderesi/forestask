import { Link } from 'react-router-dom';
import { AiOutlineLogin } from 'react-icons/ai';
import { BsTree } from 'react-icons/bs';
import TreeIconStatic from '../icons/TreeIconStatic';
import { motion } from 'framer-motion';

export default function HomeButtons() {
  return (
    <>
      <motion.h2
        className='text-center font-semibold text-3xl mb-10 col-span-2 h-auto'
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
      >
        Welcome!
      </motion.h2>
      <motion.div
        className='grid grid-cols-2 w-full gap-14 mx-14'
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
      >
        <Link
          to='/login'
          className='btn btn-square btn-transparent shadow-lg font-semibold capitalize text-xl h-full w-full col-auto flex-col'
        >
          <div className='w-auto h-auto relative p-3'>
            <AiOutlineLogin
              size={30}
              className='absolute drop-shadow-xl bottom-0 right-0'
            />
            <TreeIconStatic />
          </div>

          <span className='p-3 pb-5'>Log In</span>
        </Link>
        <Link
          to='/register'
          className='btn btn-squarebtn-transparent shadow-lg font-semibold capitalize text-xl h-full w-full col-auto flex-col basis-1/2'
        >
          <div className='w-auto h-auto relative p-3'>
            <AiOutlineLogin
              size={30}
              className='absolute drop-shadow-xl bottom-0 right-0'
            />
            <TreeIconStatic />
          </div>

          <span className='p-3 pb-5'>Register</span>
        </Link>
      </motion.div>
    </>
  );
}
