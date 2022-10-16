import React from 'react';
import DarkMode from './../components/DarkMode';
import Tasks from './../components/Tasks';
import TeacherMode from './../components/TeacherMode';
import Card from 'react-bootstrap/Card';
import '../App.css';
import { Figure } from 'react-bootstrap';
import Navbar from './Navbar';
import Header from './Header';
const navItems = [<DarkMode />, <Tasks />, <TeacherMode />];

function ProfileCard({ lvl, xp, name }) {
  return (
    <Card
      style={{
        backdropFilter: 'blur(20px)',
        backgroundColor: '#f9fafbb9',
        borderRadius: '16px',
        border: 'none',
        height: '85vh',
        boxShadow: '5px 5px 20px #3a3a3a38',
        width: 'max(27.5%, 300px)',
        margin: '0',
      }}
    >
      <Card.Header
        style={{ border: 'none', borderRadius: '16px 16px 0 0' }}
        className='m-0'
      >
        <Header />
        <Figure className='d-flex mt-2'>
          <img
            id='information-card-image'
            class='rounded-circle'
            src='./media/profile_pic.jpg'
            alt='Sua Foto de Perfil'
          />
          <figcaption>
            <h5>Hello, {name}</h5>
            <div>Level {lvl} </div>
            <div>{xp}xp to lvl up!</div>
            <div class='progress mt-3'>
              <div
                id='myBar'
                class='progress-bar progress-bar-striped progress-bar-animated'
                role='progressbar'
                aria-valuenow='75'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </figcaption>
        </Figure>
      </Card.Header>
      <Card.Body className='p-0 m-0'></Card.Body>
      <Card.Footer style={{ border: 'none' }}>
        <Navbar navItems={navItems} />
      </Card.Footer>
    </Card>
  );
}
export default ProfileCard;
