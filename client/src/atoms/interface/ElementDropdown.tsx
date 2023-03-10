import { useState } from "react";
import { DropdownProps } from "../../types/Types";

export function ElementDropdown({
  children,
  hover = false,
  position = "bottom",
  align = "end",
  forceOpen = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(forceOpen);

  let containerClasses = "dropdown";
  if (hover) {
    containerClasses += " dropdown-hover";
  }
  if (position) {
    containerClasses += ` dropdown-${position}`;
  }
  if (align) {
    containerClasses += ` dropdown-${align}`;
  }
  if (forceOpen) containerClasses += ` dropdown-open`;

  return (
    <div className={containerClasses}>
      <label
        tabIndex={0}
        onClick={() => setIsOpen(forceOpen ? true : !isOpen)}
        className="transition-all h-12 w-12 btn btn-ghost rounded-full p-0"
      >
        {children[0]}
      </label>
      {isOpen && children.slice(1)}
    </div>
  );
}
