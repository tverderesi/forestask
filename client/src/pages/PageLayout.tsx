import Navbar from "../atoms/interface/Navbar";
import Features from "./Features";
import Florestarefa from "./Florestarefa";
import { Hero } from "./Hero";

export default function PageLayout() {
  return (
    <main className="snap-mandatory snap-both">
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
      <Hero heroText={"Grow your knowledge in the forest of learning"} />
      <Features />
      <Florestarefa />
    </main>
  );
}
