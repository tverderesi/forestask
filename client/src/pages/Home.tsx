import PageLayout from "./PageLayout";
import { Hero } from "../organisms/Hero";
import { About } from "../organisms/About";
import Florestarefa from "../organisms/Florestarefa";
import { StudentFeatures } from "../organisms/StudentFeatures";
import { TeacherFeatures } from "../organisms/TeacherFeatures";
import { TechStack } from "../organisms/TechStack";

export function Home() {
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
    <PageLayout>
      <Hero heroTextArray={heroSentences} sentence={0} />
      <About />
      <StudentFeatures />
      <TeacherFeatures />
      <TechStack />
      <Florestarefa />
    </PageLayout>
  );
}
