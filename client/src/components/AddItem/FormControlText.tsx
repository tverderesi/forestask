export function FormControlText({ card }): JSX.Element {
  return (
    <>
      <label className='text-center text-xl font-semibold mb-2'>Title</label>

      <input
        placeholder='Title'
        onChange={e => {
          card['title'] = e.currentTarget.value;
        }}
        required={true}
        className='form-control mb-4 mx-10 w-9/12'
      />
    </>
  );
}
