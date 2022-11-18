import { motion } from 'framer-motion';
export default function Tree({ number }) {
  const positionTop = (number % 4) * (number % 2 ? -1 : 1);

  return (
    <motion.div>
      <motion.img
        src={`./media/trees/${number % 5}.png`}
        key={`tree ${number}`}
        alt={`tree ${number}`}
        style={{
          position: 'relative',
          top: `${positionTop}vh`,
          filter: 'brightness(1.3) hue-rotate(-15deg)',
          scale: '2',
          zIndex: '0',
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      />
    </motion.div>
  );
}
