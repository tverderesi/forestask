import { motion } from 'framer-motion';

export default function GenericCardModal({
  className,
  height,
  width,
  children,
}) {
  return (
    <motion.div
      className={``}
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      exit={{ y: 500 }}
    >
      {children}
    </motion.div>
  );
}
