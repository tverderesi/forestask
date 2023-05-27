/** @format */

import TreeIcon from "./icons/TreeIcon";

export default function Loading({ text, className }) {
  return (
    <div className={className}>
      <div className="flex mx-auto">
        <TreeIcon treeNumber={0} className="stroke-black" />{" "}
        <TreeIcon treeNumber={0} className="stroke-black" />
        <TreeIcon treeNumber={0} className="stroke-black" />
      </div>
      <div className="text-2xl mt-3 text-center font-semibold text-[var(--font-color)]">
        {text}
      </div>
    </div>
  );
}
