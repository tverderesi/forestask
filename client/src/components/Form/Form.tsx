/** @format */

export function Date({
  register,
  name,
  label,
}: {
  register: any;
  name: string;
  label: any;
}): JSX.Element {
  return (
    <div className='flex flex-col w-full'>
      <label className='text-center text-base font-semibold mb-2 capitalize w-full'>{label}</label>
      <input type='date' className='form-control flex' {...register(name)} />
    </div>
  );
}

export function Password({
  register,
  name,
  label,
  required,
}: {
  register: any;
  name: string;
  label: string | JSX.Element;
  required?: true;
}): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-base font-semibold mb-2 capitalize'>{label}</label>
      <input required={required} className='form-control' type='password' {...register(name)} />
    </div>
  );
}

export function Email({ register }) {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-base font-semibold mb-2'>E-mail</label>

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

export function Text({ register, label, placeholder, name }): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-base font-semibold mb-2'>{label}</label>
      <input
        placeholder={placeholder}
        required={true}
        className='form-control'
        {...register(name)}
      />
    </div>
  );
}
