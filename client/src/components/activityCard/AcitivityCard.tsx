import { useState, useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import AppContext from '../../context/AppContext';
import { handleDone } from '../../context/AppFunctions';
import CardTags from './CardTags';

import * as Types from './ActivityCardTypes';

function ActivityCard({ item }: Types.ChildProps) {
  const [completed, setCompleted] = useState(item.checked);
  const [open, setOpen] = useState(false);
  const { userData, dispatch, gameLevels } = useContext(AppContext);

  const handleCardClick = () => {
    setOpen(!open);
  };

  return (
    <div className='mx-auto mt-3 activity-card flex '>
      <section
        className='flex flex-col w-[95%] mx-5 content-center'
        onClick={handleCardClick}
      >
        <h5 className='text-lg font-semibold text-center my-3 cursor-pointer'>
          {item.title}
        </h5>
        <CardTags
          subject={item.subject}
          type={item.type}
          xp={item.xp}
          deadline={item.deadline}
        />
        <div className='p-3'>
          <p className={`text-base ${open ? '' : 'hidden'} `}>{item.content}</p>
        </div>
      </section>

      <section className='justify-center items-center'>
        <div
          className='rounded-circle nav-button'
          onClick={e => {
            e.preventDefault();
            handleDone(
              item.id,
              item,
              userData,
              completed,
              setCompleted,
              dispatch,
              gameLevels
            );
          }}
        >
          <FaCheck
            size='30'
            className='ml-[25%] mt-[25%]'
            style={{ opacity: completed ? 1 : 0.3 }}
          />
        </div>
      </section>
    </div>
  );
}

export default ActivityCard;
