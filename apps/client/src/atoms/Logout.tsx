import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BiLogOutCircle } from "react-icons/bi";

export default function Logout() {
  const { logout } = useContext(AuthContext);
  return (
    <Link
      to="/app/"
      className="btn btn-primary btn-sm text-sm"
      onClick={logout}
    >
      <BiLogOutCircle size={"1rem"} className="mr-1 ml-0" /> Log out
    </Link>
  );
}
