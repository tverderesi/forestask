import { motion } from "framer-motion";
import Logo, { Pinetree } from "../atoms/Logo";

export const Hero = () => {
  const heroText = "Grow your knowledge in the forest of learning";

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="media/background/7.png"
        alt="Forest background"
        className="absolute inset-0 object-cover w-full h-full blur-3xl scale-125 brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-5" />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2, easings: "ease-in-out" },
          }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-10 ">{heroText}</h1>
          <button className="bg-night-900 text-mantis-100 hover:bg-mantis hover:text-night-900 btn btn-lg mr-5 border-none drop-shadow-lg">
            Learn More
          </button>
          <button className="bg-night-900 text-mantis-100 hover:bg-mantis hover:text-night-900 btn btn-lg ml-5 border-none drop-shadow-lg">
            Explore the App
          </button>
        </motion.div>
      </div>
    </div>
  );
};
