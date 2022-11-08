import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { init } from '../../context/AppFunctions';
import Header from '../layout/Header';

export default function Login() {
  const { cardHeight, dispatch, windowHeight } = useContext(AppContext);

  const loginStyle = {
    width: '50%',
    backgroundColor: 'forestgreen',
    border: 'none',
    borderRadius: '1rem',
    padding: '.5rem',
    fontWeight: '600',
    marginTop: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      e.currentTarget[0].value === 'admin' &&
      e.currentTarget[1].value === 'admin'
    ) {
      init(cardHeight, dispatch, windowHeight);
    }
  };
  return (
    <AnimatePresence>
      <motion.form
        className='d-flex flex-column'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        onSubmit={handleSubmit}
      >
        <Header />
        <input
          className='top mt-3'
          required
          type='text'
          placeholder='Username'
        />
        <input
          required
          type='password'
          placeholder='Password'
          className='bottom'
        ></input>
        <input
          type='submit'
          value='Log in'
          style={loginStyle}
        />
      </motion.form>
    </AnimatePresence>
  );
}
