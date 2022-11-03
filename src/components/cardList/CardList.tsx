import ActivityCard from '../activityCard/AcitivityCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CardListTop from './CardListTop';

function CardList() {
  const { maxPages, cardsPerPage, windowWidth, cards, page } =
    useContext(AppContext);

  const styleMobile = {
    width: '95vw',
    height: '80vh',
  };
  const styleDesktop = {
    height: '85vh',
    width: 'max(350px, 40vw)',
  };

  return (
    <div
      className={`d-flex flex-column ${
        page === maxPages ? `justify-content-start` : `justify-content-between`
      }`}
      style={windowWidth < 825 ? styleMobile : styleDesktop}
    >
      <AnimatePresence mode='popLayout'>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          exit={{
            opacity: 0,
            x: 200,
            transition: { duration: 0.3 },
          }}
        >
          <CardListTop />
        </motion.div>

        {cards.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -200 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.45 + 0.15 * (index % cardsPerPage),
                },
              }}
              exit={{
                opacity: 0,
                x: 200,
                transition: {
                  duration: 0.3,
                  delay: 0.15 * (index % cardsPerPage),
                },
              }}
              className={page === maxPages ? `mb-3` : ''}
            >
              <ActivityCard item={item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default CardList;
