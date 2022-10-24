import ActivityCard from './shared/AcitivityCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useRef, useState, CSSProperties } from 'react';
import CardListContext from '../context/CardListContext';
import CardListTop from './shared/CardListTop';
import CSS from 'csstype';
function CardList() {
  const { cards, handleClick, page, pageLimit, numCards } =
    useContext(CardListContext);

  //  Animations Variants

  const [height, setHeight] = useState(null);
  let CardListRef = useRef(null);

  return (
    <div
      className='d-flex flex-column'
      ref={CardListRef}
      style={{ width: '40%', height: '80vh' }}
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
            handleClick={handleClick}
            page={page + 1}
            pageLimit={pageLimit + 1}
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
                  delay: 0.45 + 0.15 * (item.id % numCards),
                },
              }}
              exit={{
                opacity: 0,
                x: 200,
                transition: {
                  duration: 0.3,
                  delay: 0.15 * (item.id % numCards),
                },
              }}
            >
              <ActivityCard
                item={item as any}
                id={item.id as any}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default CardList;
