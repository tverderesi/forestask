import { BaseLayout } from "@/components/layout";
import TreeIcon from "@/assets/profilePicturePlaceholder.svg?react";

function App() {
  return (
    <BaseLayout>
      <LOL />
    </BaseLayout>
  );
}

export default App;

export const LOL = () => (
  <section className="slide-section">
    <TreeIcon className="w-96  max-w-[90vw]" />
    <h1 className="font-semibold text-3xl md:text-5xl text-center">
      森林の仕事 Forestask
    </h1>
  </section>
);
