import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import Nav from 'react-bootstrap/Nav';
import DarkMode from './components/DarkMode';
import Profile from './components/Profile';
import Tasks from './components/Tasks';
import TeacherMode from './components/TeacherMode';
const navItems = [
  <>
    <Nav.Item>
      <DarkMode />
    </Nav.Item>
    <Nav.Item>
      <Profile />
    </Nav.Item>
    <Nav.Item>
      <Tasks />
    </Nav.Item>
    <Nav.Item>
      <TeacherMode />
    </Nav.Item>
  </>,
];
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
      className='App'
      style={style}
    >
      <Header />
      <CardList />
      <Navbar navItems={navItems} />
    </div>
  );
}

export default App;
