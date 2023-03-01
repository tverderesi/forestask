/** @format */

import { motion } from 'framer-motion';
import { useContext, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Text, Password } from '../components/Form/Form';
import { LOGIN_USER_MUTATION } from '../util/GraphQL';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Loading from '../components/layout/Loading';
import { getPictureURL } from '../util/profilePictureDictionary';
import BackButton from '../atoms/BackButton';


export default function Login() {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmit = data => {
    loginUser({ variables: { logInInput: data } });
  };

  const { register, handleSubmit } = useForm({ defaultValues: { logIn: '', password: '' } });
  const [loginUser, { loading }] = useMutation(LOGIN_USER_MUTATION, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
   
      navigate(userData.privilegeLevel !== 'STUDENT'? '/test' : '/home', { replace: true });
    },
    onError(err: any) {
      setErrors(err.graphQLErrors[0]?.extensions?.errors);
    },
  });

  const profilePic = getPictureURL(localStorage?.getItem('profilePic')) || 'none';


  const firstName = localStorage?.getItem('firstName')
    ? ', ' + localStorage?.getItem('firstName')
    : null;

  return (
    <>
      {loading && (
        <Loading
          text={'Logging in...'}
          className='absolute top-0 left-0 flex flex-col p-0 h-screen w-screen  
      items-center justify-center md:w-full md:h-full z-[2] backdrop-blur-xl bg-[var(--bg-card-2)]'
        />
      )}
     <motion.div    
        className='w-full h-full'
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}>
     <form
        key='loginform'
        className='flex flex-col items-center content-center justify-self-center mx-auto my-auto'
     
        onSubmit={handleSubmit(onSubmit)}
      >
        <BackButton />
       {profilePic ==='none' ? <div className='w-36 h-36' />:  <img
          src={profilePic}
          alt='You'
          className='rounded-full avatar w-36 my-5 selected-avatar-big card-shadow'
        />}
        <h4 className='text-lg font-semibold mb-2'>Welcome Back{firstName}!</h4>
        <Text label='Username/E-mail' placeholder='' name='logIn' register={register} />
        <Password label={'Password'} name='password' register={register} />
        <input
          className='btn btn-secondary btn-sm my-5 col-span-2 xs:col-span-4 sm:col-span-8 mx-auto'
          type='submit'
          value=' Log in'
        />
      </form>
     </motion.div>
    </>
  );
}
