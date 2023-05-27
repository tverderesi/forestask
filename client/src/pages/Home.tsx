import PageLayout from "./PageLayout";
import { Hero } from "organisms/Hero";
import { About } from "organisms/About";
import Florestarefa from "organisms/Florestarefa";
import { Features } from "organisms/Features";
import { Server } from "atoms/svgs/Server";
import { Carousel } from "atoms/Carousel";
import { Gardener } from "atoms/svgs/Gardener";
import studentFeatures from "data/studentFeatures.json";
import teacherFeatures from "data/teacherFeatures.json";
import Mathematics from "atoms/svgs/Mathematics";
import heroSentences from "data/heroSentences.json";
import techStack from "data/techStack.json";

export function Home() {
  return (
    <PageLayout>
      <Carousel>
        <Hero heroTextArray={heroSentences} sentence={0} />
        <About />
        <Features
          id="student-features"
          title="Features for Students"
          drawing={<Gardener />}
          accentColor="text-magenta-dye-500"
          featuresList={studentFeatures}
        />
        <Features
          id="teacher-features"
          title="Features for Teachers"
          drawing={<Mathematics />}
          accentColor="text-seal-brown-600"
          featuresList={teacherFeatures}
        />
        <Features
          id="tech-stack"
          title="Tech Stack"
          drawing={<Server />}
          accentColor="text-red-crayola-600"
          featuresList={techStack}
        />
        <Florestarefa />
      </Carousel>
    </PageLayout>
  );
}
