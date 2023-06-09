import { useContext } from "react";
import Navbar from "../atoms/interface/Navbar";
import AppContext from "../context/AppContext";
import { useScrollToSection } from "../hooks";
import { NavButton } from "../atoms/interface/NavButton";
import { useFontLoaded } from "../hooks/useFontLoaded";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const { dispatch } = useContext(AppContext);
  useFontLoaded(dispatch);
  const scrollToAbout = useScrollToSection("#about");
  const scrollToStudentFeatures = useScrollToSection("#student-features");
  const scrollToTeacherFeatures = useScrollToSection("#teacher-features");
  const scrollToTechStack = useScrollToSection("#tech-stack");

  return (
    <main className=" bg-slate-100 h-screen w-screen overflow-y-scroll">
      <Navbar>
        <>
          <NavButton onClick={scrollToAbout}>About</NavButton>
          <NavButton onClick={scrollToStudentFeatures}>
            Student Features
          </NavButton>
          <NavButton onClick={scrollToTeacherFeatures}>
            Teacher Features
          </NavButton>
          <NavButton onClick={scrollToTechStack}>Tech Stack</NavButton>
        </>
      </Navbar>
      {children}
    </main>
  );
}
