export function RegisterName(): JSX.Element {
  return (
    <>
      <label className='text-center text-xl font-semibold mb-2'>
        First Name
      </label>

      <input
        placeholder='First Name'
        required={true}
        className='form-control mb-4'
      />
      <label className='text-center text-xl font-semibold mb-2'>
        Last Name
      </label>

      <input
        placeholder='Last Name'
        required={true}
        className='form-control mb-4'
      />
    </>
  );
}
