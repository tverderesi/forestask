import { motion } from 'framer-motion';
import { BsCardChecklist } from 'react-icons/bs';

function MainView({ dispatch }) {
  return (
    <motion.button
      className='d-flex align-items-center justify-content-center'
      style={{
        borderRadius: '2rem',
        height: '4rem',
        backdropFilter: 'blur(20px)',
        backgroundColor: '#f9fafb6b',
        border: 'none',
        boxShadow: '5px 5px 20px #3a3a3a38',
        width: '16rem',
        fontWeight: '600',
        fontSize: '1.3rem',
        color: '#000000be',
        position: 'absolute',
        top: '10%',
      }}
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: -300, transition: { duration: 0.5 } }}
      onClick={e => {
        e.preventDefault();
        dispatch({ type: 'DIRECTION', payload: 1 });
        dispatch({ type: 'TOGGLE_FOREST', payload: false });
      }}
    >
      <BsCardChecklist
        className='me-3'
        size={30}
        style={{ position: 'relative', top: '.10rem' }}
      />
      <span> Back to Cards</span>
    </motion.button>
  );
}

export default MainView;
