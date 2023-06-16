import PageLayout from "./PageLayout";
import { Hero } from "../organisms/Hero";
import { About } from "../organisms/About";
import { Features } from "../organisms/Features";
import { Server, Gardener, Mathematics } from "../atoms/svgs";
import { Carousel } from "../atoms/Carousel";
import studentFeatures from "../data/studentFeatures.json";
import teacherFeatures from "../data/teacherFeatures.json";
import heroSentences from "../data/heroSentences.json";
import techStack from "../data/techStack.json";

export function Home() {
  return (
    <PageLayout>
      <Carousel>
        <Hero heroTextArray={heroSentences} />
        <About />
        <Features
          id="student-features"
          title="Features for Students"
          drawing={<Gardener />}
          accentColor="text-magenta-dye-500 dark:text-magenta-dye-300"
          featuresList={studentFeatures}
        />
        <Features
          id="teacher-features"
          title="Features for Teachers"
          drawing={<Mathematics />}
          accentColor="text-seal-brown-600 dark:text-seal-brown-400"
          featuresList={teacherFeatures}
        />
        <Features
          id="tech-stack"
          title="Tech Stack"
          drawing={<Server />}
          accentColor="text-red-crayola-600 dark:text-red-crayola-400"
          featuresList={techStack}
        />
        {/* <Florestarefa /> */}
      </Carousel>
    </PageLayout>
  );
}
