import { motion } from 'framer-motion';

export default function GenericCard({ height, width, children }) {
  return (
    <motion.div
      style={{
        backgroundColor: 'var(--card-bg-color)',
        position: 'absolute',
        zIndex: '1',
        maxHeight: height,

        width: width,
        boxShadow: 'var(--card-shadow)',
        borderRadius: '1rem',
        backdropFilter: 'blur(100px)',
        overflowY: 'scroll',
        fontWeight: '600',
      }}
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      exit={{ y: 500 }}
      className='p-4 d-flex flex-column justify-content-between'
    >
      {children}
    </motion.div>
  );
}
