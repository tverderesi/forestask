/** @format */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OnboardUI() {
  return (
    <>
      <motion.div
        className="grid grid-cols-2 gap-10 mx-auto my-auto relative top-[-2.25rem]"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
      >
        <motion.h2
          className="text-center font-semibold text-3xl col-span-2 mb-0"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
        >
          Welcome!
        </motion.h2>
        <Link
          to="/app/login"
          className="btn btn-transparent shadow-lg  capitalize text-xl h-32 w-32 flex-col "
        >
          <span className="font-semibold">Log In</span>
        </Link>
        <Link
          to="/app/register"
          className="btn btn-transparent shadow-lg font-[800] capitalize text-xl h-32 w-32 col-auto flex-col"
        >
          <span className="font-semibold">Register</span>
        </Link>
      </motion.div>
    </>
  );
}
