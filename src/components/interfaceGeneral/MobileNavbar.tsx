import DarkMode from '../buttons/DarkMode';
import Profile from '../buttons/Profile';
import Tasks from '../buttons/Tasks';
import TeacherMode from '../buttons/TeacherMode';

function MobileNavbar() {
  return (
    <nav
      className='d-flex flex-row justify-content-around'
      style={{ position: 'absolute', bottom: '0', width: '100vw' }}
    >
      <Profile />

      <DarkMode />

      <Tasks />

      <TeacherMode />
    </nav>
  );
}

export default MobileNavbar;
