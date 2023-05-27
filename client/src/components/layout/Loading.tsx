/** @format */

import { SingleTreeLoader } from "atoms/interface/SingleTreeLoader";
import TreeIcon from "./icons/TreeIcon";

export default function Loading({ text, className }) {
  return (
    <div className={className}>
      <div className="flex mx-auto">
        <SingleTreeLoader
          treeNumber={0}
          className="stroke-black h-full mx-auto"
        />
      </div>
      <div className="text-2xl mt-3 text-center font-semibold text-[var(--font-color)]">
        {text}
      </div>
    </div>
  );
}
