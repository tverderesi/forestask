import { BsPencil, BsPlusCircle } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { Card } from '../../../types/Types';

export default function SubjectsDropdown({
  card,
  subjects,
}: {
  card: Card;
  subjects: String[];
}) {
  return (
    <div className='dropdown dropdown-down dropdown-end justify-between  '>
      <label
        tabIndex={0}
        className='outline-0 border-0 form-control-ddown rounded-full no-animation flex items-center py-0.5 px-1 capitalize font-bold text-base mx-auto w-full'
      >
        {!card.subject ? 'Subject' : card.subject}
        <FaCaretDown />
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content rounded-2xl backdrop-blur-xl shadow-lg mb-3 text-center w-full'
      >
        {subjects.map((subject, idx) => {
          return (
            <li
              className={`font-semibold align-middle border-b ${
                idx === subjects.length ? '' : 'border-gray-400/20'
              } py-2 mx-1 cursor-pointer`}
              onClick={(e: React.SyntheticEvent) => {
                e.preventDefault();
              }}
            >
              <label htmlFor='add-item cursor-pointer'>
                <span className='cursor-pointer'>{subject}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
