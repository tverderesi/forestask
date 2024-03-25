import { motion } from "framer-motion";
import { useContext } from "react";
import { StepsType } from "../../types/Types";
import RegisterContext from "../../context/RegisterContext";

export const Steps: React.FC<StepsType> = ({ steps }) => {
  const { currentPage, dispatch } = useContext(RegisterContext);

  return (
    <div className="xs:flex flex-col items-center ">
      <ul className="steps steps-horizontal ">
        {typeof steps !== "boolean" &&
          steps.map((item, idx) => {
            return (
              <motion.li
                key={item}
                className={`step cursor-pointer text-extrabold sm:text-base ${
                  currentPage >= idx + 1 ? `step-primary` : ""
                } `}
                onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                  e.preventDefault();
                  dispatch({ type: "SET_PAGE", payload: idx + 1 });
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
