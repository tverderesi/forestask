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
  color = "primary",
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

  return (
    <div
      className={`flex justify-between items-start h-[${height}] mx-auto self-center font-semibold`}
    >
      <button
        className={`btn btn-sm btn-square btn-${color} capitalize text-base ${
          steps && "mt-1 mr-6"
        }`}
        disabled={currentPage === 1}
        onClick={handleBack}
      >
        <FaArrowLeft />
      </button>
      <Steps
        steps={steps}
        currentPage={currentPage}
        color={color}
        setCurrentPage={setCurrentPage}
      />
      <button
        className={`btn btn-${color} btn-square btn-sm bg-mauve capitalize text-base font-semibold ${
          steps && "mt-1 ml-6"
        } `}
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};
