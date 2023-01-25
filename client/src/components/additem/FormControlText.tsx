export function FormControlText({ card }): JSX.Element {
  return (
    <div className='mb-3'>
      <label className='text-center w-100'>Title</label>

      <input
        placeholder='Title'
        onChange={e => {
          card['title'] = e.currentTarget.value;
        }}
        required={true}
      />
    </div>
  );
}
