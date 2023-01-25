export function FormControlTextArea({ card }) {
  return (
    <div className='mb-3'>
      <input
        className='w-100 text-center'
        spellCheck='true'
      >
        Content
      </input>

      <input
        type='textarea'
        aria-label='With textarea'
        placeholder='Content'
        required={true}
        onChange={e => (card.content = e.currentTarget.value)}
        style={{
          height: '200%',
          borderRadius: '1rem 1rem 0 1rem',
        }}
      />
    </div>
  );
}
