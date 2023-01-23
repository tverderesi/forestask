import { useState, useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import AppContext from '../../context/AppContext';
import { handleDone } from '../../context/AppFunctions';
import CardTags from './CardTags';
import * as Types from './ActivityCardTypes';
import './ActivityCard.css';

function ActivityCard({ item }: Types.ChildProps) {
  const [completed, setCompleted] = useState(item.checked);
  const [open, setOpen] = useState(false);
  const { userData, dispatch, gameLevels } = useContext(AppContext);

  const handleCardClick = () => {
    setOpen(!open);
  };

  return (
    <div className='mx-auto mt-3 activity-card flex '>
      <div
        className='flex flex-col w-[80%] mx-5'
        onClick={handleCardClick}
      >
        <h5 className='text-lg fw-semibold text-center my-3 cursor-pointer'>
          {item.title}
        </h5>
        <CardTags
          subject={item.subject}
          type={item.type}
          xp={item.xp}
          deadline={item.deadline}
        />
        <div className='p-3'>
          <p className='text-base'>{item.content}</p>
        </div>
      </div>

      <div className='p-0 content-start items-start rounded-circle'>
        <div
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
            className='p-0 text-green-500'
            size='30'
            style={{ opacity: completed ? 1 : 0.3 }}
          />
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
