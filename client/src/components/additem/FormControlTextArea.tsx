import { Form } from 'react-bootstrap';

export function FormControlTextArea({ card }) {
  return (
    <Form.Group className='mb-3'>
      <Form.Label
        className='w-100 text-center'
        spellCheck='true'
      >
        Content
      </Form.Label>

      <Form.Control
        as='textarea'
        aria-label='With textarea'
        placeholder='Content'
        required={true}
        onChange={e => (card.content = e.currentTarget.value)}
        style={{
          height: '200%',
          borderRadius: '1rem 1rem 0 1rem',
        }}
      />
    </Form.Group>
  );
}
