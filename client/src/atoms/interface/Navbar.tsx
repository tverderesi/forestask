import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useScrollToSection } from "../../util/hooks";
export default function Navbar({ children }) {
  const scrollToHero = useScrollToSection("#hero");
  return (
    <header className="navbar bg-night-900 text-lavender-web-100 h-16 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-dark text-lavender-web lg:hidden "
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
            className="menu dropdown-content mt-3 p-2 shadow bg-night-900 rounded-box w-[calc(95vw)] font-semibold text-center  "
          >
            {children}
          </ul>
        </div>
        <button onClick={scrollToHero}>
          <Logo light={false} className="ml-0" />
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{children}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/app" className="btn bg-seal-brown-400">
          App
        </Link>
      </div>
    </header>
  );
}
