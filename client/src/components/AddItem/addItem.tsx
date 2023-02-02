/** @format */

import { useState } from 'react';
import { Text, TextArea, Dropdown } from '../Form/Form';
import { useForm } from 'react-hook-form';
import { BsPlusCircle } from 'react-icons/bs';

function AddItem() {
  const [subject, setSubject] = useState('');
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      id: '',
      content: '',
      type: '',
      xp: 0,
      checked: 'false',
      title: '',
      deadline: 0,
    },
  });
  const handleChange = (newValue: string) => {
    setSubject(newValue);
  };

  return (
    <div className='absolute z-[5] w-screen h-screen backdrop-blur-2xl top-0 left-0 flex items-center justify-center'>
      <div className='grid grid-cols-2 backdrop-blur-xl bg-blend-overlay bg-card rounded-2xl w-[75vh] h-[75vh] shadow-2xl top-8 p-10 gap-5'>
        <h2 className='text-2xl text-center font-semibold flex items-center justify-center col-span-2'>
          <BsPlusCircle className='inline-block mr-3 my-4' /> Add Item
        </h2>

        <Text label='Title' name='title' placeholder='Title' register={register} />

        <Dropdown
          name='Subject'
          items={['A', 'B', 'C', 'D', 'E']}
          onChange={handleChange}
          label='Subjects'
        />
        <TextArea label='Content' placeholder='Content' register={register} name='content' />

        <div className='flex'></div>
      </div>
    </div>
  );
}
export default AddItem;
