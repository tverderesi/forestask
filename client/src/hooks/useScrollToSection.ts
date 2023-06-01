import { useCallback } from "react";

export const useScrollToSection = (sectionId) => {
  const scrollToSection = useCallback(() => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [sectionId]);

  return scrollToSection;
};
