import { motion } from 'framer-motion';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
export default function Tree({ number }) {
  const positionTop = (number % 4) * (number % 2 ? -1 : 1);
  const { dataTheme } = useContext(AppContext);

  return (
    <motion.div>
      <motion.img
        src={`./media/trees/${number % 5}.png`}
        key={`tree ${number}`}
        alt={`tree ${number}`}
        className={`relative top-[${positionTop}vh ${
          dataTheme === 'light' ? 'tree-day' : 'tree-night'
        } transition-all duration-500 z-0 `}
        initial={{ opacity: 0, y: 100, scale: 1.1 }}
        animate={{ opacity: 1, y: 0, scale: 2 }}
        exit={{ opacity: 0, y: 100 }}
      />
    </motion.div>
  );
}
