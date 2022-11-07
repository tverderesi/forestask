import ActivityCard from '../activityCard/AcitivityCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CardListTop from './CardListTop';
import { Card } from 'react-bootstrap';
import { GiPartyPopper } from 'react-icons/gi';

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

        {cards.length ? (
          cards.map((item, index) => {
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
          })
        ) : (
          <motion.div
            key='nocards'
            initial={{ opacity: 0, x: -200 }}
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
              x: 200,
              transition: {
                duration: 0.3,
                delay: 0.15,
              },
            }}
          >
            <Card
              className='d-flex justify-content-center'
              style={{
                backdropFilter: 'blur(20px)',
                backgroundColor: '#f9fafb80',
                borderRadius: '16px',
                border: 'none',
                boxShadow: '5px 5px 20px #3a3a3a38',
                height: '12.5vh',
              }}
            >
              <Card.Body
                className='d-flex justify-content-center align-items-center mb-0'
                style={{ fontSize: '1.25em', fontWeight: '600' }}
              >
                <span className='h5 mb-0'>
                  No Activities found for these filters. Hooray!
                </span>
                <GiPartyPopper
                  className='ms-3'
                  size={70}
                  style={{
                    position: 'absolute',
                    right: '2%',
                    color: '#a6a6a6b3',
                  }}
                />
              </Card.Body>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CardList;
