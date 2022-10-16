import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import ProfileCard from './components/ProfileCard';
import { CardListProvider } from './context/CardListContext';

function App() {
  const style = {
    backgroundImage: `url("./media/4.png")`,
    height: '100vh',
    margin: '0',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 100%',
  };
  return (
    <div
      className='App d-flex'
      style={style}
    >
      <div
        className='d-flex justify-content-between m-auto align-items-start align-self-center'
        style={{ width: ' 90%' }}
      >
        <ProfileCard
          lvl='3'
          xp='300'
          name='Thomas'
        />
        <CardListProvider>
          <CardList />
        </CardListProvider>
      </div>
    </div>
  );
}

export default App;
