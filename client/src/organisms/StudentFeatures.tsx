import { FaLeaf, FaTasks } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { GiPlantSeed } from "react-icons/gi";
import Gardener from "../atoms/Gardener";
import { StudentFeatureList } from "../molecules/StudentFeatureList";
export const StudentFeatures = () => {
  const features = [
    {
      icon: AiOutlineFileText,
      description: "Keep track of your assignments and deadlines in one place.",
    },
    {
      icon: FaLeaf,
      description:
        "Grow your own forest from nothing! Plant seeds and watch them grow into trees, flowers and more as you complete your quests.",
    },
    {
      icon: FaTasks,
      description:
        "Virtual quests tailored to your interests and academic level, earn rewards such as LeafyCoins, exclusive items, and special titles, and engage with the material in a fun and interactive way.",
    },
    {
      icon: GiPlantSeed,
      description:
        "Earn extra LeafyCoins by completing assignments early, which you can trade for items such as fertilizers, decoration items, and even a barn!",
    },
  ];

  return (
    <>
      <section
        className=" bg-slate-100 pt-24 pb-12 snap-center snap-always h-screen w-screen flex flex-col lg:flex-row items-center lg:justify-around"
        id="student_features"
      >
        <div className="relative bottom-10 w-full h-2/5 lg:w-2/5 lg:h-4/5 m-auto lg:m-0">
          <Gardener />
        </div>
        <article className="w-full lg:w-2/5 h-full  flex flex-col items-center justify-center p-10 pl-2 relative bottom-20 lg:bottom-0">
          <h1 className="w-full text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4">
            Features for Students
          </h1>
          <ul className="relative left-2 space-y-4 lg:text-xl h-[calc(60%+2.5rem)] carousel carousel-vertical lg:h-full">
            {features.map((feature, index) => (
              <StudentFeatureList
                key={index}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};
