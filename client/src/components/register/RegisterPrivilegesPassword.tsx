export function RegisterPrivilegesPassword({
  role,
}: {
  role: string;
}): JSX.Element {
  return (
    <>
      <label className='text-center capitalize text-lg font-semibold mb-2'>
        {role} Privileges Password
      </label>

      <input
        placeholder={`${role} Privileges Password`}
        required={true}
        className='form-control mb-4 capitalize'
        type='password'
      />
      <label className='text-center text-lg font-semibold mb-2 capitalize'>
        Confirm {role} Password
      </label>

      <input
        placeholder={`${role} Privileges Password`}
        required={true}
        className='form-control mb-4 capitalize text-base'
        type='password'
      />
    </>
  );
}
