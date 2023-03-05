/** @format */

import { motion } from "framer-motion";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
      <div className="xs:flex flex-col items-center ">
        <ul className="steps steps-horizontal ">
          {typeof steps !== "boolean" &&
            steps.map((item, idx) => {
              return (
                <motion.li
                  key={item}
                  className={`step cursor-pointer text-extrabold sm:text-base ${
                    currentPage >= idx + 1 ? `step-${color}` : ""
                  } `}
                  onClick={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    setCurrentPage(idx + 1);
                  }}
                >
                  <span className="text-sm mt-1">{item}</span>
                </motion.li>
              );
            })}
        </ul>
      </div>
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

export default PageNavigator;
