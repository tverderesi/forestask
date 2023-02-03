/** @format */

import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

type Props =
  | {
      currentPage: number;
      setCurrentPage: (page: number) => void;
      steps: string[];
      totalPages?: number;
      color?: string;
      height?: string;
    }
  | {
      currentPage: number;
      setCurrentPage: (page: number) => void;
      steps?: boolean;
      totalPages: number;
      color?: string;
      height?: string;
    };

const PageNavigator: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  steps = false,
  totalPages = typeof steps !== 'boolean' && steps.length,
  color = 'primary',
  height = '10%',
}) => {
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  return (
    <div
      className={`flex justify-between items-start h-[${height}] mx-auto self-center font-semibold`}
    >
      <button
        className={`btn btn-sm btn-square btn-${color} capitalize text-base ${
          steps && 'mt-1 mr-6'
        }`}
        disabled={currentPage === 1}
        onClick={handleBack}
      >
        <BsArrowLeft />
      </button>
      <div className='xs:flex flex-col items-center hidden   '>
        <ul className='steps steps-horizontal '>
          {typeof steps !== 'boolean' &&
            steps.map((item, idx) => {
              return (
                <motion.li
                  key={item}
                  className={`step cursor-pointer text-xs sm:text-base ${
                    currentPage >= idx + 1 ? `step-${color}` : ''
                  } `}
                  onClick={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    setCurrentPage(idx + 1);
                  }}
                >
                  {item}
                </motion.li>
              );
            })}
        </ul>
      </div>
      <button
        className={`btn btn-${color} btn-square btn-sm capitalize text-base font-semibold ${
          steps && 'mt-1 ml-6'
        } `}
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default PageNavigator;
