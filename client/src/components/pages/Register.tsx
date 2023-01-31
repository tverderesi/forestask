import { motion } from 'framer-motion';
import { useState } from 'react';
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
import { RegisterPrivilegesPassword } from '../register/RegisterPrivilegesPassword';
import { RoleSelect } from '../register/RoleSelect';

export default function Register() {
  const [selectedRole, setSelectedRole] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = useHandleClick(setSelectedRole, setCurrentPage);

  const initialState = {
    username: '',
    birthday: '',
    privilegePassword: '',
    confirmPrivilegePassword: '',
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
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({}) as any;

  const onChange = (e, values) => {
    currentPage === 2 &&
      setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  function registerUser() {
    addUser();
  }

  const handleImageClick = (index: number) => {
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
      <PageNavigator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        steps={['Who are You?', 'Info', 'Avatar']}
      />

      {currentPage === 1 && (
        <RoleSelect
          selectedRole={selectedRole}
          handleClick={handleClick}
        />
      )}

      {currentPage === 2 && (
        <motion.div
          key='infoform'
          className='flex my-4'
          initial={{
            x: 50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{ x: -50, opacity: 0 }}
        >
          <div className='flex flex-col basis-1/2 mx-4'>
            <RegisterName
              onChange={onChange}
              values={values}
            />
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
          className='grid grid-cols-8 mt-8'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
        >
          <h2 className='col-span-8 w-full mb-5 text-center text-2xl font-semibold '>
            Select an Avatar
          </h2>

          {placeholderNames.map((item, index) => {
            return (
              <div
                className='flex flex-col items-center w-24 px-2 py-3 floating-pic h-full'
                key={item.name}
              >
                <img
                  src={`${getPictureURL(item.name)}`}
                  className='rounded-full w-14 h-14'
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
                <span
                  key={item.name}
                  className={`capitalize ${
                    item.isSelected ? 'font-bold' : ''
                  } mt-1 text-sm`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}

          <button
            className='btn btn-secondary btn-sm my-2 col-span-8 mx-auto'
            type='submit'
          >
            Register
          </button>
        </motion.div>
      )}
    </motion.form>
  );
}
