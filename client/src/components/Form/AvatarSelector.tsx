import { motion } from "framer-motion";
import { useState } from "react";
import { AvatarSelectorProps, SingleAvatarProps } from "../../types/Types";

export const AvatarSelector: React.FC<AvatarSelectorProps> = ({
  placeholderNames,
  setPlaceholderNames,
}) => {
  const handleImageClick = (index: number) => {
    setPlaceholderNames((prevState) =>
      prevState.map((item, i) => ({
        ...item,
        isSelected: i === index,
      }))
    );
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

      {placeholderNames.map((item, index) => (
        <SingleAvatar
          key={item.name}
          item={item}
          handleImageClick={() => handleImageClick(index)}
        />
      ))}

      <input
        className="btn btn-mauvine-300 btn-sm my-2 col-span-2 xs:col-span-4 sm:col-span-8 mx-auto"
        type="submit"
        value=" Register"
      />
    </motion.div>
  );
};

export const SingleAvatar: React.FC<SingleAvatarProps> = ({
  item: { name, isSelected },
  handleImageClick,
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    setIsTouched(true);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    setIsTouched(false);
  };

  return (
    <div
      className={`flex flex-col items-center w-24 px-2 py-3 floating-pic h-full ${
        isTouched ? "touched" : ""
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={`/media/avatars/${name}.jpg`}
        className={`rounded-full w-14 h-14 ${
          isSelected ? "selected-avatar" : ""
        }`}
        onClick={(e: React.SyntheticEvent) => {
          e.preventDefault();
          handleImageClick();
        }}
        alt={name}
      />
      <span
        className={`capitalize ${
          isSelected ? "font-bold text-[var(--accent-2)]" : "font-semibold"
        } mt-1 text-sm`}
      >
        {name}
      </span>
    </div>
  );
};
