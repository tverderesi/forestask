export function FormControlText({ card }): JSX.Element {
  return (
    <>
      <label className='text-center w-full text-xl mb-2'>Title</label>

      <input
        placeholder='Title'
        onChange={e => {
          card['title'] = e.currentTarget.value;
        }}
        required={true}
        className='form-control mb-4'
      />
    </>
  );
}
