import DarkMode from '../buttons/DarkMode';
import Profile from '../buttons/Profile';
import Tasks from '../buttons/Tasks';
import TeacherMode from '../buttons/TeacherMode';

function MobileNavbar() {
  return (
    <nav
      className='d-flex flex-row justify-content-around'
      style={{
        position: 'absolute',
        bottom: '0',
        width: '100vw',
        backdropFilter: 'blur(20px)',
        backgroundColor: '#f9fafb80',
        left: '0',
        boxShadow: '5px 5px 20px #3a3a3a38',
      }}
    >
      <Profile />
      <DarkMode />
      <Tasks />
      <TeacherMode />
    </nav>
  );
}

export default MobileNavbar;
