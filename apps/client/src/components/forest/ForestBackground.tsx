import Tree from './Tree';
import { motion } from 'framer-motion';

export default function ForestBackground({ levelArray = [0] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key='Forest'
      className='flex items-center absolute bottom-0 overflow-hidden z-0 w-screen h-[50vh] md:justify-around '
    >
      {levelArray.map(i => {
        return <Tree number={i + 1} />;
      })}
    </motion.div>
  );
}
