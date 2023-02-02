/** @format */

import { motion } from 'framer-motion';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useHandleClick } from '../util/hooks';
import { profilePictureDictionary } from '../util/profilePictureDictionary';
import { useMutation } from '@apollo/client';
import PageNavigator from '../atoms/PageNavigator';
import { RoleSelect } from '../components/Form/RoleSelect';
import { useForm } from 'react-hook-form';
import { Date, Email, FirstName, LastName, Password, Username } from '../components/Form/Form';
import { AvatarSelector } from '../components/Form/AvatarSelector';
import { REGISTER_USER_MUTATION } from '../util/GraphQL';

export default function Register() {
  const { register, handleSubmit, watch, formState } = useForm({
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

  const onSubmit = (data: any) => {
    const profilePicture = placeholderNames.filter(item => item.isSelected === true)[0].name;

    addUser({
      variables: {
        registerInput: {
          ...data,
          selectedPrivilegeLevel: selectedRole.toUpperCase(),
          profilePicture,
        },
      },
    });
  };

  const [selectedRole, setSelectedRole] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = useHandleClick(setSelectedRole, setCurrentPage);

  //prettier-ignore
  const [placeholderNames, setPlaceholderNames] = useState(profilePictureDictionary)

  const confirmPrivilegePasswordLabel = (
    <>
      Confirm {selectedRole} Password{' '}
      <div
        className='tooltip tooltip-warning none'
        data-tip={
          "This password was provided to you by your institution. You CAN'T change your privileges after you created your account."
        }
      >
        <AiOutlineQuestionCircle className='inline mb-1' />
      </div>
    </>
  );

  const privilegePasswordLabel = (
    <>
      {selectedRole} Password{' '}
      <div
        className='tooltip tooltip-warning none'
        data-tip={
          "This password was provided to you by your institution. You CAN'T change your privileges after you created your account."
        }
      >
        <AiOutlineQuestionCircle className='inline mb-1' />
      </div>
    </>
  );

  // const [errors, setErrors] = useState({}) as any;

  const [addUser, { loading, called, client }] = useMutation(REGISTER_USER_MUTATION, {
    update(_, { data: { register: userData } }) {
      console.log(userData);
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.errors);
    },
  });

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
            className='flex flex-col md:grid md:grid-cols-2 gap-6 px-2 md:m-6 md:overflow-auto
            
            items-center pb-5 md:pb-0 overflow-y-scrol '
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
          >
            <FirstName register={register} />

            <LastName register={register} />

            <Username register={register} />

            <Email register={register} />

            <Date name='birthday' register={register} label='Birthday' />

            <Password register={register} label='Password' name='password' />

            <Password register={register} label='Confirm Password' name='confirmPassword' />

            {selectedRole &&
              selectedRole !== 'student' && ( //prettier-ignore
                <div className='grid grid-cols-2 col-span-2 gap-6 border-warning soft-warning rounded-2xl p-3 w-[calc(100%+1.5rem)] -ml-3'>
                  {
                    //prettier-ignore
                    <Password register={register} label={privilegePasswordLabel} name='privilegePassword' />
                  }
                  {
                    //prettier-ignore
                    <Password register={register} label={confirmPrivilegePasswordLabel} name='confirmPrivilegePassword' />
                  }
                </div>
              )}
          </motion.div>
        )}
        {currentPage === 3 && (
          <AvatarSelector
            placeholderNames={placeholderNames}
            setPlaceholderNames={setPlaceholderNames}
          />
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
