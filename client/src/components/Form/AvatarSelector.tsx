import { useContext, useState, useRef } from "react";
import { motion } from "framer-motion";
import { SingleAvatarProps } from "../../types/Types";
import AppContext from "../../context/AppContext";
import { useProfilePictureDictionary } from "../../util/hooks/useProfilePictureDictionary";

export const AvatarSelector: React.FC = () => {
  const placeholderNames = useProfilePictureDictionary();

  return (
    <motion.div
      key="avatarselection"
      className="h-[100%] space-y-4"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
    >
      <h2 className="w-full text-center text-2xl font-semibold ">
        Select an Avatar
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-8 overflow-y-scroll lg:overflow-visible h-3/4  gap-y-4 pt-4 pb-12 lg:p-4 w-screen lg:w-auto px-auto place-items-center carousel carousel-vertical z-0">
        {placeholderNames.map((item) => (
          <SingleAvatar key={item} item={item} />
        ))}
      </div>
    </motion.div>
  );
};
export const SingleAvatar: React.FC<SingleAvatarProps> = ({ item }) => {
  const { selectedAvatar, dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };
  const itemRef = useRef<HTMLDivElement>(null);
  const handleImageClick = () => {
    dispatch({ type: "SET_AVATAR", payload: itemRef.current?.textContent });
  };

  return (
    <div
      ref={itemRef}
      key={item}
      className={`flex flex-col items-center pt-4 mt-2 w-24 floating-pic h-full carousel-item`}
      onClick={handleImageClick}
    >
      {isLoading && (
        <div className="animate-pulse w-14 h-14 rounded-full bg-gray-300 absolute"></div>
      )}
      <img
        key={item}
        src={`/media/avatars/${item}.jpg`}
        className={`rounded-full w-14 h-14 ${
          selectedAvatar === item ? "selected-avatar" : ""
        }`}
        alt={!isLoading ? item : ""}
        onLoad={handleLoad}
      />

      <span
        className={`capitalize ${
          selectedAvatar === item
            ? "font-bold text-fandango-400"
            : "font-semibold"
        } mt-1 text-sm`}
      >
        {item}
      </span>
    </div>
  );
};
