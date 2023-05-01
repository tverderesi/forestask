import { useState, useEffect } from "react";

export const useRotatingElements = (elements, delayMs) => {
  const [currentElementIndex, setCurrentElementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentElementIndex((currentElementIndex + 1) % elements.length);
    }, delayMs);
    return () => clearInterval(interval);
  }, [currentElementIndex, elements.length, delayMs]);

  return elements[currentElementIndex];
};
