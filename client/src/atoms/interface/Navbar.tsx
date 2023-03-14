import { Children } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

export default function Navbar({ children }) {
  return (
    <header className="navbar bg-night text-lavender-web">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-dark text-lavender-web lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-night rounded-box w-52 font-semibold"
          >
            {children}
          </ul>
        </div>
        <Link to="/">
          <Logo light={false} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{children}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/app" className="btn btn-primary">
          App
        </Link>
      </div>
    </header>
  );
}
