/** @format */

import { useState } from 'react';
import { Text, TextArea, Dropdown, Date, Number } from '../Form/Form';
import { useForm } from 'react-hook-form';
import { BsPlusCircle } from 'react-icons/bs';

function AddItem() {
  const { register, handleSubmit } = useForm({
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

  const [subject, setSubject] = useState('');
  const [activity, setActitivy] = useState('');

  const handleChange = (newValue: string, callback: any) => {
    callback(newValue);
  };

  return (
    <div className='absolute z-[5] w-screen h-screen backdrop-blur-2xl top-0 left-0 flex items-center justify-center'>
      <div className='grid grid-cols-2 backdrop-blur-xl bg-blend-overlay bg-card rounded-2xl w-[75vh] h-[75vh] shadow-2xl top-8 p-10 gap-5'>
        <h2 className='text-2xl text-center font-semibold flex items-center justify-center col-span-2'>
          <BsPlusCircle className='inline-block mr-3 my-4' /> Add Item
        </h2>

        <Text label='Title' name='title' placeholder='Title' register={register} />

        <Dropdown
          name='subject'
          items={['A', 'B', 'C', 'D', 'E']}
          onChange={handleChange}
          label='Subject'
          callback={setSubject}
        />
        <TextArea label='Content' placeholder='Content' register={register} name='content' />
        <Date label='Deadline' register={register} name='deadline' />
        <Number
          label='XP'
          register={register}
          name='xp'
          options={{ min: 0, max: 100 }}
          min={0}
          max={100}
        />
        <Dropdown
          name='activity'
          items={['A', 'B', 'C', 'D', 'E']}
          onChange={handleChange}
          label='Activity'
          callback={setActitivy}
          direction='top'
        />
      </div>
    </div>
  );
}
export default AddItem;
