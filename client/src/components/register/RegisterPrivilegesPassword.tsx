import { AiOutlineQuestionCircle } from 'react-icons/ai';

export function RegisterPrivilegesPassword({
  role,
}: {
  role: string;
}): JSX.Element {
  return (
    <>
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
        className='form-control mb-4 capitalize'
        type='password'
      />
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
        className='form-control mb-4 capitalize text-base'
        type='password'
      />
    </>
  );
}
