import { motion } from "framer-motion";
import React from "react";
import { StepsType } from "../../types/Types";

export const Steps: React.FC<StepsType> = ({
  steps,
  currentPage,
  color,
  setCurrentPage,
}) => {
  return (
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
  );
};
