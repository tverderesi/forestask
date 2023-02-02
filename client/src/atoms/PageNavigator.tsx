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
    }
  | {
      currentPage: number;
      setCurrentPage: (page: number) => void;
      steps?: boolean;
      totalPages: number;
    };

const PageNavigator: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  steps = false,
  totalPages = typeof steps !== 'boolean' && steps.length,
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
    <div className='flex justify-between items-start h-[10%] mx-auto self-center font-semibold'>
      <button
        className='btn btn-sm btn-square btn-primary capitalize text-base mt-1 mr-6'
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
                    currentPage >= idx + 1 ? 'step-primary' : ''
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
        className='btn btn-primary btn-square btn-sm capitalize mt-1 text-base font-semibold ml-6'
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default PageNavigator;
