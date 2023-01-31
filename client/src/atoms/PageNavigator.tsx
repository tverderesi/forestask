import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface Props {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PageNavigator: React.FC<Props> = ({
  totalPages,
  currentPage,
  setCurrentPage,
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
    <div className='flex'>
      <button
        className='btn btn-sm btn-square btn-secondary capitalize text-base font-semibold mr-3'
        disabled={currentPage === 1}
        onClick={handleBack}
      >
        <BsArrowLeft />
      </button>
      <button
        className='btn btn-primary btn-square btn-sm capitalize text-base font-semibold'
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default PageNavigator;
