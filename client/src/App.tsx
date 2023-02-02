/** @format */

import './App.css';
import { AppProvider } from './context/AppContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeButtons from './components/layout/login/HomeButtons';
import Modal from './components/login/Modal';
import Register from './pages/Register';

function App() {
  return (
    <main className='App flex justify-center bg-image'>
      <AppProvider>
        <Router>
          <Routes>
            <Route element={<Home />} path='/'>
              <Route path='/' element={<HomeButtons />} />
              <Route path='/login' element={<Modal />} />
              <Route path='/register' element={<Register />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </main>
  );
}

export default App;
