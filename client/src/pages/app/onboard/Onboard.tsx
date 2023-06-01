/** @format */

import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../../atoms/Logo";
import { Outlet } from "react-router-dom";
import BackButton from "../../../atoms/interface/BackButton";

export default function Onboard() {
  return (
    <div className="h-screen w-screen bg-image flex items-center justify-center ">
      <AnimatePresence>
        <motion.div
          key="home"
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{ y: 100, opacity: 0 }}
          className="transition-all duration-200 ease-in-out xs:max-md:overflow-y-scroll backdrop-blur-xl bg-blend-overlay 
        bg-card md:rounded-2xl w-screen h-screen md:h-auto md:w-auto md:min-w-[70vh] md:min-h-[70vh] p-5 md:p-10  shadow top-8 
        flex flex-col justify-between z-[2] "
        >
          <div className="w-auto grid grid-cols-4">
            <div className="col-span-1 ml-0 mr-auto">
              <BackButton href="/app" />
            </div>
            <Logo className="h-[10%] col-span-2" />
          </div>
          <Outlet key="outlet" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
