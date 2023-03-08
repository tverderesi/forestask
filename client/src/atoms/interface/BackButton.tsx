import { FaArrowLeft, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BackButtonProps } from "../../types/Types";

const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  return (
    <Link
      to={href}
      className="btn btn-primary rounded-lg flex py-2 px-3 items-center ml-2 justify-self-start self-start text-white"
    >
      <FaArrowLeft className="mr-2" />
      <FaHome className="text-xl" />
    </Link>
  );
};

export default BackButton;
