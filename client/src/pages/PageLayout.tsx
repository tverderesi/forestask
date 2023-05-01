import Navbar from "../atoms/interface/Navbar";
import { useScrollToSection } from "../util/hooks";
import { StudentFeatures } from "../organisms/StudentFeatures";
import Florestarefa from "../organisms/Florestarefa";
import { Hero } from "../organisms/Hero";

export default function PageLayout({ children }) {
  const scrollToAbout = useScrollToSection("#about");
  const scrollToStudentFeatures = useScrollToSection("#student_features");
  const scrollToTeacherFeatures = useScrollToSection("#teacher_features");

  return (
    <main className=" bg-slate-100 h-screen w-screen overflow-y-scroll carousel carousel-vertical">
      <Navbar>
        <>
          <li>
            <button onClick={scrollToAbout}>About</button>
          </li>
          <li>
            <button onClick={scrollToStudentFeatures}>Student Features</button>
          </li>
          <li>
            <button onClick={scrollToTeacherFeatures}>Teacher Features</button>
          </li>
        </>
      </Navbar>
      {children}
    </main>
  );
}
