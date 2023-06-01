/** @format */

import { motion } from "framer-motion";
import { useContext } from "react";
import { FaChalkboardTeacher, FaGraduationCap, FaCode } from "react-icons/fa";
import RegisterContext from "../../context/RegisterContext";

export function RoleSelect() {
  const { dispatch, role: selectedRole } = useContext(RegisterContext);
  return (
    <motion.div
      className="flex flex-col items-center justify-centermx-auto my-auto "
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
    >
      <h3 className="text-2xl mb-5 relative font-semibold top-[-1.625rem]">
        I'm a...
      </h3>
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 md:gap-4 relative top-[-1.625rem] ">
        {[
          { role: "STUDENT", icon: <FaGraduationCap size={60} /> },
          { role: "TEACHER", icon: <FaChalkboardTeacher size={60} /> },
          { role: "ADMIN", icon: <FaCode size={60} /> },
        ].map(({ role, icon }) => {
          return (
            <button
              key={role}
              className={` btn w-60 h-20 sm:w-32 sm:h-32 shadow-lg text-xl flex-col items-center justify-center
                  ${selectedRole === role ? "btn-primary" : "btn-transparent"}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                dispatch({ type: "CLICK_ROLE", payload: role });
              }}
            >
              {icon}
              <span className="font-extrabold mt-2">
                {role.slice(0, 1).toUpperCase() +
                  role.slice(1).toLocaleLowerCase()}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
