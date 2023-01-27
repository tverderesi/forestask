import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';

import ActivityCard from '../activityCard/AcitivityCard';
import AppContext from '../../context/AppContext';

import CardListTop from './CardListTop';
import { NoCards } from '../activityCard/NoCards';

function CardList() {
  const { maxPages, cardsPerPage, windowWidth, cards, page, direction } =
    useContext(AppContext);

  const styleMobile: React.CSSProperties = {
    position: 'relative',
    top: '2vh',
    width: '100vw',
    height: 'calc(88.5vh - 2rem)',
  };
  const styleDesktop: React.CSSProperties = {
    position: 'relative',
    overflowY: 'scroll',
    height: 'calc(90vh + 4rem)',
    minWidth: `max(350px, ${
      windowWidth < 1100 ? 'calc(60vw + ( 220 / 1920 * 100vw ))' : '20vw'
    })`,
    overflowX: 'visible',
    paddingTop: '2rem',
    paddingBottom: '2rem',

    paddingRight: '25%',
  };

  return (
    <div
      //prettier-ignore
      className={`flex flex-col ${page === maxPages ? `content-start` : `content-between`}`}
      style={windowWidth < 825 ? styleMobile : styleDesktop}
    >
      <AnimatePresence mode='popLayout'>
        <motion.div
          style={{ position: 'sticky' }}
          initial={{ opacity: 0, x: direction * 200 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.25 },
          }}
          exit={{
            opacity: 0,
            x: -200 * direction,
            transition: { duration: 0.3 },
          }}
        >
          <CardListTop />
        </motion.div>

        {cards.length ? (
          cards.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 200 * direction }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    delay: 0.6 + 0.15 * (index % cardsPerPage),
                  },
                }}
                exit={{
                  opacity: 0,
                  x: -200 * direction,
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
          })
        ) : (
          <motion.div
            key='nocards'
            initial={{ opacity: 0, x: 200 * direction }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: 0.15,
              },
            }}
            exit={{
              opacity: 0,
              x: -200 * direction,
              transition: {
                duration: 0.3,
                delay: 0.15,
              },
            }}
          >
            <NoCards />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CardList;
