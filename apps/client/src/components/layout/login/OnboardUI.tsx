import { motion } from "framer-motion";
import { BigTransparentButton } from "../../../atoms/interface/BigTransparentButton";

export default function OnboardUI() {
  return (
    <>
      <motion.div
        className="grid grid-cols-2 gap-10 mx-auto my-auto relative"
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
        <BigTransparentButton to="/app/login">
          <span className="font-[800]">Login</span>
        </BigTransparentButton>
        <BigTransparentButton to="/app/register">
          <span className="font-[800]">Register</span>
        </BigTransparentButton>
      </motion.div>
    </>
  );
}
