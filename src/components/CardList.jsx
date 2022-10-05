import Card from './shared/Card';
import { motion, AnimatePresence } from 'framer-motion';
function CardList() {
  return (
    <AnimatePresence>
      <motion.div
        style={{ width: '80%', marginLeft: '10%', overflowY: 'scroll', height: '90vh' }}
        initial={{ opacity: 0, x: -200 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            staggerChildren: 0.5,
            ease: 'easeOut',
          },
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
    </AnimatePresence>
  );
}

export default CardList;
