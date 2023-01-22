import { Form } from 'react-bootstrap';

export function FormControlText({ card }): JSX.Element {
  return (
    <Form.Group className='mb-3'>
      <Form.Label className='text-center w-100'>Title</Form.Label>

      <Form.Control
        placeholder='Title'
        onChange={e => {
          card['title'] = e.currentTarget.value;
        }}
        required={true}
      />
    </Form.Group>
  );
}
