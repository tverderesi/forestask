import { useContext, useState, useRef } from "react";
import { SingleAvatarProps } from "../../types/Types";
import RegisterContext from "../../context/RegisterContext";

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
      {isLoading && (
        <div className="animate-pulse w-14 h-14 rounded-full bg-gray-300 absolute"></div>
      )}
      <img
        key={item}
        src={`/media/avatars/${item}.jpg`}
        className={`rounded-full w-14 h-14 ${
          profilePicture === item ? "selected-avatar" : ""
        }`}
        alt={!isLoading ? item : ""}
        onLoad={handleLoad}
        onError={handleError}
      />

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
