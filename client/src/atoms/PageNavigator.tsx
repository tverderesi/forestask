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
    <div className='flex justify-between items-start mt-3'>
      <button
        className='btn btn-sm btn-square btn-primary capitalize text-base font-semibold mt-1 mr-3'
        disabled={currentPage === 1}
        onClick={handleBack}
      >
        <BsArrowLeft />
      </button>
      <div className='flex flex-col items-center'>
        <ul className='steps steps-horizontal '>
          {typeof steps !== 'boolean' &&
            steps.map((item, idx) => {
              return (
                <motion.li
                  className={`step ${
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
        className='btn btn-primary btn-square btn-sm capitalize mt-1 text-base font-semibold'
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default PageNavigator;
