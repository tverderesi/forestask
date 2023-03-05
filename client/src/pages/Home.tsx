import { NavLink, Outlet } from "react-router-dom";

import Navbar from "../atoms/Navbar";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar>
        <>
          <li>
            <NavLink to="/#a">History</NavLink>
          </li>
          <li>
            <NavLink to="/#about">About</NavLink>
          </li>
        </>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
