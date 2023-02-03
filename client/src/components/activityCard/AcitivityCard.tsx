/** @format */

import { useState, useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import AppContext from '../../context/AppContext';
import { handleDone } from '../../context/AppFunctions';
import CardTags from './CardTags';

import { Card } from '../../types/Types';
import { motion } from 'framer-motion';
function ActivityCard({ item }: { item: Card }) {
  const [completed, setCompleted] = useState(item.checked);
  const [open, setOpen] = useState(false);
  const { userData, dispatch, gameLevels } = useContext(AppContext);

  const handleCardClick = () => {
    setOpen(!open);
  };

  return (
    <div className='mx-auto mt-3 card-style flex '>
      <section className='flex flex-col w-4/5 mx-5 content-center' onClick={handleCardClick}>
        <h5 className='text-[1.1rem] font-semibold text-center my-3 ml-28 cursor-pointer'>
          {item.title}
        </h5>
        <CardTags subject={item.subject} type={item.type} xp={item.xp} deadline={item.deadline} />
        <div className='p-3'>
          <p className={`text-base ${open ? '' : 'hidden'} `}>{item.content}</p>
        </div>
      </section>

      <section className='justify-center items-center w-1/5'>
        <div
          className='rounded-circle nav-button flex flex-col justify-center items-center'
          onClick={e => {
            e.preventDefault();
            handleDone(item.id, item, userData, completed, setCompleted, dispatch, gameLevels);
          }}
        >
          <div
            className={`absolute self-center top-[-2rem] text-xl w-36 font-semibold text-pink-600 ${
              completed ? 'tracking-in-expand-fwd-bottom' : 'hidden'
            }`}
          >
            🎉 Hooray! 🎉
          </div>
          <FaCheck
            size='30'
            className={`transition-all duration-[2000ms] text-[var(--font-color)]  ${
              completed ? 'rotate-[-1080deg] opacity-100' : 'rotate-0 opacity-30'
            }`}
          />
        </div>
      </section>
    </div>
  );
}

export default ActivityCard;

export type addDone = (id: number) => void;

export type handleCardClick = () => void;
