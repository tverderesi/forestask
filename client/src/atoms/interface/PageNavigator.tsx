/** @format */

import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Steps } from "./Steps";
import { StepProps } from "../../types/Types";

export const PageNavigator: React.FC<StepProps> = ({
  currentPage,
  setCurrentPage,
  steps = false,
  totalPages = typeof steps !== "boolean" && steps.length,
  height = "10%",
}) => {
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  const buttonClasses = `btn btn-ghost bg-fandango-400 hover:bg-fandango-400 hover:lavender-web-50  active:bg-fandango-400 active:lavender-web-50 rounded-lg text-lavender-web-50 mt-3 btn-square btn-sm  capitalize text-base font-semibold ${
    steps && "mt-1"
  } `;

  return (
    <div
      className={`flex justify-between items-start h-[${height}] self-center font-semibold w-full`}
    >
      <button
        className={buttonClasses}
        disabled={currentPage === 1}
        onClick={handleBack}
      >
        <FaArrowLeft />
      </button>
      <Steps
        steps={steps}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <button
        className={buttonClasses}
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};
