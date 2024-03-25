import { AnimatePresence, motion } from "framer-motion";
import Logo from "../atoms/Logo";
import lightBG from "../assets/4.png";
import { Outlet, useLocation } from "react-router-dom";
import BackButton from "../atoms/interface/BackButton";

export default function Onboard() {
  const location = useLocation();
  const cardClass =
    "bg-lavender-web-200/50 top-8 z-[2] flex h-screen w-screen flex-col justify-between overflow-x-hidden overflow-y-scroll p-5 backdrop-blur-xl ease-in-out md:h-auto md:min-h-[70vh] md:w-auto md:min-w-[70vh] md:overflow-y-auto md:overflow-x-visible md:rounded-2xl md:p-10";

  return (
    <div className="relative z-[1] flex h-screen w-screen items-center justify-center ">
      <img
        src={lightBG}
        alt="forest"
        className="fixed bottom-0 left-0 -z-10 h-screen w-screen object-cover"
      />
      <AnimatePresence mode="popLayout">
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
          className={cardClass}
        >
          <div className="grid w-auto grid-cols-4">
            <div className="col-span-1 ml-0 mr-auto">
              <BackButton href={location.pathname === "/app" ? "/" : "/app"} />
            </div>
            <Logo className="col-span-2 h-[10%]" />
          </div>
          <Outlet key="outlet" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
