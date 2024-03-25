import { FaArrowLeft, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BackButtonProps } from "../../types/Types";

const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  return (
    <Link
      to={href}
      className="btn btn-sm btn-ghost bg-fandango-400 hover:bg-fandango-400 hover:lavender-web-50  active:bg-fandango-400 active:lavender-web-50  rounded-lg flex items-center justify-center text-lavender-web-50 mt-3 w-auto"
    >
      <FaArrowLeft className="mr-2" />
      <FaHome className="text-xl" />
    </Link>
  );
};

export default BackButton;
