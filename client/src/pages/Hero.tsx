import { motion } from "framer-motion";

export const Hero = ({ heroText = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, easings: "ease-in-out" },
      }}
      className="relative h-screen carousel-item pt-16 bg-hero flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl md:text-5xl lg:text-7xl  text-white mb-10 text-center h-full relative flex items-center mx-5 leading-relaxed md:leading-relaxed lg:leading-relaxed transition-all ">
        <p>{heroText}</p>
      </h1>
      <div className="flex flex-col md:flex-row w-1/2 md:w-auto justify-center space-x-0 space-y-5 md:space-x-5 md:space-y-0 absolute bottom-[12.5%] md:bottom-1/4">
        <button className="bg-night-900 text-seal-brown-50 hover:bg-mantis hover:text-night-900 btn btn-lg md:btn-2xl border-none drop-shadow-lg">
          Learn More
        </button>
        <button className="bg-night-900 text-seal-brown-50 hover:bg-mantis hover:text-night-900 btn btn-lg md:btn-2xl border-none drop-shadow-lg">
          Explore the App
        </button>
      </div>
    </motion.div>
  );
};
