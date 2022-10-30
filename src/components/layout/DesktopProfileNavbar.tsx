import DarkMode from '../buttons/DarkMode';
import Tasks from '../buttons/Tasks';
import TeacherMode from '../buttons/TeacherMode';

function Navbar() {
  return (
    <div className='d-flex justify-content-around fw-bold'>
      <DarkMode />
      <Tasks />
      <TeacherMode />
    </div>
  );
}

export default Navbar;
