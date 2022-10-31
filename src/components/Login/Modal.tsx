import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Loading from './Loading';
import Login from './Login';

export default function Modal() {
  const { loginSuccess } = useContext(AppContext);
  return (
    <div
      style={{
        zIndex: '10',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backdropFilter: 'blur(50px)',
        backgroundColor: '#dfdfdfb3',
      }}
      className='d-flex flex-column align-self-center justify-self-center align-items-center justify-content-center'
    >
      {loginSuccess ? <Loading /> : <Login />}
    </div>
  );
}
