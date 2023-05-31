import { Link } from "react-router-dom";
import { BigButtonProps } from "../../types/interfaces";

export const BigButton: React.FC<BigButtonProps> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="btn btn-transparent shadow-lg capitalize text-xl h-32 w-32 flex-col "
    >
      {children}
    </Link>
  );
};
