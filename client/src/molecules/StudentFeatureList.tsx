import { FeatureProps } from "../types/Types";

export function StudentFeatureList({ icon: Icon, description }: FeatureProps) {
  return (
    <li className="flex space-x-4 items-start carousel-item w-full relative">
      <Icon className="w-5 h-5 text-magenta-dye-600 absolute left-[calc(5%-1rem)] top-1" />
      <span className="w-[100%] relative left-[5%]">{description}</span>
    </li>
  );
}
