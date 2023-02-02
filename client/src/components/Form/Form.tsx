/** @format */
import { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

export function Date({
  register,
  name,
  label,
}: {
  register: any;
  name: string;
  label: any;
}): JSX.Element {
  return (
    <div className='flex flex-col w-full'>
      <label className='text-center text-base font-semibold mb-2 capitalize w-full'>{label}</label>
      <input type='date' className='form-control flex' {...register(name)} />
    </div>
  );
}

export function Password({
  register,
  name,
  label,
  required,
}: {
  register: any;
  name: string;
  label: string | JSX.Element;
  required?: true;
}): JSX.Element {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-base font-semibold mb-2 capitalize'>{label}</label>
      <input required={required} className='form-control' type='password' {...register(name)} />
    </div>
  );
}

export function Email({ register }) {
  return (
    <div className='flex flex-col'>
      <label className='text-center text-base font-semibold mb-2'>E-mail</label>

      <input
        placeholder='e-mail'
        required={true}
        className='form-control'
        type='email'
        {...register('email')}
      />
    </div>
  );
}

export function Text({ register, label, placeholder, name, className = '' }): JSX.Element {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className='text-center text-base font-semibold mb-2'>{label}</label>
      <input
        placeholder={placeholder}
        required={true}
        className='form-control'
        {...register(name)}
      />
    </div>
  );
}
export function TextArea({ register, name, label, placeholder }) {
  return (
    <>
      <label className='text-center w-full font-semibold mb-2'>{label}</label>

      <textarea
        className='form-control mb-4 w-full'
        aria-label='With textarea'
        placeholder={placeholder}
        {...register(name)}
      />
    </>
  );
}

/** @format */

export function Dropdown({
  items,
  name,
  onChange,
  label,
}: {
  items: string[];
  name: string;
  onChange;
  label;
}) {
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  return (
    <div className='flex flex-col'>
      <label className='text-center w-full font-semibold mb-2'>{label}</label>
      <div className='dropdown dropdown-down dropdown-end justify-between '>
        <label
          tabIndex={0}
          className='form-control rounded-full no-animation capitalize font-bold text-base mx-auto w-full h-full '
        >
          <span className='flex items-center justify-between px-2'>
            {!selectedItem ? name : selectedItem}
            <FaCaretDown />
          </span>
        </label>
        <ul
          tabIndex={0}
          className='dropdown-content rounded-2xl backdrop-blur-xl shadow-lg mb-3 text-center w-full'
        >
          {items.map((item, idx) => {
            return (
              <li
                className={`font-semibold align-middle border-b ${
                  idx === items.length ? '' : 'border-gray-400/20'
                } py-2 mx-1 cursor-pointer`}
                onClick={(e: React.SyntheticEvent) => {
                  e.preventDefault();
                  setSelectedItem(item);
                }}
              >
                <label htmlFor='add-item cursor-pointer'>
                  <span className='cursor-pointer'>{item}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
