import { useGetIconComponent } from "../hooks/useGetIconComponent";
import { FeatureProps } from "../types/Types";

export function FeatureList({ icon, description, accentColor }: FeatureProps) {
  const getIcon = useGetIconComponent();
  const Icon = getIcon(icon);
  return (
    <li className="whitespace-prewrap relative flex  w-[90%] items-start space-x-2 text-sm lg:text-lg">
      <Icon className={`h-5 w-5 ${accentColor} relative  top-1`} />
      <span className="relative w-[100%]">{description}</span>
    </li>
  );
}
