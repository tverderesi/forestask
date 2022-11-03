import ActivityCard from '../activityCard/AcitivityCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CardListTop from './CardListTop';
import { changePage } from '../../context/AppFunctions';

function CardList() {
  const { maxPages, cardsPerPage, windowWidth, cards, dispatch, page } =
    useContext(AppContext);

  const handlePageChange = async (index: number) => {
    const payload = await changePage(page, index, maxPages, cardsPerPage);
    dispatch({ type: 'CHANGE_PAGE', payload: payload });
  };

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
      className='d-flex flex-column justify-content-between'
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
          <CardListTop
            handleClick={handlePageChange}
            page={page + 1}
            pageLimit={maxPages + 1}
          />
        </motion.div>

        {cards.map(item => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -200 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.45 + 0.15 * (item.id % cardsPerPage),
                },
              }}
              exit={{
                opacity: 0,
                x: 200,
                transition: {
                  duration: 0.3,
                  delay: 0.15 * (item.id % cardsPerPage),
                },
              }}
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
