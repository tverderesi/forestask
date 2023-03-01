/** @format */

import './App.css';
import { AppProvider } from './context/AppContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboard from './pages/Onboard';
import OnboardUI from './components/layout/login/OnboardUI';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import AuthRoute from './util/AuthRoute';
import StudentHome from './pages/StudentHome';
import AdminHome from './pages/AdminHome';

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
                    <Onboard />
                  </AuthRoute>
                }
                path='/'
              >
                <Route path='/' element={<OnboardUI />} />
                {/* prettier-ignore */}
                <Route path='/login' element={<AuthRoute><Login /></AuthRoute>} />
                {/* prettier-ignore */}
                <Route path='/register' element={<AuthRoute><Register /></AuthRoute>} />
              </Route>
              <Route path = '/home' element={<AdminHome/>} />
              <Route path='/test' element={<StudentHome />} />
            </Routes>
          </Router>
        </AppProvider>
      </AuthProvider>
    </main>
  );
}

export default App;
