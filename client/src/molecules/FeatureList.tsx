import * as ReactIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";

import { FeatureProps } from "../types/Types";

export function FeatureList({ icon, description, accentColor }: FeatureProps) {
  const iconMappings = {
    FaLeaf: ReactIcons.FaLeaf,
    FaTasks: ReactIcons.FaTasks,
    AiOutlineFileText: AiIcons.AiOutlineFileText,
    GiPlantSeed: GiIcons.GiPlantSeed,
    MdPeople: MdIcons.MdPeople,
  };

  const getIconComponent = (iconName) => {
    const IconComponent = iconMappings[iconName];
    return IconComponent || null;
  };

  const Icon = getIconComponent(icon);
  return (
    <li className="flex space-x-2 items-start  w-[90%] relative text-base lg:text-xl whitespace-prewrap">
      <Icon
        className={`w-5 h-5 ${accentColor} absolute left-[calc(5%-1rem)] top-1`}
      />
      <span className="w-[100%] relative left-[5%]">{description}</span>
    </li>
  );
}
