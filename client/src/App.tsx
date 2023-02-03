/** @format */

import './App.css';
import { AppProvider } from './context/AppContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeButtons from './components/layout/login/HomeButtons';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import AuthRoute from './util/AuthRoute';
import Viewport from './components/Viewport';

function App() {
  return (
    <main className='App flex justify-center bg-image'>
      <AuthProvider>
        <AppProvider>
          <Router>
            <Routes>
              <Route
                element={
                  <AuthRoute>
                    <Home />
                  </AuthRoute>
                }
                path='/'
              >
                <Route path='/' element={<HomeButtons />} />
                {/* prettier-ignore */}
                <Route path='/login' element={<AuthRoute><Login /></AuthRoute>} />
                {/* prettier-ignore */}
                <Route path='/register' element={<AuthRoute><Register /></AuthRoute>} />
              </Route>
              <Route path='/test' element={<Viewport />} />
            </Routes>
          </Router>
        </AppProvider>
      </AuthProvider>
    </main>
  );
}

export default App;
