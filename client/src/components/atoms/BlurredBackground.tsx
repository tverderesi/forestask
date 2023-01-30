import { motion } from 'framer-motion';

export default function BlurredBackground() {
  return (
    <motion.div
      className='backdrop-blur-3xl'
      key='blur-bg'
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        backdropFilter: 'blur(100px)',
        zIndex: 1,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    ></motion.div>
  );
}
