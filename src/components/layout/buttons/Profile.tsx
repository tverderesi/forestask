import { BsFillPersonFill } from 'react-icons/bs';

function Profile() {
  return (
    <button
      className='btn btn-transparent'
      data-toggle='collapse'
    >
      <div className='mb-2'>
        <BsFillPersonFill size='1.5em' />
      </div>
      Perfil
    </button>
  );
}

export default Profile;
