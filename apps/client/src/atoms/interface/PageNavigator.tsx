import React, { useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Steps } from "./Steps";
import { StepProps } from "../../types/Types";
import RegisterContext from "../../context/RegisterContext";
import useHandlePageChange from "../../hooks/useHandlePageChange";

export const PageNavigator: React.FC<StepProps> = ({
  steps = false,
  totalPages = typeof steps !== "boolean" && steps.length,
}) => {
  const { currentPage, dispatch } = useContext(RegisterContext);

  const handleBack = useHandlePageChange("-", dispatch);
  const handleNext = useHandlePageChange("+", dispatch);

  const buttonClasses = `btn btn-ghost bg-fandango-400 hover:bg-fandango-400 hover:lavender-web-50  active:bg-fandango-400 active:lavender-web-50 rounded-lg text-lavender-web-50 mt-3 btn-square btn-sm  capitalize text-base font-semibold ${
    steps && "mt-1"
  } `;

  return (
    <div
      className={`flex justify-between items-start h-[10%] self-center font-semibold w-full`}
    >
      <button
        className={buttonClasses}
        disabled={currentPage === 1}
        onClick={handleBack}
      >
        <FaArrowLeft />
      </button>
      <Steps steps={steps} />
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
