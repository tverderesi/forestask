import { useGetIconComponent } from "../util/hooks/useGetIconComponent";
import { FeatureProps } from "../types/Types";

export function FeatureList({ icon, description, accentColor }: FeatureProps) {
  const getIcon = useGetIconComponent();
  const Icon = getIcon(icon);
  return (
    <li className="flex space-x-2 items-start  w-[90%] relative text-base lg:text-xl whitespace-prewrap">
      <Icon
        className={`w-5 h-5 ${accentColor} absolute left-[calc(5%-1rem)] top-1`}
      />
      <span className="w-[100%] relative left-[5%]">{description}</span>
    </li>
  );
}
