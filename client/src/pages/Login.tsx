/** @format */

import { motion } from 'framer-motion';
import { useContext, useState } from 'react';

import { useForm } from 'react-hook-form';
import { Text, Password } from '../components/Form/Form';
import { LOGIN_USER_MUTATION } from '../util/GraphQL';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

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
      navigate('/', { replace: true });
    },
    onError(err: any) {
      setErrors(err.graphQLErrors[0]?.extensions?.errors);
    },
  });

  return (
    <motion.form
      key='loginform'
      className='flex flex-col items-center content-center justify-self-center mx-auto my-auto'
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Text label='Username/E-mail' placeholder='' name='logIn' register={register} />
      <Password label={'Password'} name='password' register={register} />
      <input
        className='btn btn-secondary btn-sm my-2 col-span-2 xs:col-span-4 sm:col-span-8 mx-auto'
        type='submit'
        value=' Register'
      />
    </motion.form>
  );
}
