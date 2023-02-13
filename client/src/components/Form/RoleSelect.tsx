/** @format */

import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaGraduationCap, FaCode } from 'react-icons/fa';

export function RoleSelect({
  selectedRole,
  handleClick,
}: {
  selectedRole: string;
  handleClick: any;
}) {
  return (
    <motion.div
      className='flex flex-col items-center justify-center font-semibold mx-auto my-auto '
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
    >
      {' '}
      <h3 className='text-2xl mb-5 relative top-[-1.625rem]'>I'm a...</h3>
      <div className='flex flex-col sm:grid sm:grid-cols-3 gap-8 md:gap-4 relative top-[-1.625rem]'>
        {[
          { role: 'student', icon: <FaGraduationCap size={60} /> },
          { role: 'teacher', icon: <FaChalkboardTeacher size={60} /> },
          { role: 'admin', icon: <FaCode size={60} /> },
        ].map(({ role, icon }) => {
          return (
            <button
              key={role}
              className={`btn w-60 h-20 sm:w-32 sm:h-32 shadow-lg text-xl flex-col items-center justify-center
                  ${selectedRole === role ? 'btn-primary' : 'btn-transparent'}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e, role)}
            >
              {icon}
              {role}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
