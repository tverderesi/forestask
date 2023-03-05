/** @format */

import { motion } from "framer-motion";
import { useState } from "react";
import { getPictureURL } from "../../util/profilePictureDictionary";

export function AvatarSelector({
  placeholderNames,
  setPlaceholderNames,
}: {
  placeholderNames: { name: string; isSelected: boolean; v: string }[];
  setPlaceholderNames: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        isSelected: boolean;
        v: string;
      }[]
    >
  >;
}) {
  const handleImageClick = (index: number) => {
    setPlaceholderNames((prevState) => {
      const newNames = prevState.map((item, i) => {
        if (i === index) {
          item.isSelected = true;
          // values.profilePicture = item.name;
        } else {
          item.isSelected = false;
        }
        return item;
      });
      return newNames;
    });
  };

  return (
    <motion.div
      key="avatarselection"
      className="grid grid-cols-2 xs:grid-cols-4 h-full sm:grid-cols-8 mt-8 "
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
    >
      <h2 className="col-span-2 xs:col-span-4 sm:col-span-8 w-full mb-5 text-center text-2xl font-semibold ">
        Select an Avatar
      </h2>

      {placeholderNames.map((item, index) => {
        return (
          <SingleAvatar
            item={item}
            handleImageClick={handleImageClick}
            index={index}
          />
        );
      })}

      <input
        className="btn btn-mauvine-300 btn-sm my-2 col-span-2 xs:col-span-4 sm:col-span-8 mx-auto"
        type="submit"
        value=" Register"
      />
    </motion.div>
  );
}

function SingleAvatar({
  item,
  handleImageClick,
  index,
}: {
  item: { name: string; isSelected: boolean; v: string };

  handleImageClick: (index: number) => void;
  index: number;
}): JSX.Element {
  const [touched, setTouched] = useState(false);
  const handleTouchStart = (e) => {
    e.stopPropagation();
    setTouched(true);
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    setTouched(false);
  };
  return (
    <div
      className={`flex flex-col items-center w-24 px-2 py-3 floating-pic h-full ${
        touched ? "touched" : ""
      }`}
      key={item.name}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={`${getPictureURL(item.name)}`}
        className={`rounded-full w-14 h-14 ${
          item.isSelected ? "selected-avatar" : ""
        }`}
        onClick={(e: React.SyntheticEvent) => {
          e.preventDefault();
          handleImageClick(index);
        }}
        alt={item.name}
      />
      <span
        key={item.name}
        className={`capitalize ${
          item.isSelected ? "font-bold text-[var(--accent-2)]" : "font-semibold"
        } mt-1 text-sm`}
      >
        {item.name}
      </span>
    </div>
  );
}
