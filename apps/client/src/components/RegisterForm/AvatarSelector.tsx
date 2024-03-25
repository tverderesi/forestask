import { motion } from "framer-motion";
import { useProfilePictureDictionary } from "../../hooks/useProfilePictureDictionary";
import { SingleAvatar } from "./SingleAvatar";

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
