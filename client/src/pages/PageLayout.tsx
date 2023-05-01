import Navbar from "../atoms/interface/Navbar";
import { useScrollToSection } from "../util/hooks";
import { StudentFeatures } from "./StudentFeatures";
import Florestarefa from "./Florestarefa";
import { Hero } from "../organisms/Hero";

export default function PageLayout() {
  const scrollToAbout = useScrollToSection("#about");
  const scrollToStudentFeatures = useScrollToSection("#student_features");

  const heroSentences = [
    "Grow your knowledge in the forest of learning",
    "Explore the wilderness of knowledge with Florestarefa",
    "Unlock the secrets of the forest with Florestarefa",
    "Let Florestarefa guide you through the forest of education",
    "Journey through the jungle of learning with Florestarefa",
    "Embark on a learning adventure with Florestarefa",
    "Discover the beauty of knowledge in the forest with Florestarefa",
    "Experience the wonder of education in the heart of the forest with Florestarefa",
  ];

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
        </>
      </Navbar>
      <Hero heroTextArray={heroSentences} />
      <StudentFeatures />
      <Florestarefa />
    </main>
  );
}
