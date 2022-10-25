import Card from 'react-bootstrap/Card';
import { Figure } from 'react-bootstrap';
import Navbar from '../interfaceGeneral/DesktopProfileNavbar';
import Header from '../interfaceGeneral/Header';

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
        width: 'max(350px, 30vw) ',
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
            className='rounded-circle'
            src='./media/profile_pic.jpg'
            alt='Sua Foto de Perfil'
          />
          <figcaption>
            <h5>Hello, {name}</h5>
            <div>Level {lvl} </div>
            <div>{xp}xp to lvl up!</div>
            <div className='progress mt-3'>
              <div
                id='myBar'
                className='progress-bar progress-bar-striped progress-bar-animated'
              ></div>
            </div>
          </figcaption>
        </Figure>
      </Card.Header>
      <Card.Body className='p-0 m-0'></Card.Body>
      <Card.Footer style={{ border: 'none' }}>
        <Navbar />
      </Card.Footer>
    </Card>
  );
}
export default ProfileCard;
