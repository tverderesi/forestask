/** @format */

import './App.css';
import { AppProvider } from './context/AppContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeButtons from './components/layout/login/HomeButtons';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <main className='App flex justify-center bg-image'>
      <AppProvider>
        <Router>
          <Routes>
            <Route element={<Home />} path='/'>
              <Route path='/' element={<HomeButtons />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </main>
  );
}

export default App;
