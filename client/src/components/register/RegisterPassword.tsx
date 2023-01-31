export function RegisterPassword(): JSX.Element {
  return (
    <>
      <label className='text-center text-xl font-semibold mb-2'>Password</label>

      <input
        placeholder='Password'
        required={true}
        className='form-control mb-4 mx-10 w-9/12'
        type='password'
      />
      <label className='text-center text-xl font-semibold mb-2'>
        Confirm Password
      </label>

      <input
        placeholder='Confirm Password'
        required={true}
        className='form-control mb-4'
        type='password'
      />
    </>
  );
}
