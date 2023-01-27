export function FormControlTextArea({ card }) {
  return (
    <>
      <label
        className='text-center w-full text-xl mb-2'
        spellCheck='true'
      >
        Content
      </label>

      <textarea
        className='form-control mb-4'
        aria-label='With textarea'
        placeholder='Content'
        required={true}
        onChange={e => (card.content = e.currentTarget.value)}
      />
    </>
  );
}
