import { useState, useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import AppContext from "../../context/AppContext";

import CardTags from "./CardTags";
import {
  Card,
  ActivityCardProps,
  CardContentProps,
  CardButtonProps,
} from "../../types/Types";

export const ActivityCard: React.FC<ActivityCardProps> = ({ item }) => {
  const [completed, setCompleted] = useState(item.checked);
  const [open, setOpen] = useState(false);
  const { userData, dispatch, gameLevels } = useContext(AppContext);

  const handleCardClick = () => {
    setOpen(!open);
  };

  const handleDone: any = async (e, completed, setCompleted) => {
    e.preventDefault();
    setCompleted(!completed);
  };

  return (
    <div className="card card-compact bg-card mt-4 flex shadow-xl mx-2 lg:mx-0 ">
      <div className="card-body grid grid-cols-5 justify-between items-center">
        <div className="col-span-4 " onClick={handleCardClick}>
          <h5 className="card-title text-lg flex-shrink text-center pl-1">
            {item.title}
          </h5>
          <CardTags
            subject={item.subject}
            type={item.type}
            xp={item.xp}
            deadline={item.deadline}
          />
        </div>
        <div className="flex justify-end relative">
          <button
            className="rounded-full bg-slate-400/30 p-3 flex flex-col items-center"
            onClick={(e) => handleDone(e, completed, setCompleted)}
          >
            <div
              className={`absolute self-center top-[-2rem] text-xl w-36 font-semibold text-pink-600 ${
                completed ? "tracking-in-expand-fwd-bottom" : "hidden"
              }`}
            >
              🎉 Hooray! 🎉
            </div>
            <FaCheck
              size="28"
              className={`transition-all duration-[2000ms] text-[var(--font-color)]  ${
                completed
                  ? "rotate-[-1080deg] opacity-100"
                  : "rotate-0 opacity-30"
              }`}
            />
          </button>
        </div>
        <motion.p
          className={`text-base ${
            open ? "" : "hidden"
          } col-span-5 border-t-[1px] border-slate-400/30 p-2 mt-2 transition-all  `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {item.content}
        </motion.p>
      </div>
    </div>
  );
};

export type addDone = (id: number) => void;

export type handleCardClick = () => void;
