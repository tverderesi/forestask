import { DropdownProps } from "../../types/Types";

// Component for the dropdown menu item with submenus
export function Dropdown({
  children,
  hover = false,
  position = "bottom",
  align = "end",
  forceOpen = false,
  arrow = false,
}: DropdownProps) {
  console.log(children);
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
    <li tabIndex={0}>
      <a className={`${containerClasses} justify-between dropdown-arrow `}>
        {children[0]}
        {arrow && (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        )}
      </a>
      <ul className="p-2 bg-card backdrop-blur-2xl">
        {children.slice(1).map((child) => {
          return <li>{child}</li>;
        })}
      </ul>
    </li>
  );
}
