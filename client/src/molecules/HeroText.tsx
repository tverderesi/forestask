import { AnimatePresence, motion } from "framer-motion";
import { useRotatingElements } from "../hooks";

type HeroTextProps = {
  heroTextArray: string[];
  moving?: boolean;
  sentence?: number;
};

export const HeroText = ({
  heroTextArray = [""],
  moving = false,
  sentence = 0,
}: HeroTextProps) => {
  const heroText = useRotatingElements(heroTextArray, 10000);
  return (
    <AnimatePresence mode="popLayout">
      <motion.h1
        key={heroTextArray.join("")}
        initial={{ opacity: 0, x: 1000 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { easings: "ease-in-out", duration: 1 },
        }}
        exit={{
          opacity: 0,
          x: -1000,
          transition: { easings: "ease-in-out", duration: 1 },
        }}
        transition={{ duration: 1, easings: "ease-in-out" }}
        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white p-10  text-center h-full relative flex items-center  leading-relaxed md:leading-relaxed lg:leading-relaxed"
      >
        {moving ? heroText : heroTextArray[sentence]}
      </motion.h1>
    </AnimatePresence>
  );
};
