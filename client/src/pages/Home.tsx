import { NavLink, Outlet } from "react-router-dom";

import Navbar from "../atoms/interface/Navbar";
import Features from "./Features";
import Florestarefa from "./Florestarefa";
import { Hero } from "./Hero";
export default function Home() {
  return (
    <>
      <Navbar>
        <>
          <li>
            <a href="#a">History</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </>
      </Navbar>
      <Hero />
      <Features />
      <Florestarefa />
    </>
  );
}
