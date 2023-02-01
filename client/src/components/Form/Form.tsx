import { AiOutlineQuestionCircle } from 'react-icons/ai';

export function Birthday({ register }): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-xl font-semibold mb-2'>Birthday</label>
      <input
        type='date'
        className='form-control'
        {...register('birthday')}
      />
    </div>
  );
}

export function ConfirmPassword({ register }): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-xl font-semibold mb-2'>
        Confirm Password
      </label>

      <input
        placeholder='Confirm Password'
        required={true}
        className='form-control'
        type='password'
        {...register('confirmPassword')}
      />
    </div>
  );
}

export function ConfirmPrivilegesPassword({
  role,
  register,
}: {
  role: string;
  register: any;
}): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-lg font-semibold mb-2 capitalize'>
        Confirm {role} Password{' '}
        <div
          className='tooltip tooltip-warning none'
          data-tip={
            "This password was provided to you by your institution. You CAN'T change your privileges after you created your account."
          }
        >
          <AiOutlineQuestionCircle className='inline mb-1' />
        </div>
      </label>

      <input
        placeholder={`${role} Privileges Password`}
        required={true}
        className='form-control text-ellipsis capitalize'
        type='password'
        {...register('confirmPrivilegePassword')}
      />
    </div>
  );
}

export function Email({ register }) {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-xl font-semibold mb-2'>E-mail</label>

      <input
        placeholder='e-mail'
        required={true}
        className='form-control'
        type='email'
        {...register('email')}
      />
    </div>
  );
}

export function FirstName({ register }): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-xl font-semibold mb-2'>
        First Name
      </label>
      <input
        placeholder='First Name'
        required={true}
        className='form-control'
        {...register('firstName')}
      />
    </div>
  );
}

export function LastName({ register }): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-xl font-semibold mb-2'>
        Last Name
      </label>
      <input
        name='lastName'
        placeholder='Last Name'
        required={true}
        className='form-control'
        {...register('lastName')}
      />
    </div>
  );
}

export function Password({ register }): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-xl font-semibold mb-2'>Password</label>
      <input
        placeholder='Password'
        required={true}
        className='form-control'
        type='password'
        {...register('password')}
      />
    </div>
  );
}

export function PrivilegesPassword({
  role,
  register,
}: {
  role: string;
  register: any;
}): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label className='text-center capitalize text-lg font-semibold mb-2'>
        {role} Privileges Password{' '}
        <div
          className='tooltip tooltip-warning none'
          data-tip={
            "This password was provided to you by your institution. You CAN'T change your privileges after you created your account."
          }
        >
          <AiOutlineQuestionCircle className='inline mb-1' />
        </div>
      </label>

      <input
        placeholder={`${role} Privileges Password`}
        required={true}
        className='form-control text-ellipsis capitalize'
        type='password'
        {...register('privilegePassword')}
      />
    </div>
  );
}
export function Username({ register }): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-xl font-semibold mb-2'>Username</label>
      <input
        placeholder='Username'
        required={true}
        className='form-control'
        {...register('username')}
      />
    </div>
  );
}
