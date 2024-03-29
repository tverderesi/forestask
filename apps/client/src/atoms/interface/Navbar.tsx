import { Link } from "react-router-dom";
import Logo from "../Logo";
import { useScrollToSection } from "../../hooks";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { SingleTreeLoader } from "./SingleTreeLoader";
import { ThemeChanger } from "../ThemeChanger";

export default function Navbar({ children }) {
  const scrollToHero = useScrollToSection("#hero");
  const { fontLoaded } = useContext(AppContext);
  return (
    <header className="navbar fixed z-10 h-16 bg-night-900 text-lavender-web-100 backdrop-blur-2xl dark:bg-night-900/75">
      {!fontLoaded ? (
        <SingleTreeLoader className="mx-auto h-full stroke-white" />
      ) : (
        <>
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn-dark text-lavender-web btn-ghost btn lg:hidden "
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
                className="dropdown-content menu rounded-box mt-3 w-[calc(95vw)] bg-night-900 p-2 text-center font-semibold shadow  "
              >
                {children}
              </ul>
            </div>
            <div className="absolute left-3 top-2 z-50">
              <ThemeChanger />
            </div>
            <button onClick={scrollToHero}>
              <Logo light={false} className="ml-0" />
            </button>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">{children}</ul>
          </div>
          <div className="navbar-end">
            <Link
              to="/app"
              className="btn-ghost btn bg-seal-brown-600 font-bold tracking-wide hover:bg-seal-brown-500 active:bg-seal-brown-500"
            >
              App
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
