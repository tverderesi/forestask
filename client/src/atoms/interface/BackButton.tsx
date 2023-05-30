import { FaArrowLeft, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BackButtonProps } from "../../types/Types";

const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  return (
    <Link
      to={href}
      className="btn btn-sm btn-ghost bg-fandango-400 hover:bg-fandango-400 hover:lavender-web-50  active:bg-fandango-400 active:lavender-web-50  rounded-lg flex py-2 px-3 items-center ml-2 text-lavender-web-50 mt-3 text- "
    >
      <FaArrowLeft className="mr-2 pb-1" />
      <FaHome className="text-xl pb-1" />
    </Link>
  );
};

export default BackButton;
