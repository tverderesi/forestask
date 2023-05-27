import { motion } from "framer-motion";

import { HeroButton } from "../atoms/HeroButton";

import { useScrollToSection } from "../util/hooks";
import { HeroText } from "../molecules/HeroText";
import { Link } from "react-router-dom";

type HeroProps = {
  heroTextArray: string[];
  moving?: boolean;
  sentence?: number;
};

export const Hero = ({
  heroTextArray = [""],
  moving = false,
  sentence = 0,
}: HeroProps) => {
  const scrollToAbout = useScrollToSection("#about");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, easings: "ease-in-out" },
      }}
      className="relative w-screen h-screen carousel-item pt-16 bg-hero flex flex-col items-center justify-center"
      id="hero"
    >
      <HeroText heroTextArray={heroTextArray} moving={moving} />
      <div className="flex flex-col md:flex-row w-4/6 md:w-2/5 justify-center space-x-0 space-y-5 md:space-x-5 md:space-y-0 relative bottom-[20%]">
        <HeroButton onClick={scrollToAbout} size="xl">
          Learn More
        </HeroButton>
        <HeroButton size="xl">
          <Link to="/app">Explore the App</Link>
        </HeroButton>
      </div>
    </motion.section>
  );
};
