/** @format */

import { motion } from 'framer-motion';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { useHandleClick } from '../util/hooks';
import { profilePictureDictionary } from '../util/profilePictureDictionary';
import { useMutation } from '@apollo/client';
import PageNavigator from '../atoms/PageNavigator';
import { RoleSelect } from '../components/Form/RoleSelect';
import { useForm } from 'react-hook-form';
import { Date, Email, Text, Password } from '../components/Form/Form';
import { AvatarSelector } from '../components/Form/AvatarSelector';
import { REGISTER_USER_MUTATION } from '../util/GraphQL';
import Loading from '../components/layout/Loading';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import BackButton from '../atoms/BackButton';

export default function Register() {
  const { register, handleSubmit } = useForm({
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
  const context = useContext(AuthContext);
  const navigate = useNavigate();

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

  const confirmPrivilegePasswordLabel = <>Confirm {selectedRole} Password </>;

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

  const [addUser, { loading }] = useMutation(REGISTER_USER_MUTATION, {
    update(_, { data: { register: userData } }) {
      context.login(userData);

      navigate('/test', { replace: true });
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.errors);
    },
  });

  return (
    <>
      {loading && (
        <Loading
          text={'Registering...'}
          className='absolute top-0 left-0 flex flex-col p-0 h-screen w-screen  
        items-center justify-center md:w-full md:h-full z-[2] backdrop-blur-xl bg-[var(--bg-card-2)]'
        />
      )}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center flex-1 justify-between w-auto h-auto'
        initial={{
          x: 200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        exit={{ x: -200, opacity: 0 }}
      > <BackButton />
        {currentPage === 1 && <RoleSelect selectedRole={selectedRole} handleClick={handleClick} />}
        {currentPage === 2 && (
          <motion.div
            key='infoform'
            className='flex flex-col md:grid md:grid-cols-2 gap-6 px-2 md:m-6
            items-center pb-5 md:pb-0'
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
          >
            <Text
              register={register}
              label={'First Name'}
              name={'firstName'}
              placeholder={'First Name'}
            />
            <Text
              register={register}
              label={'Last Name'}
              name={'lastName'}
              placeholder={'Last Name'}
            />

            <Text
              register={register}
              label={'Username'}
              name={'username'}
              placeholder={'Username'}
            />

            <Email register={register} name='email' />

            <Date name='birthday' register={register} label='Birthday' />

            <Password register={register} label='Password' name='password' />

            <Password register={register} label='Confirm Password' name='confirmPassword' />

            {selectedRole &&
              selectedRole !== 'student' && ( //prettier-ignore
                <div className='flex flex-col md:grid md:grid-cols-2 md:col-span-2 gap-6 border-warning soft-warning rounded-2xl p-3 w-[calc(100%+1.5rem)] -ml-3 overflow'>
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
