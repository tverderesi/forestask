import { motion } from 'framer-motion';
import { MouseEvent, useRef, useState, useLayoutEffect } from 'react';
import { REGISTER_USER_MUTATION } from '../../util/GraphQL';
import { useForm, useHandleClick } from '../../util/hooks';
import {
  getPictureURL,
  profilePictureDictionary,
} from '../../util/profilePictureDictionary';
import { useMutation } from '@apollo/client';
import { RegisterName } from '../register/RegisterName';
import { RegisterPassword } from '../register/RegisterPassword';
import { RegisterBirthday } from '../register/RegisterBirthday';
import { RegisterEmail } from '../register/RegisterEmail';
import PageNavigator from '../../atoms/PageNavigator';
import { FaChalkboardTeacher, FaGraduationCap, FaCode } from 'react-icons/fa';
import { RegisterPrivilegesPassword } from '../register/RegisterPrivilegesPassword';

export default function Register() {
  const [selectedRole, setSelectedRole] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = useHandleClick(setSelectedRole, setCurrentPage);

  const initialState: any = {
    username: '',
    birthday: '',
    privilegePassword: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePicture: 'ade',
    firstName: '',
    lastName: '',
  };
  //TODO move motion design to parent HOME element
  //prettier-ignore
  const [placeholderNames, setPlaceholderNames] = useState(
      profilePictureDictionary
  )
  const { onChange, onSubmit, values } = useForm(registerUser, initialState);
  const [errors, setErrors] = useState({}) as any;

  function registerUser() {
    addUser();
  }

  const handleImageClick = index => {
    setPlaceholderNames(prevState => {
      const newNames = prevState.map((item, i) => {
        if (i === index) {
          item.isSelected = true;

          values.profilePicture = item.name;
        } else {
          item.isSelected = false;
        }
        return item;
      });
      return newNames;
    });
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER_MUTATION, {
    update(_, { data: { register: userData } }) {
      console.log(userData);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: {
      registerInput: values,
    },
  });

  return (
    <motion.form
      className='flex flex-col items-center h-auto flex-1 justify-between mx-auto'
      initial={{
        x: 200,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{ x: -200, opacity: 0 }}
    >
      <RegisterProgress currentPage={currentPage} />

      {currentPage === 1 && (
        <motion.div
          className='flex flex-col items-center justify-between w-full h-full font-semibold mt-0'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
        >
          <h3 className='text-2xl mb-5'>I'm a...</h3>
          <div className='grid grid-cols-3 gap-2'>
            {[
              { role: 'student', icon: <FaGraduationCap size={60} /> },
              { role: 'teacher', icon: <FaChalkboardTeacher size={60} /> },
              { role: 'admin', icon: <FaCode size={60} /> },
            ].map(({ role, icon }) => {
              return (
                <button
                  className={`btn   w-32 h-32 shadow-lg text-xl flex-col items-center justify-center
                  ${selectedRole === role ? 'btn-primary' : 'btn-transparent'}`}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleClick(e, role)
                  }
                >
                  {icon}
                  {role}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {currentPage === 2 && (
        <motion.div
          key='infoform'
          className='flex my-4'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
        >
          <div className='flex flex-col basis-1/2 mx-4'>
            <RegisterName />
            {
              /* prettier-ignore */
              selectedRole === 'student' ? (<RegisterEmail />) : (<RegisterPassword />)
            }
          </div>
          <div className='flex flex-col basis-1/2 mx-4'>
            <RegisterBirthday />
            {selectedRole === 'student' ? (
              <RegisterPassword />
            ) : (
              <>
                <RegisterEmail />
                <RegisterPrivilegesPassword role={selectedRole} />
              </>
            )}
          </div>
        </motion.div>
      )}
      {currentPage === 3 && (
        <motion.div
          key='avatarselection'
          className='grid grid-cols-8 gap-6 mt-8'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
        >
          <h2 className='col-span-8 mb-8 mt-4 w-full text-center '>
            Select an Avatar
          </h2>

          {placeholderNames.map((item, index) => {
            return (
              <div
                className='col-span-1 flex flex-col items-center mb-6 w-12 h-12'
                key={item.name}
              >
                <img
                  src={`${getPictureURL(item.name)}`}
                  className='rounded-full'
                  onClick={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    handleImageClick(index);
                  }}
                  style={{
                    boxShadow: item.isSelected
                      ? '0 1px 3px 0 #9627ba,0 0 0 2px #9627ba'
                      : '',
                  }}
                  alt={item.name}
                />
                <h4
                  key={item.name}
                  style={{
                    textTransform: 'capitalize',
                    fontWeight: item.isSelected ? 'bold' : '200',
                    marginTop: '.5rem',
                  }}
                >
                  {item.name}
                </h4>
              </div>
            );
          })}

          <button type='submit'>Register</button>
        </motion.div>
      )}
      <div className='justify-self-end'>
        <PageNavigator
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={3}
        />
      </div>
    </motion.form>
  );
}
function RegisterProgress({ currentPage }: { currentPage: number }) {
  return (
    <div className='flex flex-col items-center'>
      <ul className='steps steps-horizontal'>
        {['Who are You?', 'Info', 'Avatar'].map((item, idx) => {
          return (
            <motion.li
              className={`step ${
                currentPage >= idx + 1 ? 'step-primary' : ''
              } `}
            >
              {item}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
