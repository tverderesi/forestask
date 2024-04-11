import { Hero } from "@/features/LandingPage/Hero";
import { About } from "@/features/LandingPage/About";
import { History } from "@/features/LandingPage/History";
export const LandingPage = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-mandatory snap-both">
      <Hero />
      <About />
      <History />
    </div>
  );
};
