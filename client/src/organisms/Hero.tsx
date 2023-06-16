import { motion } from "framer-motion";
import { useContext } from "react";
import { HeroButton } from "../atoms/HeroButton";
import AppContext from "../context/AppContext";
import { HeroText } from "../molecules/HeroText";
import { Link } from "react-router-dom";
import { SingleTreeLoader } from "../atoms/interface/SingleTreeLoader";
import { useScrollToSection } from "../hooks";
import { HeroProps } from "../types/interfaces";

export const Hero: React.FC<HeroProps> = ({
  heroTextArray = [""],
  moving = false,
}) => {
  const scrollToAbout = useScrollToSection("#about");

  const { fontLoaded } = useContext(AppContext);

  return (
    <>
      {!fontLoaded ? (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, easings: "ease-in-out" },
          }}
          className="bg-hero carousel-item relative flex h-screen w-screen flex-col items-center justify-center pt-16"
          id="hero"
        >
          <SingleTreeLoader className="relative bottom-8 h-1/2 w-1/2 stroke-white" />
        </motion.section>
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, easings: "ease-in-out" },
          }}
          className="bg-hero carousel-item relative flex h-screen w-screen flex-col items-center justify-center pt-16"
          id="hero"
        >
          <HeroText heroTextArray={heroTextArray} moving={moving} />
          <div className="lg:bottom-1/5 relative bottom-[15%] flex  w-full flex-col items-center justify-center space-x-0 space-y-5 md:w-4/6 md:flex-row md:space-x-5 md:space-y-0">
            <HeroButton onClick={scrollToAbout} size="xl">
              Learn More
            </HeroButton>
            <HeroButton size="xl">
              <Link to="/app">Explore the App</Link>
            </HeroButton>
          </div>
        </motion.section>
      )}
    </>
  );
};
