import { motion } from 'framer-motion';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Loading from './Loading';
import Login from '../pages/Login';

export default function Modal() {
  const { loading } = useContext(AppContext);

  return (
    <motion.div
      key='modal'
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='flex flex-col self-center justify-self-center items-center justify-center'
    >
      {loading ? <Loading /> : <Login />}
    </motion.div>
  );
}
