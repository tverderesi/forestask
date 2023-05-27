import Navbar from "../atoms/interface/Navbar";
import { useScrollToSection } from "util/hooks";

export default function PageLayout({ children }) {
  const scrollToAbout = useScrollToSection("#about");
  const scrollToStudentFeatures = useScrollToSection("#student-features");
  const scrollToTeacherFeatures = useScrollToSection("#teacher-features");
  const scrollToTechStack = useScrollToSection("#tech-stack");

  return (
    <main className=" bg-slate-100 h-screen w-screen overflow-y-scroll carousel carousel-vertical">
      <Navbar>
        <>
          <li className="hover:bg-mantis-600 hover:text-night-900 hover:rounded-xl active:bg-mantis-600 active:text-night-900 active:rounded-xl">
            <button onClick={scrollToAbout}>About</button>
          </li>
          <li className="hover:bg-mantis-600 hover:text-night-900 hover:rounded-xl active:bg-mantis-600 active:text-night-900 active:rounded-xl">
            <button onClick={scrollToStudentFeatures}>Student Features</button>
          </li>
          <li className="hover:bg-mantis-600 hover:text-night-900 hover:rounded-xl active:bg-mantis-600 active:text-night-900 active:rounded-xl">
            <button onClick={scrollToTeacherFeatures}>Teacher Features</button>
          </li>
          <li className="hover:bg-mantis-600 hover:text-night-900 hover:rounded-xl active:bg-mantis-600 active:text-night-900 active:rounded-xl">
            <button onClick={scrollToTechStack}>Tech Stack</button>
          </li>
        </>
      </Navbar>
      {children}
    </main>
  );
}
