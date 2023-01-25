import { motion } from 'framer-motion';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Loading from './Loading';
import Login from './Login';

export default function Modal() {
  const { loading } = useContext(AppContext);

  return (
    <motion.div
      key='modal'
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        zIndex: '10',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backdropFilter: 'blur(50px)',
        backgroundColor: 'var(--modal-color)',
        backgroundImage: 'url(./media/noise.png)',
        backgroundBlendMode: 'overlay',
      }}
      className='flex flex-col self-center justify-self-center items-center justify-center'
    >
      {loading ? <Loading /> : <Login />}
    </motion.div>
  );
}
