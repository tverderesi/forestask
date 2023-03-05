/** @format */
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export function Date({
  register,
  name,
  label,
  options = {},
}: {
  register: any;
  name: string;
  label: string;
  options?: any;
}): JSX.Element {
  return (
    <div className="flex flex-col w-full">
      <label className="text-center  font-semibold mb-2 capitalize w-full">
        {label}
      </label>
      <input
        type="date"
        className="form-control flex flex-row text-sm"
        {...register(name, { options })}
      />
    </div>
  );
}

export function Password({
  register,
  name,
  label,
  options = {},
}: {
  register: any;
  name: string;
  label: string | JSX.Element;
  options?: any;
}): JSX.Element {
  return (
    <div className="flex flex-col w-full">
      <label className={`text-center font-semibold mb-2 capitalize w-full`}>
        {label}
      </label>
      <input
        className="form-control text-sm w-full"
        type="password"
        {...register(name, { ...options })}
      />
    </div>
  );
}

export function Email({ register, name, options = {} }) {
  return (
    <div className="flex flex-col">
      <label className="text-center  font-semibold text-night mb-2">
        E-mail
      </label>
      <input
        placeholder="e-mail"
        required={true}
        className="form-control text-sm"
        type="email"
        {...register(name, { ...options })}
      />
    </div>
  );
}

export function Text({
  register,
  label,
  placeholder,
  name,
  className = "",
  options = {},
}): JSX.Element {
  return (
    <div className={`flex flex-col w-full`}>
      <label className="text-center  font-semibold mb-2">{label}</label>
      <input
        placeholder={placeholder}
        required={true}
        className="form-control text-sm"
        {...register(name, { ...options })}
      />
    </div>
  );
}
export function TextArea({ register, name, label, placeholder, options = {} }) {
  return (
    <div className="flex flex-col col-span-2">
      <label className="text-center w-full font-semibold mb-2">{label}</label>

      <textarea
        className="form-control mb-4 w-full"
        aria-label="With textarea"
        placeholder={placeholder}
        {...register(name, { ...options })}
      />
    </div>
  );
}

/** @format */

export function Dropdown({
  items,
  name,
  onChange,
  label,
  callback,
  direction = "bottom",
}: {
  items: string[];
  name: string;
  onChange;
  label;
  callback;
  direction?: "top" | "bottom" | "left" | "right";
}) {
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    onChange(selectedItem, callback);
  }, [selectedItem]);

  return (
    <div className="flex flex-col">
      <label className="text-center w-full font-semibold mb-2">{label}</label>
      <div
        className={`dropdown dropdown-${direction} dropdown-hover dropdown-end justify-between`}
      >
        <label
          tabIndex={0}
          className="form-control rounded-full no-animation capitalize font-bold text-base mx-auto w-full h-full "
        >
          <span className="flex items-center justify-between px-2">
            {!selectedItem ? name : selectedItem}
            <FaCaretDown />
          </span>
        </label>
        <ul
          tabIndex={0}
          className={`dropdown-content rounded-2xl backdrop-blur-xl shadow-lg ${`m${direction[0]}-3`} text-center w-full`}
        >
          {items.map((item, idx) => {
            return (
              <li
                className={`font-semibold align-middle border-b ${
                  idx === items.length ? "" : "border-gray-400/20"
                } py-2 mx-1 cursor-pointer`}
                onClick={(e: React.SyntheticEvent) => {
                  e.preventDefault();
                  setSelectedItem(item);
                }}
              >
                <label htmlFor="add-item cursor-pointer">
                  <span className="cursor-pointer">{item}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function Number({
  label,
  name,
  register,
  options = {},
  min,
  max,
}): JSX.Element {
  return (
    <div className="flex flex-col">
      <label className="text-center w-full font-semibold mb-2">{label}</label>
      <input
        type="number"
        min={min}
        max={max}
        className="form-control"
        {...register(name, options)}
      />
    </div>
  );
}

export function Submit({ value }) {
  return (
    <input
      className="btn btn-secondary btn-sm my-2 col-span-2 xs:col-span-4 sm:col-span-8 mx-auto"
      type="submit"
      value={value}
    />
  );
}
