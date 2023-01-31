export function RegisterEmail() {
  return (
    <>
      <label className='text-center text-xl font-semibold mb-2'>E-mail</label>

      <input
        placeholder='e-mail'
        required={true}
        className='form-control mb-4'
        type='e-mail'
      />
    </>
  );
}
