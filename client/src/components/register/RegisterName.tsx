export function RegisterName({ onChange, values }): JSX.Element {
  return (
    <>
      <label className='text-center text-xl font-semibold mb-2'>
        First Name
      </label>

      <input
        name='firstName'
        placeholder='First Name'
        required={true}
        className='form-control mb-4'
        onChange={e => onChange(e, values)}
        value={values.firstName}
      />
      <label className='text-center text-xl font-semibold mb-2'>
        Last Name
      </label>

      <input
        name='lastName'
        placeholder='Last Name'
        required={true}
        className='form-control mb-4'
        onChange={e => onChange(e, values)}
        value={values.lastName}
      />
    </>
  );
}
