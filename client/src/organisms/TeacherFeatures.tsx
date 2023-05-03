import { FaLeaf, FaTasks } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { Mathematics } from "atoms/svgs/Mathematics";
import { TeacherFeatureList } from "molecules/TeacherFeatureList";

export function TeacherFeatures() {
  const features = [
    {
      icon: MdPeople,
      description:
        "Keep track of student attendance easily with the Attendance feature. Reward students who maintain high attendance with extra LeafyCoins!",
    },
    {
      icon: FaLeaf,
      description:
        "Monitor your students' progress with data-driven insights into their study habits and productivity.",
    },
    {
      icon: FaTasks,
      description:
        "Create and assign quests to your students to engage with the material in a fun and interactive way.",
    },
  ];

  return (
    <section
      className=" bg-slate-100 pt-24 pb-12 snap-center snap-always h-screen w-screen flex flex-col lg:flex-row items-center lg:justify-around"
      id="teacher_features"
    >
      <div className="relative bottom-5 w-full h-2/5 lg:w-2/5 lg:h-4/5 m-auto lg:m-0">
        <Mathematics />
      </div>
      <article className="relative bottom-10 w-full lg:w-2/5 h-full px-8 lg:p-16 flex flex-col items-center justify-center">
        <h2 className=" text-2xl font-bold mb-4">Features for Teachers</h2>
        <ul className="space-y-4">
          {features.map((feature, index) => {
            return (
              <TeacherFeatureList
                key={index}
                icon={feature.icon}
                description={feature.description}
              />
            );
          })}
        </ul>
      </article>
    </section>
  );
}
