import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";

export const useGetIconComponent = () => {
  const iconMappings = {
    FaLeaf: FaIcons.FaLeaf,
    FaTasks: FaIcons.FaTasks,
    AiOutlineFileText: AiIcons.AiOutlineFileText,
    GiPlantSeed: GiIcons.GiPlantSeed,
    MdPeople: MdIcons.MdPeople,
  };

  return (icon) => {
    const IconComponent = iconMappings[icon];
    return IconComponent || null;
  };
};
