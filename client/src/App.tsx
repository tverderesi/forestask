import './App.css';
import { AppProvider } from './context/AppContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import HomeButtons from './components/layout/login/HomeButtons';
import Modal from './components/login/Modal';
import Register from './components/pages/Register';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
function App() {
  const client = new ApolloClient({
    //@ts-ignore

    cache: new InMemoryCache(),
  });
  return (
    <main className='App flex justify-center bg-image'>
      <ApolloProvider client={client}>
        <AppProvider>
          <Router>
            <Routes>
              <Route
                element={<Home />}
                path='/'
              >
                <Route
                  path='/'
                  element={<HomeButtons />}
                />
                <Route
                  path='/login'
                  element={<Modal />}
                />
                <Route
                  path='/register'
                  element={<Register />}
                />
              </Route>
            </Routes>
          </Router>
        </AppProvider>
      </ApolloProvider>
    </main>
  );
}

export default App;
