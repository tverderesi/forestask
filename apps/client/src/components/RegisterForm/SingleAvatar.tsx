import { useContext, useState, useRef } from "react";
import { SingleAvatarProps } from "../../types/Types";
import RegisterContext from "../../context/RegisterContext";
import { SingleTreeLoader } from "../../atoms/interface/SingleTreeLoader";
import { AnimatePresence, motion } from "framer-motion";

export const SingleAvatar: React.FC<SingleAvatarProps> = ({ item }) => {
  const { profilePicture, dispatch } = useContext(RegisterContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
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
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="w-14 h-14 rounded-full absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SingleTreeLoader className="stroke-black" />
          </motion.div>
        )}
        <motion.img
          key={item}
          src={`/media/avatars/${item}.jpg`}
          className={`rounded-full w-14 h-14 ${
            profilePicture === item ? "selected-avatar" : ""
          }`}
          alt={!isLoading ? item : ""}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

      <span
        className={`capitalize ${
          profilePicture === item
            ? "font-bold text-fandango-400"
            : "font-semibold"
        } mt-1 text-sm`}
      >
        {item}
      </span>
    </div>
  );
};
