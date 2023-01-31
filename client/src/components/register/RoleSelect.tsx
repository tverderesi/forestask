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
      className='flex flex-col flex-1 items-center justify-center w-full h-full font-semibold mt-0'
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
    >
      <h3 className='text-2xl mb-5'>I'm a...</h3>
      <div className='grid grid-cols-3 gap-2'>
        {[
          { role: 'student', icon: <FaGraduationCap size={60} /> },
          { role: 'teacher', icon: <FaChalkboardTeacher size={60} /> },
          { role: 'admin', icon: <FaCode size={60} /> },
        ].map(({ role, icon }) => {
          return (
            <button
              className={`btn w-32 h-32 shadow-lg text-xl flex-col items-center justify-center
                  ${selectedRole === role ? 'btn-primary' : 'btn-transparent'}`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleClick(e, role)
              }
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
