/** @format */

import { motion } from 'framer-motion';
import { useState } from 'react';
import { REGISTER_USER_MUTATION } from '../util/GraphQL';
import { useHandleClick } from '../util/hooks';
import { getPictureURL, profilePictureDictionary } from '../util/profilePictureDictionary';
import { useMutation } from '@apollo/client';
import PageNavigator from '../atoms/PageNavigator';
import { RoleSelect } from '../components/Form/RoleSelect';
import { useForm } from 'react-hook-form';
import {
  Birthday,
  ConfirmPassword,
  ConfirmPrivilegesPassword,
  Email,
  FirstName,
  LastName,
  Password,
  PrivilegesPassword,
  Username,
} from '../components/Form/Form';

export default function Register() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      username: '',
      birthday: '',
      privilegePassword: '',
      confirmPrivilegePassword: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    },
  });
  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    console.log(data);
  };

  const [selectedRole, setSelectedRole] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = useHandleClick(setSelectedRole, setCurrentPage);

  //prettier-ignore
  const [placeholderNames, setPlaceholderNames] = useState(
      profilePictureDictionary
  )

  // const [errors, setErrors] = useState({}) as any;

  const handleImageClick = (index: number) => {
    setPlaceholderNames(prevState => {
      const newNames = prevState.map((item, i) => {
        if (i === index) {
          item.isSelected = true;
          // values.profilePicture = item.name;
        } else {
          item.isSelected = false;
        }
        return item;
      });
      return newNames;
    });
  };

  // const [addUser, { loading }] = useMutation(REGISTER_USER_MUTATION, {
  //   update(_, { data: { register: userData } }) {
  //     console.log(userData);
  //   },
  //   onError(err) {
  //     setErrors(err.graphQLErrors[0].extensions.errors);
  //   },
  //   variables: {
  //     registerInput: '',
  //   },
  // });

  return (
    <>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center  flex-1 justify-between '
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
        {currentPage === 1 && <RoleSelect selectedRole={selectedRole} handleClick={handleClick} />}

        {currentPage === 2 && (
          <motion.div
            key='infoform'
            className='grid grid-cols-2 gap-6 m-6 items-center'
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
          >
            <FirstName register={register} />

            <LastName register={register} />

            <Username register={register} />

            <Email register={register} />

            <Birthday register={register} />

            <Password register={register} />

            <ConfirmPassword register={register} />

            {selectedRole !== 'student' && ( //prettier-ignore
              <div className='flex col-span-2 gap-6 border-warning soft-warning rounded-2xl p-3'>
                {
                  //prettier-ignore
                  <PrivilegesPassword register={register} role={selectedRole} />
                }
                {
                  //prettier-ignore
                  <ConfirmPrivilegesPassword register={register} role={selectedRole} />
                }
              </div>
            )}
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
                      boxShadow: item.isSelected ? '0 1px 3px 0 #9627ba,0 0 0 2px #9627ba' : '',
                    }}
                    alt={item.name}
                  />
                  <span
                    key={item.name}
                    className={`capitalize ${item.isSelected ? 'font-bold' : ''} mt-1 text-sm`}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}

            <input
              className='btn btn-secondary btn-sm my-2 col-span-8 mx-auto'
              type='submit'
              value=' Register'
            />
          </motion.div>
        )}
      </motion.form>
      <PageNavigator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        steps={['Who are You?', 'Info', 'Avatar']}
      />
    </>
  );
}
