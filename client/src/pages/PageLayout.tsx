import Navbar from "../atoms/interface/Navbar";
import { useScrollToSection } from "../util/hooks";
import Features from "./Features";
import Florestarefa from "./Florestarefa";
import { Hero } from "./Hero";

export default function PageLayout() {
  const scrollToHistory = useScrollToSection("#history");
  const scrollToAbout = useScrollToSection("#about");
  return (
    <main className=" bg-slate-100 h-screen w-screen overflow-y-scroll carousel carousel-vertical">
      <Navbar>
        <>
          <li>
            <button onClick={scrollToHistory}>History</button>
          </li>
          <li>
            <button onClick={scrollToAbout}>About</button>
          </li>
        </>
      </Navbar>
      <Hero heroText={"Grow your knowledge in the forest of learning"} />
      <Features />
      <Florestarefa />
    </main>
  );
}
