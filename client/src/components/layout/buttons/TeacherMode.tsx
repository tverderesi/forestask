import { FaChalkboardTeacher } from 'react-icons/fa';

export default function TeacherMode() {
  return (
    <button
      className='btn btn-transparent'
      key='teacherMode'
    >
      <div className='mb-2'>
        <FaChalkboardTeacher size='1.5em' />
      </div>
      Professor
    </button>
  );
}
